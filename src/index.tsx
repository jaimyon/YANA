import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { Layout } from './components/layout'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { MinistriesPage } from './pages/ministries'
import { ServicesPage } from './pages/services'
import { PrayerGardenPage } from './pages/prayer-garden'
import { AdminPage } from './pages/admin'
import { sendPrayerRequestEmail } from './lib/email'

type Bindings = {
  DB: D1Database
  RESEND_API_KEY?: string
  ADMIN_USERNAME?: string
  ADMIN_PASSWORD?: string
  ADMIN_EMAIL?: string
}

const app = new Hono<{ Bindings: Bindings }>()

// ======================= PAGE ROUTES =======================

app.get('/', async (c) => {
  let prayers: any[] = []
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT id, name, message, created_at FROM prayer_requests WHERE status = 'approved' ORDER BY created_at DESC LIMIT 5"
    ).all()
    prayers = results || []
  } catch (e) {
    prayers = []
  }
  return c.html(
    <Layout title="YANA — You Are Not Alone" path="/">
      <HomePage prayers={prayers as any} />
    </Layout>
  )
})

app.get('/about', (c) => {
  return c.html(
    <Layout
      title="About YANA — You Are Not Alone"
      description="Meet the family behind YANA — why we exist, what we believe, and why no one here has to pretend they have it figured out."
      path="/about"
    >
      <AboutPage />
    </Layout>
  )
})

app.get('/ministries', (c) => {
  return c.html(
    <Layout
      title="Ministries — YANA"
      description="Kids, youth, serve & outreach, small groups, women's and men's ministry — find where you fit at YANA."
      path="/ministries"
    >
      <MinistriesPage />
    </Layout>
  )
})

app.get('/services', (c) => {
  return c.html(
    <Layout
      title="Services — YANA"
      description="Daily email devotionals, our monthly messages booklet, the annual ladies retreat, and event speaking — the ways YANA walks with you."
      path="/services"
    >
      <ServicesPage />
    </Layout>
  )
})

app.get('/prayer-garden', async (c) => {
  let prayers: any[] = []
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT id, name, message, created_at FROM prayer_requests WHERE status = 'approved' ORDER BY created_at DESC LIMIT 60"
    ).all()
    prayers = results || []
  } catch (e) {
    prayers = []
  }
  return c.html(
    <Layout
      title="Prayer Garden — YANA"
      description="Share a prayer request with the YANA community. Our prayer team reads every request, every morning."
      path="/prayer-garden"
    >
      <PrayerGardenPage prayers={prayers as any} />
    </Layout>
  )
})

// ======================= ADMIN (password protected) =======================
// Guards both the /admin page and its /api/admin/* endpoints with HTTP Basic
// Auth. Credentials come from environment bindings (.dev.vars locally,
// `wrangler pages secret put` in production) — never hard-coded.
app.use('/admin', async (c, next) => {
  const auth = basicAuth({
    username: c.env.ADMIN_USERNAME || 'admin',
    password: c.env.ADMIN_PASSWORD || 'change-me',
    realm: 'YANA Admin',
  })
  return auth(c, next)
})
app.use('/api/admin/*', async (c, next) => {
  const auth = basicAuth({
    username: c.env.ADMIN_USERNAME || 'admin',
    password: c.env.ADMIN_PASSWORD || 'change-me',
    realm: 'YANA Admin',
  })
  return auth(c, next)
})

app.get('/admin', (c) => {
  return c.html(
    <Layout title="Admin — YANA" path="/admin">
      <AdminPage />
    </Layout>
  )
})

// ======================= ADMIN API ROUTES =======================

app.get('/api/admin/prayers', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT id, name, message, is_public, status, created_at FROM prayer_requests ORDER BY created_at DESC LIMIT 200"
    ).all()
    return c.json({ ok: true, prayers: results || [] })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.post('/api/admin/prayers', async (c) => {
  // Manually add a note directly from the admin page — published immediately.
  try {
    const body = await c.req.json()
    const name = (body.name || '').toString().trim().slice(0, 120) || null
    const message = (body.message || '').toString().trim().slice(0, 1000)

    if (!message) {
      return c.json({ ok: false, error: 'Message is required.' }, 400)
    }

    await c.env.DB.prepare(
      "INSERT INTO prayer_requests (name, message, is_public, status) VALUES (?, ?, 1, 'approved')"
    )
      .bind(name, message)
      .run()

    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.post('/api/admin/prayers/:id/approve', async (c) => {
  try {
    const id = c.req.param('id')
    await c.env.DB.prepare("UPDATE prayer_requests SET status = 'approved', is_public = 1 WHERE id = ?")
      .bind(id)
      .run()
    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.post('/api/admin/prayers/:id/unpublish', async (c) => {
  // Pull an already-approved note back off the public Prayer Garden.
  try {
    const id = c.req.param('id')
    await c.env.DB.prepare("UPDATE prayer_requests SET status = 'pending', is_public = 0 WHERE id = ?")
      .bind(id)
      .run()
    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.delete('/api/admin/prayers/:id', async (c) => {
  try {
    const id = c.req.param('id')
    await c.env.DB.prepare('DELETE FROM prayer_requests WHERE id = ?').bind(id).run()
    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.get('/api/admin/contacts', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT id, name, email, reason, message, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 200'
    ).all()
    return c.json({ ok: true, contacts: results || [] })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

// ======================= PUBLIC API ROUTES =======================

app.post('/api/prayer-requests', async (c) => {
  try {
    const body = await c.req.json()
    const name = (body.name || '').toString().trim().slice(0, 120) || null
    const message = (body.message || '').toString().trim().slice(0, 1000)
    const wantsPublic = body.is_public !== false

    if (!message) {
      return c.json({ ok: false, error: 'Message is required.' }, 400)
    }

    // New requests always land as "pending" — they are emailed to the admin
    // and only appear on the public Prayer Garden once approved from /admin.
    await c.env.DB.prepare(
      "INSERT INTO prayer_requests (name, message, is_public, status) VALUES (?, ?, ?, 'pending')"
    )
      .bind(name, message, wantsPublic ? 1 : 0)
      .run()

    let emailError: string | undefined
    if (c.env.RESEND_API_KEY && c.env.ADMIN_EMAIL) {
      const result = await sendPrayerRequestEmail({
        apiKey: c.env.RESEND_API_KEY,
        toEmail: c.env.ADMIN_EMAIL,
        name,
        message,
        isPublic: wantsPublic,
      })
      if (!result.ok) emailError = result.error
    }

    return c.json({ ok: true, emailError })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const name = (body.name || '').toString().trim().slice(0, 120) || null
    const email = (body.email || '').toString().trim().slice(0, 200) || null
    const reason = (body.reason || 'question').toString().trim().slice(0, 40)
    const message = (body.message || '').toString().trim().slice(0, 2000) || null

    await c.env.DB.prepare(
      'INSERT INTO contact_messages (name, email, reason, message) VALUES (?, ?, ?, ?)'
    )
      .bind(name, email, reason, message)
      .run()

    // If this was a prayer request and the user chose to share it on the garden,
    // also insert it there as "pending" and email the admin — same moderation
    // flow as the dedicated Prayer Garden form.
    if (reason === 'prayer' && message) {
      const wantsPublic = !!body.share_on_wall
      await c.env.DB.prepare(
        "INSERT INTO prayer_requests (name, message, is_public, status) VALUES (?, ?, ?, 'pending')"
      )
        .bind(name, message, wantsPublic ? 1 : 0)
        .run()

      if (c.env.RESEND_API_KEY && c.env.ADMIN_EMAIL) {
        await sendPrayerRequestEmail({
          apiKey: c.env.RESEND_API_KEY,
          toEmail: c.env.ADMIN_EMAIL,
          name,
          message,
          isPublic: wantsPublic,
        })
      }
    }

    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

app.post('/api/newsletter', async (c) => {
  try {
    const body = await c.req.json()
    const name = (body.name || '').toString().trim().slice(0, 120)
    const email = (body.email || '').toString().trim().slice(0, 200)
    const wantsNewsletter = !!body.wants_newsletter
    const wantsBooklet = !!body.wants_booklet
    const mailingAddress = (body.mailing_address || '').toString().trim().slice(0, 500) || null

    if (!name) {
      return c.json({ ok: false, error: 'Name is required.' }, 400)
    }
    if (!email) {
      return c.json({ ok: false, error: 'Email is required.' }, 400)
    }
    if (wantsBooklet && !mailingAddress) {
      return c.json(
        { ok: false, error: 'Mailing address is required to receive the monthly booklet.' },
        400
      )
    }

    await c.env.DB.prepare(
      'INSERT INTO newsletter_signups (name, email, wants_newsletter, wants_booklet, mailing_address) VALUES (?, ?, ?, ?, ?)'
    )
      .bind(name, email, wantsNewsletter ? 1 : 0, wantsBooklet ? 1 : 0, mailingAddress)
      .run()

    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

export default app
