/**
 * Shree Gajanan Caterers — site interactions
 * Leads: WhatsApp handoff + optional Formspree email notify
 */
const PHONE = '8209679146';
const WA_BASE = 'https://wa.me/918209679146';
/** Replace with your Formspree form ID after signup: https://formspree.io */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initEnquireForms();
  initQuickQuote();
  initFaq();
  initGalleryFilters();
});

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => links.classList.remove('is-open'));
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

function initFaq() {
  document.querySelectorAll('.faq-item[open]').forEach((el, i) => {
    if (i > 0) el.removeAttribute('open');
  });
}

function buildWaMessage(data) {
  const lines = [
    'Hello Shree Gajanan Caterers,',
    'I would like a catering quote.',
    '',
    `Name: ${data.name || '-'}`,
    `Phone: ${data.phone || '-'}`,
    `Event type: ${data.eventType || '-'}`,
    `Date: ${data.date || '-'}`,
    `Venue / location: ${data.location || '-'}`,
    `Guests: ${data.guests || '-'}`,
    `Requirement: ${data.requirement || '-'}`,
    `Budget: ${data.budget || '-'}`,
    data.notes ? `Message: ${data.notes}` : '',
    data.source ? `Page: ${data.source}` : '',
  ].filter(Boolean);
  return lines.join('\n');
}

function postToFormspree(data) {
  if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes('REPLACE_ME')) {
    return Promise.resolve({ skipped: true });
  }
  const body = {
    name: data.name,
    phone: data.phone,
    eventType: data.eventType,
    date: data.date,
    location: data.location,
    guests: data.guests,
    requirement: data.requirement,
    budget: data.budget,
    message: data.notes,
    source: data.source,
    _subject: `Catering enquiry — ${data.name || 'Website'}`,
  };
  return fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).catch(() => null);
}

function initEnquireForms() {
  document.querySelectorAll('[data-enquire-form]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const shell = form.closest('.form-shell') || form;
      const btn = form.querySelector('[type="submit"]');
      const fd = new FormData(form);
      const data = {
        name: (fd.get('name') || '').toString().trim(),
        phone: (fd.get('phone') || '').toString().trim(),
        eventType: (fd.get('eventType') || '').toString().trim(),
        date: (fd.get('date') || '').toString().trim(),
        location: (fd.get('location') || '').toString().trim(),
        guests: (fd.get('guests') || '').toString().trim(),
        requirement: (fd.get('requirement') || '').toString().trim(),
        budget: (fd.get('budget') || '').toString().trim(),
        notes: (fd.get('notes') || '').toString().trim(),
        source: form.dataset.source || document.title,
      };
      if (!data.name || !data.phone) return;
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
      await postToFormspree(data);
      const url = `${WA_BASE}?text=${encodeURIComponent(buildWaMessage(data))}`;
      shell.classList.add('is-sent');
      window.open(url, '_blank', 'noopener');
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Submit via WhatsApp';
      }
    });
  });
}

function initQuickQuote() {
  const form = document.getElementById('quickQuote');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const date = (fd.get('date') || '').toString().trim();
    const guests = (fd.get('guests') || '').toString().trim();
    const eventType = (fd.get('eventType') || 'Wedding').toString().trim();
    const params = new URLSearchParams();
    if (date) params.set('date', date);
    if (guests) params.set('guests', guests);
    if (eventType) params.set('eventType', eventType);
    const qs = params.toString();
    window.location.href = qs ? `enquire.html?${qs}` : 'enquire.html';
  });
}

function prefillEnquireFromQuery() {
  const form = document.querySelector('[data-enquire-form]');
  if (!form) return;
  const q = new URLSearchParams(window.location.search);
  ['date', 'guests', 'eventType', 'location', 'name', 'phone'].forEach((key) => {
    const val = q.get(key);
    const el = form.elements.namedItem(key);
    if (val && el && 'value' in el) el.value = val;
  });
}

document.addEventListener('DOMContentLoaded', prefillEnquireFromQuery);

function initGalleryFilters() {
  const filters = document.getElementById('galleryFilters');
  const grid = document.getElementById('galleryGrid');
  if (!filters || !grid) return;
  const figures = [...grid.querySelectorAll('figure')];
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    filters.querySelectorAll('button').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const key = btn.dataset.filter;
    figures.forEach((fig) => {
      const cats = (fig.dataset.cat || '').split(/\s+/);
      const show = key === 'all' || cats.includes(key);
      fig.hidden = !show;
    });
  });
}

window.SGC = { PHONE, WA_BASE, FORMSPREE_ENDPOINT, buildWaMessage };
