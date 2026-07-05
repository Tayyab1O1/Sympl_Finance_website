const SYMPL_DATA = {
  home: {
    proofTitle: "Trusted by nonprofit leaders who need cleaner books, not another system to manage.",
    proofLead: "A few of the organizations and leaders behind the work. Swap in real logos and client photos as they arrive.",
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
        quote: "The team really knows the nonprofit world, and that's made all the difference. The transition was smooth and thorough as we moved to new systems. I'd happily recommend them.",
        tag: "Arts client"
      },
      {
        name: "Camesha Cox",
        title: "Executive Director",
        company: "The Reading Partnership",
        quote: "As a growing nonprofit, their expertise keeps us compliant and financially healthy. They're responsive, easy to work with, and genuinely invested in our success.",
        tag: "Nonprofit leadership"
      },
      {
        name: "Bridge Love",
        title: "CEO",
        company: "Care/Of",
        quote: "They handle our payables and reconciliations without much input from us, and send a note when the month is closed. It's one thing I just don't worry about anymore.",
        tag: "Operations support"
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
        q: "Do you help with seasonal cash flow?",
        a: "Yes. We build a rolling forecast that reflects grant disbursements, season launches, production costs, and steady payroll so you can see runway before the board asks."
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
          <div class="testimonial-lab" data-testimonial-lab></div>
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
    renderTestimonials(this.querySelector("[data-testimonial-lab]"), data.testimonials);
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
            <h2>Trusted by nonprofits who mean business.</h2>
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
            </div>
          </div>
          <div class="sympl-footer-base">
            <span>© Sympl 2026 · Part of Sympl Solutions: Strategy · Marketing · Digital · Finance</span>
            <span>Privacy</span>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("sympl-proof", SymplProof);
customElements.define("sympl-testimonials", SymplTestimonials);
customElements.define("sympl-faq", SymplFaq);
customElements.define("sympl-cta-agenda", SymplCtaAgenda);
customElements.define("sympl-final-cta", SymplFinalCta);
customElements.define("sympl-footer", SymplFooter);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-item').forEach(function (item) {
    if (!item.querySelector('.dropdown')) return;
    var trigger = item.querySelector('a');
    if (trigger) {
      trigger.addEventListener('click', function (e) { e.preventDefault(); this.blur(); });
    }
  });

  // ── Mobile nav drawer ──
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
          '<a href="sympl-bookkeeping">Bookkeeping</a>' +
          '<a href="sympl-payroll">Payroll</a>' +
          '<a href="sympl-cfo-advisory">CFO &amp; Advisory</a>' +
        '</div>' +
        '<span class="nav-drawer-label">Who We Serve</span>' +
        '<div class="nav-drawer-sub">' +
          '<a href="sympl-arts">Arts &amp; Culture</a>' +
          '<a href="sympl-settlement">Immigration &amp; Settlement</a>' +
        '</div>' +
        '<a href="sympl-clients-partners">Clients &amp; Partners</a>' +
        '<a href="sympl-about">About</a>' +
        '<a href="sympl-blog">Blog</a>' +
      '</div>' +
      '<div class="nav-drawer-ctas">' +
        '<a href="sympl-contact" class="btn btn-yolk">Book a Free Review</a>' +
        '<a href="sympl-quote" class="btn btn-ghost">Get a quote</a>' +
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

  function openDrawer() {
    overlay.classList.add('open');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });
});
