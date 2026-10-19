import { IMAGES } from '../images'

export function MinistriesPage() {
  return (
    <>
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            Where you fit
          </span>
          <h1>Ministries for every season you're in.</h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            Whatever stage of life you're carrying — new parent, empty nester, exhausted
            student, someone just showing up for the first time in years — there's a place for
            you here.
          </p>
        </div>
      </section>

      {/* ======================= FOUR-UP CARDS ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap">
          <div class="cards-4">
            <a class="ccard" href="#connect" data-set-reason="volunteer" style="text-decoration:none">
              <span class="idx">01</span>
              <h3>Kids &amp; Families</h3>
              <p>Nursery to Grade 6, every Sunday. Safe, silly, and rooted in Scripture.</p>
              <img src={IMAGES.familyGuitarPark} alt="Family spending time together outdoors" />
              <span class="link">Volunteer with kids →</span>
            </a>
            <a class="ccard" href="#connect" data-set-reason="volunteer" style="text-decoration:none">
              <span class="idx">02</span>
              <h3>Youth</h3>
              <p>Grades 7–12 on Friday nights. Games, honest talks, and a leader who prays for you by name.</p>
              <img src={IMAGES.friendsWalking} alt="A group of young people walking together outdoors" />
              <span class="link">Join a youth team →</span>
            </a>
            <a class="ccard" href="#connect" data-set-reason="volunteer" style="text-decoration:none">
              <span class="idx">03</span>
              <h3>Serve &amp; Outreach</h3>
              <p>Packing food hampers, winter coat drives, and a weekly meal for our neighbourhood.</p>
              <img src={IMAGES.clothingDonation} alt="Volunteers sorting donations to give to the community" />
              <span class="link">Start serving →</span>
            </a>
            <a class="ccard" href="#connect" data-set-reason="question" style="text-decoration:none">
              <span class="idx">04</span>
              <h3>Small Groups</h3>
              <p>Twelve groups meeting across the city, midweek, in homes. New groups open each term.</p>
              <span class="link" style="margin-top:22px">
                Find a group →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================= TEXT OVER IMAGE — small groups ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap">
          <div class="overlay-img overlay-hero">
            <img src={IMAGES.heroWomenPraying} alt="Women gathered together, holding hands in prayer" />
            <div class="shade"></div>
            <div class="caption">
              <span class="kicker">Small groups</span>
              <h2 style="max-width:18ch">A living room, a few chairs, and people who actually know your story.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= WOMEN'S / MEN'S MINISTRY SPLIT ======================= */}
      <section class="reveal">
        <div class="wrap split">
          <div>
            <span class="kicker">Women's ministry</span>
            <h2>You don't have to carry it alone.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              Wednesday evenings, a rotating home, and women across every life stage who show up
              for each other — through new babies, job losses, empty nests, and everything in
              between.
            </p>
            <ul class="softlist">
              <li>Weekly Bible study, 7:00 PM Wednesdays</li>
              <li>Seasonal retreats twice a year</li>
              <li>A prayer chain that actually prays, fast</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Learn more
            </a>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.womanCozyMug} alt="Woman sitting with a warm mug, reflecting quietly" />
            <div class="badge">
              <b>Wed · 7:00 PM</b>
              <span>Women's group</span>
            </div>
          </figure>
        </div>
      </section>

      <section class="reveal" style="padding-top:0">
        <div class="wrap split">
          <figure class="shot" style="margin:0;order:2">
            <img src={IMAGES.menWalking} alt="Two men talking together outdoors" />
            <div class="badge">
              <b>Sat · 7:00 AM</b>
              <span>Men's breakfast</span>
            </div>
          </figure>
          <div style="order:1">
            <span class="kicker">Men's ministry</span>
            <h2>Real conversation over really good breakfast.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              Saturday mornings, no performance required. Guys showing up honest about the
              pressure of work, marriage, fatherhood, and everything church rarely gives us
              permission to say out loud.
            </p>
            <ul class="softlist">
              <li>Saturday breakfast, 7:00 AM, twice a month</li>
              <li>Accountability groups of 3–4</li>
              <li>An annual service weekend with the whole family</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* ======================= SERVE CTA ======================= */}
      <section class="reveal" style="background:var(--sand);border-top:1px solid var(--line)">
        <div class="wrap" style="max-width:720px;text-align:center">
          <span class="kicker" style="justify-content:center">
            Everyone has a pair of hands
          </span>
          <h2>Serving is one of the fastest ways to feel like you belong.</h2>
          <p class="lede" style="margin:18px auto 26px">
            You don't need a title or years of experience — just a willingness to show up. Tell
            us what you love doing (or what you've never tried) and we'll find a spot for you.
          </p>
          <a class="btn btn-solid" href="#connect" data-set-reason="volunteer">
            I'd like to volunteer
          </a>
        </div>
      </section>
    </>
  )
}
