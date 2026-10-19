import { IMAGES } from '../images'

export function AboutPage() {
  return (
    <>
      {/* ======================= PAGE HERO ======================= */}
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            Nice to meet you
          </span>
          <h1>
            I'm so glad <span class="em">you're here.</span>
          </h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            This page is a small glimpse into who we are, what God has done in this community,
            and why YANA exists the way it does.
          </p>
        </div>
      </section>

      {/* ======================= GET TO KNOW — Shannon Dvorak-style intro ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap about-top">
          <figure class="portrait" style="margin:0">
            <div class="ring"></div>
            <img src={IMAGES.aboutPortrait} alt="Pastor smiling warmly, sitting with a cup of coffee" />
          </figure>
          <div>
            <span class="kicker">Get to know us</span>
            <h2>A family learning to follow Jesus, together.</h2>
            <p style="margin-top:20px">
              YANA began around a kitchen table with four families who kept asking the same
              question: <i>why does church so often feel like the last place you can be honest?</i>{' '}
              So we started small — real conversations, open doors, and a commitment that no one
              here has to pretend they have it figured out.
            </p>
            <p>
              Relationships matter deeply to us. We cherish time with family and friends, and our
              greatest joy is found in simply being present with the people we love — the same
              way we hope you'll feel the moment you walk in.
            </p>
            <p class="pull-quote">"God accepts you where you are — but loves you too much to leave you there."</p>
          </div>
        </div>
      </section>

      {/* ======================= THE MOST SIGNIFICANT RELATIONSHIP ======================= */}
      <section class="reveal" style="background:var(--cream-deep);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
        <div class="wrap" style="max-width:780px;text-align:center">
          <span class="kicker" style="justify-content:center">
            Why we do what we do
          </span>
          <h2>
            The most significant relationship in our life is <span class="em">with Jesus.</span>
          </h2>
          <p class="lede" style="margin:22px auto 0;max-width:62ch">
            Some of us came to know Him as children; others found Him later, in a hard season
            that cracked everything open. However you got here, we believe God's Word is living
            and active — and that when we learn to study it for ourselves, it has the power to
            transform how we think, live, and walk forward in faith.
          </p>
          <p style="margin-top:16px;max-width:62ch;margin-left:auto;margin-right:auto;color:var(--cocoa-soft)">
            We don't come as people who have it all figured out, but as fellow learners and
            sojourners. Our hope is that everyone who lands here — online or in a Sunday
            service — feels seen, known, and reminded that they are not alone.
          </p>
        </div>
      </section>

      {/* ======================= FAMILY STRIP ======================= */}
      <section class="reveal">
        <div class="wrap">
          <div class="sec-head center">
            <span class="kicker" style="justify-content:center">
              Life outside the pulpit
            </span>
            <h2>The everyday moments that shape our ministry.</h2>
          </div>
          <div class="family-strip">
            <img src={IMAGES.familyPicnic} alt="Family sharing a meal together outdoors" />
            <img src={IMAGES.womanCozyMug} alt="Woman enjoying a quiet morning with a warm mug of coffee" />
            <img src={IMAGES.familyGuitarPark} alt="Family playing music and spending time together in the park" />
          </div>
        </div>
      </section>

      {/* ======================= FUN FACTS GRID — Shannon Dvorak style ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap">
          <div class="sec-head center">
            <span class="kicker" style="justify-content:center">
              A few fun facts
            </span>
            <h2>Things you might not know about us.</h2>
          </div>
          <div class="fact-grid">
            <div class="fact">
              <span class="ico">☕</span>
              <p>There's always a pot of coffee brewing — and a second one started before the first runs out.</p>
            </div>
            <div class="fact">
              <span class="ico">📖</span>
              <p>We love talking about Jesus, but plenty of us are introverts who need a nudge to start the conversation.</p>
            </div>
            <div class="fact">
              <span class="ico">🐾</span>
              <p>Half our small groups meet with a dog curled up under the coffee table.</p>
            </div>
            <div class="fact">
              <span class="ico">🎶</span>
              <p>Our worship leader has a not-so-secret soft spot for old hymns rearranged for guitar.</p>
            </div>
            <div class="fact">
              <span class="ico">🌻</span>
              <p>Morning walks and slow Sabbaths are how a lot of us hear from God best.</p>
            </div>
            <div class="fact">
              <span class="ico">💛</span>
              <p>We've learned that love conquers fear — though choosing it can still be hard some days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= PARALLAX BAND — our hope for you ======================= */}
      <section
        class="parallax-band reveal"
        style={`background-image:url(${IMAGES.heroSunrise})`}
      >
        <div class="wrap">
          <div class="caption">
            <span class="kicker">Our hope for you</span>
            <h2>You don't have to have it figured out to belong here.</h2>
          </div>
        </div>
      </section>

      {/* ======================= STAY CONNECTED ======================= */}
      <section class="reveal" style="background:var(--sand);border-top:1px solid var(--line)">
        <div class="wrap" style="max-width:680px;text-align:center">
          <span class="kicker" style="justify-content:center">
            Stay connected
          </span>
          <h2>Get our weekly note — a little encouragement, nothing else.</h2>
          <p class="lede" style="margin:18px auto 26px">
            Short reflections from Scripture, updates on what's happening at YANA, and reminders
            that you are not alone as you grow in faith.
          </p>
          <a class="btn btn-solid" href="#connect" data-set-reason="updates">
            Join the list
          </a>
        </div>
      </section>
    </>
  )
}
