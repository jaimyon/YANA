import { IMAGES } from '../images'

export function ServicesPage() {
  return (
    <>
      {/* ======================= PAGE HERO ======================= */}
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            Ways we walk with you
          </span>
          <h1>Our Services</h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            From a daily word in your inbox to a weekend away with other women seeking
            God, these are the ways YANA shows up for you, week after week, season after
            season.
          </p>
        </div>
      </section>

      {/* ======================= FOUR-UP CARDS ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap">
          <div class="cards-4">
            <a class="ccard" href="#daily-email" style="text-decoration:none">
              <span class="idx">01</span>
              <h3>Daily Email Message</h3>
              <p>[Placeholder] Sign up to receive a thoughtful and encouraging devotional message in your inbox each day to inspire your faith and carry you through whatever today holds.</p>
              <span class="link">Sign up for daily email →</span>
            </a>
            <a class="ccard" href="#booklet" style="text-decoration:none">
              <span class="idx">02</span>
              <h3>Monthly Messages Booklet</h3>
              <p>[Placeholder] For those who enjoy a printed, day-by-day booklet, YANA is happy to mail one directly to your home each month — no inbox required, just a quiet moment with the Word.</p>
              <span class="link">Request the booklet →</span>
            </a>
            <a class="ccard" href="#retreat" style="text-decoration:none">
              <span class="idx">03</span>
              <h3>Annual Ladies Retreat</h3>
              <p>[Placeholder] Each year we invite women to step away from the busyness of everyday life and gather for a weekend of spiritual renewal, honest conversation, and rest.</p>
              <span class="link">Learn about the retreat →</span>
            </a>
            <a class="ccard" href="#speaker" style="text-decoration:none">
              <span class="idx">04</span>
              <h3>Event Speaker</h3>
              <p>[Placeholder] Looking for a speaker for your church event, women's gathering, or conference? Our founder and team are available to share a message of hope and encouragement.</p>
              <span class="link">Request a speaker →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================= SPLIT — Daily Email / Booklet ======================= */}
      <section class="reveal" id="daily-email">
        <div class="wrap split">
          <div>
            <span class="kicker">Daily email message</span>
            <h2>A little encouragement, delivered every morning.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              [Placeholder] Start your day grounded in Scripture. Each message is short enough to
              read over your first cup of coffee, and honest enough to actually sit with you
              through the day — a verse, a few lines of reflection, and a reminder that you are
              not alone.
            </p>
            <ul class="softlist">
              <li>Delivered to your inbox every morning</li>
              <li>Short, Scripture-rooted reflections</li>
              <li>Free, always — unsubscribe anytime</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="updates">
              Sign up for daily email
            </a>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.servicesDailyEmail} alt="A quiet morning devotional scene with coffee and an open book" />
            <div class="badge">
              <b>Daily</b>
              <span>Email devotional</span>
            </div>
          </figure>
        </div>
      </section>

      <section class="reveal" id="booklet" style="padding-top:0">
        <div class="wrap split">
          <figure class="shot" style="margin:0;order:2">
            <img src={IMAGES.servicesBooklets} alt="A stack of printed booklets and journals" />
            <div class="badge">
              <b>Monthly</b>
              <span>Mailed booklet</span>
            </div>
          </figure>
          <div style="order:1">
            <span class="kicker">Monthly messages booklet</span>
            <h2>For when you'd rather hold it in your hands.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              [Placeholder] Some of us need paper, not a screen. Our monthly booklet gathers a
              month's worth of daily reflections into one small, mailed booklet — perfect for a
              porch step, a bedside table, or tucked into your Bible.
            </p>
            <ul class="softlist">
              <li>One booklet mailed to your home, every month</li>
              <li>A full month of day-by-day reflections</li>
              <li>A quiet gift for someone who needs one</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="updates">
              Request the booklet
            </a>
          </div>
        </div>
      </section>

      {/* ======================= PARALLAX BAND — annual ladies retreat ======================= */}
      <section
        class="parallax-band reveal"
        style={`background-image:url(${IMAGES.servicesRetreat})`}
      >
        <div class="wrap">
          <div class="caption">
            <span class="kicker">Annual ladies retreat</span>
            <h2>A whole weekend to breathe, pray, and just be.</h2>
            <p>
              [Placeholder] Once a year, we trade the busyness of ordinary life for a weekend
              away — worship, rest, real conversation, and women who will remember your name
              long after the weekend ends.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= ANNUAL LADIES RETREAT ======================= */}
      <section class="reveal" id="retreat">
        <div class="wrap split">
          <div>
            <span class="kicker">Annual ladies retreat</span>
            <h2>Step away for a weekend. Come back renewed.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              Each year, YANA Ministries invites women to step away from the busyness of everyday life and
              gather for a weekend of spiritual renewal, meaningful connection, and joyful fellowship. Our
              annual Ladies Retreat is a special time to rest in God’s presence, deepen our relationship
              with Him, and build lasting friendships with our sisters in Christ. Through heartfelt worship,
              inspiring biblical teaching, prayer, and encouragement, we create space for God to refresh our
              hearts and strengthen our faith. Past retreat themes have included: Joy, Be Transformed, LORD!
              I Need You, and I Am the One Your Heart Loves.
            </p>
            <p style="color:var(--cocoa-soft)">
              Our next Ladies Retreat will be held September 10–12, 2027, at Camp Allen in Navasota, Texas.
              Details regarding the retreat theme, registration, cost, and payment will be shared on our
              website, through email and postal mail, and on our social media pages. We look forward to
              welcoming you for another beautiful weekend of faith, fellowship, and spiritual renewal!
            </p>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Learn about the retreat
            </a>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.servicesRetreatRest} alt="Two women relaxing and talking together outdoors" />
            <div class="badge">
              <b>Yearly</b>
              <span>Ladies retreat</span>
            </div>
          </figure>
        </div>
      </section>

      {/* ======================= EVENT SPEAKER ======================= */}
      <section class="reveal" id="speaker">
        <div class="wrap split">
          <div>
            <span class="kicker">Event Speaker</span>
            <h2>Bring a message of hope to your next gathering.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              Gilda Taylor is available to speak at and lead a variety of conferences, gatherings, and
              meetings, sharing biblical encouragement and insights to inspire and strengthen others in
              their walk with the Lord. Past presentations have included Quest for the Virtuous Woman,
              Women of the Bible, Date With The King (designed especially for teen girls), and The Lord’s
              Prayer.
            </p>
            <ul class="softlist">
              <li>Church services, conferences &amp; retreats</li>
              <li>Topics on faith, healing, and restoration</li>
              <li>Available for in-person and virtual events</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Request a speaker
            </a>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.servicesSpeaker} alt="A speaker addressing an audience from a podium" />
            <div class="badge">
              <b>Book us</b>
              <span>For your next event</span>
            </div>
          </figure>
        </div>
      </section>

      {/* ======================= CTA ======================= */}
      <section class="reveal" style="background:var(--sand);border-top:1px solid var(--line)">
        <div class="wrap" style="max-width:720px;text-align:center">
          <span class="kicker" style="justify-content:center">
            Not sure where to start?
          </span>
          <h2>Tell us what you're looking for and we'll point you the right way.</h2>
          <p class="lede" style="margin:18px auto 26px">
            Whether it's a daily word, a monthly booklet, a weekend retreat, or a speaker for
            your event — reach out below and someone from our team will get back to you.
          </p>
          <a class="btn btn-solid" href="#connect" data-set-reason="question">
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}
