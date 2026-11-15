// ===========================================================
// YANA — shared frontend behavior
// ===========================================================
(function () {
  'use strict';

  // ---- sticky nav shading ----
  var nav = document.getElementById('siteNav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('stuck', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- reveal on scroll ----
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('in');
    });
  }

  // ---- mobile nav toggle (simple) ----
  var toggle = document.querySelector('.navtoggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  // ---- shared footer contact form: reason pills ----
  var pillsWrap = document.getElementById('reasonPills');
  var reasonInput = document.getElementById('reasonInput');
  var messageLabel = document.getElementById('messageLabel');
  var messageField = document.getElementById('cmessage');
  var prayerShareField = document.getElementById('prayerShareField');
  var connectFine = document.getElementById('connectFine');

  var REASON_COPY = {
    question: {
      label: 'Your question',
      placeholder: "What would you like to know?",
      fine: "We'll never share your info. Usually a reply within 1–2 days.",
      showShare: false,
    },
    volunteer: {
      label: 'Where would you like to serve?',
      placeholder: 'Kids ministry, hospitality, worship team, outreach... or tell us what you love doing!',
      fine: "Our volunteer coordinator will reach out to match you with a team.",
      showShare: false,
    },
    give: {
      label: 'Anything we should know?',
      placeholder: "Questions about giving, or just let us know you're interested.",
      fine: "We'll send you simple, secure ways to give — online, in person, or by mail.",
      showShare: false,
    },
    prayer: {
      label: 'How can we pray for you?',
      placeholder: "Share as much or as little as you'd like. Our prayer team reads every request.",
      fine: 'Demo form — connect to your provider before launch.',
      showShare: true,
    },
    updates: {
      label: 'Anything else? (optional)',
      placeholder: "We'll add you to our weekly note — no spam, ever.",
      fine: "One email a week, max. Unsubscribe anytime.",
      showShare: false,
    },
  };

  function setReason(reason) {
    if (!REASON_COPY[reason]) return;
    reasonInput.value = reason;
    if (pillsWrap) {
      Array.prototype.forEach.call(pillsWrap.children, function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-reason') === reason);
      });
    }
    var copy = REASON_COPY[reason];
    if (messageLabel) messageLabel.textContent = copy.label;
    if (messageField) messageField.setAttribute('placeholder', copy.placeholder);
    if (connectFine) connectFine.textContent = copy.fine;
    if (prayerShareField) prayerShareField.style.display = copy.showShare ? 'block' : 'none';
  }

  if (pillsWrap) {
    pillsWrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.reason-pill');
      if (!btn) return;
      setReason(btn.getAttribute('data-reason'));
    });
  }

  // allow deep-linking e.g. /#connect?reason=volunteer or data attribute triggers
  document.querySelectorAll('[data-set-reason]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var reason = el.getAttribute('data-set-reason');
      setReason(reason);
    });
  });

  // ---- shared footer contact form submit ----
  var connectForm = document.getElementById('connectForm');
  if (connectForm) {
    connectForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = document.getElementById('connectSubmit');
      var original = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      var payload = {
        name: document.getElementById('cname').value,
        email: document.getElementById('cemail').value,
        reason: reasonInput.value,
        message: messageField.value,
        share_on_wall:
          reasonInput.value === 'prayer' &&
          document.getElementById('shareOnWall') &&
          document.getElementById('shareOnWall').checked,
      };

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; });
        })
        .then(function () {
          connectForm.style.display = 'none';
          document.getElementById('formSuccess').classList.add('show');
        })
        .catch(function () {
          connectForm.style.display = 'none';
          document.getElementById('formSuccess').classList.add('show');
        })
        .finally(function () {
          submitBtn.textContent = original;
          submitBtn.disabled = false;
        });
    });
  }

  // ---- prayer garden: add request modal/form (on prayer-garden page) ----
  var prayerForm = document.getElementById('prayerGardenForm');
  if (prayerForm) {
    prayerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = prayerForm.querySelector('button[type="submit"]');
      var original = submitBtn.textContent;
      submitBtn.textContent = 'Sharing…';
      submitBtn.disabled = true;

      var payload = {
        name: document.getElementById('pwName').value || 'Anonymous',
        message: document.getElementById('pwMessage').value,
        is_public: document.getElementById('pwPublic') ? document.getElementById('pwPublic').checked : true,
      };

      fetch('/api/prayer-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          var statusEl = document.getElementById('pwStatus');
          if (data && data.ok) {
            prayerForm.reset();
            if (statusEl) {
              statusEl.textContent = 'Thank you — your request was sent to our prayer team and will appear here once approved.';
              statusEl.style.display = 'block';
            }
          } else {
            alert('Something went wrong. Please try again.');
          }
        })
        .catch(function () {
          alert('Something went wrong. Please try again.');
        })
        .finally(function () {
          submitBtn.textContent = original;
          submitBtn.disabled = false;
        });
    });
  }

  // ---- about page: leadership tabs (Founder / Board of Directors) ----
  var leaderTabs = document.getElementById('leaderTabs');
  if (leaderTabs) {
    var tabButtons = leaderTabs.querySelectorAll('.leader-tab');
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');

        tabButtons.forEach(function (b) {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });

        document.querySelectorAll('.leader-panel').forEach(function (panel) {
          var isMatch = panel.id === 'leader-' + target;
          panel.style.display = isMatch ? '' : 'none';
          panel.classList.toggle('active', isMatch);
        });
      });
    });
  }
})();
