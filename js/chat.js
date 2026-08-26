/**
 * Ask us — simple on-site helper (not a third-party AI widget)
 */
(function () {
  const PHONE = '8209679146';
  const WA = 'https://wa.me/918209679146';

  const knowledge = [
    {
      keys: ['price', 'cost', 'rate', 'per plate', 'kitna', 'रेट', 'कीमत', 'plate', 'budget', 'quote'],
      reply: 'Per-plate rates in Jaipur usually depend on menu, guest count and venue setup.\n\nTypical ranges guests ask about:\n• Standard menus\n• Premium menus\n• Larger celebration menus\n\nShare guest count + date on WhatsApp for an exact quote: +91 82096 79146',
    },
    {
      keys: ['wedding', 'shaadi', 'शादी', 'marriage', 'mehendi', 'sangeet', 'reception'],
      reply: 'We cater weddings across Jaipur — indoor halls, outdoor venues and multi-function celebrations.\n\nTell us date, venue area and guest count so the team can suggest a menu and service plan.\n\nCall / WhatsApp: +91 82096 79146',
    },
    {
      keys: ['rajasthani', 'dal bati', 'baati', 'churma', 'राजस्थानी', 'दाल बाटी', 'thali', 'gatte'],
      reply: 'Rajasthani menus are a core strength — Dal Bati Churma, Gatte ki Sabzi, Ker Sangri and traditional thali-style service, with live counters when needed.',
    },
    {
      keys: ['veg', 'vegetarian', 'jain', 'onion', 'garlic', 'शाकाहारी', 'जैन'],
      reply: 'Yes — pure vegetarian catering is available, including Jain-friendly and onion/garlic-free options on request.',
    },
    {
      keys: ['corporate', 'office', 'conference', 'agm', 'कंपनी', 'कॉर्पोरेट'],
      reply: 'We handle corporate catering for conferences, office gatherings, launches and formal dinners in Jaipur.\n\nShare headcount and timing for a practical menu plan.',
    },
    {
      keys: ['book', 'booking', 'advance', 'बुक', 'when', 'kab'],
      reply: 'For peak wedding months, earlier booking helps. Smaller gatherings can often be planned with shorter notice — call to check dates.\n\n+91 82096 79146',
    },
    {
      keys: ['address', 'location', 'where', 'पता', 'लोकेशन'],
      reply: '999, Tansukh Shri Mal Ki Gali, Pano ka Dariba, Subhash Chowk, Pink City, Jaipur 302002\n\nWe cater across Jaipur and destination events in Rajasthan when logistics allow.',
    },
    {
      keys: ['hello', 'hi', 'namaste', 'नमस्ते', 'hey'],
      reply: 'Hello — this is the Shree Gajanan Caterers helper.\n\nAsk about weddings, menus, vegetarian options, outdoor setups or booking.\n\nOr call +91 82096 79146.',
    },
  ];

  const fallback =
    'Thanks for your message. For the most accurate help, share your event date, guest count and city area with the team.\n\nCall / WhatsApp: +91 82096 79146\nOr use Plan Your Event on the website.';

  function matchReply(text) {
    const q = text.toLowerCase();
    let best = null;
    let score = 0;
    knowledge.forEach((item) => {
      let s = 0;
      item.keys.forEach((k) => {
        if (q.includes(k.toLowerCase())) s += 1;
      });
      if (s > score) {
        score = s;
        best = item;
      }
    });
    return score > 0 ? best.reply : fallback;
  }

  function el(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function buildUI() {
    if (document.getElementById('gaAssist')) return;
    const root = el(`
      <div class="ga-assist" id="gaAssist">
        <button type="button" class="ga-assist-fab" id="gaAssistOpen" aria-label="Open help" aria-expanded="false" aria-controls="gaAssistPanel">Ask us</button>
        <div class="ga-assist-panel" id="gaAssistPanel" hidden aria-hidden="true">
          <header class="ga-assist-head">
            <div class="ga-assist-brand">
              <img src="images/logo-circle.png" alt="" width="36" height="36">
              <div>
                <strong>Event help</strong>
                <small>Hindi & English</small>
              </div>
            </div>
            <button type="button" class="ga-assist-close" id="gaAssistClose" aria-label="Close">×</button>
          </header>
          <div class="ga-assist-messages" id="gaAssistMessages" role="log" aria-live="polite"></div>
          <div class="ga-assist-quick" id="gaAssistQuick">
            <button type="button" data-q="Wedding catering quote">Wedding quote</button>
            <button type="button" data-q="Dal Bati Churma menu">Dal Bati</button>
            <button type="button" data-q="Pure vegetarian Jain options">Vegetarian</button>
            <button type="button" data-q="How to book catering">Booking</button>
          </div>
          <form class="ga-assist-form" id="gaAssistForm">
            <input type="text" id="gaAssistInput" placeholder="Ask about menus, dates or booking" autocomplete="off" maxlength="400">
            <button type="submit" aria-label="Send">→</button>
          </form>
          <div class="ga-assist-actions">
            <a href="tel:+91${PHONE}">Call</a>
            <a href="${WA}?text=${encodeURIComponent('Hi Shree Gajanan Caterers, I need help planning catering.')}" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </div>
    `);
    document.body.appendChild(root);

    const panel = document.getElementById('gaAssistPanel');
    const messages = document.getElementById('gaAssistMessages');
    const form = document.getElementById('gaAssistForm');
    const input = document.getElementById('gaAssistInput');
    const openBtn = document.getElementById('gaAssistOpen');
    const closeBtn = document.getElementById('gaAssistClose');

    function addMsg(text, who) {
      const bubble = el(`<div class="ga-msg ga-msg-${who}"></div>`);
      bubble.textContent = text;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    function botReply(userText) {
      addMsg(userText, 'user');
      setTimeout(() => addMsg(matchReply(userText), 'bot'), 280);
    }

    function openChat() {
      panel.hidden = false;
      panel.setAttribute('aria-hidden', 'false');
      root.classList.add('is-open');
      openBtn.classList.add('is-hidden');
      openBtn.setAttribute('aria-expanded', 'true');
      if (!messages.childElementCount) {
        addMsg('Hello — ask about weddings, menus, vegetarian options or booking. For a firm quote, Call or WhatsApp works fastest.', 'bot');
      }
      setTimeout(() => input.focus(), 40);
    }

    function closeChat(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      panel.hidden = true;
      panel.setAttribute('aria-hidden', 'true');
      root.classList.remove('is-open');
      openBtn.classList.remove('is-hidden');
      openBtn.setAttribute('aria-expanded', 'false');
    }

    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openChat();
    });
    closeBtn.addEventListener('click', closeChat);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && root.classList.contains('is-open')) closeChat();
    });
    document.addEventListener('click', (e) => {
      if (!root.classList.contains('is-open')) return;
      if (root.contains(e.target)) return;
      closeChat();
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      botReply(text);
    });
    document.getElementById('gaAssistQuick').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-q]');
      if (!btn) return;
      botReply(btn.dataset.q);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildUI);
  else buildUI();
})();
