const SYMPL_DATA = {
  home: {
    proofTitle: "Trusted by nonprofit leaders who need cleaner books, not another system to manage.",
    proofLead: "A few of the organizations and leaders behind the work.",
    proofKicker: "Clients and partners",
    clients: [
      { name: "East End Arts", sector: "Arts & culture", tags: ["Grant reporting", "Monthly close"] },
      { name: "The Reading Partnership", sector: "Literacy nonprofit", tags: ["Compliance", "Board reporting"] },
      { name: "Care/Of", sector: "Community support", tags: ["Payables", "Reconciliations"] },
      { name: "Ontario nonprofits", sector: "Mission-driven teams", tags: ["Flat monthly fee", "QBO support"] }
    ],
    testimonials: [
      {
        name: "Eileen Arandiga",
        title: "Executive Director",
        company: "East End Arts",
        quote: "East End Arts has been very impressed with the thorough and responsive bookkeeping service that Sympl Solutions have provided us... The team at Sympl Solutions have expertise in the not-for-profit sector which has been an invaluable asset. I would highly recommend their service.",
        tag: "Arts client",
        photo: "images/Testimonials/eileen.webp"
      },
      {
        name: "Camesha Cox",
        title: "Executive Director",
        company: "The Reading Partnership",
        quote: "Sympl Solutions has been an invaluable partner in managing our finances accurately and efficiently. As a growing nonprofit, their expertise ensures we stay compliant and financially healthy... They are a pleasure to work with—highly responsive, engaging, and truly invested in our success!",
        tag: "Nonprofit leadership",
        photo: "images/Testimonials/camesha-cox.webp"
      },
      {
        name: "Bridge Love",
        title: "CEO",
        company: "Care/Of",
        quote: "We needed a professional, digitally enabled solution which could process our payables and receivables every month... The Sympl team has been fantastic, super professional to work with and also quite flexible whenever we need to make payments outside of our regular timelines... We would highly recommend them to other organizations and not-for-profits!",
        tag: "Operations support",
        photo: "images/Testimonials/bridge-love.webp"
      },
      {
        name: "Christina Giannelia",
        title: "Executive Director",
        company: "North York Arts",
        quote: "Natasha and the Sympl Solutions team have brought transformative systems to North York Arts, including a new CRM that integrates multiple layers of our organisation... The entire team has been nothing short of exceptional: highly communicative, collaborative and solution-oriented! I highly recommend them.",
        tag: "Arts client",
        photo: "images/Testimonials/christina.webp"
      }
    ]
  },
  arts: {
    proofTitle: "Books built for productions, seasons, and earned revenue.",
    proofLead: "Designed for theatres, galleries, festivals, and arts organizations where every funder speaks a slightly different language.",
    proofKicker: "Arts proof",
    clients: [
      { name: "East End Arts", sector: "Arts service organization", tags: ["Grant tracking", "Systems transition"] },
      { name: "Community theatres", sector: "Performing arts", tags: ["Box office", "Seasonal cash flow"] },
      { name: "Public galleries", sector: "Visual arts", tags: ["Restricted funds", "Board packs"] },
      { name: "Festivals", sector: "Culture events", tags: ["Sponsor revenue", "Project budgets"] }
    ],
    testimonials: [
      {
        name: "Eileen Arandiga",
        title: "Executive Director",
        company: "East End Arts",
        quote: "The team really knows the nonprofit world, and that's made all the difference. The transition was smooth and thorough as we moved to new systems. I'd happily recommend them.",
        tag: "Arts and culture"
      },
      {
        name: "Gallery client",
        title: "Executive Director",
        company: "Ontario gallery",
        quote: "Our grant reports finally match the way our funders ask to see the numbers. It has made board meetings and reporting deadlines feel much calmer.",
        tag: "Grant reporting"
      },
      {
        name: "Festival client",
        title: "Operations lead",
        company: "Annual festival",
        quote: "The cash flow view changed how we plan the season. We can see grant timing, payroll, and production costs in one place before decisions get expensive.",
        tag: "Seasonal cash flow"
      }
    ],
    faqs: [
      {
        q: "Can you handle artist and contractor payments?",
        a: "Yes. We classify every guest artist, performer, and casual hire correctly as T4 or T4A, apply the right union rates, and keep records ready for year-end T4A issuance, with the exact process refined to fit how your organization already works."
      },
      {
        q: "Can you reconcile ticketing, rentals, memberships, and donations?",
        a: "Yes. We map each revenue source into the books, reconcile monthly, and keep earned revenue separate where your reporting or board package needs that view."
      },
      {
        q: "Can you help with CADAC reporting?",
        a: "Yes. We keep your books structured to match CADAC's categories throughout the year, so when reporting season comes around, the numbers are ready to pull, no scrambling through spreadsheets to reverse-engineer the format."
      },
      {
        q: "Do we need to leave QuickBooks Online?",
        a: "No. Your books stay in your own QuickBooks Online account. We work inside it, clean up the structure where needed, and keep you in full visibility."
      }
    ]
  },
  settlement: {
    proofTitle: "Settlement organizations need funder-ready books before reporting season starts.",
    proofLead: "Built for IRCC contracts, salary allocations, LINC programs, employment streams, and the reporting language settlement teams live with.",
    proofKicker: "Settlement proof",
    clients: [
      { name: "Settlement agencies", sector: "Newcomer services", tags: ["IRCC reporting", "Contract tracking"] },
      { name: "Language programs", sector: "LINC and ESL", tags: ["Program budgets", "Salary allocation"] },
      { name: "Employment programs", sector: "Workforce support", tags: ["Funder reports", "Payroll splits"] },
      { name: "Community hubs", sector: "Multi-program nonprofits", tags: ["Shared costs", "Board packs"] }
    ],
    testimonials: [
      {
        name: "Settlement client",
        title: "Executive Director",
        company: "Newcomer agency",
        quote: "The biggest change is that reporting no longer starts from scratch. Each contract is already tracked, so our team can focus on explaining the work, not chasing the numbers.",
        tag: "IRCC reporting"
      },
      {
        name: "Program lead",
        title: "Director",
        company: "Language services",
        quote: "Salary allocation used to be a painful spreadsheet exercise. Now it is part of the payroll rhythm, and the backup is ready when the funder asks.",
        tag: "Salary allocation"
      },
      {
        name: "Finance committee chair",
        title: "Board finance volunteer",
        company: "Settlement nonprofit",
        quote: "The board package is finally written in a way non-accountants can understand. We can see contract risk, timing, and cash position without a translation meeting.",
        tag: "Board reporting"
      }
    ],
    faqs: [
      {
        q: "Can you support IRCC contract reporting?",
        a: "Yes. We build the books around contract budgets, claim periods, variance notes, and funder categories so reporting is prepared throughout the month, not rebuilt at deadline."
      },
      {
        q: "How do you handle staff funded by multiple contracts?",
        a: "We set up a salary allocation model based on your program delivery and apply it with each payroll run. You get an audit-ready schedule showing exactly how costs were charged."
      },
      {
        q: "Can reports match funder templates?",
        a: "Yes. We map your chart of accounts to funder categories so the same set of books can produce clean internal, board, and funder-ready views."
      },
      {
        q: "Do you work with organizations that have several programs?",
        a: "Yes. Multi-program nonprofits are where this structure helps most. We separate contracts, shared costs, payroll allocations, and reporting timelines while keeping one clean accounting file."
      }
    ]
  }
};

// Shared inquiry mailer. FormSubmit relays to the inbox below with CC + subject.
// NOTE: the first live submission triggers a one-time activation email to this
// address; submissions flow only after that link is clicked.
window.symplSendInquiry = function (subject, data) {
  var payload = Object.assign(
    {
      _subject: subject,
      _cc: "natasha@symplsolutions.com",
      _template: "table",
      _captcha: "false"
    },
    data
  );
  return fetch("https://formsubmit.co/ajax/tayyab@symplsolutions.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload)
  }).then(function (r) {
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json().then(function (j) {
      if (j && (j.success === false || j.success === "false")) {
        throw new Error(j.message || "Send failed");
      }
      return j;
    });
  });
};

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

function faceMarkup(item, className) {
  if (item.photo) {
    return `<span class="${className}"><img src="${item.photo}" alt="${item.name}"></span>`;
  }
  return `<span class="${className}" aria-hidden="true">${initials(item.name)}</span>`;
}

const NAV_CURRENT = {
  bookkeeping: { group: "services", item: "sympl-bookkeeping" },
  payroll: { group: "services", item: "sympl-payroll" },
  "cfo-advisory": { group: "services", item: "sympl-cfo-advisory" },
  arts: { group: "serve", item: "sympl-arts" },
  settlement: { group: "serve", item: "sympl-settlement" },
  nonprofit: { group: "serve", item: "sympl-nonprofit" },
  clients: { group: "company", item: "sympl-clients-partners" },
  about: { group: "company", item: "sympl-about" },
  blog: { group: "company", item: "sympl-blog" },
  contact: { cta: "contact" },
  quote: { cta: "quote" }
};

class SymplNav extends HTMLElement {
  connectedCallback() {
    const current = NAV_CURRENT[this.getAttribute("current")] || {};
    const cur = (name) => (current.item === name || current.group === name ? ' aria-current="page"' : "");
    const ctaCur = (name) => (current.cta === name ? ' aria-current="page"' : "");
    this.innerHTML = `
      <header class="nav">
        <div class="nav-inner">
          <a href="/" class="wordmark" aria-label="sympl finance home">
            <img src="Dark.svg" alt="Sympl Finance" style="height:44px;width:auto;display:block;">
          </a>
          <nav class="nav-links" aria-label="Main">
            <div class="nav-item">
              <a href="/#services"${cur("services")}>Services <span class="caret">▾</span></a>
              <div class="dropdown">
                <a href="sympl-bookkeeping"${cur("sympl-bookkeeping")}>Bookkeeping<small>Monthly books, reconciliations, cleanup</small></a>
                <a href="sympl-payroll"${cur("sympl-payroll")}>Payroll<small>Payroll, allocations, remittances</small></a>
                <a href="sympl-cfo-advisory"${cur("sympl-cfo-advisory")}>CFO &amp; Advisory<small>Budgets, forecasts, finance decisions</small></a>
              </div>
            </div>
            <div class="nav-item">
              <a href="/#serve"${cur("serve")}>Who We Serve <span class="caret">▾</span></a>
              <div class="dropdown">
                <a href="sympl-arts"${cur("sympl-arts")}>Arts &amp; Culture<small>Theatres, galleries, festivals</small></a>
                <a href="sympl-settlement"${cur("sympl-settlement")}>Immigration &amp; Settlement<small>Settlement and newcomer agencies</small></a>
                <a href="sympl-nonprofit"${cur("sympl-nonprofit")}>Other Nonprofits<small>Housing, health, youth &amp; more</small></a>
              </div>
            </div>
            <div class="nav-item">
              <a href="sympl-about"${cur("company")}>Company <span class="caret">▾</span></a>
              <div class="dropdown">
                <a href="sympl-about"${cur("sympl-about")}>About Us<small>Our team and story</small></a>
                <a href="sympl-blog"${cur("sympl-blog")}>Blog<small>Insights and updates</small></a>
                <a href="sympl-clients-partners"${cur("sympl-clients-partners")}>Clients &amp; Partners<small>Who we work with</small></a>
              </div>
            </div>
            <a href="sympl-contact" class="btn btn-yolk nav-cta"${ctaCur("contact")}>Book a Free Review</a>
            <a href="sympl-quote" class="btn btn-ghost nav-cta"${ctaCur("quote")}>Get a quote</a>
            <a href="https://portal.symplfinance.com" class="btn btn-primary nav-cta">Client Portal</a>
          </nav>
          <a href="sympl-contact" class="btn btn-yolk nav-burger" style="padding:10px 16px;font-size:13px;">Book a review</a>
        </div>
      </header>
    `;
  }
}

class SymplProof extends HTMLElement {
  connectedCallback() {
    const key = this.getAttribute("variant") || this.dataset.variant || "home";
    const data = SYMPL_DATA[key] || SYMPL_DATA.home;
    this.innerHTML = `
      <section class="sympl-proof" id="testimonials" aria-label="${data.proofKicker}">
        <div class="proof-wrap">
          <div class="proof-head">
            <p class="kicker">${data.proofKicker}</p>
            <h2>${data.proofTitle}</h2>
          </div>
          <div class="proof-cta">
            <p>Want to see what this would look like in your books? Start with a free, no-pressure finance review.</p>
            <div class="proof-cta-actions">
              <a href="sympl-contact" class="btn btn-dark">Book a free review →</a>
              <a href="#faq" class="btn btn-ghost">Read the FAQ</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

class SymplTestimonials extends HTMLElement {
  connectedCallback() {
    const key = this.getAttribute("variant") || this.dataset.variant || "home";
    const data = SYMPL_DATA[key] || SYMPL_DATA.home;
    this.innerHTML = `
      <section class="sympl-proof" id="testimonials" aria-label="Client testimonials">
        <div class="proof-wrap">
          <div class="proof-head">
            <p class="kicker">What our clients say</p>
            <h2>The bookkeeping partner nonprofits recommend.</h2>
          </div>
          <div class="testimonial-lab" data-testimonial-lab></div>
        </div>
      </section>
    `;
    renderTestimonials(this.querySelector("[data-testimonial-lab]"), data.testimonials);
  }
}

function renderTestimonials(root, testimonials) {
  root.innerHTML = `
    <div class="testimonial-track">
      ${testimonials.map(item => `
        <article class="testimonial-card">
          <div class="testimonial-mark" aria-hidden="true">"</div>
          <blockquote class="testimonial-quote">${item.quote}</blockquote>
          <div class="testimonial-who">
            ${faceMarkup(item, "testimonial-face")}
            <div>
              <b>${item.name}</b>
              <span>${item.title || ""}${item.company ? `, ${item.company}` : ""}</span>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="testimonial-nav">
      <button class="testimonial-arrow" type="button" data-testimonial-prev aria-label="Previous testimonial">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M11 1 L4 8 L11 15 Z"/></svg>
      </button>
      <button class="testimonial-arrow" type="button" data-testimonial-next aria-label="Next testimonial">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 1 L12 8 L5 15 Z"/></svg>
      </button>
    </div>
  `;

  const track = root.querySelector(".testimonial-track");
  const cards = [...root.querySelectorAll(".testimonial-card")];
  const prev = root.querySelector("[data-testimonial-prev]");
  const next = root.querySelector("[data-testimonial-next]");
  let index = 0;

  function perView() {
    return window.innerWidth > 900 ? 2 : 1;
  }

  function maxIndex() {
    return Math.max(0, cards.length - perView());
  }

  function go(to) {
    index = Math.min(Math.max(0, to), maxIndex());
    const step = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${index * step}px)`;
    prev.disabled = index === 0;
    next.disabled = index === maxIndex();
  }

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));
  window.addEventListener("resize", () => go(index), { passive: true });
  go(0);
}

class SymplFaq extends HTMLElement {
  connectedCallback() {
    const key = this.getAttribute("variant") || this.dataset.variant || "arts";
    const data = SYMPL_DATA[key] || SYMPL_DATA.arts;
    const faqs = data.faqs || [];
    this.innerHTML = `
      <section class="sympl-faq" id="faq" aria-label="Frequently asked questions">
        <div class="faq-wrap">
          <div class="faq-head">
            <p class="kicker">FAQ</p>
            <h2>The questions that usually come up before the first review.</h2>
          </div>
          <div class="faq-list">
            ${faqs.map((faq, i) => `
              <div class="faq-item ${i === 0 ? "on" : ""}">
                <button class="faq-q" type="button" aria-expanded="${i === 0 ? "true" : "false"}">
                  <span class="faq-num">${String(i + 1).padStart(2, "0")}</span>
                  <span class="faq-title">${faq.q}</span>
                  <span class="faq-plus" aria-hidden="true"></span>
                </button>
                <div class="faq-a"><p>${faq.a}</p></div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    this.querySelectorAll(".faq-item").forEach(item => {
      const answer = item.querySelector(".faq-a");
      const button = item.querySelector(".faq-q");
      if (item.classList.contains("on")) answer.style.maxHeight = `${answer.scrollHeight}px`;
      button.addEventListener("click", () => {
        const isOpen = item.classList.toggle("on");
        button.setAttribute("aria-expanded", String(isOpen));
        answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
      });
    });
  }
}

class SymplCtaAgenda extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="cta-agenda">
        <span class="cta-agenda-chip">30 min</span>
        <p class="cta-agenda-label">What we'll cover</p>
        <div class="cta-agenda-line"><span class="ck">✓</span><span>Your chart of accounts, and whether it matches your reporting needs</span></div>
        <div class="cta-agenda-line"><span class="ck">✓</span><span>Your grant or contract tracking setup</span></div>
        <div class="cta-agenda-line"><span class="ck">✓</span><span>One risk area to fix first</span></div>
      </div>
    `;
  }
}

class SymplFinalCta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="sector-final" id="book">
        <div class="sector-final-band">
          <div class="sector-final-copy">
            <p class="kicker">Free 30-minute finance review</p>
            <h2>Let's make your finances the calm part.</h2>
            <p>A structured look at your current books, reporting pressure, and one practical risk area. You leave with something useful either way. Free, no obligation.</p>
            <div class="proof-cta-actions">
              <a href="sympl-contact" class="btn btn-yolk">Book a free review →</a>
              <a href="/#services" class="btn btn-ghost rev">See services</a>
            </div>
          </div>
          <sympl-cta-agenda></sympl-cta-agenda>
        </div>
      </section>
    `;
  }
}

class SymplFooter extends HTMLElement {
  connectedCallback() {
    const hasMagnet = this.hasAttribute("magnet");
    const magnetBlock = hasMagnet
      ? `
            <div class="sympl-footer-magnet">
              <span class="tag">Free download</span>
              <h3>The Nonprofit Finance Health Checklist</h3>
              <p>15 questions every ED and board should answer about their finances. Score yourself in 10 minutes.</p>
              <form id="magnetForm" novalidate>
                <input type="email" name="email" placeholder="you@yourorg.ca" aria-label="Email address" required>
                <button type="submit" class="btn btn-yolk">Send me the checklist</button>
              </form>
              <p class="thanks" id="magnetThanks">Thanks, the checklist is on its way to your inbox.</p>
              <p class="micro">No spam. One useful email a month, unsubscribe anytime.</p>
            </div>`
      : "";
    this.innerHTML = `
      <footer class="sympl-footer">
        <div class="sympl-footer-wrap">
          <div class="sympl-footer-grid">
            <div>
              <img src="Light.svg" alt="Sympl Finance" style="height:48px;width:auto;display:block;margin-bottom:4px;">
              <p class="tagline">Nonprofit bookkeeping, reporting, and finance leadership. Ontario-based, nonprofit-only.</p>
            </div>
            <div class="sympl-footer-col">
              <h4>Services</h4>
              <a href="sympl-bookkeeping">Bookkeeping</a>
              <a href="sympl-payroll">Payroll</a>
              <a href="sympl-cfo-advisory">CFO &amp; Advisory</a>
            </div>
            <div class="sympl-footer-col">
              <h4>Who we serve</h4>
              <a href="sympl-arts">Arts &amp; Culture</a>
              <a href="sympl-settlement">Immigration &amp; Settlement</a>
              <a href="/#serve">All nonprofits</a>
            </div>
            <div class="sympl-footer-col">
              <h4>Company</h4>
              <a href="sympl-about">About</a>
              <a href="sympl-clients-partners">Clients &amp; Partners</a>
              <a href="sympl-blog">Blog</a>
              <a href="/#tips">Finance tips</a>
              <a href="sympl-contact">Book a review</a>
              <a href="sympl-quote">Get a quote</a>
            </div>${magnetBlock}
          </div>
          <div class="sympl-footer-base">
            <span>© Sympl 2026 · Part of Sympl Solutions: Strategy · Marketing · Digital · Finance</span>
            <a href="sympl-privacy">Privacy</a>
          </div>
        </div>
      </footer>
    `;
    if (hasMagnet) this.wireMagnetForm();
  }

  wireMagnetForm() {
    const form = this.querySelector("#magnetForm");
    const thanks = this.querySelector("#magnetThanks");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.email;
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Sending…";
      window
        .symplSendInquiry("Webform inquiry from website", {
          "Inquiry type": "Finance Health Checklist request",
          Email: input.value.trim(),
          _replyto: input.value.trim()
        })
        .then(() => {
          form.style.display = "none";
          thanks.style.display = "block";
        })
        .catch(() => {
          btn.disabled = false;
          btn.textContent = "Send me the checklist";
          input.setCustomValidity(
            "Something went wrong — please try again or email contact@symplsolutions.com"
          );
          input.reportValidity();
          input.setCustomValidity("");
        });
    });
  }
}

customElements.define("sympl-nav", SymplNav);
customElements.define("sympl-proof", SymplProof);
customElements.define("sympl-testimonials", SymplTestimonials);
customElements.define("sympl-faq", SymplFaq);
customElements.define("sympl-cta-agenda", SymplCtaAgenda);
customElements.define("sympl-final-cta", SymplFinalCta);
customElements.define("sympl-footer", SymplFooter);

document.addEventListener('DOMContentLoaded', function () {
  // ── Skip link ──
  var main = document.querySelector('main');
  if (main) {
    if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
    var skip = document.createElement('a');
    skip.href = '#';
    skip.className = 'sympl-skip-link';
    skip.textContent = 'Skip to main content';
    skip.addEventListener('click', function (e) {
      e.preventDefault();
      main.focus();
      main.scrollIntoView();
    });
    document.body.insertBefore(skip, document.body.firstChild);
  }

  // Dropdown triggers: click/tap/Enter toggles the menu (hover still works via CSS).
  var dropdownItems = [];
  document.querySelectorAll('.nav-item').forEach(function (item) {
    if (!item.querySelector('.dropdown')) return;
    dropdownItems.push(item);
    var trigger = item.querySelector('a');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      dropdownItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          var t = other.querySelector('a');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });
  function closeDropdowns() {
    dropdownItems.forEach(function (item) {
      item.classList.remove('open');
      var t = item.querySelector('a');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) closeDropdowns();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDropdowns();
  });

  // ── Mobile nav drawer ──
  var navEl = document.querySelector('sympl-nav');
  var drawerCurrent = NAV_CURRENT[navEl && navEl.getAttribute('current')] || {};
  var drawerCur = function (name) {
    return (drawerCurrent.item === name || drawerCurrent.group === name) ? ' aria-current="page"' : '';
  };
  var drawerCtaCur = function (name) {
    return drawerCurrent.cta === name ? ' aria-current="page"' : '';
  };
  var drawerHTML =
    '<div class="nav-overlay" id="navOverlay"></div>' +
    '<div class="nav-drawer" id="navDrawer" aria-hidden="true">' +
      '<div class="nav-drawer-head">' +
        '<img src="Dark.svg" alt="Sympl Finance" style="height:36px;width:auto;display:block;">' +
        '<button class="nav-drawer-close" id="navDrawerClose" aria-label="Close menu">&#x2715;</button>' +
      '</div>' +
      '<div class="nav-drawer-body">' +
        '<span class="nav-drawer-label">Services</span>' +
        '<div class="nav-drawer-sub">' +
          '<a href="sympl-bookkeeping"' + drawerCur('sympl-bookkeeping') + '>Bookkeeping</a>' +
          '<a href="sympl-payroll"' + drawerCur('sympl-payroll') + '>Payroll</a>' +
          '<a href="sympl-cfo-advisory"' + drawerCur('sympl-cfo-advisory') + '>CFO &amp; Advisory</a>' +
        '</div>' +
        '<span class="nav-drawer-label">Who We Serve</span>' +
        '<div class="nav-drawer-sub">' +
          '<a href="sympl-arts"' + drawerCur('sympl-arts') + '>Arts &amp; Culture</a>' +
          '<a href="sympl-settlement"' + drawerCur('sympl-settlement') + '>Immigration &amp; Settlement</a>' +
          '<a href="sympl-nonprofit"' + drawerCur('sympl-nonprofit') + '>Other Nonprofits</a>' +
        '</div>' +
        '<span class="nav-drawer-label">Company</span>' +
        '<div class="nav-drawer-sub">' +
          '<a href="sympl-about"' + drawerCur('sympl-about') + '>About Us</a>' +
          '<a href="sympl-blog"' + drawerCur('sympl-blog') + '>Blog</a>' +
          '<a href="sympl-clients-partners"' + drawerCur('sympl-clients-partners') + '>Clients &amp; Partners</a>' +
        '</div>' +
      '</div>' +
      '<div class="nav-drawer-ctas">' +
        '<a href="sympl-contact" class="btn btn-yolk"' + drawerCtaCur('contact') + '>Book a Free Review</a>' +
        '<a href="sympl-quote" class="btn btn-ghost"' + drawerCtaCur('quote') + '>Get a quote</a>' +
        '<a href="https://portal.symplfinance.com" class="btn btn-primary">Client Portal</a>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('beforeend', drawerHTML);

  var overlay = document.getElementById('navOverlay');
  var drawer = document.getElementById('navDrawer');
  var closeBtn = document.getElementById('navDrawerClose');

  // Inject hamburger button into nav-inner
  var navInner = document.querySelector('.nav-inner');
  var hamburger;
  if (navInner) {
    hamburger = document.createElement('button');
    hamburger.className = 'nav-hamburger';
    hamburger.setAttribute('aria-label', 'Open menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    navInner.appendChild(hamburger);
  }

  var lastFocused = null;

  function focusableInDrawer() {
    return Array.prototype.slice.call(
      drawer.querySelectorAll('a[href], button:not([disabled])')
    ).filter(function (el) { return el.offsetParent !== null; });
  }

  function trapTab(e) {
    if (e.key !== 'Tab') return;
    var focusable = focusableInDrawer();
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function openDrawer() {
    lastFocused = document.activeElement;
    overlay.classList.add('open');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
    drawer.addEventListener('keydown', trapTab);
  }

  function closeDrawer() {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    drawer.removeEventListener('keydown', trapTab);
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    } else if (hamburger) {
      hamburger.focus();
    }
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
});
