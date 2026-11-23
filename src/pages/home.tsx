import { IMAGES } from '../images'

const NAMES_OF_GOD = [
  'Restorer', 'Helper', 'Strength', 'Savior', 'Hope', 'Resting Place',
  'Fortress', 'Deliverer', 'Refuge From The Storm', 'Everlasting Father', 'Healer', 'Redeemer',
]

type PrayerRow = { id: number; name: string | null; message: string; created_at: string }

export function HomePage({ prayers }: { prayers: PrayerRow[] }) {
  return (
    <>
      {/* ======================= HERO ======================= */}
      <section class="hero">
        <div class="glow"></div>
        <div class="wrap">
          <div class="medal">
            <img src={IMAGES.logo} alt="YANA — a wooden cross glowing with warm light, the names of God woven behind it" />
          </div>
          <h1 style="max-width:30ch">
            "for in <span class="em">Him</span> we live and move and have our being"
          </h1>
          <p style="font-size:14px;font-weight:650;letter-spacing:.1em;text-transform:uppercase;color:var(--terra);margin-top:14px">
            Acts 17:28
          </p>
          <p class="lede" style="margin-left:auto;margin-right:auto">
            YANA Ministries seeks to encourage, pray for, mentor, and teach others who are seeking to understand and fulfill the will of God in their lives.
          </p>
        </div>

        {/* names of God scrolling banner — from sunlit */}
        <div class="names">
          <p class="names-note">Who He is — the names we lean on</p>
          <div class="track" aria-hidden="true">
            <ul>
              {NAMES_OF_GOD.map((n) => (
                <li>{n}</li>
              ))}
            </ul>
            <ul>
              {NAMES_OF_GOD.map((n) => (
                <li>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ======================= SERVICES ======================= */}
      <section class="reveal">
        <div class="wrap">
          <div class="sec-head center">
            <span class="kicker" style="justify-content:center">
              WE'RE SO GLAD YOU'RE HERE!
            </span>
            <h2>OUR SERVICES</h2>
          </div>
          <div class="steps">
            <a class="step" href="/services#daily-email">
              <span class="num">Daily Email Message</span>
              <h3>Daily encouragement in your inbox!</h3>
              <p>Sign up to receive a thoughtful and encouraging devotional message in your inbox each day to inspire your faith...</p>
              <span class="arrow">→</span>
            </a>
            <a class="step" href="/services#booklet">
              <span class="num">Monthly Message Booklet</span>
              <h3>An invaluable resource mailed right to you!</h3>
              <p>For those who enjoy a printed, day-by-day booklet, YANA is happy to mail one directly to your home each month...</p>
              <span class="arrow">→</span>
            </a>
            <a class="step" href="/prayer-garden">
              <span class="num">Prayer Garden</span>
              <h3>We all need prayer!</h3>
              <p>Send us your prayer requests and praise reports then join with us as we pray with one another for one another...</p>
              <span class="arrow">→</span>
            </a>
            <a class="step" href="/ladies-retreat">
              <span class="num">Annual Ladies Retreat</span>
              <h3>A powerful weekend of renewal!</h3>
              <p>Each year we invite women to step away from the busyness of everyday life and gather for a weekend of spiritual...</p>
              <span class="arrow">→</span>
            </a>
            <a class="step" href="/speaker">
              <span class="num">Event Speaker</span>
              <h3>Bringing a Message of Hope!</h3>
              <p>Gilda Taylor shares biblical encouragement and insights to inspire and strengthen others in their walk with the Lord...</p>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================= PARALLAX BAND — Life Together (Unapologetically Faithful style) ======================= */}
      <section
        class="parallax-band reveal"
        style={`background-image:url(${IMAGES.womanWindowSilhouette})`}
      >
        <div class="wrap">
          <div class="caption">
            <span class="kicker">Faith Over Fear</span>
            <h2>You Are Not Alone</h2>
            <p>
              Whether praising God for His many Blessings, or praying for His peace, mercy, and grace; we are here, by your side, through it all. Your faith will sustain you and God's Love will never fail you. We're here with you through it all.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= PRAYER GARDEN PREVIEW ======================= */}
      <section class="wall reveal">
        <div class="wrap">
          <div class="sec-head center">
            <span class="kicker" style="justify-content:center">
              The prayer garden
            </span>
            <h2>Say it here. We'll carry it with you.</h2>
            <p class="lede" style="margin:16px auto 0">
              Below are prayer requests we have received. Join us in praying for them and add yours when you're in need so we can pray for you as well.
            </p>
          </div>
          <div class="notes">
            {prayers.slice(0, 5).map((p) => (
              <div class="note">
                <p>"{p.message}"</p>
                <div class="who">— {p.name || 'Anonymous'}</div>
              </div>
            ))}
            <div class="note add">
              <b>Add your prayer</b>
              <span>Anonymous requests welcome</span>
              <a class="btn btn-solid" href="/prayer-garden">
                Share a request
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
