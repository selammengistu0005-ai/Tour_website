/* ============================================================
   ETHIOPIA EXPLORE TOURS — customer-support.js
   Self-contained IIFE Customer Support Widget
   Features: FAQ buttons, live typing effect, back navigation
   Author: Ethiopia Explore Tours Dev Team
   Version: 1.0.0
   ============================================================ */

(function () {

  'use strict';

  /* ============================================================
     1. CONFIGURATION
     ============================================================ */
  const CONFIG = {
    brandName:    'Ethiopia Explore Tours',
    brandIcon:    '🦁',
    typingSpeed:  18,       /* ms per character */
    position:     'left',   /* 'left' | 'right' */
    accentColor:  '#C1440E',
    accentGrad:   'linear-gradient(135deg, #C1440E, #D4820A)',
  };


  /* ============================================================
     2. FAQ DATA
     ============================================================ */
  const FAQS = [
    {
      q: '🛂 Do I need a visa to visit Ethiopia?',
      a: 'Yes! Most nationalities require a visa. You can apply for an e-Visa online at ethiopiaevisa.gov.et before arrival, or obtain a visa on arrival at Bole International Airport in Addis Ababa. We strongly recommend applying online at least 2 weeks before your departure date to avoid any delays.'
    },
    {
      q: '📅 What is the best time to visit Ethiopia?',
      a: 'The best time to visit Ethiopia is October through March — the dry season. Weather is cool, clear, and ideal for trekking and sightseeing. January is especially spectacular with the Timkat festival in Lalibela. We advise avoiding July and August, which are the peak rainy months and can limit access to some destinations.'
    },
    {
      q: '💰 What is included in your tour packages?',
      a: 'All our tour packages include accommodation, airport transfers, a dedicated local expert guide, most meals as specified per itinerary, national park and site entry fees, and all internal transport between destinations. International flights are not included. Any optional activities or upgrades will always be communicated to you clearly in advance.'
    },
    {
      q: '❌ What is your cancellation policy?',
      a: 'Cancellations made 30 or more days before departure receive a full refund. Cancellations between 15 and 29 days before departure receive a 50% refund. Cancellations made less than 14 days before departure are non-refundable. We strongly recommend purchasing comprehensive travel insurance to protect against unexpected cancellations or emergencies.'
    },
    {
      q: '🎒 How should I prepare for my Ethiopia trip?',
      a: 'We recommend ensuring your vaccinations are up to date — particularly Yellow Fever, Hepatitis A and B, and Typhoid. Pack lightweight breathable clothing, sturdy walking shoes, high-SPF sunscreen, and quality insect repellent. For a full destination-specific preparation list, use our interactive Before-You-Go Checklist available on this page!'
    }
  ];


  /* ============================================================
     3. STYLES — injected into <head>
     ============================================================ */
  function injectStyles() {
    const style = document.createElement('style');
    style.id = 'support-widget-styles';
    style.textContent = `

      /* ── Widget Container ── */
      .support-widget {
        position: fixed;
        bottom: 1.5rem;
        ${CONFIG.position}: 1.5rem;
        z-index: 9999;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 0.75rem;
        font-family: 'Inter', sans-serif;
      }

      /* ── Toggle Button ── */
      .support-toggle {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: ${CONFIG.accentGrad};
        border: none;
        cursor: pointer;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0.25rem 1rem rgba(193,68,14,.4);
        transition: transform 180ms ease, box-shadow 180ms ease;
        flex-shrink: 0;
      }
      .support-toggle:hover {
        transform: translateY(-0.15rem);
        box-shadow: 0 0.5rem 1.5rem rgba(193,68,14,.5);
      }

      /* ── Popup Panel ── */
      .support-popup {
        width: 21rem;
        background: #FAF6EF;
        border-radius: 1.25rem;
        box-shadow: 0 0.5rem 2.5rem rgba(26,15,0,.22);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        max-height: 34rem;
        animation: supportSlideUp 220ms ease;
      }
      @keyframes supportSlideUp {
        from { opacity: 0; transform: translateY(0.75rem); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* ── Header ── */
      .support-header {
        background: ${CONFIG.accentGrad};
        color: #fff;
        padding: 0.9rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.65rem;
        flex-shrink: 0;
      }
      .support-header-icon {
        font-size: 1.6rem;
        line-height: 1;
      }
      .support-header-name {
        display: block;
        font-size: 0.88rem;
        font-weight: 700;
        line-height: 1.3;
      }
      .support-header-status {
        display: block;
        font-size: 0.7rem;
        opacity: 0.88;
      }
      .support-header-status::before {
        content: '● ';
      }

      /* ── Chat Body ── */
      .support-body {
        padding: 1rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        flex: 1;
        scroll-behavior: smooth;
      }

      /* ── Message Bubbles ── */
      .support-message {
        background: #fff;
        border-radius: 0.9rem;
        padding: 0.7rem 0.9rem;
        font-size: 0.83rem;
        color: #4A3728;
        box-shadow: 0 0.1rem 0.4rem rgba(26,15,0,.07);
        line-height: 1.65;
        max-width: 95%;
      }
      .support-message.user {
        background: #f0ede8;
        align-self: flex-end;
        text-align: right;
        border-bottom-right-radius: 0.2rem;
      }
      .support-message.agent {
        border-bottom-left-radius: 0.2rem;
      }
      .support-message.answer {
        background: #fff7f0;
        border-left: 0.2rem solid ${CONFIG.accentColor};
      }

      /* ── FAQ Buttons ── */
      .support-faqs {
        display: flex;
        flex-direction: column;
        gap: 0.38rem;
        margin-top: 0.2rem;
      }
      .support-faq-btn {
        background: #fff;
        border: 0.08rem solid #D4C4A8;
        border-radius: 0.75rem;
        padding: 0.6rem 0.85rem;
        font-size: 0.78rem;
        color: #4A3728;
        cursor: pointer;
        text-align: left;
        transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
        font-family: inherit;
        line-height: 1.4;
      }
      .support-faq-btn:hover {
        border-color: ${CONFIG.accentColor};
        background: rgba(193,68,14,.05);
        transform: translateX(0.15rem);
      }

      /* ── Back Button ── */
      .support-back-btn {
        background: none;
        border: none;
        font-size: 0.76rem;
        color: #7A6555;
        cursor: pointer;
        padding: 0.25rem 0;
        font-family: inherit;
        text-decoration: underline;
        align-self: flex-start;
        transition: color 180ms ease;
      }
      .support-back-btn:hover { color: ${CONFIG.accentColor}; }

      /* ── Typing Cursor ── */
      .support-cursor {
        display: inline-block;
        width: 0.11rem;
        height: 0.9em;
        background: ${CONFIG.accentColor};
        margin-left: 0.08rem;
        animation: supportBlink 0.7s step-end infinite;
        vertical-align: text-bottom;
      }
      @keyframes supportBlink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }

      /* ── Typing Indicator (three dots) ── */
      .support-typing {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.6rem 0.9rem;
        background: #fff;
        border-radius: 0.9rem;
        width: fit-content;
        box-shadow: 0 0.1rem 0.4rem rgba(26,15,0,.07);
      }
      .support-typing span {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: #C1440E;
        animation: supportDot 1.2s ease-in-out infinite;
      }
      .support-typing span:nth-child(2) { animation-delay: 0.2s; }
      .support-typing span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes supportDot {
        0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
        40%           { transform: scale(1);   opacity: 1;   }
      }

      /* ── Responsive ── */
      @media (max-width: 30rem) {
        .support-popup { width: calc(100vw - 3rem); }
        .support-widget { ${CONFIG.position}: 1rem; bottom: 1rem; }
      }

    `;
    document.head.appendChild(style);
  }


  /* ============================================================
     4. DOM BUILDER — creates the widget HTML
     ============================================================ */
  function buildWidget() {
    const widget = document.createElement('div');
    widget.className = 'support-widget';
    widget.id = 'supportWidget';
    widget.setAttribute('role', 'complementary');
    widget.setAttribute('aria-label', 'Customer Support');

    widget.innerHTML = `

      <!-- Popup Panel -->
      <div class="support-popup" id="supportPopup" style="display:none;" role="dialog" aria-label="Customer Support Chat">

        <!-- Header -->
        <div class="support-header">
          <span class="support-header-icon" aria-hidden="true">${CONFIG.brandIcon}</span>
          <div>
            <span class="support-header-name">${CONFIG.brandName}</span>
            <span class="support-header-status">Online — Typically replies instantly</span>
          </div>
        </div>

        <!-- Body -->
        <div class="support-body" id="supportBody" aria-live="polite">
          <!-- Messages injected dynamically -->
        </div>

      </div>

      <!-- Toggle Button -->
      <button class="support-toggle" id="supportToggle" aria-label="Open customer support chat" aria-expanded="false">
        💬
      </button>

    `;

    document.body.appendChild(widget);
  }


  /* ============================================================
     5. RENDER — FAQ question buttons
     ============================================================ */
  function renderFaqs() {
    const body = document.getElementById('supportBody');

    /* Welcome message */
    body.innerHTML = '';
    const welcome = document.createElement('div');
    welcome.className = 'support-message agent';
    welcome.innerHTML = '<p>Hi there! 👋 Welcome to Ethiopia Explore Tours. How can I help you today? Please choose a question below:</p>';
    body.appendChild(welcome);

    /* FAQ buttons container */
    const faqsDiv = document.createElement('div');
    faqsDiv.className = 'support-faqs';
    faqsDiv.id = 'supportFaqs';

    FAQS.forEach((faq, index) => {
      const btn = document.createElement('button');
      btn.className = 'support-faq-btn';
      btn.dataset.index = index;
      btn.textContent = faq.q;
      btn.addEventListener('click', () => handleFaqClick(index));
      faqsDiv.appendChild(btn);
    });

    body.appendChild(faqsDiv);
  }


  /* ============================================================
     6. HANDLE FAQ CLICK — show typing then type answer
     ============================================================ */
  function handleFaqClick(index) {
    const faq  = FAQS[index];
    const body = document.getElementById('supportBody');

    /* Replace FAQ list with user question bubble */
    const faqsDiv = document.getElementById('supportFaqs');
    const userMsg = document.createElement('div');
    userMsg.className = 'support-message user';
    userMsg.textContent = faq.q;
    faqsDiv.replaceWith(userMsg);

    /* Show typing indicator with a short delay */
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'support-typing';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typingIndicator);
    body.scrollTop = body.scrollHeight;

    /* After delay, replace typing indicator with answer bubble */
    setTimeout(() => {
      typingIndicator.remove();
      typeAnswer(faq.a, body);
    }, 900);
  }


  /* ============================================================
     7. TYPE ANSWER — letter by letter effect
     ============================================================ */
  function typeAnswer(text, body) {

    /* Answer bubble */
    const aMsg = document.createElement('div');
    aMsg.className = 'support-message answer';
    body.appendChild(aMsg);

    /* Blinking cursor */
    const cursor = document.createElement('span');
    cursor.className = 'support-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    aMsg.appendChild(cursor);

    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        aMsg.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        body.scrollTop = body.scrollHeight;
      } else {

        /* Typing complete — remove cursor */
        clearInterval(interval);
        cursor.remove();

        /* Show back button */
        const backBtn = document.createElement('button');
        backBtn.className = 'support-back-btn';
        backBtn.textContent = '← Ask another question';
        backBtn.setAttribute('aria-label', 'Go back to FAQ list');
        backBtn.addEventListener('click', renderFaqs);
        body.appendChild(backBtn);
        body.scrollTop = body.scrollHeight;
      }
    }, CONFIG.typingSpeed);
  }


  /* ============================================================
     8. TOGGLE — open / close the popup
     ============================================================ */
  function initToggle() {
    const toggle = document.getElementById('supportToggle');
    const popup  = document.getElementById('supportPopup');

    toggle.addEventListener('click', () => {
      const isOpen = popup.style.display !== 'none';

      if (isOpen) {
        popup.style.display = 'none';
        toggle.textContent  = '💬';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open customer support chat');
      } else {
        popup.style.display = 'flex';
        toggle.textContent  = '✕';
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close customer support chat');
        renderFaqs();
      }
    });
  }


  /* ============================================================
     9. INIT — boot everything when DOM is ready
     ============================================================ */
  function init() {
    injectStyles();
    buildWidget();
    initToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();