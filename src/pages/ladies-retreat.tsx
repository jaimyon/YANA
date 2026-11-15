import { IMAGES } from '../images'

export function LadiesRetreatPage() {
  return (
    <>
      {/* ======================= PAGE HERO ======================= */}
      <section class="page-hero">
        <div class="glow"></div>
        <div class="wrap">
          <span class="kicker" style="justify-content:center">
            Annual ladies retreat
          </span>
          <h1>Step away for a weekend. Come back renewed.</h1>
          <p class="lede center" style="margin-left:auto;margin-right:auto">
            September 10–12, 2027 · Camp Allen, Navasota, Texas. A weekend of worship, rest,
            and real conversation with women who will remember your name long after the
            weekend ends.
          </p>
        </div>
      </section>

      {/* ======================= INTRO SPLIT ======================= */}
      <section class="reveal" style="padding-top:0">
        <div class="wrap split">
          <div>
            <span class="kicker">What to expect</span>
            <h2>A weekend to rest in God's presence.</h2>
            <p style="margin-top:20px;color:var(--cocoa-soft)">
              Each year, YANA Ministries invites women to step away from the busyness of
              everyday life and gather for a weekend of spiritual renewal, meaningful
              connection, and joyful fellowship. Through heartfelt worship, inspiring biblical
              teaching, prayer, and encouragement, we create space for God to refresh our
              hearts and strengthen our faith. Past retreat themes have included: Joy, Be
              Transformed, LORD! I Need You, and I Am the One Your Heart Loves.
            </p>
            <p style="color:var(--cocoa-soft)">
              Details regarding the retreat theme, registration, cost, and payment will be
              shared on our website, through email and postal mail, and on our social media
              pages. We can't wait to welcome you for another beautiful weekend of faith,
              fellowship, and spiritual renewal!
            </p>
          </div>
          <figure class="shot" style="margin:0">
            <img src={IMAGES.retreatHeroFellowship} alt="Three women laughing together outdoors" />
            <div class="badge">
              <b>2027</b>
              <span>Sept 10–12 · Camp Allen</span>
            </div>
          </figure>
        </div>
      </section>

      {/* ======================= PICTURE GALLERY ======================= */}
      <section class="reveal" id="gallery" style="padding-top:0">
        <div class="wrap">
          <div class="sec-head" style="text-align:center">
            <span class="kicker" style="justify-content:center">
              Moments from past retreats
            </span>
            <h2>Worship, laughter, and sisterhood.</h2>
          </div>
          <div class="gallery">
            <img class="wide tall" src={IMAGES.retreatGalleryMountainView} alt="Three women standing together on a scenic overlook" />
            <img src={IMAGES.retreatGalleryFriends} alt="Two women sitting outdoors smiling together" />
            <img src={IMAGES.retreatGalleryHikeDuo} alt="Two women on a nature walk together" />
            <img class="tall" src={IMAGES.retreatGalleryForestPath} alt="Two women walking together down a forest path" />
            <img class="wide" src={IMAGES.retreatGalleryGoldenField} alt="Two women standing together in a golden field" />
            <img src={IMAGES.retreatGalleryHandsCircle} alt="Hands joined together in a circle of prayer" />
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section class="wall reveal" id="testimonials">
        <div class="wrap">
          <div class="sec-head" style="text-align:center">
            <span class="kicker" style="justify-content:center">
              In their own words
            </span>
            <h2>What women are saying about the retreat.</h2>
          </div>
          <div class="notes">
            <div class="note">
              <p>
                "I came in exhausted and left with my heart so full. The worship alone was
                worth the drive — but it was the friendships that changed me."
              </p>
              <div class="who">— Retreat guest, 2024</div>
            </div>
            <div class="note">
              <p>
                "I didn't know anyone when I arrived. By the end of the weekend, I had a whole
                table of sisters praying for me by name."
              </p>
              <div class="who">— Retreat guest, 2023</div>
            </div>
            <div class="note">
              <p>
                "This retreat gave me space to finally exhale. God met me there in a way I
                still carry with me today."
              </p>
              <div class="who">— Retreat guest, 2024</div>
            </div>
            <div class="note">
              <p>
                "Every year I say I don't have time, and every year it turns out to be exactly
                what I needed. I'm already counting down to the next one."
              </p>
              <div class="who">— Retreat guest, 2022</div>
            </div>
          </div>
          <p class="pull-quote" style="text-align:center;margin-top:44px">
            "You are not alone — and neither am I."
          </p>
        </div>
      </section>

      {/* ======================= SIGN-UP FORM ======================= */}
      <section class="reveal" id="signup">
        <div class="wrap" style="max-width:640px">
          <div class="sec-head" style="text-align:center">
            <span class="kicker" style="justify-content:center">
              Save your spot
            </span>
            <h2>Let us know you're interested.</h2>
            <p class="lede center" style="margin-top:14px">
              Registration details for September 10–12, 2027 will be sent directly to you.
              Sign up below and we'll make sure you're among the first to know.
            </p>
          </div>

          <div class="pane warm" style="padding:38px 36px;margin-top:36px">
            <form id="retreatSignupForm">
              <div class="field row">
                <div>
                  <label for="rsName">Name</label>
                  <input id="rsName" name="name" type="text" required placeholder="Your full name" />
                </div>
                <div>
                  <label for="rsEmail">Email</label>
                  <input id="rsEmail" name="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>
              <div class="field row">
                <div>
                  <label for="rsPhone">Phone (optional)</label>
                  <input id="rsPhone" name="phone" type="tel" placeholder="(555) 555-5555" />
                </div>
                <div>
                  <label for="rsGuests">Number attending</label>
                  <input id="rsGuests" name="guests" type="number" min="1" value="1" required />
                </div>
              </div>
              <div class="field">
                <label for="rsMessage">Anything you'd like us to know? (optional)</label>
                <textarea id="rsMessage" name="message" rows={3} placeholder="Dietary needs, roommate requests, questions..."></textarea>
              </div>
              <button class="btn btn-solid" type="submit" id="retreatSignupSubmit" style="margin-top:20px;width:100%;justify-content:center">
                Sign me up
              </button>
              <p class="fine">
                We'll never share your info. You'll hear from us by email with full registration
                and payment details as the retreat approaches.
              </p>
            </form>

            <div class="form-success" id="retreatSignupSuccess">
              <div class="icon">🙏</div>
              <h3 style="color:#fff">You're on the list — thank you!</h3>
              <p style="color:#D9C3AA;margin-top:8px">
                We'll be in touch with full details as the retreat gets closer. We can't wait
                to see you there.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
