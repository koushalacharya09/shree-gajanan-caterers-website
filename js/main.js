/**
 * Shree Gajanan Caterers — site interactions
 */
const PHONE = '8209679146';
const WA_BASE = 'https://wa.me/918209679146';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initEnquireForms();
  initFaq();
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
    'I would like to plan an event.',
    '',
    `Name: ${data.name || '-'}`,
    `Phone: ${data.phone || '-'}`,
    `Event type: ${data.eventType || '-'}`,
    `Date: ${data.date || '-'}`,
    `Location: ${data.location || '-'}`,
    `Guests: ${data.guests || '-'}`,
    data.notes ? `Details: ${data.notes}` : '',
    data.source ? `Page: ${data.source}` : '',
  ].filter(Boolean);
  return lines.join('\n');
}

function initEnquireForms() {
  document.querySelectorAll('[data-enquire-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const shell = form.closest('.form-shell') || form;
      const fd = new FormData(form);
      const data = {
        name: (fd.get('name') || '').toString().trim(),
        phone: (fd.get('phone') || '').toString().trim(),
        eventType: (fd.get('eventType') || '').toString().trim(),
        date: (fd.get('date') || '').toString().trim(),
        location: (fd.get('location') || '').toString().trim(),
        guests: (fd.get('guests') || '').toString().trim(),
        notes: (fd.get('notes') || '').toString().trim(),
        source: form.dataset.source || document.title,
      };
      if (!data.name || !data.phone) return;
      const url = `${WA_BASE}?text=${encodeURIComponent(buildWaMessage(data))}`;
      shell.classList.add('is-sent');
      window.open(url, '_blank', 'noopener');
    });
  });
}

window.SGC = { PHONE, WA_BASE, buildWaMessage };
