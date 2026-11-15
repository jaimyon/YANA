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

      {/* ======================= LEADERSHIP TABS ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap">
          <div class="leader-tabs" id="leaderTabs" role="tablist" aria-label="Leadership">
            <button
              type="button"
              class="leader-tab active"
              data-tab="founder"
              role="tab"
              aria-selected="true"
            >
              Gilda M. Taylor - Our Founder
            </button>
            <button
              type="button"
              class="leader-tab"
              data-tab="board"
              role="tab"
              aria-selected="false"
            >
              Board of Directors
            </button>
          </div>

          <div class="leader-panel active" id="leader-founder" role="tabpanel">
            <div class="about-top">
              <figure class="portrait" style="margin:0">
                <div class="ring"></div>
                <img src={IMAGES.gildaTaylor} alt="Gilda M. Taylor, Founder of YANA Ministries" />
              </figure>
              <div>
                <span class="kicker">Our founder</span>
                <h2>Gilda M. Taylor</h2>
                <p style="margin-top:20px">
                  [Placeholder bio] Gilda M. Taylor founded YANA Ministries out of a simple
                  conviction: that no one should walk through a hard season alone. Her heart for
                  prayer, hospitality, and honest faith shaped the ministry from its very first
                  gathering and continues to guide YANA today.
                </p>
                <p>
                  [Placeholder bio] With decades of experience in pastoral care and community
                  outreach, Gilda has dedicated her life to encouraging others, mentoring leaders,
                  and reminding everyone she meets that they are seen, known, and loved by God.
                </p>
                <p class="pull-quote">"You are not alone — and neither am I."</p>
              </div>
            </div>
          </div>

          <div class="leader-panel" id="leader-board" style="display:none">
            <div class="sec-head center">
              <span class="kicker" style="justify-content:center">
                Leadership
              </span>
              <h2>Board of Directors</h2>
            </div>
            <div class="board-grid">
              <div class="board-card">
                <div class="board-avatar">GT</div>
                <h3>[Placeholder Name]</h3>
                <span class="board-role">Board Chair</span>
                <p>[Placeholder] Serving YANA Ministries since its founding, guiding vision and strategy.</p>
              </div>
              <div class="board-card">
                <div class="board-avatar">JD</div>
                <h3>[Placeholder Name]</h3>
                <span class="board-role">Vice Chair</span>
                <p>[Placeholder] Brings years of nonprofit leadership experience to the board.</p>
              </div>
              <div class="board-card">
                <div class="board-avatar">MS</div>
                <h3>[Placeholder Name]</h3>
                <span class="board-role">Treasurer</span>
                <p>[Placeholder] Oversees financial stewardship and accountability for the ministry.</p>
              </div>
              <div class="board-card">
                <div class="board-avatar">AR</div>
                <h3>[Placeholder Name]</h3>
                <span class="board-role">Secretary</span>
                <p>[Placeholder] Keeps the board organized and connected to the wider congregation.</p>
              </div>
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
