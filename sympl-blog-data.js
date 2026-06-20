/* Sympl Blog Data - all 18 posts
   Templates: A = full-width hero | B = split hero | C = article + sidebar
              D = checklist/step guide | E = case study
*/
const SYMPL_BLOG_DATA = [

  /* ─── 01 ─── */
  {
    id: 't3010-filing-checklist',
    title: 'The T3010 Filing Checklist Every Ontario Nonprofit Needs Before March 31',
    excerpt: 'Filing your charity\'s annual information return doesn\'t have to be a scramble. We break down every section of the T3010, flag the fields that most often contain errors, and explain what your board needs to review and sign off on before submission.',
    category: 'Grant Reporting',
    catClass: 'cat-grant',
    date: 'June 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Reviewing T3010 filing documents',
    template: 'A',
    body: `
      <h2>Why the T3010 Matters More Than You Think</h2>
      <p>The T3010 Registered Charity Information Return is not just a regulatory checkbox. It is a public document. Anyone can pull your charity's filing from the CRA website, and funders increasingly do exactly that before deciding whether to shortlist your grant application. A sloppy return - or worse, a late one - signals financial disorganisation at a moment when you most need to project competence.</p>
      <p>The deadline is six months after your fiscal year-end. For most Ontario charities running a December 31 year-end, that means June 30. But the work needs to begin by March at the latest if you want your ED and board chair to sign off with confidence rather than relief.</p>

      <h2>Section-by-Section: Where Errors Hide</h2>
      <p><strong>Part 1 - Identification.</strong> This is where charities most often enter an outdated address, list a departed board member as contact, or use last year's legal name after a rebranding. Check it fresh each year.</p>
      <p><strong>Part 2 - Directors and trustees.</strong> Every director who served during the fiscal year must appear here, including those who resigned mid-year. Missing a name is an easy audit flag that takes five minutes to avoid.</p>
      <p><strong>Part 3 - Programs and activities.</strong> The narrative description of your charitable activities needs to match what you actually did - not what last year's return said, and not a copy-pasted boilerplate. CRA uses this section to assess whether your activities align with your charitable purpose.</p>
      <p><strong>Part 4 - Financial information.</strong> This is where the numbers from your audited or reviewed financial statements must reconcile precisely. The most common mismatch we see: revenue on the T3010 does not tie to the Statement of Operations because someone used an unaudited draft. Always file from the final, signed financials.</p>
      <blockquote>"The most expensive T3010 mistake isn't a wrong number - it's a number that can't be traced back to a source document."</blockquote>
      <p><strong>Part 5 - Gifts to qualified donees.</strong> If you flowed funds to another registered charity or a university, every transfer must be documented here with the recipient's BN and the amount. Missing entries here are a leading cause of CRA follow-up letters.</p>

      <h2>The Board Sign-Off Protocol</h2>
      <p>Many charities treat the T3010 as a finance-team task and present it to the board chair for signature without a review. That works until it doesn't. Our recommendation is to table the draft return at a board meeting at least three weeks before filing, with a one-page cover memo that highlights any year-over-year changes in revenue, expenses, or programs.</p>
      <p>Board members are jointly liable for a charity's compliance. A brief review builds accountability - and it gives the board chair a chance to ask questions before signing rather than after an inquiry letter arrives.</p>

      <h2>The Pre-Filing Checklist</h2>
      <ul>
        <li>Final, signed financial statements in hand (not a draft)</li>
        <li>Year-over-year revenue and expense summary prepared for board review</li>
        <li>Complete list of directors who served during the year, with dates</li>
        <li>All gifts to qualified donees listed with recipient BN numbers</li>
        <li>Narrative program descriptions updated to reflect actual activities</li>
        <li>Legal name, address, and contact information verified current</li>
        <li>Prior year's T3010 pulled for comparison - flag any large variances</li>
        <li>Board chair signature obtained on final, not draft, version</li>
        <li>CRA's My Business Account login credentials confirmed working</li>
        <li>Filing confirmation saved to your compliance folder</li>
      </ul>

      <h2>What Happens If You Miss the Deadline</h2>
      <p>CRA can revoke charitable status for persistent late filing - and revocation is public. Once revoked, your charity loses the ability to issue tax receipts, which can trigger a cascade of funder and donor relationship problems that can take years to repair. A first-time late filing typically results in a letter and a warning rather than immediate revocation, but the administrative cost of responding to that letter is itself a strong argument for getting organised early.</p>
      <p>If you are running late and know it, the correct move is to file an incomplete return by the deadline and amend it - not to wait for the complete version. CRA's own guidance confirms that a late complete filing is treated more harshly than an on-time incomplete one followed by a timely amendment.</p>
    `
  },

  /* ─── 02 ─── */
  {
    id: 'grant-tracking-ledger',
    title: 'Why Nonprofits Need a Separate Grant Tracking Ledger',
    excerpt: 'Mixing restricted and unrestricted funds is the most common bookkeeping mistake we see. Here\'s how to set up your chart of accounts correctly from day one.',
    category: 'Bookkeeping',
    catClass: 'cat-book',
    date: 'May 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Financial spreadsheet on laptop',
    template: 'C',
    body: `
      <h2>The Problem With a Single Revenue Account</h2>
      <p>When you post all incoming funds - operating donations, government grants, fee-for-service income, and project-specific restricted grants - into a single "Revenue" account, your books become useless the moment you need to produce a funder report. You end up with a spreadsheet that lives outside your accounting software, maintained in parallel, and almost always slightly out of sync with your books. That is the setup that causes year-end panic.</p>
      <p>The root issue is that funders care about how their money specifically was spent. They are not interested in your total operating picture. A restricted grant from the Ontario Trillium Foundation for a youth mentorship program must be tracked separately from your United Way allocation and your earned revenue from workshops - not just for reporting, but because spending one funder's money on another funder's activities is a compliance violation.</p>

      <h2>How to Structure a Grant Tracking Ledger</h2>
      <p>In QuickBooks Online, the cleanest approach is to use Classes (sometimes called Projects, depending on your QBO version) to tag every transaction to its funding source. Your chart of accounts stays clean and standardised, while the Class layer lets you pull a Profit & Loss by Class at any time - which is essentially a funder-ready financial report.</p>
      <p>Set up one Class per active grant or contract. Name them consistently: Funder Name + Grant Year (e.g., "OAC Project Grant 2025"). When your bookkeeper posts a salary expense that is split across two grants, they split the transaction and tag each portion to the correct class. When you need to report to OAC, you run the P&L filtered to "OAC Project Grant 2025" and the numbers are there, already reconciled.</p>
      <blockquote>"A grant tracking ledger isn't extra admin. It's the insurance policy that makes year-end reporting a one-hour task instead of a two-week reconstruction project."</blockquote>

      <h2>The Chart of Accounts Side of the Equation</h2>
      <p>Classes solve the revenue-and-expense tracking problem. The chart of accounts needs to handle a separate but related issue: distinguishing between restricted and unrestricted net assets on your balance sheet. CPA Canada's recommended presentation for nonprofits includes separate fund balances for restricted and unrestricted amounts - your auditor will expect to see this, and your board needs to understand it to make sound decisions about reserves and deficit spending.</p>
      <p>Map your revenue accounts to reflect the nature of the income, not the funder. Government grants, foundation grants, corporate sponsorships, individual donations, earned revenue - each deserves its own account. This lets you see your revenue diversification at a glance, which matters both for strategic planning and for grant applications that ask how your organisation is funded.</p>

      <h2>Setting It Up in QBO: The Key Steps</h2>
      <ul>
        <li>Enable Classes (or Projects) in QBO settings under Advanced</li>
        <li>Create one class per active grant, contract, and general operating fund</li>
        <li>Set up a revenue account for each funding type (not each funder)</li>
        <li>Create expense accounts that mirror your typical budget line items</li>
        <li>Train your bookkeeper to tag every transaction to a class at entry time</li>
        <li>Run a P&L by Class monthly to catch any untagged transactions</li>
        <li>Archive classes when grants close - do not delete them</li>
      </ul>
    `
  },

  /* ─── 03 ─── */
  {
    id: 'payroll-remittance-deadlines',
    title: 'CRA Payroll Remittance Deadlines for Small Nonprofits',
    excerpt: 'Missing a remittance deadline triggers an automatic penalty. We map out every due date and show you how to set up alerts so it never happens again.',
    category: 'Payroll',
    catClass: 'cat-payroll',
    date: 'May 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Calculator and payroll documents',
    template: 'D',
    body: `
      <h2>Why Remittance Deadlines Are Different From Other CRA Obligations</h2>
      <p>Income tax, CPP, and EI deductions belong to your employees and the government - you are holding them in trust the moment you run payroll. CRA treats late remittance harshly for exactly this reason. The penalty for a first-time late payment of less than three days is 3% of the amount owing. Miss by more than three days and you are looking at 5% to 10%. A repeat offence can reach 20%. Unlike most business penalties, these are not tied to the size of your mistake - they are triggered the moment the deadline passes.</p>

      <div class="step-block">
        <div class="step-number">Step 1</div>
        <h3>Know Your Remitter Category</h3>
        <p>CRA classifies payroll accounts into three remitter types based on your average monthly withholding amount (AMWA) from two calendar years ago. Most small nonprofits are regular remitters, which means payment is due by the 15th of the month following the payroll period. New employers default to regular remitter status for the first year.</p>
        <p>If your AMWA is under $3,000 and you have a perfect compliance history, you may qualify as a quarterly remitter - payments due on April 15, July 15, October 15, and January 15. CRA must notify you that you qualify; do not assume.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Step 2</div>
        <h3>Mark Every Due Date in Your Calendar Now</h3>
        <p>For regular remitters on a monthly payroll cycle, the due dates for 2025 are: January 15, February 14 (the 15th falls on Saturday), March 17 (15th is Saturday), April 15, May 15, June 16 (15th is Sunday), July 15, August 15, September 15, October 15, November 17 (15th is Saturday), December 15. When the 15th falls on a weekend or holiday, the deadline shifts to the next business day.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Step 3</div>
        <h3>Set Up Three-Layer Alerts</h3>
        <p>Manual calendar entries are not enough. Our recommended protocol is a three-layer alert system: a payroll software reminder two business days before each remittance due date; a calendar block on the first business day of the remittance period for the finance lead to confirm the remittance amount; and a separate alert to the executive director if the remittance is not confirmed as filed by noon on the business day before it is due.</p>
        <p>The third layer exists because payroll runs, sick days, and competing deadlines happen. The ED's alert is not a lack of trust - it is the same logic as a dual-control policy for bank transfers.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Step 4</div>
        <h3>Remit Even If the Amount Is Uncertain</h3>
        <p>If you run payroll but are unsure of the exact deduction amounts, remit your best estimate and correct it later. An underremittance is a much smaller problem than a late remittance. CRA charges interest on underpayments from the due date, but the penalty structure is applied only to late filings - not to corrections or adjustments submitted after the fact.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Step 5</div>
        <h3>Reconcile Your Payroll Account Quarterly</h3>
        <p>Log in to My Business Account at least quarterly to pull your payroll account summary. Confirm that every remittance you believe you made is reflected in CRA's records. Occasionally - not often, but occasionally - electronic payments are applied to the wrong account period. Catching a posting error three months later is manageable. Catching it at year-end when you are preparing T4s is not.</p>
      </div>
    `
  },

  /* ─── 04 ─── */
  {
    id: 'toronto-theatre-case-study',
    title: 'How a Toronto Theatre Company Reclaimed 12 Hours a Month',
    excerpt: 'A case study on moving from spreadsheet-based bookkeeping to a real-time dashboard - and what the artistic director did with all that freed-up time.',
    category: 'Arts & Culture',
    catClass: 'cat-arts',
    date: 'April 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Arts organization team collaborating',
    template: 'E',
    stats: [
      { value: '12 hrs', label: 'Saved per month' },
      { value: '3 grants', label: 'Tracked simultaneously' },
      { value: '1 week', label: 'Faster board reporting' }
    ],
    body: `
      <h2 class="cs-section-label">The Challenge</h2>
      <p>When we started working with this mid-sized Toronto theatre company in early 2024, their artistic director was spending nearly three hours each week reconciling spreadsheets before their monthly board meetings. Their bookkeeping lived in a shared Google Sheet that one staff member maintained, their grant reporting was reconstructed manually at each reporting period, and their year-end process regularly took four to six weeks.</p>
      <p>They were running three active grants concurrently - from the Ontario Arts Council, the Toronto Arts Council, and a federal heritage program - each with different fiscal year periods and different eligible expense categories. Keeping them straight required a system of colour-coded spreadsheet tabs that only one person fully understood.</p>
      <p>The organisation wasn't in financial trouble. Their books were broadly accurate. But the finance function was consuming time that the artistic director needed for programming, fundraising, and the capital campaign they had been trying to launch for two years.</p>

      <h2 class="cs-section-label">The Solution</h2>
      <p>Sympl migrated the organisation's books from the spreadsheet system to QuickBooks Online, configuring Classes for each active grant and setting up a chart of accounts aligned with their typical budget structure and funder reporting templates. We standardised the payroll entries, connected their bank accounts for automated transaction import, and built three custom P&L report templates - one for each active funder - that could be exported with a single click.</p>
      <p>The board package was redesigned from scratch. Instead of a 22-page spreadsheet dump, the finance committee now receives a four-page summary: a one-page cash position overview, one page of actuals vs. budget for the current year, one page showing grant balances and forecast, and one page of the next 90-day cash flow projection. The entire package is generated in under 45 minutes from the close of the month.</p>
      <p>We also implemented a simple month-end close checklist - nine items, each with a named owner and a due date - that replaced the ad-hoc scramble that had preceded every board meeting. The artistic director reviews the completed checklist and signs off rather than preparing the reports herself.</p>

      <h2 class="cs-section-label">The Result</h2>
      <p>Within 60 days of going live, the organisation's monthly finance workload dropped from approximately 12 hours of the artistic director's time to under 90 minutes. Grant reporting periods - previously a two-week exercise involving reconstructed transaction exports - were reduced to an afternoon.</p>
      <p>The capital campaign that had been stalled for two years launched five months after the engagement began, with the artistic director crediting the cleared schedule as the enabling factor. At the end of 2024, the organisation's year-end close - from the last transaction to the signed financial statements - took nine days, down from their previous average of 31.</p>
      <blockquote>"I used to dread the week before every board meeting. Now I spend that week on the work I actually came here to do."</blockquote>
      <p>The organisation continues as a Sympl client. Their finance committee chair noted in a year-end review letter that the quality and clarity of financial reporting had "materially improved the board's ability to make strategic decisions" - a sentence that, for us, captures exactly what clean books are for.</p>
    `
  },

  /* ─── 05 ─── */
  {
    id: 'three-year-budget-planning',
    title: 'Building a 3-Year Budget When Your Funding Is Annual',
    excerpt: 'Multi-year strategic planning is hard when funders only commit one year at a time. Here\'s the scenario-based model we use with settlement agency clients.',
    category: 'CFO & Strategy',
    catClass: 'cat-cfo',
    date: 'April 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Financial charts and strategy planning',
    template: 'C',
    body: `
      <h2>The Paradox of Annual Funding</h2>
      <p>Most Ontario nonprofits are asked by their boards to produce a strategic plan that looks three to five years out. Most are funded through annual grants and contracts that are renewed - sometimes confirmed - only months before the year they cover. These two facts sit in direct tension with each other, and the organisations that navigate it best have a specific approach to budgeting that we want to share here.</p>
      <p>The answer is not to pretend you have multi-year certainty you don't have. It is to build a budget model that explicitly names its assumptions, separates what is known from what is probable from what is aspirational, and can be updated quickly when reality diverges from the plan.</p>

      <h2>The Three-Scenario Framework</h2>
      <p>We build three-year projections for our CFO advisory clients using a scenario structure: Base, Stretch, and Stress. Each scenario has its own revenue and expense assumptions, stated explicitly at the top of the model.</p>
      <p><strong>Base:</strong> Existing funding sources renewed at current levels. No new revenue. Expense growth at 3% annually for inflation. This is your floor. If the base scenario shows a deficit, you have a structural problem that needs immediate board attention.</p>
      <p><strong>Stretch:</strong> Existing funding renewed, plus one new revenue stream per year (typically a new grant or a modest increase in earned revenue) modelled at 60% of the stated target. This is your target scenario - achievable but not guaranteed.</p>
      <p><strong>Stress:</strong> One major funding source not renewed in Year 2. How long can the organisation sustain operations from reserves? What is the earliest point at which program cuts would be required? This is not pessimism; it is governance. Your board needs to know the answer before the situation occurs, not during it.</p>
      <blockquote>"A three-year budget isn't a forecast. It's a risk map with numbers attached."</blockquote>

      <h2>The Assumptions Register</h2>
      <p>The most important tab in any multi-year model is the one nobody reads in normal times: the assumptions register. Every number in your model flows from an assumption somewhere. When a funder renews at a reduced level, you should be able to update a single cell and have the entire model recalculate. When a new program requires a new staff position, the salary, benefits, and overhead allocation should flow automatically from a parameters table, not from a scattered series of hard-coded numbers.</p>
      <p>Building the model this way takes longer initially. It saves significant time every subsequent year, and it makes scenario analysis a 15-minute exercise rather than a full rebuild.</p>

      <h2>What to Present to Your Board</h2>
      <p>Present all three scenarios side-by-side in a single table. For each scenario, show: total revenue, total expenses, net surplus or deficit, and projected reserve balance at year-end. The board does not need to see the full model - they need to understand the range of outcomes and what triggers movement between scenarios.</p>
      <ul>
        <li>Year 1 detailed budget, reviewed and approved line-by-line</li>
        <li>Years 2–3 summary by revenue category and expense category</li>
        <li>The assumption that has the highest dollar impact if it changes</li>
        <li>The minimum reserve balance the board has agreed to maintain</li>
        <li>At what point in the Stress scenario management would recommend a board conversation</li>
      </ul>
    `
  },

  /* ─── 06 ─── */
  {
    id: 'oac-financial-report',
    title: 'What OAC Reviewers Look For in a Financial Report',
    excerpt: 'What raises flags during an Ontario Arts Council grant review - and how clean bookkeeping is your first line of defence against a follow-up call.',
    category: 'Grant Reporting',
    catClass: 'cat-grant',
    date: 'March 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Board meeting and grant review',
    template: 'B',
    body: `
      <h2>The Financial Report Is Not an Afterthought</h2>
      <p>Ontario Arts Council grant applications require a financial report at the close of each project or fiscal year. Many arts organisations treat this as a back-end administrative task - something to complete quickly and submit once the artistic work is done. OAC reviewers notice this. A financial report that was clearly assembled in a hurry, with line items that don't reconcile to the approved budget and narrative that doesn't explain the variances, raises questions that a reviewer will either flag for follow-up or weigh negatively in renewal assessments.</p>
      <p>The good news is that a strong financial report is not difficult to produce if your books are properly structured throughout the grant period. It is almost impossible to produce on short notice if they are not.</p>

      <h2>What Reviewers Actually Examine</h2>
      <p><strong>Budget vs. actuals reconciliation.</strong> Every line in your approved project budget should appear in your financial report actuals. If you moved money between budget lines during the project - which is permitted up to certain thresholds - the variance column must be accompanied by a brief explanation. Reviewers are not looking for perfection; they are looking for organisations that understand their own finances and can account for what happened.</p>
      <p><strong>Revenue reconciliation.</strong> The total revenue shown in your financial report must account for all project income, including the OAC grant itself, any co-funders, earned revenue, and in-kind contributions if they were included in the approved budget. A revenue total that doesn't match the approved project budget without explanation will prompt a query.</p>
      <p><strong>Overhead and administration costs.</strong> OAC programs have varying policies on eligible overhead percentages. Know the cap for your specific program and ensure your actual overhead claim does not exceed it. An overclaim is not assumed to be intentional, but correcting it requires back-and-forth correspondence that delays processing.</p>
      <blockquote>"Every variance over 10% of a budget line deserves a sentence of explanation. Every variance over 20% deserves a paragraph."</blockquote>

      <h2>The Documentation Principle</h2>
      <p>OAC does not require backup documentation with financial reports in most programs - but you should have it ready. Reviewer follow-ups happen. An audit or compliance review can occur months after submission. The standard you should hold yourself to is: for every number in your financial report, there is a transaction in your books, and for every transaction, there is a source document. If you can meet that standard, any follow-up becomes a one-day exercise rather than a crisis.</p>

      <h2>Three Common Mistakes to Avoid</h2>
      <ul>
        <li>Submitting before your bank account is fully reconciled - transactions from the final weeks of a project sometimes take time to clear</li>
        <li>Including expenses from a prior fiscal year in the current project report</li>
        <li>Claiming staff time at a blended rate without documenting the underlying calculation</li>
      </ul>
    `
  },

  /* ─── 07 ─── */
  {
    id: 'ircc-contract-reporting',
    title: 'IRCC Contract Reporting: A Field Guide for Settlement Agencies',
    excerpt: 'IRCC contracts come with strict reporting requirements that trip up even experienced finance teams. We walk through every section and how to document variances cleanly.',
    category: 'Settlement',
    catClass: 'cat-settle',
    date: 'March 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Settlement agency community meeting',
    template: 'A',
    body: `
      <h2>The IRCC Reporting Environment</h2>
      <p>Immigration, Refugees and Citizenship Canada is the primary funder for the majority of Ontario settlement agencies, and it operates one of the most rigorous contract reporting frameworks in the Canadian nonprofit sector. IRCC uses the Grants and Contributions Online System (GCOS) for submission, and its financial report templates require a level of precision and documentation that can overwhelm finance teams who are accustomed to less prescriptive funders.</p>
      <p>The consequences of a poorly prepared financial report extend beyond a follow-up call. IRCC conducts risk-based recipient audits, and organisations with a pattern of reporting inconsistencies are more likely to be selected. An audit is a significant organisational disruption even when the organisation is found fully compliant - the documentation burden alone can consume weeks of staff time.</p>

      <h2>Understanding the Two-Report Structure</h2>
      <p>Most IRCC settlement contracts require both an interim financial report (typically at the contract midpoint) and a final financial report (within 60 or 90 days of the contract end date, depending on your agreement). The interim report is often treated casually - as a progress update rather than a rigorous financial accounting. That is a mistake. Reviewers compare your interim actuals against your final actuals, and large swings between the two periods attract scrutiny even when they are fully explainable.</p>
      <p>Maintain the same level of documentation discipline for interim reports as for final ones. The interim report is your first opportunity to flag projected budget variances before they become compliance issues - and IRCC's guidance explicitly encourages early communication about material variances rather than surprise disclosures at year-end.</p>

      <h2>Eligible Expenses: The Grey Areas</h2>
      <p><strong>Salary and benefits.</strong> IRCC generally funds direct service staff salaries at up to 100% of contract-eligible time. The question that trips organisations up is how to document the eligible portion for staff who split their time between IRCC-funded and non-IRCC-funded activities. You need time allocation records - not reconstructed estimates, but contemporaneous logs - showing what percentage of each staff member's time was dedicated to eligible contract activities in each reporting period.</p>
      <p><strong>Overhead and administration.</strong> IRCC permits a fixed overhead rate, typically negotiated at contract signing. Do not exceed this rate - even by a small amount - without a written amendment. Overhead claims above the negotiated rate are the single most common finding in IRCC audits.</p>
      <p><strong>Travel and hospitality.</strong> Eligible, but subject to federal government travel policy rates. Per diem claims must use the Treasury Board rates in effect at the time of travel. Using your organisation's internal per diem policy, if it exceeds the federal rates, creates an ineligible expense.</p>
      <blockquote>"Document time allocation monthly, not at reporting time. Reconstruction is never as accurate as a contemporaneous record."</blockquote>

      <h2>Documenting Variances</h2>
      <p>Budget variances in IRCC reports fall into two categories: approved and unapproved. IRCC contracts typically permit budget reallocation between approved budget lines within a defined percentage threshold - often 10% per line - without prior written approval. Beyond that threshold, a budget amendment request must be submitted and approved before the expense is incurred.</p>
      <p>For variances within the permitted threshold, your financial report narrative should still explain what happened. "Staff vacancy for four months resulting in salary underspend, reallocated to program supplies per contract terms" is the kind of sentence that transforms a flag into a non-issue.</p>

      <h2>The Supporting Documentation Package</h2>
      <ul>
        <li>Signed payroll registers or pay stubs for all staff whose salaries are claimed</li>
        <li>Time allocation sheets or timesheets for split-funded staff positions</li>
        <li>Benefits invoices or payroll deduction summaries for employer benefits claimed</li>
        <li>Overhead calculation worksheet showing the base and the applied rate</li>
        <li>Receipts for all non-payroll expenses over the contract's minimum receipt threshold</li>
        <li>Bank statements for the contract period showing inflow of IRCC funds</li>
        <li>General ledger extract filtered to the IRCC contract class or project code</li>
        <li>Bank reconciliation for the contract period end date</li>
      </ul>
    `
  },

  /* ─── 08 ─── */
  {
    id: 'restricted-unrestricted-funds',
    title: 'Restricted vs. Unrestricted Funds: A Plain-Language Guide',
    excerpt: 'Understanding the difference is fundamental - and the way you record them in QuickBooks Online determines whether your grant reports will ever balance.',
    category: 'Bookkeeping',
    catClass: 'cat-book',
    date: 'February 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Accounting documents and receipts',
    template: 'B',
    body: `
      <h2>The Core Distinction</h2>
      <p>Restricted funds are those received with donor or funder conditions attached. The money must be spent on specific activities, within a specific time period, in specific ways defined by the funding agreement. An OAC project grant is restricted. An IRCC settlement contract is restricted. A designated donation from a major donor for a specific program is restricted.</p>
      <p>Unrestricted funds have no conditions attached. Operating donations, general membership dues, ticket sales, and a no-strings-attached board gift are all unrestricted. The board and management can direct these funds to whatever the organisation's highest priority is.</p>
      <p>The critical nuance: a fund becomes unrestricted only when the conditions attached to it are fully met and the funder has accepted the financial report. Until then, it is restricted - and spending it on activities outside the approved scope is a compliance violation, even if you fully intend to file the report and receive acceptance.</p>

      <h2>Why the Recording Method Matters</h2>
      <p>In a properly configured QuickBooks Online setup, restricted and unrestricted revenue appear in separate accounts in your chart of accounts. When you receive an OAC grant payment, it posts to "Government Grants - Restricted." When you receive a general operating donation, it posts to "Donations - Unrestricted." Your Statement of Operations shows them separately, which makes it immediately clear to any board member or auditor how much of your revenue is subject to conditions.</p>
      <p>The mistake we commonly see is posting all grants and donations to a single "Revenue" account and attempting to track the restriction status in a separate spreadsheet. This works until the spreadsheet is out of date, the person who maintains it is sick the week you need a report, or your auditor asks for a reconciliation that takes three days to produce. It also makes it genuinely difficult to know, in real time, whether you are at risk of overspending a restricted fund.</p>
      <blockquote>"The test of whether your books are correctly set up is whether you can produce a per-funder financial report in under 20 minutes at any point in the year."</blockquote>

      <h2>The Net Assets Presentation</h2>
      <p>On your balance sheet - properly called the Statement of Financial Position for nonprofits - the distinction between restricted and unrestricted shows up again in your net assets section. CPA Canada's recommendations for nonprofits use a fund accounting approach that presents restricted net assets (amounts received but not yet spent for their designated purpose) and unrestricted net assets (everything else, including internally designated reserves) separately.</p>
      <p>Your auditor will prepare this presentation as part of your year-end financial statements. But the accuracy of the numbers depends entirely on whether your books distinguish between restricted and unrestricted throughout the year. If they don't, the year-end allocation is a manual exercise that consumes audit preparation time and introduces opportunities for error.</p>

      <h2>Practical Setup in QuickBooks Online</h2>
      <ul>
        <li>Create separate revenue accounts for government grants, foundation grants, and donations - each with a Restricted and Unrestricted sub-account</li>
        <li>Use Classes or Projects to tag each transaction to its funding source</li>
        <li>Never commingle restricted grant revenue with earned revenue in the same account</li>
        <li>When a restricted grant is fully spent and the report accepted, reclassify any residual balance per funder guidance</li>
        <li>Review the P&L by Class monthly to confirm restricted funds are being spent within their eligible categories</li>
      </ul>
    `
  },

  /* ─── 09 ─── */
  {
    id: 'cash-flow-90-day-model',
    title: 'Cash Flow Forecasting for Nonprofits: A 90-Day Model',
    excerpt: 'Most nonprofit cash flow crises are predictable six weeks in advance. Here\'s the rolling model that shows you where you stand before the board meeting forces the conversation.',
    category: 'CFO & Strategy',
    catClass: 'cat-cfo',
    date: 'February 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Cash flow forecast on screen',
    template: 'C',
    body: `
      <h2>Why Nonprofits Are Especially Vulnerable to Cash Flow Problems</h2>
      <p>A nonprofit can be profitable on paper - with a healthy year-end surplus, multiple active grants, and a full program schedule - and still run out of operating cash in any given month. This happens because nonprofit revenue is lumpy. Funder payments arrive in tranches, often behind schedule. Grants are announced months before they are paid. Earned revenue is seasonal. Meanwhile, payroll, rent, and benefits remittances are relentlessly regular. The mismatch between irregular income and regular expenses is the engine of almost every nonprofit cash crisis.</p>
      <p>The 90-day rolling cash flow model does not eliminate this problem, but it makes it visible far enough in advance to act - renegotiate a payment schedule, draw on a line of credit, accelerate a fundraising ask - before the options narrow to cutting programs or missing a payroll.</p>

      <h2>Structure of the 90-Day Model</h2>
      <p>The model has three components: opening balance, scheduled inflows, and scheduled outflows. It runs week-by-week for 13 weeks and produces a projected closing balance for each week. Any week where the projected balance drops below your defined minimum operating reserve - typically one to two months of operating expenses - triggers a review.</p>
      <p><strong>Opening balance:</strong> Pull this directly from your bank account on the model date. Include any term deposit or investment account that can be liquidated without penalty within 30 days, separately labelled.</p>
      <p><strong>Scheduled inflows:</strong> Enter every payment you have contractual or near-certain reason to expect, with the week it is expected to arrive. This includes: grant instalment payments with confirmed transfer dates, government contract payments per your payment schedule, recurring membership or fee-for-service revenue, and any large individual donations that have been confirmed in writing.</p>
      <p><strong>Scheduled outflows:</strong> Every committed payment due in the period. Payroll runs (list each date), CRA remittances, rent, insurance premiums, software subscriptions, utility payments, and known one-time expenses like an event deposit or a vendor payment on an approved purchase order.</p>
      <blockquote>"The value of a cash flow model is not the forecast - it's the conversation the forecast forces you to have three months early instead of three days before payday."</blockquote>

      <h2>How to Maintain the Model</h2>
      <p>The model should be updated weekly by whoever manages your books. The update process takes 15 to 20 minutes: confirm the prior week's actuals match the projections, update the opening balance, enter any new confirmed inflows or outflows, and roll the 13-week window forward by one week. Once a month, the executive director and finance lead should review the model together in a standing 30-minute meeting.</p>
      <ul>
        <li>Set a minimum cash reserve threshold and flag any week that dips below it</li>
        <li>Distinguish between committed inflows (signed agreements) and expected inflows (verbal confirmation or renewal history)</li>
        <li>Do not include unconfirmed grant applications as inflows</li>
        <li>Review the model before any major financial decision: a new hire, a capital purchase, a new program commitment</li>
      </ul>
    `
  },

  /* ─── 10 ─── */
  {
    id: 'payroll-deductions-guide',
    title: 'The Payroll Deductions That Catch New Nonprofits Off Guard',
    excerpt: 'CPP, EI, income tax, employer health tax - the list is longer than most new EDs expect. A breakdown of every deduction and how to remit them correctly from day one.',
    category: 'Payroll',
    catClass: 'cat-payroll',
    date: 'January 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Team reviewing payroll documents',
    template: 'D',
    body: `
      <h2>Every Deduction You Need to Know</h2>
      <p>When you hire your first employee, payroll stops being an abstraction. You are now holding trust funds - the government's and your employee's - every time you run a pay cycle. Getting the deductions right from the start is far easier than correcting a year of errors at T4 time.</p>

      <div class="step-block">
        <div class="step-number">01</div>
        <h3>Canada Pension Plan (CPP)</h3>
        <p>CPP is contributed by both the employee and the employer. In 2025, the employee rate is 5.95% of pensionable earnings above the basic exemption of $3,500, up to the Year's Maximum Pensionable Earnings ($68,500). The employer matches the employee contribution dollar for dollar. CPP2, introduced in 2024, adds a second tier of contributions on earnings between the YMPE and the Year's Additional Maximum Pensionable Earnings - both employee and employer contribute at 4.00% on this upper band.</p>
        <p>Employees under 18, employees over 70, or those receiving a CPP or QPP retirement pension may have different rules. Confirm with CRA's payroll deductions calculator if any of your staff fall into these categories.</p>
      </div>

      <div class="step-block">
        <div class="step-number">02</div>
        <h3>Employment Insurance (EI)</h3>
        <p>Employee EI premiums in 2025 are 1.64% of insurable earnings up to the annual maximum insurable amount ($65,700). Employers pay 1.4 times the employee premium - so for every dollar your employee contributes, you remit $1.40. Some employer-provided benefits can reduce the employer EI premium if they provide a wage-loss replacement plan that meets CRA criteria. This is worth investigating if you offer a group disability plan.</p>
      </div>

      <div class="step-block">
        <div class="step-number">03</div>
        <h3>Federal and Ontario Provincial Income Tax</h3>
        <p>Federal and provincial income tax deductions are calculated based on each employee's TD1 Personal Tax Credits Return. Employees with additional sources of income or multiple employers may request additional withholding, which you are required to accommodate. Use CRA's Payroll Deductions Online Calculator (PDOC) for every pay period - do not rely on simplified tables for non-standard pay situations like bonuses, vacation payouts, or irregular pay periods.</p>
      </div>

      <div class="step-block">
        <div class="step-number">04</div>
        <h3>Ontario Employer Health Tax (EHT)</h3>
        <p>Ontario nonprofits with total Ontario remuneration under $1,000,000 are exempt from EHT. Above that threshold, EHT applies at a graduated rate up to 1.95% on all Ontario payroll. Most small nonprofits fall below the threshold, but if you are growing or if you have multiple related employers whose payroll is aggregated for EHT purposes, you may be closer to the threshold than you realise. Confirm your status with a payroll professional before year-end.</p>
      </div>

      <div class="step-block">
        <div class="step-number">05</div>
        <h3>Workplace Safety and Insurance Board (WSIB)</h3>
        <p>Ontario employers in most industries are required to register with WSIB within 10 days of hiring their first worker. Premiums are calculated as a percentage of insurable earnings, with the rate set by your industry classification. Many nonprofit program activities (counselling, employment services, settlement support) fall under rate groups that carry modest premiums. Confirm your rate group at registration and review it annually.</p>
      </div>
    `
  },

  /* ─── 11 ─── */
  {
    id: 'cra-audit-preparation',
    title: 'How to Prepare Your Nonprofit for a CRA Audit',
    excerpt: 'An audit notice doesn\'t have to mean chaos. We walk through the documents CRA typically requests and how clean monthly books make the difference between a smooth review and a long one.',
    category: 'Compliance',
    catClass: 'cat-comply',
    date: 'January 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Office audit preparation',
    template: 'A',
    body: `
      <h2>What Triggers a CRA Charity Audit</h2>
      <p>CRA selects registered charities for audit through a combination of risk-based analysis and random selection. Common triggers include significant year-over-year changes in revenue or expenses, unusually high fundraising costs relative to charitable activity, T3010 returns with incomplete sections or obvious inconsistencies, and complaints from the public or former staff or volunteers. Being audited does not imply wrongdoing - many organisations with exemplary compliance records are audited simply because they were selected through CRA's random sampling process.</p>
      <p>What determines whether an audit is a minor disruption or an extended ordeal is almost entirely a function of how well your books are maintained and how quickly you can produce the documentation CRA requests.</p>

      <h2>The Audit Notice and What Happens Next</h2>
      <p>CRA typically provides advance notice of a charity audit through a letter sent to your registered address - which is why keeping your registered address current on your T3010 is important. The letter identifies the audit period (usually one to three fiscal years), names the auditor assigned to your file, and requests an initial list of documents. This initial list is almost always the same: your T3010 returns for the audit period, your financial statements, your general ledger, your bank statements, and your minute book.</p>
      <p>You have the right to ask for an extension to the initial document production deadline. If the audit notice arrives during a period when your finance lead is unavailable or your records require organisation, request an extension immediately - CRA routinely grants reasonable extensions for initial document production.</p>

      <h2>The Document Package: What CRA Will Want</h2>
      <p><strong>Financial records:</strong> Bank statements, cancelled cheques or digital payment records, deposit slips, invoices for all material expenditures, payroll records and T4 summaries, expense claims with receipts, and your general ledger for the full audit period. The general ledger is the central document - all other records exist to substantiate the transactions it contains.</p>
      <p><strong>Governance records:</strong> Minutes from all board meetings during the audit period, signed copies of your governing documents (letters patent, constitution, bylaws), conflict of interest declarations, and documentation of any transactions with non-arm's-length parties.</p>
      <p><strong>Program records:</strong> Evidence that your activities during the period actually constituted charitable activities as defined by your registered purpose. This typically means program reports, service delivery records, attendance logs, and similar documentation that demonstrates you were doing what you said you were doing.</p>
      <blockquote>"An auditor's job is to verify, not to find problems. Your job is to make verification easy."</blockquote>

      <h2>The Fastest Way to Extend an Audit</h2>
      <p>Producing documents piecemeal, requiring multiple follow-up requests from the auditor for the same type of record, is the fastest way to extend an audit from weeks to months. Before you respond to the initial document request, compile everything at once. Create a clearly labelled folder structure - either physical binders or a shared electronic folder - that mirrors CRA's request list. Number your responses to correspond to their numbered questions.</p>
      <p>If a document exists but is difficult to locate, say so in your initial response and give a specific date by which you will provide it. Do not ignore requests or provide partial responses without explanation.</p>

      <h2>What Clean Books Look Like to a CRA Auditor</h2>
      <ul>
        <li>Every bank deposit is tied to a recorded receipt in the general ledger</li>
        <li>Every expense has a corresponding invoice or receipt retained in your filing system</li>
        <li>Payroll expenses reconcile to T4 summaries which reconcile to CRA remittance records</li>
        <li>T3010 numbers tie to the financial statements which tie to the general ledger</li>
        <li>Any unusual transactions have a corresponding board minute or written approval</li>
        <li>Related-party transactions are disclosed and documented</li>
      </ul>
    `
  },

  /* ─── 12 ─── */
  {
    id: 'chart-of-accounts-rebuild',
    title: '5 Signs Your Chart of Accounts Needs a Rebuild',
    excerpt: 'If your grant reports don\'t match your books, your revenue accounts have grown to dozens of lines, or your accountant winces every year-end - it\'s time for a rebuild.',
    category: 'Bookkeeping',
    catClass: 'cat-book',
    date: 'December 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Laptop showing accounts setup',
    template: 'D',
    body: `
      <h2>What a Well-Built Chart of Accounts Looks Like</h2>
      <p>A chart of accounts is the taxonomy of your financial life. Everything that happens - every payment received, every invoice paid, every payroll run - is classified into one of its categories. When the taxonomy is right, every financial question has an obvious answer. When it has grown organically, accreting new accounts every time someone needed to track something new, it becomes a source of confusion that compounds at every reporting period.</p>

      <div class="step-block">
        <div class="step-number">Sign 1</div>
        <h3>Your Grant Reports Don't Reconcile to Your Books</h3>
        <p>If you are rebuilding your grant financial reports from scratch at each reporting period - exporting transactions, re-categorising them manually, building a spreadsheet that looks nothing like your general ledger - your chart of accounts is not structured for grant reporting. The fix is to align your expense account structure with the budget categories your funders use. A chart of accounts designed for grant reporting makes every funder's report a filtered version of your actual books.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Sign 2</div>
        <h3>You Have More Than 30 Revenue Accounts</h3>
        <p>Revenue accounts should reflect the nature of income, not its source. "Government Grants - Restricted," "Foundation Grants - Restricted," "Individual Donations - Unrestricted," "Earned Revenue - Programs": these are revenue accounts. "OAC 2024 Project Grant," "Toronto Arts Council 2024," "Jane Smith Donation": these are not revenue accounts - they are tracking needs that belong in the Class or Project layer. When revenue accounts proliferate with funder or donor names, the chart becomes a maintenance burden and your Statement of Operations becomes unreadable.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Sign 3</div>
        <h3>Your Expense Categories Don't Match Your Budgets</h3>
        <p>If your approved budgets use categories like "Program Staff - Senior," "Program Staff - Junior," and "Volunteer Coordination," but your books have a single account called "Salaries and Wages," you cannot produce a budget-vs-actuals report without manual realignment. Expense accounts should mirror the line items you commit to in your annual operating budget - with enough granularity to answer funder questions, but not so much that you have separate accounts for every vendor.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Sign 4</div>
        <h3>Your Accountant Makes Dozens of Journal Entries at Year-End</h3>
        <p>Some year-end journal entries are normal - accruals, prepaid expense adjustments, deferred revenue entries. But if your accountant is spending significant time reclassifying expenses that were posted to the wrong accounts throughout the year, that is a chart of accounts problem. It means the account descriptions are unclear, the accounts are too similar to distinguish easily, or the person doing the bookkeeping doesn't have enough guidance to make consistent decisions.</p>
      </div>

      <div class="step-block">
        <div class="step-number">Sign 5</div>
        <h3>New Staff Can't Figure Out Where Things Go</h3>
        <p>The best chart of accounts is one that a careful, non-specialist person can navigate without asking for help. If new finance staff or volunteers regularly post transactions to wrong accounts, the chart is either not clearly labelled or has accounts that are too similar in scope. A useful diagnostic: ask a new team member to classify five common transactions without assistance. Where they hesitate or make errors tells you exactly which accounts need clearer names or descriptions.</p>
      </div>
    `
  },

  /* ─── 13 ─── */
  {
    id: 'salary-allocation-settlement',
    title: 'Salary Allocation: The Settlement Sector\'s Most Painful Spreadsheet',
    excerpt: 'When one employee is funded by three contracts, how do you split payroll costs correctly - and produce audit-ready backup without a full-time allocator?',
    category: 'Settlement',
    catClass: 'cat-settle',
    date: 'December 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Settlement agency team meeting',
    template: 'C',
    body: `
      <h2>The Core Problem</h2>
      <p>In the settlement sector, it is normal - not unusual - for a single frontline worker to be funded by multiple government contracts simultaneously. A language training coordinator might be 60% IRCC-funded, 25% LINC-funded, and 15% funded through a provincial employment program. This allocation needs to be documented, recorded in the books, and reconcilable to timesheets at any audit review. For many organisations, this is managed through a salary allocation spreadsheet that is maintained by hand, updated monthly, and lives outside the accounting system.</p>
      <p>The problem is not the spreadsheet itself - it is that a spreadsheet maintained outside the books can fall out of sync, is vulnerable to human error, and cannot be automatically reconciled to payroll totals. When an auditor asks for the salary allocation for a specific staff member over a 12-month IRCC contract period, the answer should come from the books, not from a manually compiled reconstruction.</p>

      <h2>The Allocation Method That Survives Audits</h2>
      <p>The allocation method that IRCC and most other government funders accept - and auditors expect to see - is time-based allocation supported by contemporaneous timesheets. "Contemporaneous" is important: it means recorded at the time the work happens, not reconstructed at the end of the month. A timesheet where employees check off activities daily or weekly is contemporaneous evidence. A "timesheet" prepared on the last day of the month to match a predetermined allocation percentage is a reconstruction, and a sophisticated auditor can usually tell the difference.</p>
      <p>The allocation percentage itself should be set at the beginning of each contract year, based on planned program delivery ratios, and reviewed quarterly. Significant deviations from the plan - an employee shifting from one program to another, a program that runs short - should be documented in writing and the allocation updated for subsequent pay periods.</p>
      <blockquote>"The allocation on paper needs to match what actually happened. If it doesn't match, you need either better timesheets or a different allocation - not a spreadsheet that makes the numbers work."</blockquote>

      <h2>Integrating Allocation Into Your Books</h2>
      <p>In QuickBooks Online, the cleanest integration is to run payroll through your payroll software and then record the allocation in QBO using journal entries or payroll expense mapping to Classes. Each pay period, the total payroll cost (gross wages plus employer contributions) is split by the allocation percentages and posted to the corresponding grant or contract class. The result is a general ledger that shows, for every pay period, exactly how much salary cost was charged to each funder - traceable to the payroll run, traceable to the allocation documentation, and reconcilable to the timesheet record.</p>

      <h2>Building the Documentation Package</h2>
      <ul>
        <li>Annual allocation plan signed by the employee and their supervisor at the start of the contract year</li>
        <li>Weekly or biweekly timesheet signed by both employee and supervisor</li>
        <li>Monthly reconciliation confirming that the allocation posted in QBO matches the timesheet actuals</li>
        <li>Quarterly allocation review memo noting any significant variances and the rationale for any adjustments</li>
        <li>Year-end summary showing each employee's total salary by funder, reconciled to T4 gross earnings</li>
      </ul>
    `
  },

  /* ─── 14 ─── */
  {
    id: 'board-reporting-finance',
    title: 'Board Reporting Done Right: What Finance Committees Actually Want',
    excerpt: 'Most board finance packages are either too detailed or too vague. We share the four-page format that generates better questions and fewer "can you explain that again" moments.',
    category: 'CFO & Strategy',
    catClass: 'cat-cfo',
    date: 'November 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Finance team presenting board report',
    template: 'B',
    body: `
      <h2>The Two Failure Modes</h2>
      <p>Finance committees are routinely failed by their finance packages in one of two ways. The first is too much detail: 20 pages of transaction-level general ledger printouts, unanalysed, with no narrative to guide interpretation. Board members who are not accountants - which is most of them - spend the meeting confused rather than governing. The second is too little: a single line showing "total revenue" and "total expenses" and a bottom-line surplus or deficit, with no context about whether the numbers are on track or cause for concern.</p>
      <p>The goal of a board finance package is to enable governance. That means providing enough context for a non-specialist board member to understand the organisation's financial health, ask informed questions, and make meaningful decisions. It does not mean providing everything the finance team knows.</p>

      <h2>The Four-Page Format</h2>
      <p><strong>Page 1: Cash Position and Key Metrics.</strong> One number prominently - current cash on hand. Below that: days of operating reserve (cash divided by average monthly expenses), current accounts receivable aging (grants outstanding, including which ones are overdue), and one alert item if there is something that needs board attention this month. If there is nothing to flag, say so. "No significant financial concerns this month" is useful information.</p>
      <p><strong>Page 2: Budget vs. Actuals - Year to Date.</strong> Revenue and expenses by category, showing budget, actual, variance, and percent of year elapsed. The goal is not to present every account - it is to show the categories that matter for governance. Six to ten revenue lines and eight to twelve expense categories are usually sufficient. Variances over 15% should have a one-line explanation in the table.</p>
      <p><strong>Page 3: Grant and Contract Tracker.</strong> A table showing every active restricted grant or contract, the total approved amount, the amount spent to date, the remaining balance, the next reporting deadline, and a status indicator. This page is the one that most boards don't have and most desperately need. It answers the question "how are we doing against our funders' expectations" in a way that the P&L cannot.</p>
      <blockquote>"The board's job is oversight, not operations. Your finance package should tell them what to watch, not everything you know."</blockquote>
      <p><strong>Page 4: 90-Day Cash Flow Projection.</strong> Week-by-week or month-by-month, showing projected closing cash balance for the next three months. Flag any weeks where the projected balance drops below the board-approved minimum reserve. Most months, this page will be unremarkable - which is the point. It exists so that when a cash flow issue is visible six weeks out, the board sees it at the right time.</p>

      <h2>Presenting the Package</h2>
      <p>The finance lead should present the package in 10 to 12 minutes. The goal is not to walk through every number - the board can read. The goal is to highlight one or two items that need discussion or a decision, explain any significant variances, and answer questions. The package should be distributed at least 48 hours before the meeting so board members can review it and come prepared.</p>
      <ul>
        <li>Never present a draft - only final, reconciled numbers</li>
        <li>Prepare one-sentence explanations for every variance over 10%</li>
        <li>If you need a board decision, make the ask explicit - don't bury it in data</li>
        <li>Date every page of the package with the reporting period it covers</li>
      </ul>
    `
  },

  /* ─── 15 ─── */
  {
    id: 'quickbooks-online-nonprofits',
    title: 'QuickBooks Online for Nonprofits: The Setup Mistakes to Avoid',
    excerpt: 'A standard QBO setup is built for small businesses, not charities. These are the six configuration decisions that affect every grant report you\'ll ever produce.',
    category: 'Bookkeeping',
    catClass: 'cat-book',
    date: 'November 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'QuickBooks Online setup on computer',
    template: 'A',
    body: `
      <h2>QBO Was Built for Small Businesses</h2>
      <p>QuickBooks Online is excellent bookkeeping software for a plumber, a marketing agency, or a retail store. For nonprofits, it works well - but only if you configure it correctly from the start. The default setup makes a series of assumptions about how a for-profit business tracks money that do not translate well to grant reporting, fund accounting, or the T3010. Getting those six key decisions right at the beginning saves you from a painful rebuild later.</p>

      <h2>Mistake 1: Using the Default Chart of Accounts</h2>
      <p>QBO's default chart of accounts is built for a small business: it has accounts for "Sales," "Cost of Goods Sold," "Advertising," and a dozen other categories that do not reflect nonprofit financial activity. Starting from this default and adding accounts as you go produces a chart that is neither fish nor fowl - not clean enough for nonprofit accounting, not familiar enough for a new bookkeeper to navigate. Start with a nonprofit-specific account structure that distinguishes between restricted and unrestricted revenue, aligns expense categories with your typical grant budget lines, and presents net assets in the fund accounting format your auditor expects.</p>

      <h2>Mistake 2: Not Enabling Classes</h2>
      <p>Classes (or Projects, in some QBO versions) are the mechanism that allows you to track transactions by funding source without cluttering your chart of accounts with funder-specific accounts. If you don't enable Classes at setup and begin tagging transactions from day one, you will eventually build a parallel tracking spreadsheet - and that spreadsheet will drift from your books. Turn on Class tracking in QBO settings before you post your first transaction.</p>

      <h2>Mistake 3: Mixing Payroll and Non-Payroll Salary Costs in One Account</h2>
      <p>Payroll runs through your payroll software and posts to QBO as a journal entry. If you have a single "Salaries" account, every payroll posting lands in it - gross wages, employer CPP, employer EI, and employer benefits contributions all mixed together. Grant budgets, however, almost always distinguish between gross wages and employer benefits. Set up separate accounts for "Salaries and Wages," "Employer CPP and EI," and "Employee Benefits" from the start, and configure your payroll mapping to post to the correct accounts automatically.</p>
      <blockquote>"The six setup decisions you make in your first week with QBO affect every financial report you produce for the next several years. Invest the time to get them right."</blockquote>

      <h2>Mistake 4: Using Cash Basis Reporting for Accrual-Basis Funders</h2>
      <p>Cash basis accounting records revenue when cash arrives and expenses when cash leaves. Accrual accounting records revenue when it is earned and expenses when they are incurred. Most government funders - and most nonprofit audits - require accrual-basis financial reporting. If your QBO is configured for cash-basis reporting, your month-end and year-end numbers will not match your audited financial statements, and your grant reports will require manual adjustments to convert to accrual basis. Set QBO to accrual basis at setup.</p>

      <h2>Mistake 5: Giving Everyone Administrator Access</h2>
      <p>QBO's user permission system allows you to assign specific access levels: view-only, limited entry, full access, and administrator. In a small nonprofit, it is tempting to give everyone administrator access for simplicity. Resist this. Administrator access allows users to delete transactions, change account structures, and alter historical records. At minimum, only your bookkeeper and finance lead should have access above view-only. Your ED needs to review reports but does not need to be able to modify the books.</p>

      <h2>Mistake 6: Not Connecting Bank Feeds From Day One</h2>
      <p>QBO's bank feed feature imports transactions directly from your bank account into QBO for matching and categorisation. Used correctly, it is a significant time-saver and an important control: every transaction that appears on your bank statement appears in QBO, which means missing transactions are immediately visible. Some bookkeepers prefer manual entry because it feels more controlled. In practice, bank-feed-connected books have fewer missed transactions and more consistent categorisation than manually entered ones - the key is establishing clear transaction rules from the start.</p>
    `
  },

  /* ─── 16 ─── */
  {
    id: 'read-financial-statements',
    title: 'How to Read Your Nonprofit\'s Financial Statements',
    excerpt: 'The Statement of Operations, Balance Sheet, and Statement of Cash Flows - a plain-language guide to what each one tells you and what your board should actually be asking.',
    category: 'CFO & Strategy',
    catClass: 'cat-cfo',
    date: 'October 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Reading nonprofit financial statements',
    template: 'B',
    body: `
      <h2>Why Financial Statements Confuse Nonprofit Boards</h2>
      <p>Most nonprofit board members come from program backgrounds, the private sector, or community leadership - not accounting. Presenting them with a full set of financial statements and expecting meaningful governance engagement is optimistic. The result, in most organisations, is a finance committee discussion that is either dominated by the one or two members with accounting backgrounds or is largely cosmetic - a formal review without substantive engagement.</p>
      <p>Understanding what each statement actually tells you, in plain language, transforms board engagement with financial information. This guide is designed for the ED, board chair, or finance committee member who wants to understand what they are looking at.</p>

      <h2>Statement of Operations (the "Income Statement")</h2>
      <p>This is the statement most people are familiar with. It shows your revenue and expenses over a period of time - usually a fiscal year - and the resulting surplus or deficit. For nonprofits, it is typically called the "Statement of Operations" or "Statement of Activities" rather than an Income Statement, which is a for-profit term.</p>
      <p><strong>What to look for:</strong> Revenue diversification. If more than 60% of your revenue comes from a single source, that is a concentration risk worth noting. Year-over-year comparison - is revenue growing, declining, or stable? The surplus or deficit line - but remember that a surplus from restricted grant revenue is not necessarily available for general operations. The notes to the statements will show whether your surplus is restricted or unrestricted.</p>
      <blockquote>"A surplus is not always good news. A deficit is not always bad news. The question is always: which funds are restricted, and what does the unrestricted picture look like?"</blockquote>

      <h2>Statement of Financial Position (the "Balance Sheet")</h2>
      <p>This statement shows your assets, liabilities, and net assets at a single point in time - the last day of your fiscal year. It is a snapshot, not a film.</p>
      <p><strong>What to look for:</strong> Cash and short-term investments relative to your monthly expenses - how many months of operating expenses could you cover if revenue stopped? Accounts receivable - are grants confirmed and receivable being held for long periods, which can indicate collection risk? And critically: the net assets section, which should show restricted and unrestricted amounts separately. A large restricted net asset balance means you have obligations to funders that have not yet been spent; a growing unrestricted reserve means the organisation is building financial resilience.</p>

      <h2>Statement of Cash Flows</h2>
      <p>This is the statement most board members look at last and understand least - which is unfortunate, because it is often the most diagnostically useful. It shows where cash came from and where it went during the year, categorised into operating activities, investing activities, and financing activities.</p>
      <p><strong>What to look for:</strong> The cash from operating activities line. A consistently negative operating cash flow - even in years with a surplus - indicates the organisation is collecting revenue slowly and paying expenses faster, which is a structural cash flow problem. If this pattern persists over multiple years, it is a board-level conversation about either building a larger cash reserve or renegotiating payment terms with funders.</p>

      <h2>The Questions Your Board Should Always Ask</h2>
      <ul>
        <li>What is our current unrestricted operating reserve, in months of expenses?</li>
        <li>What percentage of revenue is from a single funder?</li>
        <li>Are there any accounts receivable that are more than 90 days outstanding?</li>
        <li>Is there any restricted revenue that has not been spent within its eligible period?</li>
        <li>How does this year's result compare to the budget we approved?</li>
      </ul>
    `
  },

  /* ─── 17 ─── */
  {
    id: 'grant-budget-vs-actual',
    title: 'Grant Budget vs. Actual: The Tracking Setup That Saves the Final Report',
    excerpt: 'If you\'re rebuilding the grant variance spreadsheet from scratch every reporting period, the problem isn\'t your accountant - it\'s the structure of your books.',
    category: 'Grant Reporting',
    catClass: 'cat-grant',
    date: 'October 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Grant budget tracking spreadsheet',
    template: 'C',
    body: `
      <h2>The Reconstruction Problem</h2>
      <p>Every nonprofit finance person who has worked under grant funding pressure knows the drill: a grant report is due in three weeks, and the process begins with exporting a year's worth of transactions from the accounting software, then manually sorting them into the budget categories the funder uses, then comparing the result against the approved budget, then explaining the variances in a narrative. This process typically takes days. It is error-prone because transactions have to be re-categorised by memory and judgment. And it produces a report that cannot be verified against the books without doing the whole exercise over again.</p>
      <p>The reconstruction problem is not a capacity problem. It is a structural problem. The grant report should emerge naturally from the books - not be built separately from them.</p>

      <h2>Aligning Your Books to Your Budget</h2>
      <p>The first requirement is that your expense accounts in QBO mirror the budget line items in your grant. If your OAC grant budget has lines for "Project Director (0.4 FTE)," "Production Expenses," "Marketing and Outreach," and "Evaluation," your QBO expense accounts need to have those same categories - at least at the Class level. The exact account structure can be standardised across grants, but the tagging system must be able to produce a P&L that maps directly to the approved budget without manual reclassification.</p>
      <p>Set up your Class structure before you begin spending a new grant. Create the class, name it consistently with your funder naming convention, and establish the account-to-budget-line mapping before the first transaction posts. When a staff expense needs to be split between two grants, split it at entry time - not at report time.</p>

      <h2>The Monthly Budget Check</h2>
      <p>Run a P&L by Class for each active grant at the end of every month. Compare the actuals to your approved budget, prorated for the portion of the grant year elapsed. A grant that is 60% of the way through its year should have spent approximately 60% of each budget line - with reasonable variation for activities that are front- or back-loaded. Large variances - more than 15% above or below the prorated budget - should be assessed immediately: is this timing (the expense will occur later) or structural (the activity has changed in scope)?</p>
      <blockquote>"Reviewing your grant budget vs. actuals monthly means you fix small variances when they are still manageable. Reviewing it at report time means you explain large variances after there is nothing left to do about them."</blockquote>

      <h2>Documenting Variances as They Occur</h2>
      <p>Keep a running variance log for each active grant - a simple document or shared note where you record, as they occur, the reasons for any significant deviation from the approved budget. When staff leave unexpectedly and a position is vacant for two months, note it that month. When a program activity shifts from one format to another and expenses migrate between budget lines, note it then.</p>
      <p>This log becomes the first draft of your variance narrative in the final report. Instead of reconstructing why a budget line underspent by $12,000, you have a contemporaneous record that says exactly what happened. The narrative writes itself.</p>

      <h2>The Report-Ready Check</h2>
      <ul>
        <li>P&L by Class in QBO with no unclassified transactions for the grant period</li>
        <li>All transactions tagged to the correct Class and expense account</li>
        <li>Bank reconciliation completed through the end of the grant period</li>
        <li>Variance log current through the last month of the grant</li>
        <li>Supporting documentation filed and accessible for all material expenditures</li>
        <li>Budget-to-actual template pre-built in the funder's format, ready to populate from QBO export</li>
      </ul>
    `
  },

  /* ─── 18 ─── */
  {
    id: 'year-end-checklist',
    title: 'Nonprofit Year-End Checklist for Ontario Organizations',
    excerpt: 'Forty-two items. Starting with bank reconciliations and ending with the T3010 draft - the complete list of what needs to happen before your books go to the accountant.',
    category: 'Compliance',
    catClass: 'cat-comply',
    date: 'September 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Nonprofit year-end checklist review',
    template: 'D',
    body: `
      <h2>Start Early: The Four-Month Window</h2>
      <p>Year-end for most Ontario nonprofits is December 31. The work that prepares your books for the accountant needs to begin in September, not December. The October-to-January period is when your accounting firm is at its most stretched; arriving with clean, well-documented books is the single most effective way to reduce your audit or review engagement fee. The checklist below is designed to be completed in stages across October, November, and December, with final items due in the first two weeks of January.</p>

      <div class="step-block">
        <div class="step-number">October</div>
        <h3>Bookkeeping Foundations</h3>
        <ul style="margin-top:10px;padding-left:20px;line-height:2;">
          <li>Bank reconciliations current through September 30</li>
          <li>All outstanding transactions from prior months reviewed and posted</li>
          <li>Accounts receivable aging report reviewed - follow up on any receivables over 60 days</li>
          <li>Petty cash counted and reconciled</li>
          <li>Credit card statements matched and posted through September</li>
          <li>All grant Classes reviewed - unclassified transactions identified and tagged</li>
          <li>Payroll totals for January through September reconciled to remittance records</li>
        </ul>
      </div>

      <div class="step-block">
        <div class="step-number">November</div>
        <h3>Revenue and Grant Review</h3>
        <ul style="margin-top:10px;padding-left:20px;line-height:2;">
          <li>All active grant Classes reviewed - confirm no overspending relative to approved budgets</li>
          <li>Deferred revenue entries reviewed - confirm amounts match unspent grant balances</li>
          <li>Donation receipts reconciled to revenue recorded in books</li>
          <li>Any grants received but not yet spent assessed for deferred revenue treatment</li>
          <li>Confirmation letters or payment remittances filed for all major revenue items</li>
          <li>Investment income statements received and posted</li>
          <li>Any year-end fundraising campaigns in progress - confirm accounting treatment planned</li>
        </ul>
      </div>

      <div class="step-block">
        <div class="step-number">December</div>
        <h3>Expense and Payroll Review</h3>
        <ul style="margin-top:10px;padding-left:20px;line-height:2;">
          <li>All vendor invoices for services rendered through December 31 received or accrued</li>
          <li>Prepaid expenses identified (insurance, software subscriptions spanning fiscal year-end)</li>
          <li>Final payroll run for December complete and CRA remittance filed</li>
          <li>T4 preparation underway - all employee data confirmed</li>
          <li>Related party transactions identified and documented for disclosure</li>
          <li>Capital asset additions in the year noted for depreciation schedule update</li>
          <li>Any disposals of equipment or assets noted</li>
          <li>HST return or rebate application prepared if applicable</li>
        </ul>
      </div>

      <div class="step-block">
        <div class="step-number">January</div>
        <h3>Final Close and Handoff</h3>
        <ul style="margin-top:10px;padding-left:20px;line-height:2;">
          <li>All December transactions posted and bank reconciliation complete</li>
          <li>Year-end bank statement obtained and filed</li>
          <li>T4s issued to all employees by the last business day of February (prepare in January)</li>
          <li>Trial balance exported from QBO and reviewed for unusual balances</li>
          <li>Prior year financial statements pulled for comparison</li>
          <li>Board-approved year-end budget confirmed - final actuals vs. budget summary prepared</li>
          <li>Working paper package assembled for accountant (GL, bank statements, prior year statements)</li>
          <li>T3010 prior year return reviewed as starting point for current year draft</li>
          <li>Auditor or reviewer engagement letter signed and return date confirmed</li>
        </ul>
      </div>
    `
  }

];
