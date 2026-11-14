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

      {/* ======================= THREE STEPS ======================= */}
      <section class="reveal">
        <div class="wrap">
          <div class="sec-head center">
            <span class="kicker" style="justify-content:center">
              WE'RE SO GLAD YOU'RE HERE!
            </span>
            <h2>POPULAR SERVICES.</h2>
          </div>
          <div class="steps">
            <div class="step">
              <span class="num">Daily Email Message</span>
              <h3>Daily encouragement in your inbox!</h3>
              <p>Sign up to receive a thoughtful and encouraging devotional message in your inbox each day to inspire your faith...</p>
              <span class="arrow">→</span>
            </div>
            <div class="step">
              <span class="num">Monthly Message Booklet</span>
              <h3>An invaluable resource mailed right to you!</h3>
              <p>For those who enjoy a printed, day-by-day booklet, YANA is happy to mail one directly to your home each month...</p>
              <span class="arrow">→</span>
            </div>
            <div class="step">
              <span class="num">Prayer Garden</span>
              <h3>We all need prayer!</h3>
              <p>Send us your prayer requests and praise reports then join with us as we pray with one another for one another...</p>
              <span class="arrow">→</span>
            </div>
            <div class="step">
              <span class="num">Annual Ladies Retreat</span>
              <h3>A powerful weekend of renewal!</h3>
              <p>Each year we invite women to step away from the busyness of everyday life and gather for a weekend of spiritual...</p>
              <span class="arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= YOU ARE NOT ALONE SPLIT ======================= */}
      <section style="padding-top:0" class="reveal">
        <div class="wrap split">
          <figure class="shot" style="margin:0">
            <img
              src={IMAGES.heroWomenPraying}
              alt="Five women sitting together on a couch, holding hands and praying"
            />
            <div class="badge">
              <b>Wed · 7:00 PM</b>
              <span>Women's group</span>
            </div>
          </figure>
          <div>
            <span class="kicker">You are not alone</span>
            <h2>Faith grows in rooms where you're known.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              We're not trying to be the biggest room in town. We'd rather be the one where
              somebody notices you slipped in late and saves you a chair anyway. Small groups, a
              Tuesday meal, and leaders who pick up the phone.
            </p>
            <ul class="softlist">
              <li>Twelve small groups meeting midweek, across the city</li>
              <li>A Tuesday community meal that never runs out of chairs</li>
              <li>Prayer team available after every gathering</li>
              <li>New groups open each term — no experience needed</li>
            </ul>
            <a class="btn btn-ghost" href="/ministries">
              Find a group near you
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
            <span class="kicker">Life together</span>
            <h2>Church isn't just Sunday. It's who shows up on Tuesday too.</h2>
            <p>
              The quiet mornings count just as much as the gathered ones — a text when you're
              struggling, a meal when you're grieving, a friend who sits with you in the silence
              before the words come.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= PRAYER WALL PREVIEW ======================= */}
      <section class="wall reveal">
        <div class="wrap">
          <div class="sec-head center">
            <span class="kicker" style="justify-content:center">
              The prayer wall
            </span>
            <h2>Say it here. We'll carry it with you.</h2>
            <p class="lede" style="margin:16px auto 0">
              These are real requests from our church family this week. Add yours — our prayer
              team reads every one, every morning.
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
              <a class="btn btn-solid" href="/prayer-wall">
                Share a request
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
