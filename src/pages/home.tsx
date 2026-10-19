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
          <h1>
            There's room here for <span class="em">the real you.</span>
          </h1>
          <p class="lede" style="margin-left:auto;margin-right:auto">
            YANA is a church family in [Your City] making space for honest faith — unhurried
            worship, tables that always have a chair, and people who will remember your name
            the second Sunday.
          </p>
          <div class="btnrow">
            <a class="btn btn-solid" href="#connect" data-set-reason="question">
              Plan your visit
            </a>
            <a class="btn btn-ghost" href="#watch">
              Watch last Sunday
            </a>
          </div>
          <div class="chips">
            <span>
              <b>Sundays</b> · 9:00 &amp; 11:00 AM
            </span>
            <span>
              <b>YANA Center</b> · [Your City]
            </span>
            <span>
              <b>Kids ministry</b> · nursery → Grade 6
            </span>
          </div>
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
              First time with us?
            </span>
            <h2>Three easy steps, and we'll take it from there.</h2>
          </div>
          <div class="steps">
            <div class="step">
              <span class="num">01</span>
              <h3>Tell us you're coming</h3>
              <p>Send us your name and which Sunday. That's the whole form — two lines, thirty seconds.</p>
              <span class="arrow">→</span>
            </div>
            <div class="step">
              <span class="num">02</span>
              <h3>We'll meet you at the door</h3>
              <p>Someone from our welcome team will be looking for you, walk you through kids check-in, and find you a seat.</p>
              <span class="arrow">→</span>
            </div>
            <div class="step">
              <span class="num">03</span>
              <h3>Then come back next week</h3>
              <p>Coffee after the gathering, a small group that meets near you, and a standing invitation to belong.</p>
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

      {/* ======================= SUNDAYS AT YANA ======================= */}
      <section class="sundays reveal">
        <div class="wrap">
          <div class="sec-head">
            <span class="kicker">Sundays at YANA</span>
            <h2>Three gatherings. Pick the one that fits.</h2>
          </div>
          <div class="gather">
            <div class="g">
              <span class="t">9:00 AM</span>
              <span class="sub">Chapel · Classic Worship</span>
              <p>Hymns, liturgy and communion. Quiet, grounded, and a favourite of early risers.</p>
              <div class="len">60 minutes</div>
            </div>
            <div class="g">
              <span class="t">11:00 AM</span>
              <span class="sub">Main Hall · Contemporary</span>
              <p>Full band, a message from Scripture, and Kids Ministry from nursery through Grade 6.</p>
              <div class="len">75 minutes</div>
            </div>
            <div class="g">
              <span class="t">6:30 PM</span>
              <span class="sub">Prayer Room · Evening</span>
              <p>An hour of unhurried prayer and sung worship. No announcement, no offering.</p>
              <div class="len">60 minutes</div>
            </div>
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

      {/* ======================= MINISTRIES ======================= */}
      <section class="reveal">
        <div class="wrap">
          <div class="sec-head">
            <span class="kicker">Where you fit</span>
            <h2>Ministries for every season you're in.</h2>
          </div>
          <div class="cards">
            <a class="mcard" href="/ministries">
              <img
                src={IMAGES.familyGuitarPark}
                alt="A father playing guitar while his family enjoys a picnic in the park"
              />
              <div class="body">
                <h3>Kids &amp; Families</h3>
                <p>Nursery through Grade 6 every Sunday at 11:00. Crafts, songs, and a story they'll retell at dinner.</p>
                <span class="more">Explore →</span>
              </div>
            </a>
            <a class="mcard" href="/ministries">
              <img
                src={IMAGES.friendsWalking}
                alt="A group of friends walking together outdoors on a sunny day"
              />
              <div class="body">
                <h3>Youth</h3>
                <p>Grades 7–12 on Friday nights. Games, worship, and honest conversation with leaders who show up.</p>
                <span class="more">Explore →</span>
              </div>
            </a>
            <a class="mcard" href="/ministries">
              <img
                src={IMAGES.clothingDonation}
                alt="Volunteers sorting donated clothing and goods to give to the community"
              />
              <div class="body">
                <h3>Serve &amp; Outreach</h3>
                <p>Food hampers, coat drives, and a weekly meal for our neighbourhood. Everyone has a pair of hands.</p>
                <span class="more">Explore →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ======================= MESSAGE + PRAYER PANE (merged contact into prayer ask) ======================= */}
      <section style="padding-top:0" class="reveal" id="watch">
        <div class="wrap">
          <div class="overlay-img overlay-hero" style="margin-bottom:56px">
            <img src={IMAGES.worshipHands} alt="Congregation with hands raised in worship under warm stage lighting" />
            <div class="shade full"></div>
            <div class="caption">
              <span class="kicker">Last Sunday · Series: Held</span>
              <h2 style="max-width:20ch">When the prayer doesn't come easy.</h2>
              <p style="max-width:52ch;margin-top:10px">
                Part three of our series on the prayers God never tires of hearing — including
                the three-word ones said through tears.
              </p>
              <a class="play" href="#">
                <i></i>
                <span>Listen · 32 min</span>
              </a>
            </div>
          </div>

          <div class="duo">
            <div class="pane sage-tone">
              <span class="kicker">New here?</span>
              <h2>Come as you are. Leave a little lighter.</h2>
              <p style="margin-top:14px;color:var(--cocoa-mid)">
                Free parking, doors open thirty minutes early, coffee that's actually good, and
                a welcome team who will walk you to Kids check-in. Jeans or your Sunday best —
                both are normal here.
              </p>
              <a class="btn btn-sage" href="/about" style="margin-top:10px">
                Meet our pastor
              </a>
            </div>
            <div class="pane gold">
              <span class="kicker" style="color:#A8481F">
                Tell us how we can pray
              </span>
              <h2 style="color:var(--brown)">We'd love to carry it with you.</h2>
              <p style="margin-top:14px;color:#5A3F26">
                Our prayer team meets every weekday morning. Use the form at the bottom of this
                page, choose <b>Prayer request</b>, and we'll take it from there — no pressure
                to share your name.
              </p>
              <a
                class="btn btn-solid"
                href="#connect"
                data-set-reason="prayer"
                style="margin-top:10px;background:var(--brown)"
              >
                Share a prayer request
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
