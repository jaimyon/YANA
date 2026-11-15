export function AdminPage() {
  return (
    <section class="admin-page">
      <div class="wrap">
        <div class="admin-head">
          <span class="kicker">YANA admin</span>
          <h1>Prayer Garden moderation</h1>
          <p class="lede">
            Review new requests submitted from the website, approve the ones to publish, or add a
            note yourself. Approved notes show up on the public{' '}
            <a href="/prayer-garden" style="color:var(--terra);text-decoration:underline">
              Prayer Garden
            </a>{' '}
            page.
          </p>
        </div>

        <div class="admin-grid">
          <div class="admin-col">
            <div class="pane" style="padding:30px 28px">
              <h2 style="font-size:1.5rem">Add a note</h2>
              <p class="fine" style="margin-top:6px">
                Published immediately — no review needed.
              </p>
              <form id="adminAddForm" style="margin-top:14px">
                <div class="field">
                  <label for="aName">Name (optional)</label>
                  <input id="aName" type="text" placeholder="First name, or leave blank for Anonymous" />
                </div>
                <div class="field">
                  <label for="aMessage">Prayer note</label>
                  <textarea id="aMessage" rows={4} required placeholder="Type the prayer request or praise report..."></textarea>
                </div>
                <button class="btn btn-solid" type="submit" style="margin-top:16px;width:100%;justify-content:center">
                  Publish note
                </button>
                <p class="fine" id="adminAddStatus"></p>
              </form>
            </div>
          </div>

          <div class="admin-col admin-col-wide">
            <div class="admin-section">
              <div class="admin-section-head">
                <h2 style="font-size:1.4rem">
                  Pending review <span class="count-pill" id="pendingCount">0</span>
                </h2>
                <p class="fine">Submitted from the website. Not visible on the Prayer Garden yet.</p>
              </div>
              <div id="pendingList" class="admin-list">
                <p class="admin-empty">Loading…</p>
              </div>
            </div>

            <div class="admin-section" style="margin-top:40px">
              <div class="admin-section-head">
                <h2 style="font-size:1.4rem">
                  Published <span class="count-pill" id="approvedCount">0</span>
                </h2>
                <p class="fine">Currently live on the Prayer Garden page.</p>
              </div>
              <div id="approvedList" class="admin-list">
                <p class="admin-empty">Loading…</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template id="adminCardTemplate">
        <div class="admin-card">
          <p class="admin-card-message"></p>
          <div class="admin-card-meta">
            <span class="admin-card-who"></span>
            <span class="admin-card-when"></span>
          </div>
          <div class="admin-card-actions"></div>
        </div>
      </template>
    </section>
  )
}
