import { Hono } from 'hono'
import { Layout } from './components/layout'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { MinistriesPage } from './pages/ministries'
import { PrayerWallPage } from './pages/prayer-wall'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// ======================= PAGE ROUTES =======================

app.get('/', async (c) => {
  let prayers: any[] = []
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT id, name, message, created_at FROM prayer_requests WHERE is_public = 1 ORDER BY created_at DESC LIMIT 5'
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

app.get('/prayer-wall', async (c) => {
  let prayers: any[] = []
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT id, name, message, created_at FROM prayer_requests WHERE is_public = 1 ORDER BY created_at DESC LIMIT 60'
    ).all()
    prayers = results || []
  } catch (e) {
    prayers = []
  }
  return c.html(
    <Layout
      title="Prayer Wall — YANA"
      description="Share a prayer request with the YANA community. Our prayer team reads every request, every morning."
      path="/prayer-wall"
    >
      <PrayerWallPage prayers={prayers as any} />
    </Layout>
  )
})

// ======================= API ROUTES =======================

app.post('/api/prayer-requests', async (c) => {
  try {
    const body = await c.req.json()
    const name = (body.name || '').toString().trim().slice(0, 120) || null
    const message = (body.message || '').toString().trim().slice(0, 1000)
    const isPublic = body.is_public === false ? 0 : 1

    if (!message) {
      return c.json({ ok: false, error: 'Message is required.' }, 400)
    }

    await c.env.DB.prepare(
      'INSERT INTO prayer_requests (name, message, is_public) VALUES (?, ?, ?)'
    )
      .bind(name, message, isPublic)
      .run()

    return c.json({ ok: true })
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

    // If this was a prayer request and the user chose to share it on the wall, also insert there.
    if (reason === 'prayer' && body.share_on_wall && message) {
      await c.env.DB.prepare(
        'INSERT INTO prayer_requests (name, message, is_public) VALUES (?, ?, 1)'
      )
        .bind(name, message)
        .run()
    }

    return c.json({ ok: true })
  } catch (e: any) {
    return c.json({ ok: false, error: e?.message || 'Unknown error' }, 500)
  }
})

export default app
