import type { FC } from 'hono/jsx'
import { IMAGES } from '../images'

type LayoutProps = {
  title?: string
  description?: string
  path?: string
  children: any
}

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
    { href: '/prayer-garden', label: 'Prayer Garden' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Outside Resources' },
  { href: '/contact', label: 'Contact Us' },
]

export const Layout: FC<LayoutProps> = ({
  title = 'YANA — You Are Not Alone',
  description = 'YANA is a church family making space for honest faith — unhurried worship, tables that always have a chair, and people who will remember your name.',
  path = '/',
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Figtree:ital,wght@0,300..800;1,300..600&display=swap"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
        <link rel="icon" href={IMAGES.logo} />
      </head>
      <body>
        <header class="nav" id="siteNav">
          <div class="navbar">
            <a class="brand" href="/">
              <span class="logo-wrap">
                <img src={IMAGES.logo} alt="YANA logo — a glowing wooden cross" />
              </span>
              <span>
                <b>YANA MINISTRIES</b>
                <small>You Are Not Alone Ministries</small>
              </span>
            </a>
            <nav class="navlinks" id="navLinks">
              {NAV_ITEMS.map((item) => (
                <a href={item.href} class={path === item.href ? 'active' : ''}>
                  {item.label}
                </a>
              ))}
              <a class="btn btn-solid navlinks-cta" href="#connect">
                Plan a visit
              </a>
            </nav>
            <a class="btn btn-solid navbar-cta" href="#connect">
              Plan a visit
            </a>
            <button class="navtoggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
              ☰
            </button>
          </div>
        </header>

        {children}

        {/* ======================= SHARED FOOTER CTA / CONTACT FORM ======================= */}
        <section class="footer-cta" id="connect">
          <div class="wrap">
            <div>
              <p class="kicker">Let's connect</p>
              <h2>
                Ask a question, offer your time, <span class="em" style="color:var(--sunflower)">support the work</span>, or just say hello.
              </h2>
              <p style="margin-top:18px;max-width:46ch">
                One form, four doors. Tell us why you're reaching out and we'll make sure the
                right person gets back to you — usually within a day or two. If it's a prayer
                request, our prayer team reads every single one, every morning.
              </p>
              <ul style="list-style:none;margin:28px 0 0;padding:0;font-size:14.6px;color:#D9C3AA">
                <li style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.14)">
                  💬 <b style="color:#fff">Have a question?</b> About Sundays, kids check-in,
                  anything.
                </li>
                <li style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.14)">
                  🙌 <b style="color:#fff">Want to volunteer?</b> We'll connect you with a team
                  that fits.
                </li>
                <li style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.14)">
                  🧡 <b style="color:#fff">Want to support YANA?</b> We'll walk you through ways
                  to give.
                </li>
                <li style="padding:10px 0">
                  📬 <b style="color:#fff">Just want updates?</b> We'll add you to our weekly
                  note — no spam, ever.
                </li>
              </ul>
            </div>

            <div class="pane warm" style="padding:36px 32px">
              <form id="connectForm">
                <input type="hidden" id="reasonInput" name="reason" value="question" />
                <label
                  style="font-size:11.2px;font-weight:650;letter-spacing:.14em;text-transform:uppercase;color:#C7AF95;display:block;margin-bottom:10px"
                >
                  I'm reaching out to...
                </label>
                <div class="reason-pills" id="reasonPills">
                  <button type="button" class="reason-pill active" data-reason="question">
                    💬 Ask a question
                  </button>
                  <button type="button" class="reason-pill" data-reason="volunteer">
                    🙌 Volunteer
                  </button>
                  <button type="button" class="reason-pill" data-reason="give">
                    🧡 Support YANA
                  </button>
                  <button type="button" class="reason-pill" data-reason="prayer">
                    🕊️ Prayer request
                  </button>
                  <button type="button" class="reason-pill" data-reason="updates">
                    📬 Get updates
                  </button>
                </div>

                <div id="formFields">
                  <div class="field">
                    <label for="cname">Name (or leave blank)</label>
                    <input id="cname" name="name" type="text" placeholder="First name" />
                  </div>
                  <div class="field">
                    <label for="cemail">Email</label>
                    <input
                      id="cemail"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div class="field">
                    <label for="cmessage" id="messageLabel">
                      Your message
                    </label>
                    <textarea
                      id="cmessage"
                      name="message"
                      rows={3}
                      placeholder="What's on your mind?"
                    ></textarea>
                  </div>
                  <div class="field" id="prayerShareField" style="display:none">
                    <label style="display:flex;align-items:flex-start;gap:10px;text-transform:none;font-weight:500;font-size:13.6px;letter-spacing:0;color:#D9C3AA;cursor:pointer">
                      <input
                        type="checkbox"
                        id="shareOnWall"
                        name="share_on_wall"
                        checked
                        style="width:auto;margin-top:3px"
                      />
                      <span>
                        Share this (anonymously, if you'd like) on our{' '}
                        <a href="/prayer-wall" style="color:var(--sunflower);text-decoration:underline">
                          Prayer Wall
                        </a>{' '}
                        — uncheck to keep it just between you and our prayer team.
                      </span>
                    </label>
                  </div>
                </div>

                <button class="btn btn-solid" type="submit" id="connectSubmit" style="margin-top:20px;width:100%;justify-content:center">
                  Send it
                </button>
                <p class="fine" id="connectFine">
                  We'll never share your info. Usually a reply within 1–2 days.
                </p>
              </form>

              <div class="form-success" id="formSuccess">
                <div class="icon">🙏</div>
                <h3 style="color:#fff">Got it — thank you.</h3>
                <p style="color:#D9C3AA;margin-top:8px">
                  Someone from our team will be in touch soon. You are not alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div class="wrap footer-links">
            <div class="cols">
              <div>
                <a class="brand" href="/">
                  <span class="logo-wrap">
                    <img src={IMAGES.logo} alt="YANA logo" />
                  </span>
                  <span>
                    <b>YANA MINISTRIES</b>
                    <small>You Are Not Alone Ministries</small>
                  </span>
                </a>
                <p class="fblurb">
                  YANA Ministries seeks to encourage, pray for, mentor, and teach others who are seeking to understand and fulfill the will of God in their lives.
                </p>
              </div>
              <div>
                <h4>Visit</h4>
                <ul>
                  <li>[Street Address]</li>
                  <li>[Your City, State ZIP]</li>
                  <li>Sundays 9:00 &amp; 11:00 AM</li>
                  <li>
                    <a href="tel:">[Phone number]</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="/about">New here</a>
                  </li>
                  <li>
                    <a href="/ministries">Small groups</a>
                  </li>
                  <li>
                    <a href="/prayer-wall">Prayer wall</a>
                  </li>
                  <li>
                    <a href="/ministries">Serve</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>More</h4>
                <ul>
                  <li>
                    <a href="#connect">Give</a>
                  </li>
                  <li>
                    <a href="/about">Messages</a>
                  </li>
                  <li>
                    <a href="#connect">Contact</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <p class="farewell">You are not alone.</p>
            <div class="legal">
              <span>© 2026 YANA Ministry. All rights reserved.</span>
              <span>Privacy · Accessibility · [Charity registration no.]</span>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
      </body>
    </html>
  )
}

export default Layout
