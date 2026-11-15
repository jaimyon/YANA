// ===========================================================
// YANA admin — Prayer Garden moderation page
// ===========================================================
(function () {
  'use strict';

  var pendingList = document.getElementById('pendingList');
  var approvedList = document.getElementById('approvedList');
  var pendingCount = document.getElementById('pendingCount');
  var approvedCount = document.getElementById('approvedCount');
  var template = document.getElementById('adminCardTemplate');
  if (!pendingList || !approvedList) return;

  function timeAgo(dateStr) {
    var then = new Date(dateStr.replace(' ', 'T') + 'Z').getTime();
    var diffMs = Date.now() - then;
    var days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (isNaN(days)) return '';
    if (days <= 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return days + ' days ago';
    var weeks = Math.floor(days / 7);
    if (weeks === 1) return '1 week ago';
    return weeks + ' weeks ago';
  }

  function makeButton(label, variant, onClick) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = label;
    btn.className = 'admin-btn ' + (variant || '');
    btn.addEventListener('click', onClick);
    return btn;
  }

  function renderCard(p, mode) {
    var node = template.content.cloneNode(true);
    var card = node.querySelector('.admin-card');
    node.querySelector('.admin-card-message').textContent = '"' + p.message + '"';
    node.querySelector('.admin-card-who').textContent = '— ' + (p.name || 'Anonymous');
    node.querySelector('.admin-card-when').textContent = timeAgo(p.created_at);

    var actions = node.querySelector('.admin-card-actions');

    if (mode === 'pending') {
      actions.appendChild(
        makeButton('Approve & publish', 'admin-btn-approve', function () {
          setBusy(card, true);
          fetch('/api/admin/prayers/' + p.id + '/approve', { method: 'POST' })
            .then(function (r) { return r.json(); })
            .then(function () { load(); })
            .catch(function () { setBusy(card, false); alert('Something went wrong.'); });
        })
      );
      actions.appendChild(
        makeButton('Delete', 'admin-btn-delete', function () {
          if (!confirm('Delete this request permanently?')) return;
          setBusy(card, true);
          fetch('/api/admin/prayers/' + p.id, { method: 'DELETE' })
            .then(function (r) { return r.json(); })
            .then(function () { load(); })
            .catch(function () { setBusy(card, false); alert('Something went wrong.'); });
        })
      );
      if (!p.is_public) {
        var tag = document.createElement('span');
        tag.className = 'admin-tag';
        tag.textContent = 'Prayer team only (not for public garden)';
        card.insertBefore(tag, card.firstChild);
      }
    } else {
      actions.appendChild(
        makeButton('Unpublish', 'admin-btn-unpublish', function () {
          setBusy(card, true);
          fetch('/api/admin/prayers/' + p.id + '/unpublish', { method: 'POST' })
            .then(function (r) { return r.json(); })
            .then(function () { load(); })
            .catch(function () { setBusy(card, false); alert('Something went wrong.'); });
        })
      );
      actions.appendChild(
        makeButton('Delete', 'admin-btn-delete', function () {
          if (!confirm('Delete this note permanently?')) return;
          setBusy(card, true);
          fetch('/api/admin/prayers/' + p.id, { method: 'DELETE' })
            .then(function (r) { return r.json(); })
            .then(function () { load(); })
            .catch(function () { setBusy(card, false); alert('Something went wrong.'); });
        })
      );
    }

    return node;
  }

  function setBusy(card, busy) {
    if (!card) return;
    card.style.opacity = busy ? '.45' : '1';
    card.style.pointerEvents = busy ? 'none' : 'auto';
  }

  function load() {
    fetch('/api/admin/prayers')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var all = (data && data.prayers) || [];
        var pending = all.filter(function (p) { return p.status === 'pending'; });
        var approved = all.filter(function (p) { return p.status === 'approved'; });

        pendingCount.textContent = pending.length;
        approvedCount.textContent = approved.length;

        pendingList.innerHTML = '';
        if (pending.length === 0) {
          pendingList.innerHTML = '<p class="admin-empty">Nothing waiting on review right now.</p>';
        } else {
          pending.forEach(function (p) { pendingList.appendChild(renderCard(p, 'pending')); });
        }

        approvedList.innerHTML = '';
        if (approved.length === 0) {
          approvedList.innerHTML = '<p class="admin-empty">Nothing published yet.</p>';
        } else {
          approved.forEach(function (p) { approvedList.appendChild(renderCard(p, 'approved')); });
        }
      })
      .catch(function () {
        pendingList.innerHTML = '<p class="admin-empty">Could not load requests.</p>';
        approvedList.innerHTML = '';
      });
  }

  var addForm = document.getElementById('adminAddForm');
  if (addForm) {
    addForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var statusEl = document.getElementById('adminAddStatus');
      var submitBtn = addForm.querySelector('button[type="submit"]');
      var original = submitBtn.textContent;
      submitBtn.textContent = 'Publishing…';
      submitBtn.disabled = true;

      var payload = {
        name: document.getElementById('aName').value,
        message: document.getElementById('aMessage').value,
      };

      fetch('/api/admin/prayers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.ok) {
            addForm.reset();
            statusEl.textContent = 'Published!';
            setTimeout(function () { statusEl.textContent = ''; }, 2500);
            load();
          } else {
            statusEl.textContent = (data && data.error) || 'Something went wrong.';
          }
        })
        .catch(function () {
          statusEl.textContent = 'Something went wrong. Please try again.';
        })
        .finally(function () {
          submitBtn.textContent = original;
          submitBtn.disabled = false;
        });
    });
  }

  load();
})();
