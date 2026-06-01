const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const techs = [
  ["Node.js Development", "Node.js (Express / Nest)", "nodejs-development.html", "Backend", "#4caf50", "High-performance backend engineering for APIs, realtime products, and scalable business platforms using Node.js, Express, and NestJS.", ["Realtime APIs", "Microservices", "Event-driven systems", "Enterprise integrations"], ["Node.js", "Express", "NestJS", "TypeScript", "Prisma", "PostgreSQL"]],
  ["Laravel Development", "Laravel", "laravel-development.html", "Backend", "#ff4f45", "Premium Laravel development for secure portals, SaaS products, admin systems, and business-critical web applications.", ["Custom CRM", "SaaS platforms", "Payment workflows", "Admin dashboards"], ["Laravel", "PHP", "Livewire", "MySQL", "Redis", "Queues"]],
  ["Python Development", "Python", "python-development.html", "Backend", "#3677a9", "Python engineering for data-rich platforms, automation, AI-enabled products, APIs, and dependable backend systems.", ["Data pipelines", "API platforms", "AI workflows", "Automation engines"], ["Python", "Django", "FastAPI", "Celery", "Pandas", "PostgreSQL"]],
  ["JavaScript Development", "JavaScript", "javascript-development.html", "Frontend", "#f7df1e", "Modern JavaScript engineering for fast, accessible, and polished web experiences that feel sharp across devices.", ["Interactive UI", "SPA builds", "Design systems", "Performance tuning"], ["JavaScript", "ESNext", "Vite", "Webpack", "REST", "GraphQL"]],
  ["Angular Development", "Angular", "angular-development.html", "Frontend", "#dd0031", "Enterprise Angular development for structured, maintainable products with strong architecture and long-term reliability.", ["Enterprise portals", "Role-based apps", "Design systems", "Complex forms"], ["Angular", "TypeScript", "RxJS", "NgRx", "Material", "REST APIs"]],
  ["ReactJS Development", "ReactJS", "reactjs-development.html", "Frontend", "#61dafb", "ReactJS product engineering for premium frontends, dashboards, commerce flows, and scalable digital experiences.", ["Dashboards", "Headless commerce", "Product UI", "Component libraries"], ["React", "Next.js", "TypeScript", "Redux", "Tailwind", "GraphQL"]],
  ["Vue.js Development", "Vue.js", "vuejs-development.html", "Frontend", "#42b883", "Vue.js development for elegant, lightweight, and fast web applications with clean interfaces and maintainable code.", ["Customer portals", "Admin panels", "MVP builds", "Progressive apps"], ["Vue", "Nuxt", "Pinia", "TypeScript", "Vite", "REST APIs"]],
  ["React Native Development", "React Native", "react-native-development.html", "Mobile", "#61dafb", "Cross-platform mobile app development with React Native for polished iOS and Android products from one shared codebase.", ["Consumer apps", "Internal apps", "Push workflows", "Offline-first UX"], ["React Native", "Expo", "TypeScript", "Firebase", "Redux", "Native modules"]],
  ["iOS Native Development", "iOS Native", "ios-native-development.html", "Mobile", "#111111", "Native iOS app development for premium Apple experiences with smooth interactions, secure data handling, and App Store readiness.", ["Swift apps", "iPad workflows", "Apple integrations", "App Store releases"], ["Swift", "SwiftUI", "UIKit", "Core Data", "StoreKit", "CloudKit"]],
  ["Android Native Development", "Android Native", "android-native-development.html", "Mobile", "#3ddc84", "Native Android development for reliable, high-quality mobile experiences across phones, tablets, and business devices.", ["Kotlin apps", "Enterprise mobility", "Device APIs", "Play Store releases"], ["Kotlin", "Java", "Jetpack", "Compose", "Room", "Firebase"]],
  ["Flutter Development", "Flutter", "flutter-development.html", "Mobile", "#02569b", "Flutter app development for expressive cross-platform products with consistent UI, strong performance, and fast delivery.", ["Cross-platform apps", "MVP launches", "Custom UI", "Business tools"], ["Flutter", "Dart", "Bloc", "Provider", "Firebase", "REST APIs"]],
  ["AWS Cloud Solutions", "AWS Cloud", "aws-cloud-solutions.html", "Cloud", "#ff9900", "AWS cloud architecture, migration, and modernization for secure, resilient, and cost-aware digital products.", ["Cloud migration", "Serverless apps", "DevOps pipelines", "Managed infrastructure"], ["AWS", "EC2", "Lambda", "RDS", "S3", "CloudFront"]],
  ["Azure Cloud Solutions", "Azure", "azure-cloud-solutions.html", "Cloud", "#0078d4", "Microsoft Azure solutions for enterprise-grade apps, cloud migration, identity, analytics, and secure infrastructure.", ["Azure migration", "Enterprise apps", "Identity setup", "Managed services"], ["Azure", "App Service", "Functions", "SQL Database", "Entra ID", "DevOps"]],
  ["WordPress Development", "WordPress", "wordpress-development.html", "CMS", "#21759b", "Premium WordPress development for fast corporate websites, content platforms, and conversion-focused digital experiences.", ["Corporate websites", "Custom themes", "Headless CMS", "Performance tuning"], ["WordPress", "PHP", "ACF", "Gutenberg", "WooCommerce", "MySQL"]],
  ["Drupal Development", "Drupal", "drupal-development.html", "CMS", "#0678be", "Drupal development for robust content ecosystems, structured publishing, multilingual sites, and enterprise governance.", ["Content platforms", "Enterprise CMS", "Multilingual sites", "Secure publishing"], ["Drupal", "PHP", "Twig", "Composer", "MySQL", "Solr"]],
  ["WooCommerce Development", "WooCommerce", "woocommerce-development.html", "CMS", "#96588a", "WooCommerce development for elegant online stores, custom checkout flows, subscriptions, and commerce integrations.", ["Online stores", "Custom checkout", "Subscriptions", "Payment integrations"], ["WooCommerce", "WordPress", "PHP", "Stripe", "Razorpay", "MySQL"]],
  ["MongoDB Development", "MongoDB", "mongodb-development.html", "Database", "#47a248", "MongoDB consulting and implementation for flexible data models, high-volume applications, and modern document databases.", ["Document databases", "Schema design", "Aggregation", "Atlas deployments"], ["MongoDB", "Atlas", "Mongoose", "Aggregation", "Indexes", "Change streams"]],
  ["MySQL Development", "MySQL", "mysql-development.html", "Database", "#00758f", "MySQL database design, optimization, migration, and integration for reliable business applications and reporting systems.", ["Schema design", "Query tuning", "Data migration", "Reporting systems"], ["MySQL", "MariaDB", "Stored procedures", "Indexes", "Replication", "Backups"]],
  ["Playwright Automation", "Playwright", "playwright-automation.html", "Automation", "#2ead33", "Playwright automation for dependable end-to-end testing, regression coverage, browser workflows, and release confidence.", ["E2E testing", "Regression suites", "CI automation", "Cross-browser QA"], ["Playwright", "TypeScript", "CI/CD", "Visual checks", "API testing", "Reports"]]
].map(([title, menu, slug, category, accent, summary, proof, stack]) => ({ title, menu, slug, category, accent, summary, proof, stack }));

function menuHtml() {
  const groups = techs.reduce((acc, item) => {
    acc[item.category] ||= [];
    acc[item.category].push(item);
    return acc;
  }, {});
  return `<li class="has-dropdown p-inherit">
<a href="#">Technologies
<span>
<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
</svg>
</span>
</a>
<div class="tp-megamenu-wrapper mega-menu megamenu-white-bg"><div class="row gx-0"><div class="col-xl-12"><div class="row gx-0">
${Object.entries(groups).map(([group, items]) => `<div class="col-xl-3"><div class="tp-megamenu-list"><h4 class="tp-megamenu-title">${group}</h4><ul>
${items.map(item => `<li><a href="${item.slug}">${item.menu}</a></li>`).join("\n")}
</ul></div></div>`).join("\n")}
</div></div></div></div>
</li>`;
}

function replaceMenu(html) {
  const start = html.indexOf('<li class="has-dropdown p-inherit">\r\n                        <a href="#">Technologies');
  const altStart = html.indexOf('<li class="has-dropdown p-inherit">\n                        <a href="#">Technologies');
  const compactStart = html.indexOf('<li class="has-dropdown p-inherit">\n<a href="#">Technologies');
  const s = start >= 0 ? start : altStart >= 0 ? altStart : compactStart;
  if (s < 0) return html;
  const caseStudiesIndented = html.indexOf('                           <li class="has-dropdown">\r\n                              <a href="#">Case Studies', s);
  const caseStudiesIndentedLf = html.indexOf('                           <li class="has-dropdown">\n                              <a href="#">Case Studies', s);
  const caseStudiesCompact = html.indexOf('<li class="has-dropdown">\n                              <a href="#">Case Studies', s);
  const e = caseStudiesIndented >= 0 ? caseStudiesIndented : caseStudiesIndentedLf >= 0 ? caseStudiesIndentedLf : caseStudiesCompact;
  if (e < 0) return html;
  return html.slice(0, s) + menuHtml() + html.slice(e);
}

function initials(title) {
  return title.replace(".js", "").replace("JS", "").split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

const categoryContent = {
  Backend: {
    intro: "We build backend foundations that can handle complex business rules, fast APIs, integrations, and long-term product growth without becoming difficult to maintain.",
    outcomes: ["API architecture", "Database design", "Authentication", "Third-party integrations", "Admin workflows", "Cloud deployment"],
    useCases: ["SaaS platforms with subscription logic and role management", "Customer portals connected with CRM, ERP, payment, and reporting systems", "Realtime dashboards, booking systems, marketplaces, and internal tools"],
    metrics: ["99.9%", "Uptime Ready", "3x", "Faster APIs"],
    roadmap: ["System audit and technical planning", "API contract, schema, and security model", "Sprint-based implementation with QA", "Deployment, monitoring, and handover"]
  },
  Frontend: {
    intro: "We design and engineer frontends that look premium, load fast, and make complex workflows feel simple for customers, operators, and internal teams.",
    outcomes: ["Component systems", "Responsive UI", "Dashboard UX", "Performance tuning", "API integration", "Conversion flows"],
    useCases: ["High-converting product websites and landing experiences", "Admin panels, analytics dashboards, and operational portals", "Headless commerce, booking, CRM, and workflow interfaces"],
    metrics: ["90+", "PageSpeed Focus", "100%", "Responsive UI"],
    roadmap: ["UX structure and interface planning", "Design system and component build", "API integration and interaction polish", "Performance, browser, and device testing"]
  },
  Mobile: {
    intro: "We create mobile applications with polished screens, dependable flows, secure data handling, and release-ready builds for consumer and business use.",
    outcomes: ["Mobile UX", "Push notifications", "Offline flows", "API integration", "Store release", "Analytics setup"],
    useCases: ["Customer apps for booking, commerce, service, and engagement", "Internal field-force, inventory, reporting, and operations apps", "MVP mobile products that need fast launch with room to scale"],
    metrics: ["2", "App Stores", "1", "Smooth Product"],
    roadmap: ["App scope, user journeys, and release plan", "Interactive UI and native capability mapping", "Feature development with device testing", "Store submission and post-launch support"]
  },
  Cloud: {
    intro: "We plan, migrate, and manage cloud environments that keep products secure, resilient, observable, and cost-aware as usage grows.",
    outcomes: ["Cloud migration", "Serverless setup", "CI/CD pipelines", "Security hardening", "Monitoring", "Cost control"],
    useCases: ["Application migration from shared hosting or legacy servers", "Scalable infrastructure for SaaS, commerce, and data platforms", "Secure environments for regulated business workflows and internal tools"],
    metrics: ["24/7", "Monitoring", "30%", "Cost Control"],
    roadmap: ["Cloud readiness and architecture review", "Infrastructure, network, and security setup", "Migration or deployment automation", "Monitoring, optimization, and support"]
  },
  CMS: {
    intro: "We build CMS and commerce platforms that are easy for teams to manage, fast for visitors, and flexible enough for marketing and business growth.",
    outcomes: ["Custom themes", "Content models", "SEO structure", "Commerce flows", "Editor experience", "Speed optimization"],
    useCases: ["Corporate websites with managed content and lead generation", "Publishing platforms with structured categories and landing pages", "Online stores with custom products, checkout, and integrations"],
    metrics: ["Core", "SEO Ready", "Fast", "Editor Flow"],
    roadmap: ["Content and conversion planning", "Theme, template, and component design", "CMS setup, integrations, and QA", "Launch, training, and optimization"]
  },
  Database: {
    intro: "We design, optimize, migrate, and maintain data layers so applications stay reliable, searchable, and fast as business data grows.",
    outcomes: ["Schema design", "Query tuning", "Migration", "Backup planning", "Indexing", "Reporting"],
    useCases: ["Data-heavy products with search, filtering, and analytics needs", "Legacy database cleanup, migration, and performance improvement", "Operational reporting for finance, inventory, CRM, and service teams"],
    metrics: ["Clean", "Data Model", "Fast", "Queries"],
    roadmap: ["Data audit and access pattern review", "Schema, indexing, and migration planning", "Implementation with validation checks", "Backup, monitoring, and optimization"]
  },
  Automation: {
    intro: "We create automation suites that reduce manual QA, catch regressions earlier, and help teams release websites and applications with confidence.",
    outcomes: ["E2E tests", "Visual checks", "CI integration", "Regression packs", "API testing", "Reports"],
    useCases: ["Regression automation for business-critical user journeys", "Cross-browser checks for websites, dashboards, and commerce flows", "Release validation suites connected with CI/CD pipelines"],
    metrics: ["70%", "Manual QA Saved", "Fast", "Release Checks"],
    roadmap: ["Journey mapping and risk prioritization", "Test architecture and fixture setup", "Automation implementation and CI reports", "Maintenance plan and team handover"]
  }
};

function contentFor(item) {
  return categoryContent[item.category] || categoryContent.Backend;
}

function featureCards(item, content) {
  return content.outcomes.map((name, index) => {
    const copy = [
      `We plan ${name.toLowerCase()} around your business workflow, not only the technology checklist.`,
      `${item.menu} implementation stays clean, documented, and ready for future feature growth.`,
      `Every build is reviewed for usability, performance, security, and maintainability before launch.`
    ][index % 3];
    const number = String(index + 1).padStart(2, "0");
    return `<div class="col-xl-4 col-md-6"><div class="tech-premium-service-card"><span>${number}</span><h3>${name}</h3><p>${copy}</p></div></div>`;
  }).join("\n");
}

function useCaseCards(content) {
  return content.useCases.map((text, index) => `<div class="tech-premium-usecase"><span>0${index + 1}</span><p>${text}</p></div>`).join("");
}

function faqAccordion(item) {
  const id = item.slug.replace(".html", "").replace(/[^a-z0-9]/gi, "-");
  const faqs = [
    [`Can you work on an existing ${item.menu} project?`, "Yes. We can audit the current code, identify risks, improve performance, add new features, or rebuild specific parts without disturbing the full product."],
    ["Do you handle design and development together?", "Yes. For product pages, dashboards, portals, and apps, we can cover UX structure, interface design, development, QA, and launch support."],
    ["Will the page or product be easy to maintain?", "We keep components, naming, documentation, and deployment flow practical so your internal team or future developers can continue the work confidently."]
  ];
  return `<div class="accordion tech-faq-accordion" id="faq-${id}">
${faqs.map(([question, answer], index) => {
  const itemId = `faq-${id}-${index + 1}`;
  const show = index === 0 ? " show" : "";
  const collapsed = index === 0 ? "" : " collapsed";
  const expanded = index === 0 ? "true" : "false";
  return `<div class="accordion-item">
   <h3 class="accordion-header" id="${itemId}-heading">
      <button class="accordion-button${collapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#${itemId}" aria-expanded="${expanded}" aria-controls="${itemId}">${question}</button>
   </h3>
   <div id="${itemId}" class="accordion-collapse collapse${show}" aria-labelledby="${itemId}-heading" data-bs-parent="#faq-${id}">
      <div class="accordion-body">${answer}</div>
   </div>
</div>`;
}).join("\n")}
</div>`;
}

function main(item) {
  const content = contentFor(item);
  const related = techs.filter(t => t.category === item.category && t.slug !== item.slug).map(t => `<a href="${t.slug}">${t.menu}</a>`).join("") || '<a href="contact-us.html">Discuss Automation</a>';
  return `         <main>
            <section class="tech-premium-hero" style="--tech-accent:${item.accent};">
               <div class="container"><div class="row align-items-center gy-5">
                  <div class="col-xl-7 col-lg-7">
                     <span class="tech-premium-kicker">${item.category} Technology</span>
                     <h1>${item.title}</h1>
                     <p>${item.summary}</p>
                     <div class="tech-premium-actions"><a href="contact-us.html" class="tech-premium-btn">Start a Project <i class="fa-light fa-arrow-right"></i></a><a href="#tech-capabilities" class="tech-premium-link">View Capabilities</a></div>
                  </div>
                  <div class="col-xl-5 col-lg-5">
                     <div class="tech-premium-visual">
                       
                        <div class="tech-premium-console">
                           <div><span></span><span></span><span></span></div>
                           <p>cybetiq / ${item.slug.replace(".html", "")}</p>
                           <strong>${item.menu}</strong>
                           <ul>${item.stack.slice(0, 4).map(s => `<li>${s}</li>`).join("")}</ul>
                        </div>
                     </div>
                  </div>
               </div></div>
            </section>

            <section class="tech-premium-stats">
               <div class="container">
                  <div class="row g-0">
                     <div class="col-lg-3 col-6"><div><strong>${content.metrics[0]}</strong><span>${content.metrics[1]}</span></div></div>
                     <div class="col-lg-3 col-6"><div><strong>${content.metrics[2]}</strong><span>${content.metrics[3]}</span></div></div>
                     <div class="col-lg-3 col-6"><div><strong>6+</strong><span>Core Capabilities</span></div></div>
                     <div class="col-lg-3 col-6"><div><strong>4</strong><span>Delivery Phases</span></div></div>
                  </div>
               </div>
            </section>

            <section id="tech-capabilities" class="tech-premium-section"><div class="container">
               <div class="row align-items-end mb-45"><div class="col-lg-7"><span class="tech-premium-kicker dark">How We Help</span><h2>Premium ${item.menu} engineering for serious product teams.</h2></div><div class="col-lg-5"><p class="tech-premium-lead">${content.intro}</p></div></div>
               <div class="row g-4">
                  ${featureCards(item, content)}
               </div>
            </div></section>

            <section class="tech-premium-showcase">
               <div class="container">
                  <div class="row g-4 align-items-stretch">
                     <div class="col-lg-5">
                        <div class="tech-premium-showcase-title">
                           <span class="tech-premium-kicker">Business Fit</span>
                           <h2>Where ${item.menu} creates the most value.</h2>
                           <p>We choose the implementation approach based on your users, business model, integrations, and expected scale.</p>
                        </div>
                     </div>
                     <div class="col-lg-7"><div class="tech-premium-usecases">${useCaseCards(content)}</div></div>
                  </div>
               </div>
            </section>

            <section class="tech-premium-stack"><div class="container"><div class="row gy-4 align-items-center"><div class="col-lg-5"><span class="tech-premium-kicker dark">Tech Stack</span><h2>Tools we commonly pair with ${item.menu}.</h2></div><div class="col-lg-7"><ul>${item.stack.map(s => `<li>${s}</li>`).join("")}</ul></div></div></div></section>
            <section class="tech-premium-process">
               <div class="container">
                  <div class="row g-4">
                     ${content.roadmap.map((step, index) => `<div class="col-lg-3 col-md-6"><div><span>${String(index + 1).padStart(2, "0")}</span><h3>${["Discover", "Design", "Build", "Scale"][index]}</h3><p>${step}.</p></div></div>`).join("\n")}
                  </div>
               </div>
            </section>

            <section class="tech-premium-faq">
               <div class="container">
                  <div class="row gy-4">
                     <div class="col-lg-5"><span class="tech-premium-kicker dark">${item.menu}</span><h2>Frequently Asked Questions</h2></div>
                     <div class="col-lg-7">
                        ${faqAccordion(item)}
                     </div>
                  </div>
               </div>
            </section>

            <section class="tech-premium-related"><div class="container"><div class="row align-items-center gy-4"><div class="col-lg-5"><span class="tech-premium-kicker dark">Explore More</span><h2>Related ${item.category} technologies</h2></div><div class="col-lg-7"><div class="tech-premium-related-links">${related}</div></div></div></div></section>
            <section class="tech-premium-cta"><div class="container"><div class="tech-premium-cta-inner"><h2>Need a premium ${item.menu} team?</h2><p>Share your idea, product challenge, or existing system. We will map the practical next step.</p><a href="contact-us.html">Talk to Cybetiq <i class="fa-light fa-arrow-right"></i></a></div></div></section>
         </main>
`;
}

const indexPath = path.join(root, "index.html");
let source = replaceMenu(fs.readFileSync(indexPath, "utf8"));
fs.writeFileSync(indexPath, source);
const mainStart = source.indexOf("         <main>");
const footerStart = source.indexOf("         <footer>");
const before = source.slice(0, mainStart);
const after = source.slice(footerStart);

for (const item of techs) {
  let html = before + main(item) + after;
  html = html.replace("<title>Best Website Design &amp; Development Company in Noida, Delhi : Cybetiq</title>", `<title>${item.title} Company in Noida, Delhi : Cybetiq</title>`);
  html = html.replace('<meta name="description" content="">', `<meta name="description" content="${item.summary}">`);
  fs.writeFileSync(path.join(root, item.slug), html);
}

for (const name of ["about-us.html", "AI-consulting.html", "contact-us.html"]) {
  const file = path.join(root, name);
  if (fs.existsSync(file)) fs.writeFileSync(file, replaceMenu(fs.readFileSync(file, "utf8")));
}
