import { IMAGES } from '../images'

export function ResourcesPage() {
  return (
    <>
      {/* ======================= PAGE HERO ======================= */}
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            Keep growing between Sundays
          </span>
          <h1>Outside Resources.</h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            Books, prayers, and tools written by YANA — plus a few trusted resources from
            others — to help you keep digging into God's Word long after you close this page.
          </p>
        </div>
      </section>

      {/* ======================= FOUR-UP CARDS ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap">
          <div class="cards-4">
            <a class="ccard" href="#right-relationship" style="text-decoration:none">
              <span class="idx">01</span>
              <h3>A Right Relationship</h3>
              <p>A personalized collection of daily reflections drawn from four years of YANA's weekly encouragement messages.</p>
              <span class="link">Read more — $15 →</span>
            </a>
            <a class="ccard" href="#praying-with-god" style="text-decoration:none">
              <span class="idx">02</span>
              <h3>Praying with God</h3>
              <p>Gaining a deeper understanding of the LORD's Prayer — who God is, what He does, and why He is our focus.</p>
              <span class="link">Read more — $5 →</span>
            </a>
            <a class="ccard" href="#praise-be-to-god" style="text-decoration:none">
              <span class="idx">03</span>
              <h3>Praise Be to God</h3>
              <p>31 days of prayer and praise, written to worship the LORD by giving utterance to His worthiness.</p>
              <span class="link">Read more — $5 →</span>
            </a>
            <a class="ccard" href="#other-suggestions" style="text-decoration:none">
              <span class="idx">04</span>
              <h3>Other Suggestions</h3>
              <p>A few trusted tools worth having on your shelf — concordances, study Bibles, and more.</p>
              <span class="link">See the list →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================= A RIGHT RELATIONSHIP ======================= */}
      <section class="reveal" id="right-relationship">
        <div class="wrap split">
          <div>
            <span class="kicker">YANA Ministries · $15</span>
            <h2>A Right Relationship: A Personalized Collection of Daily Reflections</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              This book is a collection of the first four years of You Are Not Alone (YANA)
              Ministries weekly encouragement messages. They are organized into four sections:
              recognition of Who God is (It is right that God is an awesome God), accepting the
              gift of salvation (It is right to accept the gift of a right relationship with
              God), the wisdom and strength we receive through God's grace (It is right that God
              provides in special ways for those in right relationship with Him), and what we do
              to thank God for His love toward us — obey Him (It is right to maintain right
              relationship with God by righteous living).
            </p>
            <ul class="softlist">
              <li>Four years of weekly encouragement messages, collected</li>
              <li>Organized into four sections of spiritual growth</li>
              <li>$15 — reach out below to order your copy</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Order this book
            </a>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.resourcesBibleHighlighters} alt="Hands studying an open Bible with highlighters and notes" />
            <div class="badge">
              <b>$15</b>
              <span>Daily reflections</span>
            </div>
          </figure>
        </div>
      </section>

      {/* ======================= PRAYING WITH GOD ======================= */}
      <section class="reveal" id="praying-with-god" style="padding-top:0">
        <div class="wrap split">
          <figure class="shot" style="margin:0;order:2">
            <img src={IMAGES.resourcesOpenBibleMug} alt="An open Bible resting on a wooden table in quiet morning light" />
            <div class="badge">
              <b>$5</b>
              <span>The LORD's Prayer</span>
            </div>
          </figure>
          <div style="order:1">
            <span class="kicker">YANA Ministries · $5</span>
            <h2>Praying with God: Gaining a Deeper Understanding of the LORD's Prayer</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              The LORD's Prayer gives us a very special opportunity to understand Who God is and
              who we are in Him. It helps us to relate to God to affirm His truth and His grace
              to us. With a deeper understanding of this prayer, we can answer these questions:
              Who is God? What does God do? Why is God our focus?
            </p>
            <ul class="softlist">
              <li>A guided, deeper look at the LORD's Prayer</li>
              <li>Answers three questions: Who, What, and Why of God</li>
              <li>$5 — reach out below to order your copy</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Order this book
            </a>
          </div>
        </div>
      </section>

      {/* ======================= PARALLAX BAND ======================= */}
      <section
        class="parallax-band reveal"
        style={`background-image:url(${IMAGES.resourcesStudyBooks})`}
      >
        <div class="wrap">
          <div class="caption">
            <span class="kicker">Build your shelf</span>
            <h2>A little each day adds up to a deeper walk with God.</h2>
            <p>
              Whether it's a few pages before bed or a quiet moment with coffee in the morning,
              these resources are written to meet you right where you are.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= PRAISE BE TO GOD ======================= */}
      <section class="reveal" id="praise-be-to-god">
        <div class="wrap split">
          <div>
            <span class="kicker">YANA Ministries · $5</span>
            <h2>Praise Be to God: 31 Days of Prayer and Praise</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              "For great is the LORD and most worthy of praise!" (1 Chronicles 16:25) So often
              we pray to ask for something and not to recognize the awesome-ness of the God we
              serve. These prayers are designed to worship the LORD by giving utterance to His
              worthiness. These prayers can be used to start a lifetime practice of praising the
              LORD with all your heart, all your mind, all your strength, and all your soul!
            </p>
            <ul class="softlist">
              <li>31 days of prayers focused purely on praise</li>
              <li>A lifetime practice, not just a one-time read</li>
              <li>$5 — reach out below to order your copy</li>
            </ul>
            <a class="btn btn-ghost" href="#connect" data-set-reason="question">
              Order this book
            </a>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.candleLighting} alt="A single candle being lit, a quiet image of prayer and worship" />
            <div class="badge">
              <b>$5</b>
              <span>31 days of praise</span>
            </div>
          </figure>
        </div>
      </section>

      {/* ======================= OTHER SUGGESTIONS ======================= */}
      <section class="reveal" id="other-suggestions" style="background:var(--sand);border-top:1px solid var(--line)">
        <div class="wrap">
          <div style="max-width:640px;margin:0 auto 40px;text-align:center">
            <span class="kicker" style="justify-content:center">Beyond our own pages</span>
            <h2>A few other tools worth having on your shelf.</h2>
            <p class="lede" style="margin-top:18px">
              Alongside YANA's own books, here are a few trusted resources that many in our
              community keep close at hand for study and prayer.
            </p>
          </div>
          <div class="notes" style="grid-template-columns:repeat(2,1fr)">
            <div class="note">
              <p>A Concordance</p>
              <span class="who">Find every verse containing a word or phrase</span>
            </div>
            <div class="note">
              <p>A Study Bible</p>
              <span class="who">Scripture with notes, maps, and commentary</span>
            </div>
            <div class="note">
              <p>A Bible Dictionary</p>
              <span class="who">Background on people, places, and terms</span>
            </div>
            <div class="note">
              <p>A Daily Devotional Journal</p>
              <span class="who">A place to write your own reflections and prayers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CTA ======================= */}
      <section class="reveal">
        <div class="wrap" style="max-width:720px;text-align:center">
          <span class="kicker" style="justify-content:center">
            Have a question about these resources?
          </span>
          <h2>We'd love to help you find what fits your season.</h2>
          <p class="lede" style="margin:18px auto 26px">
            Reach out below to order a book, ask a question, or get a recommendation for where
            to start.
          </p>
          <a class="btn btn-solid" href="#connect" data-set-reason="question">
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}
