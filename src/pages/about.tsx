import { IMAGES } from '../images'

export function AboutPage() {
  return (
    <>
      {/* ======================= PAGE HERO ======================= */}
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            Those who are called... serve.
          </span>
          <h1>
            A Team Assembled By <span class="em">God!</span>
          </h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            Each and every person involved in YANA Ministries has a heart to do Christ's work and share God's Word and spread His Love to as many people as humanly possible. Surrounded by His Presence. Filled with His Spirit. Covered by His Grace.
          </p>
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
