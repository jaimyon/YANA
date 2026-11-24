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
  { href: '/resources', label: 'Resources' },
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
              <a class="btn btn-solid navlinks-cta" href="/contact?reason=give" data-set-reason="give">
                Donate
              </a>
            </nav>
            <a class="btn btn-solid navbar-cta" href="/contact?reason=give" data-set-reason="give">
              Donate
            </a>
            <button class="navtoggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
              ☰
            </button>
          </div>
        </header>

        {children}

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
              <div class="footer-menu">
                <h4>Menu</h4>
                <ul>
                  {NAV_ITEMS.map((item) => (
                    <li>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
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
        {path === '/admin' && <script src="/static/admin.js"></script>}
      </body>
    </html>
  )
}

export default Layout
