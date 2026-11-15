// Thin wrapper around the Resend REST API for sending the "new prayer
// request" notification email. Cloudflare Workers can't send email directly,
// so this uses fetch() against Resend's HTTP API — no SDK/Node APIs needed.

type SendPrayerEmailArgs = {
  apiKey: string
  toEmail: string
  name: string | null
  message: string
  isPublic: boolean
}

export async function sendPrayerRequestEmail({
  apiKey,
  toEmail,
  name,
  message,
  isPublic,
}: SendPrayerEmailArgs): Promise<{ ok: boolean; error?: string }> {
  if (!apiKey || !toEmail) {
    return { ok: false, error: 'Email not configured' }
  }

  const safeName = (name || 'Anonymous').replace(/</g, '&lt;')
  const safeMessage = message.replace(/</g, '&lt;').replace(/\n/g, '<br>')

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#372716">
      <h2 style="color:#DD5B27;margin-bottom:4px">New Prayer Garden request</h2>
      <p style="color:#6E5742;margin-top:0">Someone submitted a request on the YANA website.</p>
      <table style="width:100%;border-collapse:collapse;margin:18px 0">
        <tr>
          <td style="padding:8px 0;font-weight:bold;width:110px;vertical-align:top">From</td>
          <td style="padding:8px 0">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:bold;vertical-align:top">Request</td>
          <td style="padding:8px 0">${safeMessage}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:bold;vertical-align:top">Wants public?</td>
          <td style="padding:8px 0">${isPublic ? 'Yes — asked to be shown on the Prayer Garden' : 'No — prayer team only'}</td>
        </tr>
      </table>
      <p style="color:#6E5742">
        Review and approve it from the
        <a href="https://yana.church/admin" style="color:#DD5B27">admin page</a>
        to publish it to the Prayer Garden.
      </p>
    </div>
  `.trim()

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'YANA Prayer Garden <onboarding@resend.dev>',
        to: [toEmail],
        subject: `New prayer request from ${safeName}`,
        html,
      }),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return { ok: false, error: `Resend ${res.status}: ${text.slice(0, 300)}` }
    }
    return { ok: true }
  } catch (e: any) {
    return { ok: false, error: e?.message || 'Unknown email error' }
  }
}
