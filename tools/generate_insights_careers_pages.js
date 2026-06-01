const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const insights = [
  {
    title: "Tech Articles",
    slug: "tech-articles.html",
    kicker: "Engineering Notes",
    summary: "Practical articles on web development, cloud, product engineering, automation, and digital platforms.",
    accent: "#09c7e8",
    cards: [
      ["Choosing the right web stack", "How to evaluate frameworks, backend choices, CMS needs, and long-term maintainability before starting a project."],
      ["What makes a website scalable", "A practical look at architecture, deployment, performance, content structure, and analytics readiness."],
      ["Reducing technical debt", "How structured delivery, reviews, and clean module boundaries keep products easier to improve."]
    ],
    resources: [
      ["Architecture Review", "Audit platform structure, integration points, hosting, and release workflow before a rebuild."],
      ["Performance Planning", "Prioritize Core Web Vitals, caching, image strategy, JavaScript budgets, and backend response times."],
      ["Security Basics", "Review forms, authentication, roles, data validation, backups, and dependency hygiene."],
      ["Product Maintainability", "Create reusable components, documentation, and sensible naming so future changes are cheaper."]
    ],
    topics: ["Architecture", "Performance", "Frontend", "Backend", "QA", "Cloud"]
  },
  {
    title: "AI & Trends",
    slug: "ai-trends.html",
    kicker: "Emerging Technology",
    summary: "Insights on AI adoption, automation, machine learning workflows, and modern digital product trends.",
    accent: "#7c5cff",
    cards: [
      ["AI features that add business value", "Where automation, recommendations, chat workflows, and internal copilots can improve real operations."],
      ["Preparing data for AI", "Why clean data, access control, and workflow clarity matter before adding AI to a product."],
      ["Trends worth watching", "A focused view of practical technology shifts that can influence product planning."]
    ],
    resources: [
      ["AI Readiness", "Identify useful workflows, available data, privacy limits, and clear success metrics before implementation."],
      ["Automation Ideas", "Use AI to speed up support, lead qualification, internal search, reporting, and repetitive admin work."],
      ["Data Quality", "Structure content, permissions, labels, and feedback loops before connecting models to business systems."],
      ["Responsible Rollout", "Start with narrow use cases, human review, monitoring, and practical fallbacks."]
    ],
    topics: ["AI Strategy", "Automation", "ML", "Data", "Chatbots", "Product Trends"]
  },
  {
    title: "Case Study Insights",
    slug: "case-study-insights.html",
    kicker: "Project Learning",
    summary: "Lessons from real project patterns across websites, software platforms, automation, and cloud delivery.",
    accent: "#ffb020",
    cards: [
      ["From idea to MVP", "How early scope decisions affect design, engineering, cost, and launch speed."],
      ["Improving conversion flows", "What we look for when improving forms, landing pages, navigation, and funnel drop-offs."],
      ["Modernizing legacy systems", "How to plan phased improvements without putting daily business operations at risk."]
    ],
    resources: [
      ["MVP Scope", "Separate must-have launch features from later improvements to protect budget and momentum."],
      ["UX Improvements", "Use data, screen reviews, and user friction points to improve conversion and task completion."],
      ["Platform Cleanup", "Reduce old plugins, fragile flows, duplicated logic, and poor content structures."],
      ["Delivery Lessons", "Document decisions, risks, and outcomes so future project phases move faster."]
    ],
    topics: ["MVP", "Conversion", "Modernization", "UX", "Delivery", "ROI"]
  },
  {
    title: "News & Updates",
    slug: "news-updates.html",
    kicker: "Company Updates",
    summary: "Updates from Cybetiq on services, technology focus areas, product thinking, and digital delivery practices.",
    accent: "#ff5a7a",
    cards: [
      ["What we are building next", "A view into the service areas and technology capabilities we are strengthening."],
      ["Digital delivery improvements", "Updates on how we refine project workflows, QA, design reviews, and launch readiness."],
      ["Technology watchlist", "Important platform and tooling changes our team is tracking for clients."]
    ],
    resources: [
      ["Service Updates", "New focus areas across websites, software engineering, cloud, AI, and automation."],
      ["Workflow Notes", "How we improve estimates, review quality, launch readiness, and client communication."],
      ["Tooling Updates", "Practical notes on frameworks, CMS platforms, automation tools, and deployment systems."],
      ["Company Direction", "What we are improving internally to deliver cleaner and more premium digital work."]
    ],
    topics: ["Company", "Services", "Product", "Technology", "Delivery", "Updates"]
  }
];

const careers = {
  title: "Careers",
  slug: "careers.html",
  summary: "Join Cybetiq to build premium websites, software products, cloud systems, AI solutions, and automation workflows.",
  roles: [
    ["Frontend Developer", "React, JavaScript, responsive UI, performance, and API integration.", "Full Time"],
    ["Backend Developer", "Node.js, Laravel, Python, APIs, databases, and secure business logic.", "Full Time"],
    ["UI/UX Designer", "Product flows, wireframes, design systems, prototypes, and polished visual design.", "Full Time"],
    ["QA Automation Engineer", "Manual QA, Playwright automation, regression suites, and release validation.", "Full Time"]
  ],
  values: ["Clean execution", "Premium design sense", "Practical engineering", "Ownership mindset"]
};

const careerPerks = [
  ["Real Projects", "Work on websites, dashboards, apps, automation, and platforms that clients actually use."],
  ["Design Quality", "We care about spacing, content, UI polish, responsive behavior, and the final user experience."],
  ["Learning Culture", "Improve through reviews, practical feedback, new tools, and exposure to different industries."],
  ["Ownership", "Take responsibility for outcomes, not only assigned tasks."]
];

const hiringSteps = [
  ["Profile Review", "We review your work, technical fit, communication, and role alignment."],
  ["Practical Discussion", "We discuss previous projects, problem solving, design sense, or coding approach."],
  ["Short Assignment", "For some roles, we may ask for a small practical task related to real work."],
  ["Offer & Onboarding", "If there is a match, we align on expectations, joining plan, and first project."]
];

function insightMenuHtml() {
  return `<li class="has-dropdown">
                              <a href="tech-articles.html">Insights
                                 <span>
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                    </svg>
                                 </span>
                              </a>
                              <ul class="tp-submenu submenu">
                                 ${insights.map(item => `<li><a href="${item.slug}">${item.title}</a></li>`).join("\n                                 ")}
                              </ul>
                           </li>`;
}

function replaceNavigation(html) {
  html = html.replace(/<li class="has-dropdown">\s*<a href="#">Insights[\s\S]*?<\/ul>\s*<\/li>/, insightMenuHtml());
  html = html.replace(/<li class="has-dropdown">\s*<a href="#">\s*Careers\s*<\/a>\s*<\/li>/, `<li class="has-dropdown"><a href="careers.html">Careers</a></li>`);
  html = html.replace(/<li class="has-dropdown">\s*<a href="careers\.html">\s*Careers\s*<\/a>\s*<\/li>/, `<li class="has-dropdown"><a href="careers.html">Careers</a></li>`);
  return html;
}

function insightMain(item) {
  if (item.slug === "news-updates.html") return newsMain(item);
  if (item.slug === "tech-articles.html") return techArticlesMain(item);
  if (item.slug === "ai-trends.html") return aiTrendsMain(item);
  return `         <main>
            <section class="insight-hero" style="--insight-accent:${item.accent};">
               <div class="container">
                  <div class="row align-items-end gy-4">
                     <div class="col-lg-8">
                        <span>${item.kicker}</span>
                        <h1>${item.title}</h1>
                        <p>${item.summary}</p>
                     </div>
                     <div class="col-lg-4">
                        <div class="insight-hero-panel">
                           <strong>${item.topics.length}</strong>
                           <p>Focused topic areas curated for business and technology teams.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="insight-featured">
               <div class="container">
                  <div class="row g-4">
                     <div class="col-lg-5">
                        <div class="insight-editorial">
                           <span>Featured Thinking</span>
                           <h2>Actionable insight for better digital decisions.</h2>
                           <p>Each page is designed as a premium resource hub. Use these topics to plan projects, reduce delivery risk, and understand what matters before investing in technology.</p>
                           <a href="contact-us.html">Discuss a Project <i class="fa-light fa-arrow-right"></i></a>
                        </div>
                     </div>
                     <div class="col-lg-7">
                        <div class="row g-4">
                           ${item.cards.map((card, index) => `<div class="col-md-6 ${index === 0 ? "col-lg-12" : ""}"><article class="insight-card"><span>0${index + 1}</span><h3>${card[0]}</h3><p>${card[1]}</p><a href="contact-us.html">Talk to an expert</a></article></div>`).join("\n                           ")}
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="insight-topics">
               <div class="container">
                  <div class="row align-items-center gy-4">
                     <div class="col-lg-5"><span>Explore Topics</span><h2>What this section covers</h2></div>
                     <div class="col-lg-7"><div>${item.topics.map(topic => `<a href="contact-us.html">${topic}</a>`).join("")}</div></div>
                  </div>
               </div>
            </section>
            <section class="insight-resources">
               <div class="container">
                  <div class="row align-items-end gy-3 mb-45">
                     <div class="col-lg-7"><span>Resource Library</span><h2>More practical areas to explore</h2></div>
                     <div class="col-lg-5"><p>Use these sections as a planning reference before starting design, development, migration, or optimization work.</p></div>
                  </div>
                  <div class="row g-4">
                     ${item.resources.map((resource, index) => `<div class="col-lg-3 col-md-6"><div class="insight-resource-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${resource[0]}</h3><p>${resource[1]}</p></div></div>`).join("\n                     ")}
                  </div>
               </div>
            </section>
            <section class="insight-newsletter">
               <div class="container">
                  <div class="row align-items-center gy-4">
                     <div class="col-lg-7"><h2>Turn insight into a clear project plan.</h2><p>Share your website, app, cloud, AI, or automation idea. We will help shape the practical roadmap.</p></div>
                     <div class="col-lg-5"><a href="contact-us.html">Plan With Cybetiq <i class="fa-light fa-arrow-right"></i></a></div>
                  </div>
               </div>
            </section>
         </main>
`;
}

function aiTrendsMain(item) {
  return `         <main>
            <section class="ai-trends-hero" style="--insight-accent:${item.accent};">
               <div class="container">
                  <div class="row align-items-center gy-5">
                     <div class="col-lg-7">
                        <span class="ai-trends-eyebrow">${item.kicker}</span>
                        <h1>AI trends that are practical enough to build.</h1>
                        <p>${item.summary} We focus on useful automation, clean data, reliable integrations, and AI workflows that can be measured in real operations.</p>
                        <div class="ai-trends-actions">
                           <a href="AI-consulting.html">Explore AI Services <i class="fa-light fa-arrow-right"></i></a>
                           <a href="contact-us.html">Plan AI Roadmap</a>
                        </div>
                     </div>
                     <div class="col-lg-5">
                        <div class="ai-trends-orbit">
                           <div class="ai-trends-core"><i class="fa-light fa-brain-circuit"></i><span>AI</span></div>
                           <div><i class="fa-light fa-robot"></i><span>Automation</span></div>
                           <div><i class="fa-light fa-database"></i><span>Data</span></div>
                           <div><i class="fa-light fa-message-bot"></i><span>Assistants</span></div>
                           <div><i class="fa-light fa-chart-line-up"></i><span>Insight</span></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section class="ai-trends-featured">
               <div class="container">
                  <div class="ai-trends-heading">
                     <span class="ai-trends-label">Trend Signals</span>
                     <h2>Where AI is becoming useful for business teams.</h2>
                  </div>
                  <div class="ai-trends-card-grid">
                     ${item.cards.map((card, index) => `<article class="ai-trends-card ${index === 0 ? "is-primary" : ""}">
                        <span>0${index + 1}</span>
                        <i class="${["fa-light fa-wand-magic-sparkles", "fa-light fa-database", "fa-light fa-radar"][index]}"></i>
                        <h3>${card[0]}</h3>
                        <p>${card[1]}</p>
                     </article>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="ai-trends-readiness">
               <div class="container">
                  <div class="row align-items-end gy-4 mb-45">
                     <div class="col-lg-7">
                        <span class="ai-trends-label">AI Readiness</span>
                        <h2>Before adding AI, make the workflow measurable.</h2>
                     </div>
                     <div class="col-lg-5">
                        <p>Strong AI implementation starts with narrow use cases, clean data, clear permissions, fallback paths, and a release process that teams can trust.</p>
                     </div>
                  </div>
                  <div class="ai-trends-readiness-grid">
                     ${item.resources.map((resource, index) => `<div class="ai-trends-readiness-card">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <h3>${resource[0]}</h3>
                        <p>${resource[1]}</p>
                     </div>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="ai-trends-workflow">
               <div class="container">
                  <div class="row align-items-center gy-5">
                     <div class="col-lg-5">
                        <span class="ai-trends-label">Implementation Flow</span>
                        <h2>From idea to controlled AI rollout.</h2>
                        <p>We help shape AI projects so they can launch safely, improve over time, and connect with your existing tools.</p>
                     </div>
                     <div class="col-lg-7">
                        <div class="ai-trends-flow">
                           ${[
                             ["01", "Use Case", "Choose a workflow with clear value and measurable output."],
                             ["02", "Data", "Prepare sources, permissions, structure, and quality checks."],
                             ["03", "Prototype", "Test the experience with real examples and constraints."],
                             ["04", "Integrate", "Connect AI into apps, websites, dashboards, and operations."]
                           ].map(step => `<div><span>${step[0]}</span><h3>${step[1]}</h3><p>${step[2]}</p></div>`).join("\n                           ")}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section class="ai-trends-topic-band">
               <div class="container">
                  <div class="row align-items-center gy-4">
                     <div class="col-lg-5"><span class="ai-trends-label">Topics</span><h2>Explore practical AI themes.</h2></div>
                     <div class="col-lg-7"><div>${item.topics.map((topic, index) => `<a href="contact-us.html"><i class="${["fa-light fa-brain-circuit", "fa-light fa-gears", "fa-light fa-chart-network", "fa-light fa-database", "fa-light fa-message-bot", "fa-light fa-chart-line-up"][index]}"></i>${topic}</a>`).join("")}</div></div>
                  </div>
               </div>
            </section>

          
         </main>
`;
}

function techArticlesMain(item) {
  return `         <main>
            <section class="articles-premium-hero" style="--insight-accent:${item.accent};">
               <div class="container">
                  <div class="row align-items-center gy-5">
                     <div class="col-lg-7">
                        <span class="articles-eyebrow">${item.kicker}</span>
                        <h1>Technical articles for better digital product decisions.</h1>
                        <p>${item.summary} Read practical thinking on architecture, frontend quality, backend planning, performance, cloud delivery, and maintainable software.</p>
                        <div class="articles-hero-actions">
                           <a href="contact-us.html">Discuss a Build <i class="fa-light fa-arrow-right"></i></a>
                           <a href="case-study-insights.html">View Case Insights</a>
                        </div>
                     </div>
                     <div class="col-lg-5">
                        <div class="articles-feature-panel">
                           <span>Featured Read</span>
                           <h2>Choosing the right web stack before development starts.</h2>
                           <p>Framework choice, hosting, CMS needs, performance goals, integrations, and maintenance ownership all shape the long-term cost of a build.</p>
                           <a href="contact-us.html">Talk to an expert <i class="fa-light fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section class="articles-editorial-grid-section">
               <div class="container">
                  <div class="articles-section-heading">
                     <span class="articles-section-label">Latest Thinking</span>
                     <h2>Practical articles for teams planning websites, apps, and platforms.</h2>
                  </div>
                  <div class="articles-editorial-grid">
                     ${item.cards.map((card, index) => `<article class="articles-post-card ${index === 0 ? "is-large" : ""}">
                        <div class="articles-post-meta"><span>0${index + 1}</span><small>${["Architecture", "Scalability", "Maintainability"][index]}</small></div>
                        <h3>${card[0]}</h3>
                        <p>${card[1]}</p>
                        <a href="contact-us.html">Plan this topic <i class="fa-light fa-arrow-right"></i></a>
                     </article>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="articles-playbook-section">
               <div class="container">
                  <div class="row align-items-end gy-4 mb-45">
                     <div class="col-lg-7">
                        <span class="articles-section-label">Engineering Playbook</span>
                        <h2>What we evaluate before recommending a technical direction.</h2>
                     </div>
                     <div class="col-lg-5">
                        <p>Good technical decisions are grounded in users, content, integrations, operations, team ownership, and future changes.</p>
                     </div>
                  </div>
                  <div class="articles-playbook-list">
                     ${item.resources.map((resource, index) => `<div class="articles-playbook-item">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <div>
                           <h3>${resource[0]}</h3>
                           <p>${resource[1]}</p>
                        </div>
                     </div>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="articles-topic-lab">
               <div class="container">
                  <div class="row align-items-center gy-4">
                     <div class="col-lg-5">
                        <span class="articles-section-label">Topic Lab</span>
                        <h2>Explore technical themes by project need.</h2>
                     </div>
                     <div class="col-lg-7">
                        <div>${item.topics.map((topic, index) => `<a href="contact-us.html"><i class="${["fa-light fa-sitemap", "fa-light fa-gauge-high", "fa-light fa-code", "fa-light fa-server", "fa-light fa-vial", "fa-light fa-cloud"][index]}"></i>${topic}</a>`).join("")}</div>
                     </div>
                  </div>
               </div>
            </section>

            <section class="articles-premium-cta">
               <div class="container">
                  <div>
                     <span>Need engineering clarity?</span>
                     <h2>Use the right technical plan before investing in the build.</h2>
                     <a href="contact-us.html">Plan With Cybetiq <i class="fa-light fa-arrow-right"></i></a>
                  </div>
               </div>
            </section>
         </main>
`;
}

function newsMain(item) {
  return `         <main>
            <section class="news-premium-hero" style="--insight-accent:${item.accent};">
               <div class="container">
                  <div class="row align-items-center gy-5">
                     <div class="col-lg-7">
                        <span class="news-eyebrow">${item.kicker}</span>
                        <h1>News, product notes, and delivery updates from Cybetiq.</h1>
                        <p>${item.summary} Follow what we are improving across websites, software, AI automation, cloud, design, and delivery quality.</p>
                        <div class="news-hero-actions">
                           <a href="contact-us.html">Start a Project <i class="fa-light fa-arrow-right"></i></a>
                           <a href="tech-articles.html">Read Insights</a>
                        </div>
                     </div>
                     <div class="col-lg-5">
                        <div class="news-signal-board">
                           <div><span>Now</span><strong>AI + Automation</strong><p>Sharper workflows for lead handling, reporting, and support operations.</p></div>
                           <div><span>Next</span><strong>Premium Web Delivery</strong><p>More polished service pages, cleaner UX patterns, and faster launch systems.</p></div>
                           <div><span>Focus</span><strong>Cloud Reliability</strong><p>Deployment, monitoring, backup, and support improvements for active platforms.</p></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section class="news-feature-strip">
               <div class="container">
                  <div class="row g-4">
                     ${item.cards.map((card, index) => `<div class="col-lg-4"><article class="news-feature-card">
                        <span>0${index + 1}</span>
                        <h2>${card[0]}</h2>
                        <p>${card[1]}</p>
                        <a href="contact-us.html">Discuss this update <i class="fa-light fa-arrow-right"></i></a>
                     </article></div>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="news-timeline-section">
               <div class="container">
                  <div class="row align-items-end gy-4 mb-45">
                     <div class="col-lg-7">
                        <span class="news-section-label">Delivery Journal</span>
                        <h2>Recent directions we are strengthening.</h2>
                     </div>
                     <div class="col-lg-5">
                        <p>Short notes from our internal roadmap, service focus areas, and project delivery improvements.</p>
                     </div>
                  </div>
                  <div class="news-timeline">
                     ${[
                       ["Service Depth", "Expanded page-level content and service positioning for software, design, cloud, data, and AI categories."],
                       ["Design Quality", "More refined interface patterns, cleaner typography, improved footer experience, and premium FAQ styling."],
                       ["Automation Readiness", "Better AI consulting flows around data readiness, use cases, governance, and production integration."],
                       ["Support Systems", "Stronger maintenance messaging around monitoring, backups, updates, performance, and platform health."]
                     ].map((row, index) => `<div class="news-timeline-item">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <div><h3>${row[0]}</h3><p>${row[1]}</p></div>
                     </div>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="news-focus-section">
               <div class="container">
                  <div class="news-focus-heading">
                     <span class="news-section-label">Focus Areas</span>
                     <h2>Updates organized for business and technology teams.</h2>
                  </div>
                  <div class="news-focus-grid">
                     ${item.resources.map((resource, index) => `<div class="news-focus-card">
                        <i class="${["fa-light fa-bullhorn", "fa-light fa-code-merge", "fa-light fa-screwdriver-wrench", "fa-light fa-compass-drafting"][index]}"></i>
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <h3>${resource[0]}</h3>
                        <p>${resource[1]}</p>
                     </div>`).join("\n                     ")}
                  </div>
               </div>
            </section>

            <section class="news-topic-band">
               <div class="container">
                  <div class="row align-items-center gy-4">
                     <div class="col-lg-5"><span class="news-section-label">Topics</span><h2>Follow the signals that matter.</h2></div>
                     <div class="col-lg-7"><div>${item.topics.map(topic => `<a href="contact-us.html">${topic}</a>`).join("")}</div></div>
                  </div>
               </div>
            </section>

            <section class="news-premium-cta">
               <div class="container">
                  <div>
                     <span>Need a clear next move?</span>
                     <h2>Turn the latest update into a practical project roadmap.</h2>
                     <a href="contact-us.html">Plan With Cybetiq <i class="fa-light fa-arrow-right"></i></a>
                  </div>
               </div>
            </section>
         </main>
`;
}

function careersMain() {
  return `         <main>
            <section class="career-hero">
               <div class="container">
                  <div class="row align-items-center gy-5">
                     <div class="col-lg-7">
                        <span>Careers at Cybetiq</span>
                        <h1>Build premium digital products with a focused technology team.</h1>
                        <p>${careers.summary}</p>
                        <a href="mailto:sales@cybetiq.com">Apply Now <i class="fa-light fa-arrow-right"></i></a>
                     </div>
                     <div class="col-lg-5">
                        <div class="career-signal">
                           <strong>Open Roles</strong>
                           <span>${careers.roles.length}</span>
                           <p>Design, development, cloud, QA, and product delivery opportunities.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="career-values">
               <div class="container">
                  <div class="row g-4">
                     ${careers.values.map((value, index) => `<div class="col-lg-3 col-md-6"><div><span>0${index + 1}</span><h3>${value}</h3><p>We value clear thinking, reliable delivery, and work that feels polished in real use.</p></div></div>`).join("\n                     ")}
                  </div>
               </div>
            </section>
            <section class="career-perks">
               <div class="container">
                  <div class="row align-items-end gy-3 mb-45">
                     <div class="col-lg-7"><span>Why Join</span><h2>Work where quality and ownership matter.</h2></div>
                     <div class="col-lg-5"><p>Our team is small enough for direct impact and focused enough to care about the details that make digital products feel premium.</p></div>
                  </div>
                  <div class="row g-4">
                     ${careerPerks.map((perk, index) => `<div class="col-lg-3 col-md-6"><div class="career-perk"><span>${String(index + 1).padStart(2, "0")}</span><h3>${perk[0]}</h3><p>${perk[1]}</p></div></div>`).join("\n                     ")}
                  </div>
               </div>
            </section>
            <section class="career-roles">
               <div class="container">
                  <div class="row align-items-end gy-3 mb-45">
                     <div class="col-lg-7"><span>Current Openings</span><h2>Roles we are hiring for</h2></div>
                     <div class="col-lg-5"><p>Send your portfolio, GitHub, resume, or project work. We care about practical ability and ownership.</p></div>
                  </div>
                  <div class="career-role-list">
                     ${careers.roles.map(role => `<div class="career-role"><div><h3>${role[0]}</h3><p>${role[1]}</p></div><span>${role[2]}</span><a href="mailto:sales@cybetiq.com">Apply</a></div>`).join("\n                     ")}
                  </div>
               </div>
            </section>
            <section class="career-hiring">
               <div class="container">
                  <div class="row align-items-end gy-3 mb-45">
                     <div class="col-lg-6"><span>Hiring Process</span><h2>Simple, practical, and work-focused.</h2></div>
                     <div class="col-lg-6"><p>We keep the process clear so both sides understand the role, expectations, and quality bar before joining.</p></div>
                  </div>
                  <div class="career-hiring-steps">
                     ${hiringSteps.map((step, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><h3>${step[0]}</h3><p>${step[1]}</p></div>`).join("\n                     ")}
                  </div>
               </div>
            </section>
            <section class="career-cta">
               <div class="container"><div><h2>Do not see the exact role?</h2><p>Send your profile anyway. Strong designers, developers, QA engineers, and product thinkers are always worth a conversation.</p><a href="mailto:sales@cybetiq.com">Send Profile</a></div></div>
            </section>
         </main>
`;
}

const indexPath = path.join(root, "index.html");
let source = replaceNavigation(fs.readFileSync(indexPath, "utf8"));
fs.writeFileSync(indexPath, source);

const mainStart = source.indexOf("         <main>");
const footerStart = source.indexOf("         <footer>");
const before = source.slice(0, mainStart);
const after = source.slice(footerStart);

for (const item of insights) {
  let html = before + insightMain(item) + after;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${item.title} : Cybetiq Insights</title>`);
  html = html.replace('<meta name="description" content="">', `<meta name="description" content="${item.summary}">`);
  fs.writeFileSync(path.join(root, item.slug), html);
}

let careerHtml = before + careersMain() + after;
careerHtml = careerHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>Careers : Cybetiq</title>`);
careerHtml = careerHtml.replace('<meta name="description" content="">', `<meta name="description" content="${careers.summary}">`);
fs.writeFileSync(path.join(root, careers.slug), careerHtml);

for (const file of fs.readdirSync(root).filter(name => name.endsWith(".html"))) {
  const full = path.join(root, file);
  fs.writeFileSync(full, replaceNavigation(fs.readFileSync(full, "utf8")));
}
