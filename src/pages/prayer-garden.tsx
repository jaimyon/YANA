import { IMAGES } from '../images'

type PrayerRow = { id: number; name: string | null; message: string; created_at: string }

function timeAgo(dateStr: string) {
  const then = new Date(dateStr.replace(' ', 'T') + 'Z').getTime()
  const now = Date.now()
  const diffMs = now - then
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (isNaN(days)) return ''
  if (days <= 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  const weeks = Math.floor(days / 7)
  if (weeks === 1) return '1 week ago'
  if (weeks < 5) return `${weeks} weeks ago`
  return 'A while ago'
}

export function PrayerGardenPage({ prayers }: { prayers: PrayerRow[] }) {
  return (
    <>
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            The prayer garden
          </span>
          <h1>Share it here. We'll carry it together.</h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            These are real requests. Add yours and say a prayer or lift some praise for someone else. Please know that our prayer team reads
            every single one, every morning.
          </p>
        </div>
      </section>

      {/* ======================= FORM + WALL, SIDE BY SIDE ======================= */}
      <section class="wall reveal">
        <div class="wrap prayer-split">
          <div class="prayer-form-col">
            <div class="pane warm" style="padding:38px 36px">
              <span class="kicker">Add your prayer</span>
              <h2>What's on your heart this week?</h2>
              <form id="prayerGardenForm" style="margin-top:8px">
                <div class="field">
                  <label for="pwName">Name (optional)</label>
                  <input id="pwName" type="text" placeholder="First name, or leave blank for Anonymous" />
                </div>
                <div class="field">
                  <label for="pwMessage">Your request</label>
                  <textarea id="pwMessage" rows={3} required placeholder="Share your praise report or tell us how can we pray for you."></textarea>
                </div>
                <div class="field">
                  <label style="display:flex;align-items:flex-start;gap:10px;text-transform:none;font-weight:500;font-size:13.6px;letter-spacing:0;color:#D9C3AA;cursor:pointer">
                    <input type="checkbox" id="pwPublic" checked style="width:auto;margin-top:3px" />
                    <span>Share this in the public garden (otherwise it will only be shared with our prayer team)</span>
                  </label>
                </div>
                <button class="btn btn-solid" type="submit" style="margin-top:18px;width:100%;justify-content:center">
                  Share a request
                </button>
                <p class="fine">Our prayer team reads every request, every morning.</p>
              </form>
            </div>
          </div>
          <div class="prayer-notes-col">
            <div class="sec-head">
              <span class="kicker">All Are Welcome Here</span>
              <h2>Prayer Requests &amp; Praise Reports.</h2>
            </div>
            <div class="notes">
              {prayers.map((p) => (
                <div class="note">
                  <p>"{p.message}"</p>
                  <div class="who">— {p.name || 'Anonymous'}</div>
                  <div class="when">{timeAgo(p.created_at)}</div>
                </div>
              ))}
              {prayers.length === 0 && (
                <div class="note">
                  <p>"Be the first to share a prayer with us this week."</p>
                  <div class="who">— YANA Prayer Team</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================= PARALLAX BAND — when the prayer doesn't come easy ======================= */}
      <section
        class="parallax-band reveal"
        style={`background-image:url(${IMAGES.candleLighting})`}
      >
        <div class="wrap">
          <div class="caption">
            <span class="kicker">When the prayer doesn't come easy</span>
            <h2>Even three words, said through tears, are enough.</h2>
            <p>
              You don't need the right words. You just need to say it — we'll carry the rest
              with you.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
