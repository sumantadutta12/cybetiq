const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const services = [
  {
    title: "Website Development",
    slug: "website-development.html",
    group: "Software Engineering",
    heroLines: ["Website", "Development", "Company"],
    summary: "Build a fast, secure, conversion-focused website that presents your brand clearly and gives visitors a smooth path to action.",
    leftLabel: "Website design and development services",
    mainTitle: "Create a premium digital presence with our expert website development solutions",
    intro: [
      "As a website development company, we build responsive, SEO-ready, and easy-to-manage websites for growing businesses. Every page is planned around brand clarity, user journeys, loading speed, and measurable lead generation.",
      "From corporate websites to service platforms and landing pages, our team combines clean UI, robust frontend engineering, CMS setup, analytics, and launch support so your website is ready for real business use."
    ],
    advantageTitle: "What sets us apart as a top-rated website development company?",
    advantage: [
      "Our website development services cover strategy, UX, design, frontend engineering, CMS integration, performance optimization, and post-launch support.",
      "Whether you need a new website or a redesign, we focus on clear content structure, strong visual hierarchy, mobile responsiveness, and maintainable implementation."
    ],
    features: [
      ["fa-light fa-browser", "Business-Focused Structure", "We plan pages, navigation, and calls to action around your customers, offers, and conversion goals."],
      ["fa-light fa-gauge-high", "Performance and SEO", "We optimize page speed, metadata, responsive behavior, accessibility basics, and technical SEO foundations."],
      ["fa-light fa-pen-to-square", "Easy Content Management", "We build maintainable templates and CMS workflows so your team can update content confidently."]
    ],
    useCasesKicker: "Website Use Cases",
    useCasesTitle: "Websites built around real business goals.",
    useCasesIntro: "We create websites that support discovery, credibility, conversion, and ongoing marketing operations.",
    useCases: [
      ["Corporate Websites", "Professional business websites with clear services, trust signals, and lead-generation paths."],
      ["Landing Pages", "Focused campaign pages for ads, product launches, events, and service promotions."],
      ["CMS Websites", "Editable websites with structured content, blogs, media, SEO controls, and reusable sections."],
      ["Website Redesign", "Modernize old websites with improved UX, speed, content structure, and mobile experience."]
    ],
    capabilityTitle: "From website idea to launch-ready digital presence.",
    capabilityIntro: "Our team covers discovery, content structure, UI design, development, CMS setup, QA, deployment, and maintenance.",
    capabilities: [
      ["fa-light fa-sitemap", "Information Architecture", "Clear page structure, navigation, content hierarchy, and conversion paths."],
      ["fa-light fa-palette", "UI Design", "Brand-aligned visual design with polished responsive layouts and reusable sections."],
      ["fa-light fa-code", "Frontend Development", "Clean HTML, CSS, JavaScript, CMS templates, and optimized asset delivery."],
      ["fa-light fa-magnifying-glass-chart", "SEO and Analytics", "Technical SEO setup, analytics events, performance checks, and launch validation."]
    ],
    stackTitle: "Website development technologies we use",
    stackIntro: "We use reliable frontend, CMS, analytics, and hosting tools to create websites that are practical to manage and ready to scale.",
    stack: ["HTML5", "CSS3", "JavaScript", "WordPress", "React", "Bootstrap", "MySQL", "Cloud Hosting", "Analytics", "SEO Tools", "Figma", "Git"],
    processTitle: "Planning, designing, and launching websites with a structured delivery process",
    process: [
      ["Discovery and Website Strategy", "We define your audience, goals, content needs, competitors, and conversion priorities before design starts."],
      ["Sitemap and Content Planning", "We structure pages, messaging, sections, and calls to action so visitors can find value quickly."],
      ["UI Design and Prototype", "We create responsive page designs that match your brand and keep the experience polished on every device."],
      ["Development and CMS Setup", "We build the website, connect content management, optimize assets, and keep the implementation maintainable."],
      ["Testing and Launch", "We test responsive behavior, forms, speed, SEO tags, browser compatibility, and production deployment."],
      ["Support and Optimization", "We monitor launch performance, resolve issues, and help improve content, conversion, and speed over time."]
    ],
    faqs: [
      ["How long does website development usually take?", "Most business websites take 3-8 weeks depending on page count, content readiness, design complexity, and integrations."],
      ["Can you redesign my existing website?", "Yes. We can audit your current website, improve UX and performance, rebuild the design, and migrate content where needed."],
      ["Will the website be mobile responsive and SEO-ready?", "Yes. We build responsive layouts and include technical SEO basics such as metadata, headings, speed checks, and clean page structure."]
    ]
  },
  {
    title: "Web App Development",
    slug: "web-app-development.html",
    group: "Software Engineering",
    heroLines: ["Web App", "Development", "Company"],
    summary: "Build secure, scalable, and user-friendly web applications for portals, dashboards, SaaS products, and business workflows.",
    leftLabel: "Web application development services",
    mainTitle: "Launch powerful digital products with our expert web app development solutions",
    intro: [
      "We develop custom web applications that support complex business logic, secure user accounts, dashboards, integrations, and scalable backend systems.",
      "From MVPs to enterprise portals, our team plans architecture, user flows, APIs, databases, frontend interfaces, testing, and deployment so your application is reliable from day one."
    ],
    advantageTitle: "What sets us apart as a web app development company?",
    advantage: [
      "Our web app services combine product thinking, clean UX, secure backend engineering, API integration, cloud deployment, and maintainable code practices.",
      "We focus on applications that are fast, easy to use, and practical to improve as your business workflows and customer needs evolve."
    ],
    features: [
      ["fa-light fa-window", "Product-Ready UX", "We translate complex workflows into clear screens, forms, dashboards, and user journeys."],
      ["fa-light fa-lock-keyhole", "Secure Architecture", "We design authentication, roles, validation, data handling, and deployment with security in mind."],
      ["fa-light fa-plug", "System Integration", "We connect CRMs, ERPs, payment gateways, analytics, communication tools, and internal APIs."]
    ],
    useCasesKicker: "Web App Use Cases",
    useCasesTitle: "Web applications built around real workflows.",
    useCasesIntro: "We build apps that make operations, customer service, sales, reporting, and product delivery easier to manage.",
    useCases: [
      ["Customer Portals", "Secure portals for users to manage profiles, orders, bookings, documents, and support requests."],
      ["Admin Dashboards", "Operational dashboards for teams to track data, tasks, approvals, reporting, and business activity."],
      ["SaaS Products", "Subscription-based products with account management, billing, roles, and scalable feature modules."],
      ["Workflow Platforms", "Custom tools for internal processes, field teams, approvals, inventory, finance, and service operations."]
    ],
    capabilityTitle: "From web app concept to production-ready platform.",
    capabilityIntro: "We cover product planning, UI design, backend engineering, database design, QA, deployment, and ongoing support.",
    capabilities: [
      ["fa-light fa-diagram-project", "Architecture Planning", "User roles, data models, APIs, workflows, and release roadmap."],
      ["fa-light fa-code-branch", "Frontend and Backend", "Modern interfaces connected to secure APIs, databases, and business logic."],
      ["fa-light fa-shield-check", "Quality and Security", "Validation, access control, testing, performance checks, and deployment controls."],
      ["fa-light fa-cloud-arrow-up", "Cloud Deployment", "Production hosting, CI/CD, monitoring, backups, and scalable infrastructure."]
    ],
    stackTitle: "Web app development technologies we use",
    stackIntro: "We select practical frontend, backend, database, and cloud technologies based on your product requirements and scale.",
    stack: ["React", "Next.js", "Node.js", "Laravel", "Python", "PostgreSQL", "MySQL", "MongoDB", "REST APIs", "GraphQL", "AWS", "Docker"],
    processTitle: "Building web apps with a clear product delivery process",
    process: [
      ["Discovery and Scope Mapping", "We define users, roles, workflows, integrations, technical risks, and launch priorities."],
      ["UX Flow and Interface Design", "We design screens, forms, dashboards, empty states, and interaction patterns for daily use."],
      ["Architecture and API Planning", "We map databases, APIs, permissions, services, and deployment environments before build."],
      ["Feature Development", "We implement frontend and backend modules in focused sprints with review checkpoints."],
      ["QA and Release", "We test user journeys, edge cases, security, responsiveness, integrations, and deployment readiness."],
      ["Scale and Support", "We monitor performance, improve features, support users, and plan future releases."]
    ],
    faqs: [
      ["Can you build a web app from an idea?", "Yes. We can help define scope, workflows, design, technology choices, MVP features, and launch roadmap."],
      ["Can you connect the app with existing business tools?", "Yes. We commonly integrate CRMs, ERPs, payment systems, analytics, email/SMS tools, and custom APIs."],
      ["Do you provide post-launch support?", "Yes. We can support maintenance, monitoring, bug fixes, performance improvements, and feature releases."]
    ]
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development.html",
    group: "Software Engineering",
    heroLines: ["Mobile App", "Development", "Company"],
    summary: "Create polished iOS and Android apps with smooth user experience, secure backend integration, and launch-ready delivery.",
    leftLabel: "Mobile application development services",
    mainTitle: "Bring your mobile product to market with expert app development solutions",
    intro: [
      "We design and develop mobile applications for customer engagement, commerce, booking, operations, field teams, and product startups.",
      "Our process covers app strategy, UX/UI design, API integration, backend setup, device testing, store submission, and post-launch improvements."
    ],
    advantageTitle: "What sets us apart as a mobile app development company?",
    advantage: [
      "We combine mobile UX, reliable engineering, secure data flows, push notifications, analytics, and release management for complete app delivery.",
      "Whether you need native iOS, native Android, or cross-platform development, we choose an approach that fits your budget, timeline, and product goals."
    ],
    features: [
      ["fa-light fa-mobile-screen", "Native-Like Experience", "We design app screens and interactions for smooth use across phones and tablets."],
      ["fa-light fa-bell", "Engagement Features", "Push notifications, account flows, search, bookings, payments, and personalized app journeys."],
      ["fa-light fa-store", "Store Launch Support", "We prepare app builds, assets, testing, compliance basics, and App Store or Play Store submission."]
    ],
    useCasesKicker: "Mobile App Use Cases",
    useCasesTitle: "Apps built for customers, teams, and operations.",
    useCasesIntro: "We build mobile products that support real user tasks, business processes, and long-term engagement.",
    useCases: [
      ["Consumer Apps", "Customer-facing apps for booking, ordering, service, loyalty, learning, and communication."],
      ["Business Apps", "Internal mobile tools for field teams, sales, reporting, inventory, approvals, and task management."],
      ["MVP Apps", "Lean mobile product launches with core features, analytics, and scalable architecture."],
      ["Commerce Apps", "Mobile shopping, checkout, subscriptions, payments, notifications, and customer account flows."]
    ],
    capabilityTitle: "From app idea to store-ready mobile product.",
    capabilityIntro: "Our team covers product planning, UX/UI, mobile development, APIs, QA, analytics, launch, and support.",
    capabilities: [
      ["fa-light fa-route", "App Strategy", "Feature scope, user journeys, platform choice, roadmap, and release planning."],
      ["fa-light fa-paintbrush-pencil", "Mobile UI/UX", "Touch-friendly screens, responsive states, onboarding, forms, and app navigation."],
      ["fa-light fa-code", "App Engineering", "Native or cross-platform builds connected to secure backend services."],
      ["fa-light fa-vial", "Device Testing", "Testing across screen sizes, OS versions, permissions, network states, and user flows."]
    ],
    stackTitle: "Mobile app development technologies we use",
    stackIntro: "We use proven mobile frameworks, backend services, analytics, and release tools to build dependable applications.",
    stack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js", "REST APIs", "GraphQL", "Push Notifications", "Analytics", "App Store", "Play Store"],
    processTitle: "Designing, developing, and launching mobile apps with discipline",
    process: [
      ["App Discovery", "We clarify users, core features, device needs, platform strategy, and monetization or business goals."],
      ["UX and Wireframes", "We map onboarding, navigation, screens, gestures, forms, notifications, and edge states."],
      ["UI Design and Prototype", "We design polished app screens and clickable flows for validation before development."],
      ["App and API Development", "We build mobile features, backend APIs, data models, authentication, and integrations."],
      ["Testing and Store Prep", "We test devices, performance, crashes, permissions, and prepare store assets and builds."],
      ["Launch and Iteration", "We support release, monitor analytics, fix issues, and improve the product after launch."]
    ],
    faqs: [
      ["Should I choose native or cross-platform app development?", "It depends on performance needs, budget, timeline, native features, and long-term roadmap. We recommend the approach after discovery."],
      ["Can you build both iOS and Android apps?", "Yes. We can build native apps or use cross-platform technologies like Flutter and React Native."],
      ["Do you handle app store submission?", "Yes. We help prepare builds, screenshots, metadata, testing, and submission support for App Store and Play Store."]
    ]
  },
  {
    title: "Blockchain Development",
    slug: "blockchain-development.html",
    group: "Software Engineering",
    heroLines: ["Blockchain", "Development", "Company"],
    summary: "Develop secure blockchain applications, smart contracts, token systems, and decentralized workflows for modern digital products.",
    leftLabel: "Blockchain software development services",
    mainTitle: "Build trusted decentralized products with expert blockchain development solutions",
    intro: [
      "We help businesses explore and build blockchain products where transparency, automation, tokenization, and secure transaction logic create practical value.",
      "Our services include smart contracts, decentralized applications, wallet integrations, token workflows, audits, and backend systems that connect blockchain with real business operations."
    ],
    advantageTitle: "What sets us apart as a blockchain development company?",
    advantage: [
      "We treat blockchain as a product and security problem, not just a code task. Every implementation is planned around users, risk, compliance context, and maintainability.",
      "From proof of concept to production launch, we focus on clear architecture, tested smart contracts, secure integrations, and transparent documentation."
    ],
    features: [
      ["fa-light fa-link", "Smart Contracts", "We design and implement contract logic for tokens, payments, approvals, ownership, and automation."],
      ["fa-light fa-wallet", "Wallet Integration", "We connect web or mobile apps with wallets, authentication, transactions, and user-friendly flows."],
      ["fa-light fa-shield-halved", "Security Review", "We review contract behavior, permissions, edge cases, and operational risks before release."]
    ],
    useCasesKicker: "Blockchain Use Cases",
    useCasesTitle: "Blockchain solutions built for trust and automation.",
    useCasesIntro: "We focus on blockchain use cases where decentralized records, smart logic, and asset ownership are meaningful.",
    useCases: [
      ["Smart Contracts", "Automated agreement logic for digital assets, workflows, payments, and approvals."],
      ["DApps", "Decentralized web applications with wallet login, transactions, dashboards, and backend services."],
      ["Token Systems", "Token creation, distribution logic, gated access, rewards, and marketplace-ready workflows."],
      ["Traceability", "Supply chain, credential, document, and ownership verification using transparent records."]
    ],
    capabilityTitle: "From blockchain concept to secure production workflow.",
    capabilityIntro: "Our team covers feasibility, architecture, smart contract development, app integration, testing, deployment, and support.",
    capabilities: [
      ["fa-light fa-clipboard-check", "Feasibility Planning", "Assess whether blockchain is useful, practical, and aligned with your business case."],
      ["fa-light fa-file-contract", "Contract Engineering", "Smart contract logic, testing, deployment scripts, and technical documentation."],
      ["fa-light fa-network-wired", "DApp Integration", "Frontend, backend, wallet, transaction, indexing, and API integration."],
      ["fa-light fa-bug-slash", "Testing and Audit Prep", "Unit tests, scenario tests, permissions checks, and security review support."]
    ],
    stackTitle: "Blockchain development technologies we use",
    stackIntro: "We use established blockchain frameworks, wallet tools, backend services, and deployment practices for secure delivery.",
    stack: ["Solidity", "Ethereum", "Polygon", "Web3.js", "Ethers.js", "Hardhat", "Node.js", "React", "IPFS", "MetaMask", "Smart Contracts", "APIs"],
    processTitle: "Developing blockchain products with security-first delivery",
    process: [
      ["Use Case Discovery", "We define business goals, users, transaction logic, chain choice, and security concerns."],
      ["Architecture Design", "We map smart contracts, app flows, wallets, backend services, indexing, and deployment."],
      ["Prototype Development", "We build a focused proof of concept to validate product flow and technical feasibility."],
      ["Smart Contract Build", "We implement and test contract logic, permissions, events, and edge cases."],
      ["Integration and Testing", "We connect frontend, backend, wallets, testnets, and QA workflows before release."],
      ["Deployment and Support", "We deploy contracts and app systems, document the setup, and support production operations."]
    ],
    faqs: [
      ["Can you help validate if blockchain is right for my idea?", "Yes. We can assess whether blockchain adds real value or whether a traditional architecture would be more practical."],
      ["Do you build smart contracts?", "Yes. We build and test smart contracts for tokens, transactions, approvals, access, and custom workflows."],
      ["Do you provide blockchain security audits?", "We provide internal review and audit preparation. For high-risk production contracts, we can support third-party audit workflows."]
    ]
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development.html",
    group: "Software Engineering",
    heroLines: ["Custom Software", "Development", "Company"],
    summary: "Build tailored software platforms that match your business processes, integrate with your tools, and scale with your operations.",
    leftLabel: "Custom software development services",
    mainTitle: "Solve unique business problems with expert custom software development solutions",
    intro: [
      "We design and develop custom software for companies that need more than off-the-shelf tools can provide. Our solutions support workflows, data, automation, users, and integrations specific to your business.",
      "From internal platforms to customer-facing systems, we focus on practical architecture, clean UX, secure development, and long-term maintainability."
    ],
    advantageTitle: "What sets us apart as a custom software development company?",
    advantage: [
      "We begin with business workflow clarity before choosing technology, so the final product supports how your team actually operates.",
      "Our delivery covers discovery, UX, system architecture, development, integrations, QA, deployment, documentation, and post-launch support."
    ],
    features: [
      ["fa-light fa-gears", "Workflow Automation", "We digitize manual processes, approvals, task flows, reporting, and operational handoffs."],
      ["fa-light fa-database", "Data-Driven Systems", "We structure data models, dashboards, permissions, imports, exports, and reporting logic."],
      ["fa-light fa-puzzle-piece", "Tailored Integrations", "We connect your software with existing business systems, APIs, payments, communication tools, and databases."]
    ],
    useCasesKicker: "Software Use Cases",
    useCasesTitle: "Custom systems built around your operations.",
    useCasesIntro: "We build software where process fit, integration, and maintainability matter more than generic templates.",
    useCases: [
      ["Internal Platforms", "Custom systems for teams, approvals, tasks, documents, assets, inventory, and operations."],
      ["Customer Systems", "Portals, booking platforms, account dashboards, and self-service customer workflows."],
      ["Automation Tools", "Software that reduces repetitive admin work, data entry, notifications, and manual reporting."],
      ["Legacy Modernization", "Rebuild or improve old systems with cleaner UX, modern architecture, and safer deployment."]
    ],
    capabilityTitle: "From business problem to production-ready software.",
    capabilityIntro: "Our team covers discovery, UX, architecture, development, integrations, testing, launch, and continuous improvement.",
    capabilities: [
      ["fa-light fa-magnifying-glass", "Process Discovery", "Understand current workflows, bottlenecks, roles, data, and business outcomes."],
      ["fa-light fa-table-layout", "Product Design", "User journeys, dashboards, forms, permissions, and interface design."],
      ["fa-light fa-code", "Software Engineering", "Frontend, backend, database, APIs, integrations, and deployment."],
      ["fa-light fa-chart-mixed", "Optimization", "Analytics, performance tuning, feature iteration, and support after launch."]
    ],
    stackTitle: "Custom software technologies we use",
    stackIntro: "We choose practical technology stacks based on your requirements, integrations, performance needs, and long-term ownership.",
    stack: ["React", "Next.js", "Node.js", "Laravel", "Python", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker", "REST APIs", "Analytics"],
    processTitle: "Creating custom software through structured product engineering",
    process: [
      ["Business Discovery", "We document goals, users, workflows, pain points, data sources, and success metrics."],
      ["Solution Design", "We map features, user roles, interface flows, integrations, and technical architecture."],
      ["Prototype and Validation", "We validate critical workflows and screens before committing to full build."],
      ["Development Sprints", "We implement features in focused releases with testing and stakeholder review."],
      ["QA and Deployment", "We verify workflows, security, integrations, performance, and production readiness."],
      ["Training and Support", "We document the system, support your team, and improve the product over time."]
    ],
    faqs: [
      ["When should I choose custom software?", "Choose custom software when your workflow, data model, integrations, or customer experience cannot be handled well by standard tools."],
      ["Can you replace spreadsheets or manual processes?", "Yes. We can turn spreadsheet-heavy workflows into structured software with roles, dashboards, automation, and reporting."],
      ["Can the software scale later?", "Yes. We plan architecture and modules so future features, users, integrations, and reporting needs can be added cleanly."]
    ]
  },
  {
    title: "SaaS Development",
    slug: "saas-development.html",
    group: "Software Engineering",
    heroLines: ["SaaS", "Development", "Company"],
    summary: "Design and build subscription-ready SaaS platforms with user accounts, billing, dashboards, analytics, and scalable product architecture.",
    leftLabel: "SaaS product development services",
    mainTitle: "Build subscription software products with expert SaaS development solutions",
    intro: [
      "We help founders and businesses build SaaS products from MVP to scalable platform. Our work covers product strategy, user roles, billing, dashboards, onboarding, APIs, and deployment.",
      "Every SaaS build is planned around customer activation, retention, maintainability, security, and the ability to release new features confidently."
    ],
    advantageTitle: "What sets us apart as a SaaS development company?",
    advantage: [
      "We understand SaaS delivery needs beyond standard app development: subscriptions, plans, onboarding, account management, analytics, support flows, and product iteration.",
      "Our approach keeps the first launch focused while leaving the architecture ready for new modules, integrations, teams, and scale."
    ],
    features: [
      ["fa-light fa-users-gear", "Multi-User Architecture", "We design account, team, role, permission, and tenant models for SaaS workflows."],
      ["fa-light fa-credit-card", "Billing and Plans", "We implement subscriptions, pricing tiers, trials, invoices, payment gateways, and access rules."],
      ["fa-light fa-chart-user", "Product Analytics", "We add usage tracking, dashboards, events, and reporting so you can improve retention."]
    ],
    useCasesKicker: "SaaS Use Cases",
    useCasesTitle: "SaaS products built for launch and growth.",
    useCasesIntro: "We build software products that can attract users, manage subscriptions, and improve through data-driven releases.",
    useCases: [
      ["MVP Platforms", "Launch core SaaS features quickly with clean architecture and measurable user activity."],
      ["B2B SaaS", "Team accounts, permissions, admin dashboards, reports, workflows, and integrations."],
      ["Vertical SaaS", "Industry-specific software for operations, bookings, finance, education, healthcare, or logistics."],
      ["SaaS Modernization", "Improve an existing product with better UX, performance, billing, analytics, and architecture."]
    ],
    capabilityTitle: "From SaaS idea to subscription-ready platform.",
    capabilityIntro: "Our team covers MVP strategy, UX, architecture, billing, app development, deployment, analytics, and iteration.",
    capabilities: [
      ["fa-light fa-box-open", "MVP Planning", "Feature prioritization, roadmap, user personas, pricing assumptions, and launch scope."],
      ["fa-light fa-user-lock", "Accounts and Permissions", "Authentication, teams, roles, tenant rules, onboarding, and account settings."],
      ["fa-light fa-money-check-dollar", "Subscription Systems", "Payment gateway, plan access, trials, invoices, coupons, and billing events."],
      ["fa-light fa-rocket-launch", "Release Engine", "CI/CD, monitoring, analytics, user feedback loops, and feature iteration."]
    ],
    stackTitle: "SaaS development technologies we use",
    stackIntro: "We use modern app, database, payment, cloud, and analytics tools to create SaaS products that can grow after launch.",
    stack: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL", "Stripe", "Razorpay", "AWS", "Docker", "Analytics", "REST APIs", "Email APIs"],
    processTitle: "Taking SaaS products from strategy to scalable release",
    process: [
      ["Product Discovery", "We define users, pricing, feature priorities, data needs, and launch goals."],
      ["MVP Roadmap", "We separate must-have launch features from later improvements to protect speed and budget."],
      ["UX and Architecture", "We design onboarding, dashboards, permissions, billing, and scalable product modules."],
      ["SaaS Development", "We build frontend, backend, database, billing, emails, integrations, and admin tools."],
      ["Testing and Launch", "We test subscriptions, permissions, user flows, performance, and deployment readiness."],
      ["Growth Iteration", "We improve features using analytics, feedback, support issues, and roadmap priorities."]
    ],
    faqs: [
      ["Can you build a SaaS MVP?", "Yes. We help define the MVP, design the user flows, build core features, connect billing, and launch the first version."],
      ["Can you add subscription billing?", "Yes. We integrate payment gateways, pricing plans, trials, invoices, coupons, and access controls."],
      ["Can you improve an existing SaaS product?", "Yes. We can audit UX, code, performance, billing, analytics, and architecture, then improve the product in phases."]
    ]
  },
  {
    title: "User Research",
    slug: "user-research.html",
    group: "User Experience Design",
    heroLines: ["User", "Research", "Services"],
    summary: "Understand your users, pain points, buying behavior, and product opportunities before investing in design or development.",
    leftLabel: "User research and product discovery",
    mainTitle: "Make better product decisions with expert user research services",
    intro: [
      "We conduct user research to uncover what your customers need, where they struggle, and how your product or website can serve them better.",
      "Our research work supports websites, apps, SaaS products, redesigns, and new feature planning through interviews, journey mapping, competitor review, usability testing, and insight synthesis."
    ],
    advantageTitle: "What sets us apart as a user research partner?",
    advantage: [
      "We translate research into decisions your design and engineering teams can actually use, including journeys, priorities, content direction, and product recommendations.",
      "Our process is practical, focused, and designed to reduce assumptions before you invest in full-scale UI, UX, or development work."
    ],
    features: [
      ["fa-light fa-comments-question", "User Interviews", "We gather qualitative insight from customers, stakeholders, and internal teams."],
      ["fa-light fa-map-location-dot", "Journey Mapping", "We identify user steps, friction points, decision moments, and improvement opportunities."],
      ["fa-light fa-flask", "Usability Testing", "We test interfaces and prototypes to find clarity, navigation, and completion issues."]
    ],
    useCasesKicker: "Research Use Cases",
    useCasesTitle: "Research shaped around real product questions.",
    useCasesIntro: "We help teams make informed design, product, content, and development decisions.",
    useCases: [
      ["Website Redesign", "Understand visitor goals, conversion blockers, content gaps, and trust issues before redesign."],
      ["New Product Discovery", "Validate user needs, workflows, pain points, and MVP priorities before development."],
      ["UX Improvement", "Find friction in forms, dashboards, navigation, onboarding, and checkout flows."],
      ["Feature Planning", "Prioritize features based on user value, operational impact, and feasibility."]
    ],
    capabilityTitle: "From research question to actionable product direction.",
    capabilityIntro: "Our team covers research planning, interviews, audits, usability testing, synthesis, and recommendations.",
    capabilities: [
      ["fa-light fa-list-check", "Research Planning", "Define goals, participants, methods, questions, and expected decisions."],
      ["fa-light fa-user-group", "Audience Insight", "User needs, behaviors, motivations, objections, and context."],
      ["fa-light fa-chart-simple", "Insight Synthesis", "Patterns, priorities, opportunities, risks, and design recommendations."],
      ["fa-light fa-clipboard-list", "Action Plan", "Clear next steps for UX, content, product roadmap, and development."]
    ],
    stackTitle: "User research tools and methods we use",
    stackIntro: "We combine qualitative and practical UX methods to create insights that are easy to apply.",
    stack: ["Interviews", "Surveys", "Journey Maps", "Personas", "Usability Tests", "Heatmaps", "Analytics", "Competitor Review", "Figma", "Workshops", "Reports", "Prioritization"],
    processTitle: "Turning user understanding into better digital products",
    process: [
      ["Research Goals", "We define what decisions the research needs to support and what assumptions must be tested."],
      ["Participant and Data Planning", "We identify target users, data sources, interview questions, and testing methods."],
      ["Research Execution", "We conduct interviews, audits, surveys, tests, or analytics review based on the project."],
      ["Pattern Analysis", "We synthesize findings into user needs, friction points, opportunities, and risks."],
      ["Recommendations", "We create practical UX, content, design, or product recommendations for the next phase."],
      ["Implementation Support", "We help translate research into wireframes, scope, roadmap, and development priorities."]
    ],
    faqs: [
      ["When should user research happen?", "Research is most valuable before major redesign, product development, feature planning, or conversion improvement work."],
      ["Can you research an existing website or app?", "Yes. We can audit live products, run usability reviews, study analytics, and gather user feedback."],
      ["Will we get practical recommendations?", "Yes. The output focuses on decisions, priorities, user journeys, and improvements, not only raw findings."]
    ]
  },
  {
    title: "Web Design",
    slug: "web-design.html",
    group: "User Experience Design",
    heroLines: ["Web", "Design", "Services"],
    summary: "Design modern, conversion-focused websites with strong brand presentation, clear content hierarchy, and responsive layouts.",
    leftLabel: "Web design and interface services",
    mainTitle: "Create a polished brand experience with expert web design services",
    intro: [
      "We design websites that look premium, communicate clearly, and guide users toward meaningful action. Every layout is created around content, brand, responsiveness, and business goals.",
      "Our web design process covers sitemap structure, wireframes, visual design, responsive layouts, UI components, and developer-ready handoff."
    ],
    advantageTitle: "What sets us apart as a web design company?",
    advantage: [
      "We combine visual design with UX thinking, so your website is not only attractive but also clear, useful, and conversion-ready.",
      "Our designs consider content flow, accessibility basics, responsive behavior, animation restraint, and practical implementation."
    ],
    features: [
      ["fa-light fa-palette", "Brand-Led Visual Design", "We create page designs that reflect your identity while keeping the experience professional and easy to scan."],
      ["fa-light fa-table-layout", "Responsive Layouts", "We design pages for desktop, tablet, and mobile with consistent spacing and hierarchy."],
      ["fa-light fa-arrow-pointer", "Conversion Flow", "We shape calls to action, forms, trust sections, and navigation around user intent."]
    ],
    useCasesKicker: "Web Design Use Cases",
    useCasesTitle: "Design systems built for business websites.",
    useCasesIntro: "We create design work that supports marketing, credibility, lead generation, and smooth development.",
    useCases: [
      ["Corporate Website Design", "Modern service pages, about pages, contact flows, case studies, and trust-building sections."],
      ["Landing Page Design", "Campaign pages with focused messaging, lead forms, benefits, proof, and clear conversion paths."],
      ["Website Redesign", "Refresh old websites with better hierarchy, visuals, mobile behavior, and content structure."],
      ["Design Handoff", "Developer-ready Figma files, components, states, assets, and responsive layout guidance."]
    ],
    capabilityTitle: "From brand direction to developer-ready website design.",
    capabilityIntro: "Our team covers discovery, sitemap, wireframes, visual design, responsive states, components, and handoff.",
    capabilities: [
      ["fa-light fa-sitemap", "Page Structure", "Sitemap, content sections, navigation, and user flow."],
      ["fa-light fa-pen-ruler", "Wireframes", "Low-friction layout planning before visual design."],
      ["fa-light fa-swatchbook", "Visual System", "Typography, color, spacing, imagery, components, and states."],
      ["fa-light fa-file-code", "Developer Handoff", "Clean design files, responsive rules, assets, and implementation notes."]
    ],
    stackTitle: "Web design tools and methods we use",
    stackIntro: "We use proven design tools and practical UX methods to create polished websites ready for development.",
    stack: ["Figma", "Wireframes", "Design Systems", "Prototypes", "Responsive Design", "Typography", "Brand Systems", "UI Components", "Accessibility", "Content Planning", "SEO Structure", "Handoff"],
    processTitle: "Designing websites with clarity, structure, and polish",
    process: [
      ["Discovery", "We clarify brand, audience, pages, goals, content readiness, and competitor positioning."],
      ["Sitemap and Wireframes", "We structure pages and sections before visual design to keep flow clear."],
      ["Visual Direction", "We define typography, color, imagery, spacing, components, and overall design tone."],
      ["Page Design", "We design responsive desktop and mobile layouts for key pages and states."],
      ["Review and Refinement", "We refine hierarchy, copy fit, CTAs, visuals, and responsive details."],
      ["Handoff", "We prepare files, assets, and guidance for clean development implementation."]
    ],
    faqs: [
      ["Do you design only or also develop websites?", "We can do both. We can deliver design files only or handle full design and development."],
      ["Will the design be mobile responsive?", "Yes. We plan responsive layouts and key mobile states as part of the design process."],
      ["Can you redesign an existing website?", "Yes. We can improve structure, visuals, messaging, conversion paths, and mobile experience."]
    ]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design.html",
    group: "User Experience Design",
    heroLines: ["UI/UX", "Design", "Services"],
    summary: "Design intuitive digital products, dashboards, websites, and apps that feel clear, polished, and easy to use.",
    leftLabel: "UI and UX design services",
    mainTitle: "Improve digital product experience with expert UI/UX design services",
    intro: [
      "We design user interfaces and experiences for websites, web apps, mobile apps, dashboards, SaaS products, and business tools.",
      "Our work turns product requirements into clear flows, practical screens, reusable components, responsive layouts, and polished interface systems."
    ],
    advantageTitle: "What sets us apart as a UI/UX design company?",
    advantage: [
      "We balance visual polish with usability, business goals, engineering feasibility, and long-term product maintainability.",
      "Our UX process reduces confusion before development and helps teams build products that users can understand and operate confidently."
    ],
    features: [
      ["fa-light fa-route", "User Flow Design", "We map user journeys, steps, decisions, and screen transitions before UI production."],
      ["fa-light fa-object-group", "Interface Systems", "We create reusable components, patterns, states, and layouts for consistent products."],
      ["fa-light fa-mobile-screen-button", "Responsive Product UX", "We design screens and workflows that work smoothly across desktop and mobile."]
    ],
    useCasesKicker: "UI/UX Use Cases",
    useCasesTitle: "Design for products people actually use.",
    useCasesIntro: "We create UX and UI for workflows that need clarity, trust, speed, and repeat use.",
    useCases: [
      ["SaaS UI Design", "Dashboards, onboarding, settings, billing, reports, tables, filters, and product workflows."],
      ["Mobile App UX", "App navigation, onboarding, forms, gestures, account flows, and key mobile screens."],
      ["Dashboard UX", "Operational screens, analytics, role-based views, actions, and dense but readable interfaces."],
      ["UX Redesign", "Improve existing products with clearer flows, better visual hierarchy, and reduced friction."]
    ],
    capabilityTitle: "From product workflow to polished interface system.",
    capabilityIntro: "Our team covers research, UX structure, wireframes, UI design, prototyping, component systems, and handoff.",
    capabilities: [
      ["fa-light fa-magnifying-glass", "UX Audit", "Find friction, unclear flows, hierarchy issues, and interaction problems."],
      ["fa-light fa-diagram-project", "Information Flow", "User journeys, screen maps, navigation, roles, and task completion paths."],
      ["fa-light fa-wand-magic-sparkles", "UI Design", "Visual design, states, components, responsive layouts, and interaction polish."],
      ["fa-light fa-handshake-angle", "Developer Handoff", "Design specs, assets, components, states, and implementation support."]
    ],
    stackTitle: "UI/UX design tools and methods we use",
    stackIntro: "We use modern design tools and proven UX methods to create interfaces that teams can build and users can understand.",
    stack: ["Figma", "Prototypes", "Wireframes", "Design Systems", "User Flows", "Journey Maps", "Usability Testing", "Components", "Responsive UI", "Accessibility", "Handoff", "Analytics"],
    processTitle: "Designing UX and UI through practical product thinking",
    process: [
      ["Product Understanding", "We define users, goals, workflows, constraints, and success metrics."],
      ["UX Mapping", "We map journeys, screens, roles, edge cases, and information structure."],
      ["Wireframes", "We create low-fidelity layouts to validate flow before visual design."],
      ["UI Design", "We design polished screens, responsive behavior, components, and states."],
      ["Prototype and Review", "We test flows, gather feedback, refine interactions, and improve clarity."],
      ["Handoff and Support", "We prepare design specs and help developers implement the experience accurately."]
    ],
    faqs: [
      ["What is included in UI/UX design?", "It can include research, user flows, wireframes, visual design, prototypes, design systems, responsive states, and handoff."],
      ["Can you redesign an existing product?", "Yes. We can audit the current UX and redesign screens, flows, components, and visual hierarchy."],
      ["Do you provide clickable prototypes?", "Yes. We can create interactive prototypes for review, validation, and developer understanding."]
    ]
  },
  {
    title: "IA and UX Design",
    slug: "ia-ux-design.html",
    group: "User Experience Design",
    heroLines: ["IA and UX", "Design", "Services"],
    summary: "Structure complex content, navigation, and product workflows so users can find information and complete tasks with less friction.",
    leftLabel: "Information architecture and UX services",
    mainTitle: "Create clearer digital experiences with expert IA and UX design services",
    intro: [
      "We design information architecture and UX systems for websites, portals, apps, knowledge bases, dashboards, and content-heavy platforms.",
      "Our work helps users understand where they are, where to go next, and how to complete their goals without confusion."
    ],
    advantageTitle: "What sets us apart as an IA and UX design company?",
    advantage: [
      "We make complex information easier to navigate by combining content structure, user journeys, taxonomy, navigation, and interface planning.",
      "Our IA and UX process supports better SEO, usability, content governance, product clarity, and development planning."
    ],
    features: [
      ["fa-light fa-sitemap", "Information Architecture", "We organize pages, labels, categories, content models, and navigation systems."],
      ["fa-light fa-signs-post", "Navigation Design", "We make menu structures, filters, paths, and page relationships easier to understand."],
      ["fa-light fa-layer-group", "Content Modeling", "We define reusable content types, metadata, page templates, and CMS-ready structures."]
    ],
    useCasesKicker: "IA and UX Use Cases",
    useCasesTitle: "Structure for websites and products with complexity.",
    useCasesIntro: "We help teams organize information so users and content managers can work with less confusion.",
    useCases: [
      ["Content-Heavy Websites", "Improve navigation, categories, page structure, content relationships, and SEO-friendly organization."],
      ["Product Portals", "Design user roles, dashboards, flows, filters, settings, and task-based navigation."],
      ["Knowledge Bases", "Structure help content, documentation, search paths, categories, and support journeys."],
      ["CMS Planning", "Define content types, fields, templates, taxonomies, permissions, and editorial workflows."]
    ],
    capabilityTitle: "From messy content to clear digital structure.",
    capabilityIntro: "Our team covers content audit, sitemap, taxonomy, navigation, wireframes, UX flows, and CMS structure.",
    capabilities: [
      ["fa-light fa-clipboard-list-check", "Content Audit", "Review existing pages, content gaps, duplication, quality, and performance."],
      ["fa-light fa-folder-tree", "Taxonomy", "Categories, tags, content types, labels, and metadata systems."],
      ["fa-light fa-route", "UX Flow", "User paths, decision points, task completion, and navigation logic."],
      ["fa-light fa-table-layout", "Template Planning", "Reusable page structures, modules, CMS fields, and content governance."]
    ],
    stackTitle: "IA and UX tools and methods we use",
    stackIntro: "We use structured UX methods to organize content and product flows before design and development.",
    stack: ["Content Audits", "Sitemaps", "Taxonomy", "Card Sorting", "User Flows", "Wireframes", "CMS Models", "Navigation Systems", "Figma", "Analytics", "SEO Structure", "Workshops"],
    processTitle: "Organizing content and workflows into clear user experiences",
    process: [
      ["Audit and Discovery", "We review existing content, users, business goals, analytics, and navigation issues."],
      ["User and Task Mapping", "We define user groups, jobs to be done, information needs, and task flows."],
      ["Sitemap and Taxonomy", "We structure pages, categories, labels, relationships, and content hierarchy."],
      ["Wireframes", "We create page and navigation wireframes to validate structure before visual design."],
      ["Content Model", "We define templates, fields, modules, metadata, and CMS requirements."],
      ["Handoff", "We provide clear IA documentation, UX flows, and implementation guidance."]
    ],
    faqs: [
      ["What is information architecture?", "Information architecture is the way pages, content, navigation, labels, and relationships are structured so users can find what they need."],
      ["Do I need IA before web design?", "For content-heavy or complex sites, yes. IA helps prevent confusing navigation and redesign rework."],
      ["Can you organize existing content?", "Yes. We can audit, restructure, merge, rename, and plan content for better usability and SEO."]
    ]
  },
  {
    title: "Cloud Migration",
    slug: "cloud-migration.html",
    group: "CloudOps",
    heroLines: ["Cloud", "Migration", "Services"],
    summary: "Move applications, websites, databases, and workloads to cloud infrastructure with secure planning, minimal disruption, and scalable architecture.",
    leftLabel: "Cloud migration and modernization services",
    mainTitle: "Modernize infrastructure with expert cloud migration services",
    intro: [
      "We help businesses migrate websites, apps, databases, and workloads from legacy hosting or on-premise systems to reliable cloud environments.",
      "Our approach covers readiness assessment, architecture planning, security setup, migration execution, testing, monitoring, and optimization."
    ],
    advantageTitle: "What sets us apart as a cloud migration company?",
    advantage: [
      "We plan migrations around business continuity, security, performance, cost control, and future scalability.",
      "Whether moving a single website or a complex application stack, we reduce risk through phased migration, backups, validation, and rollback planning."
    ],
    features: [
      ["fa-light fa-cloud-arrow-up", "Migration Planning", "We map workloads, dependencies, data, downtime limits, and the safest migration path."],
      ["fa-light fa-shield-check", "Secure Cloud Setup", "We configure access, network rules, backups, monitoring, and infrastructure controls."],
      ["fa-light fa-gauge-high", "Performance Optimization", "We tune hosting, caching, databases, storage, and delivery after migration."]
    ],
    useCasesKicker: "Cloud Migration Use Cases",
    useCasesTitle: "Cloud migration for modern digital operations.",
    useCasesIntro: "We migrate systems when businesses need better reliability, scalability, security, or cost visibility.",
    useCases: [
      ["Website Migration", "Move business websites, CMS platforms, and landing pages to faster, more reliable cloud hosting."],
      ["App Migration", "Migrate web apps, APIs, backend services, and scheduled jobs to cloud infrastructure."],
      ["Database Migration", "Move, clean, optimize, and validate business databases with backup and rollback planning."],
      ["Cloud Modernization", "Refactor infrastructure using managed services, CI/CD, monitoring, and autoscaling."]
    ],
    capabilityTitle: "From legacy hosting to secure cloud operations.",
    capabilityIntro: "Our team covers audit, architecture, migration, security, testing, monitoring, and optimization.",
    capabilities: [
      ["fa-light fa-magnifying-glass-chart", "Readiness Audit", "Current hosting, dependencies, performance, security, and migration risks."],
      ["fa-light fa-network-wired", "Cloud Architecture", "Compute, storage, database, network, DNS, SSL, backups, and deployment."],
      ["fa-light fa-database", "Data Migration", "Database export, transfer, validation, indexing, and rollback planning."],
      ["fa-light fa-chart-line-up", "Monitoring", "Uptime checks, logs, alerts, cost review, and performance tuning."]
    ],
    stackTitle: "Cloud migration technologies we use",
    stackIntro: "We use reliable cloud platforms, deployment tools, and monitoring systems to make migrations controlled and maintainable.",
    stack: ["AWS", "Azure", "Google Cloud", "Docker", "Linux", "Nginx", "CloudFront", "RDS", "S3", "CI/CD", "Monitoring", "Backups"],
    processTitle: "Migrating to cloud with a controlled delivery process",
    process: [
      ["Infrastructure Audit", "We review current systems, workloads, dependencies, performance, and business risks."],
      ["Migration Strategy", "We choose the cloud architecture, migration path, downtime plan, and rollback strategy."],
      ["Environment Setup", "We configure cloud services, access, security, storage, databases, and deployment flow."],
      ["Migration Execution", "We move applications, files, databases, DNS, SSL, and integrations in planned phases."],
      ["Testing and Cutover", "We validate performance, data, functionality, security, and production readiness."],
      ["Optimization and Support", "We monitor, tune costs, improve speed, and support cloud operations after launch."]
    ],
    faqs: [
      ["Will migration cause downtime?", "We plan migrations to minimize downtime and schedule cutovers carefully. Some systems can be migrated with near-zero downtime."],
      ["Can you migrate databases safely?", "Yes. We use backups, validation checks, staged transfers, and rollback planning to reduce risk."],
      ["Can you optimize cloud cost after migration?", "Yes. We review resources, usage, storage, caching, and managed services to control cost."]
    ]
  },
  {
    title: "DevOps",
    slug: "devops.html",
    group: "CloudOps",
    heroLines: ["DevOps", "Engineering", "Services"],
    summary: "Improve software delivery with CI/CD, infrastructure automation, monitoring, release workflows, and dependable cloud operations.",
    leftLabel: "DevOps engineering and automation services",
    mainTitle: "Release faster and safer with expert DevOps engineering services",
    intro: [
      "We help teams build reliable deployment pipelines, automated environments, monitoring, release controls, and infrastructure practices that reduce manual mistakes.",
      "Our DevOps work supports websites, web apps, SaaS platforms, APIs, cloud systems, and teams that need dependable releases."
    ],
    advantageTitle: "What sets us apart as a DevOps engineering company?",
    advantage: [
      "We focus on practical DevOps improvements that make delivery safer, observable, repeatable, and easier for teams to maintain.",
      "From CI/CD to monitoring and infrastructure automation, we align the setup with your product, team size, risk level, and budget."
    ],
    features: [
      ["fa-light fa-code-merge", "CI/CD Pipelines", "We automate build, test, deploy, and rollback workflows for safer releases."],
      ["fa-light fa-server", "Infrastructure Automation", "We configure repeatable cloud environments, deployment scripts, and infrastructure patterns."],
      ["fa-light fa-chart-line", "Monitoring and Alerts", "We set up logs, uptime checks, performance metrics, alerts, and incident visibility."]
    ],
    useCasesKicker: "DevOps Use Cases",
    useCasesTitle: "DevOps workflows for dependable software delivery.",
    useCasesIntro: "We improve release systems so teams can deploy more confidently and operate products with visibility.",
    useCases: [
      ["Deployment Automation", "Automated build and release pipelines for websites, APIs, apps, and SaaS platforms."],
      ["Cloud Operations", "Managed cloud environments with monitoring, backups, access controls, and scaling rules."],
      ["Environment Setup", "Development, staging, and production environments that match release workflow needs."],
      ["Incident Readiness", "Logs, alerts, rollback paths, and runbooks for faster issue response."]
    ],
    capabilityTitle: "From manual deployment to reliable delivery system.",
    capabilityIntro: "Our team covers CI/CD, infrastructure, monitoring, security basics, release processes, and operational support.",
    capabilities: [
      ["fa-light fa-rocket", "Release Pipelines", "Automated testing, builds, deploys, approvals, and rollback."],
      ["fa-light fa-cloud", "Cloud Infrastructure", "Servers, containers, databases, storage, DNS, SSL, and network setup."],
      ["fa-light fa-lock", "Access and Security", "Environment secrets, permissions, key handling, backups, and deployment controls."],
      ["fa-light fa-eye", "Observability", "Metrics, logs, alerts, uptime, performance, and production health."]
    ],
    stackTitle: "DevOps technologies we use",
    stackIntro: "We use modern cloud, container, CI/CD, and monitoring tools to make delivery more reliable.",
    stack: ["GitHub Actions", "GitLab CI", "Docker", "Nginx", "Linux", "AWS", "Azure", "Kubernetes", "Terraform", "Monitoring", "Logs", "Backups"],
    processTitle: "Improving delivery through practical DevOps implementation",
    process: [
      ["Delivery Audit", "We review current deployment steps, environments, failures, access, and operational risks."],
      ["Pipeline Design", "We define build, test, release, approval, rollback, and environment workflows."],
      ["Infrastructure Setup", "We configure cloud resources, containers, servers, secrets, DNS, SSL, and backups."],
      ["Automation Build", "We implement CI/CD workflows, scripts, checks, and deployment controls."],
      ["Monitoring Setup", "We add logs, metrics, uptime checks, alerts, dashboards, and response paths."],
      ["Handover and Support", "We document the process, train the team, and support improvements over time."]
    ],
    faqs: [
      ["Can you set up CI/CD for an existing project?", "Yes. We can audit the current deployment workflow and add automated build, test, and release pipelines."],
      ["Do you support cloud infrastructure?", "Yes. We can set up and manage cloud environments, deployment workflows, monitoring, backups, and access controls."],
      ["Can DevOps reduce release failures?", "Yes. Automated checks, repeatable deployments, monitoring, and rollback planning reduce manual errors and release risk."]
    ]
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity.html",
    group: "CloudOps",
    heroLines: ["Cybersecurity", "Consulting", "Services"],
    summary: "Protect websites, applications, infrastructure, and data with practical security reviews, hardening, monitoring, and risk reduction.",
    leftLabel: "Cybersecurity consulting and hardening services",
    mainTitle: "Strengthen your digital systems with expert cybersecurity services",
    intro: [
      "We help businesses identify security risks across websites, apps, APIs, cloud systems, access flows, and data handling practices.",
      "Our cybersecurity services focus on practical hardening, vulnerability review, secure configuration, monitoring readiness, and security improvements that fit your operations."
    ],
    advantageTitle: "What sets us apart as a cybersecurity consulting company?",
    advantage: [
      "We connect security recommendations to real business systems, so fixes are practical, prioritized, and easier to implement.",
      "Our approach supports teams that need stronger protection without unnecessary complexity or disruption to daily operations."
    ],
    features: [
      ["fa-light fa-shield-check", "Security Assessment", "We review websites, apps, access flows, dependencies, cloud settings, and exposed risks."],
      ["fa-light fa-lock-keyhole", "System Hardening", "We improve authentication, permissions, headers, backups, server settings, and secure defaults."],
      ["fa-light fa-bell-on", "Monitoring Readiness", "We set up visibility for suspicious activity, uptime, logs, alerts, and incident response."]
    ],
    useCasesKicker: "Cybersecurity Use Cases",
    useCasesTitle: "Security improvements for real digital risk.",
    useCasesIntro: "We help businesses protect systems that handle users, payments, operations, customer data, and business continuity.",
    useCases: [
      ["Website Security", "CMS hardening, plugin review, SSL, headers, backups, malware cleanup support, and access control."],
      ["Application Security", "Authentication, roles, input validation, API security, dependency review, and secure release checks."],
      ["Cloud Security", "Access controls, network rules, secrets, backups, logging, and infrastructure hardening."],
      ["Security Remediation", "Prioritize and fix vulnerabilities found through audits, incidents, or external scans."]
    ],
    capabilityTitle: "From security risk to stronger digital protection.",
    capabilityIntro: "Our team covers review, prioritization, hardening, remediation, monitoring, documentation, and support.",
    capabilities: [
      ["fa-light fa-magnifying-glass", "Risk Review", "Identify vulnerabilities, misconfigurations, exposed data, and weak access patterns."],
      ["fa-light fa-user-shield", "Access Control", "Roles, passwords, MFA, permissions, sessions, and admin protection."],
      ["fa-light fa-server", "Infrastructure Hardening", "Server, cloud, database, backups, logs, and deployment security."],
      ["fa-light fa-clipboard-check", "Remediation Plan", "Clear priorities, fixes, verification, documentation, and team guidance."]
    ],
    stackTitle: "Cybersecurity tools and controls we use",
    stackIntro: "We use practical security tools, platform controls, and hardened configuration patterns to reduce risk.",
    stack: ["SSL/TLS", "WAF", "MFA", "Backups", "Security Headers", "Dependency Scans", "Cloud IAM", "Logs", "Monitoring", "OWASP", "Firewall", "Access Control"],
    processTitle: "Reducing security risk through structured assessment and hardening",
    process: [
      ["Security Discovery", "We understand systems, data, access roles, hosting, integrations, and risk priorities."],
      ["Assessment", "We review configuration, code exposure, dependencies, access controls, cloud settings, and logs."],
      ["Risk Prioritization", "We classify issues by impact, likelihood, effort, and urgency."],
      ["Remediation", "We fix or guide fixes for vulnerabilities, misconfigurations, weak controls, and risky workflows."],
      ["Validation", "We verify fixes, review logs, test key flows, and confirm security improvements."],
      ["Monitoring and Guidance", "We set up ongoing checks and provide practical security recommendations for the team."]
    ],
    faqs: [
      ["Can you secure an existing website?", "Yes. We can review and harden CMS websites, custom sites, servers, SSL, backups, plugins, and access controls."],
      ["Do you perform penetration testing?", "We provide practical security assessment and remediation support. For formal penetration testing, we can support the process and fixes."],
      ["Can you help after a security issue?", "Yes. We can help investigate symptoms, restore backups, clean up issues where possible, harden systems, and reduce recurrence risk."]
    ]
  },
  {
    title: "24/7 Support & Maintenance",
    slug: "support-maintenance.html",
    group: "CloudOps",
    heroLines: ["24/7 Support", "Maintenance", "Services"],
    summary: "Keep your websites, applications, cloud systems, and digital platforms stable with ongoing maintenance, monitoring, updates, and support.",
    leftLabel: "Support and maintenance services",
    mainTitle: "Keep digital platforms healthy with expert support and maintenance services",
    intro: [
      "We provide support and maintenance for websites, web apps, CMS platforms, cloud infrastructure, databases, and business-critical digital systems.",
      "Our maintenance work includes issue fixing, updates, monitoring, backups, performance improvements, security checks, and planned enhancements."
    ],
    advantageTitle: "What sets us apart as a support and maintenance partner?",
    advantage: [
      "We focus on keeping your digital systems reliable, secure, updated, and ready for daily business operations.",
      "Our support model can cover urgent fixes, scheduled maintenance, performance tuning, feature improvements, and technical guidance."
    ],
    features: [
      ["fa-light fa-headset", "Responsive Support", "We handle bugs, downtime, content issues, forms, integrations, and user-impacting problems."],
      ["fa-light fa-screwdriver-wrench", "Planned Maintenance", "We manage updates, backups, checks, cleanup, performance work, and recurring improvements."],
      ["fa-light fa-heart-pulse", "Monitoring", "We track uptime, forms, logs, speed, errors, and platform health where needed."]
    ],
    useCasesKicker: "Support Use Cases",
    useCasesTitle: "Maintenance for platforms that need to stay reliable.",
    useCasesIntro: "We support digital systems where uptime, security, content accuracy, and smooth operations matter.",
    useCases: [
      ["Website Maintenance", "CMS updates, backups, content support, performance checks, form testing, and issue fixing."],
      ["Application Support", "Bug fixes, feature improvements, monitoring, database checks, API support, and release assistance."],
      ["Cloud Support", "Server updates, uptime checks, backups, logs, cost review, deployment help, and security hardening."],
      ["Emergency Fixes", "Support for urgent website, app, hosting, security, or integration issues."]
    ],
    capabilityTitle: "From issue response to long-term platform health.",
    capabilityIntro: "Our team covers monitoring, updates, bug fixes, backups, security checks, performance, and ongoing improvements.",
    capabilities: [
      ["fa-light fa-bell", "Issue Response", "Triage, diagnosis, fixes, updates, and communication around active problems."],
      ["fa-light fa-rotate", "Updates", "CMS, plugins, dependencies, server packages, and controlled release updates."],
      ["fa-light fa-database", "Backup Checks", "Backup setup, restore readiness, database review, and data protection basics."],
      ["fa-light fa-gauge-high", "Performance Care", "Speed checks, caching, optimization, cleanup, and stability improvements."]
    ],
    stackTitle: "Support and maintenance tools we use",
    stackIntro: "We use monitoring, backup, hosting, CMS, and development tools to keep digital systems healthy.",
    stack: ["Monitoring", "Backups", "WordPress", "Linux", "Cloud Hosting", "Git", "CI/CD", "Analytics", "Security Checks", "Performance Tools", "Databases", "Support Desk"],
    processTitle: "Maintaining digital systems with reliable operational discipline",
    process: [
      ["System Onboarding", "We review your website, app, hosting, access, backups, integrations, and current issues."],
      ["Support Plan", "We define response scope, maintenance rhythm, update policy, monitoring, and priorities."],
      ["Monitoring Setup", "We configure checks for uptime, forms, errors, backups, speed, or infrastructure where needed."],
      ["Maintenance Work", "We handle updates, fixes, cleanup, backups, reports, small improvements, and platform checks."],
      ["Issue Resolution", "We diagnose and fix bugs, downtime, broken flows, integrations, and performance problems."],
      ["Reporting and Improvement", "We share updates, recommend improvements, and support ongoing technical planning."]
    ],
    faqs: [
      ["Do you provide monthly website maintenance?", "Yes. We can support recurring maintenance for websites, CMS platforms, hosting, backups, updates, and small fixes."],
      ["Can you support an app built by another team?", "Yes. We can audit the existing code and infrastructure, then define a support plan."],
      ["Do you offer emergency support?", "We can support urgent issues based on scope, access, severity, and maintenance agreement."]
    ]
  },
  {
    title: "Data Engineering",
    slug: "data-engineering.html",
    group: "Data Intelligence",
    heroLines: ["Data", "Engineering", "Services"],
    summary: "Build reliable data pipelines, databases, integrations, and processing systems that turn scattered data into usable business assets.",
    leftLabel: "Data engineering and pipeline services",
    mainTitle: "Create dependable data foundations with expert data engineering services",
    intro: [
      "We help businesses collect, clean, move, transform, and structure data from websites, apps, CRMs, ERPs, databases, and third-party platforms.",
      "Our data engineering work supports analytics, reporting, automation, AI readiness, operational dashboards, and product features that depend on reliable data."
    ],
    advantageTitle: "What sets us apart as a data engineering company?",
    advantage: [
      "We design data systems around real reporting, product, and operational needs rather than isolated database work.",
      "Our approach emphasizes data quality, governance basics, scalable pipelines, clear documentation, and maintainable integration flows."
    ],
    features: [
      ["fa-light fa-pipe", "Data Pipelines", "We build pipelines that collect, transform, validate, and load data reliably."],
      ["fa-light fa-database", "Data Modeling", "We structure databases, schemas, warehouses, and access patterns for reporting and product use."],
      ["fa-light fa-plug", "Data Integration", "We connect CRMs, ERPs, apps, APIs, files, and third-party data sources."]
    ],
    useCasesKicker: "Data Engineering Use Cases",
    useCasesTitle: "Data systems built for operations and decisions.",
    useCasesIntro: "We create data foundations that support dashboards, automation, AI, reporting, and product intelligence.",
    useCases: [
      ["Data Pipelines", "Move and transform data from apps, databases, files, APIs, and business systems."],
      ["Warehouse Setup", "Centralize business data for reporting, analytics, segmentation, and leadership dashboards."],
      ["Data Cleanup", "Normalize messy records, remove duplicates, validate fields, and improve consistency."],
      ["AI Readiness", "Prepare structured, permission-aware, clean data for AI, search, and automation workflows."]
    ],
    capabilityTitle: "From scattered data to reliable data operations.",
    capabilityIntro: "Our team covers source audit, pipeline design, data modeling, integrations, validation, monitoring, and documentation.",
    capabilities: [
      ["fa-light fa-magnifying-glass-chart", "Data Audit", "Sources, quality, duplication, ownership, access, and reporting gaps."],
      ["fa-light fa-code", "Pipeline Engineering", "ETL/ELT flows, APIs, scheduled jobs, validation, and error handling."],
      ["fa-light fa-table", "Data Models", "Schemas, relationships, indexes, warehouse tables, and business definitions."],
      ["fa-light fa-eye", "Data Monitoring", "Pipeline health, quality checks, logs, alerts, and refresh validation."]
    ],
    stackTitle: "Data engineering technologies we use",
    stackIntro: "We use databases, programming languages, cloud tools, APIs, and pipeline patterns that fit your data environment.",
    stack: ["Python", "SQL", "PostgreSQL", "MySQL", "MongoDB", "APIs", "ETL", "Pandas", "Airflow", "AWS", "BigQuery", "Dashboards"],
    processTitle: "Engineering data systems with reliability and clarity",
    process: [
      ["Source Discovery", "We identify data sources, owners, formats, quality issues, and business use cases."],
      ["Data Architecture", "We design pipelines, schemas, transformations, validation rules, and storage."],
      ["Pipeline Build", "We implement extraction, transformation, loading, scheduling, error handling, and logs."],
      ["Data Validation", "We test quality, completeness, duplicates, relationships, and reporting accuracy."],
      ["Deployment", "We deploy pipelines, access controls, monitoring, refresh jobs, and documentation."],
      ["Optimization", "We improve performance, cost, quality, and data availability over time."]
    ],
    faqs: [
      ["Can you connect data from multiple systems?", "Yes. We can connect APIs, databases, files, CRMs, ERPs, websites, and apps into structured pipelines."],
      ["Can you clean messy business data?", "Yes. We can normalize records, remove duplicates, validate fields, improve structure, and prepare data for reporting."],
      ["Do you prepare data for AI projects?", "Yes. We can organize data, permissions, quality checks, and pipelines needed for AI workflows."]
    ]
  },
  {
    title: "Analytics & Visualization",
    slug: "analytics-visualization.html",
    group: "Data Intelligence",
    heroLines: ["Analytics", "Visualization", "Services"],
    summary: "Turn business data into dashboards, reports, metrics, and visual insights that support clearer decisions.",
    leftLabel: "Analytics and dashboard services",
    mainTitle: "Make data easier to act on with expert analytics and visualization services",
    intro: [
      "We design dashboards and analytics systems that help teams understand performance, customers, sales, operations, marketing, and product usage.",
      "Our work covers KPI planning, data preparation, dashboard UX, reporting workflows, visualization design, and analytics implementation."
    ],
    advantageTitle: "What sets us apart as an analytics and visualization company?",
    advantage: [
      "We design analytics around decisions, not only charts. Every dashboard is structured around the questions your team needs to answer.",
      "Our approach combines data engineering, UX design, metrics planning, and visualization best practices for clear business reporting."
    ],
    features: [
      ["fa-light fa-chart-line-up", "KPI Dashboards", "We design dashboards around the metrics your teams need to track and improve."],
      ["fa-light fa-chart-pie-simple", "Visual Reporting", "We turn complex data into charts, tables, filters, summaries, and drill-down views."],
      ["fa-light fa-filter", "Interactive Analysis", "We build filters, segments, time ranges, exports, and role-based reporting flows."]
    ],
    useCasesKicker: "Analytics Use Cases",
    useCasesTitle: "Dashboards built around business decisions.",
    useCasesIntro: "We create analytics views that help teams monitor operations, improve performance, and spot opportunities.",
    useCases: [
      ["Executive Dashboards", "High-level KPIs, trends, revenue, operations, and performance views for leadership."],
      ["Marketing Analytics", "Campaign performance, leads, conversion, channels, landing pages, and funnel analysis."],
      ["Product Analytics", "User behavior, feature usage, retention, activation, onboarding, and engagement metrics."],
      ["Operational Reports", "Inventory, finance, support, sales, field teams, workflow status, and SLA visibility."]
    ],
    capabilityTitle: "From raw metrics to clear visual decision systems.",
    capabilityIntro: "Our team covers KPI definition, data prep, dashboard design, visualization, integration, and reporting automation.",
    capabilities: [
      ["fa-light fa-bullseye-arrow", "Metric Strategy", "Define KPIs, business questions, segments, and reporting priorities."],
      ["fa-light fa-database", "Data Preparation", "Connect and clean data sources for accurate dashboard reporting."],
      ["fa-light fa-chart-mixed", "Dashboard Design", "Clear visual hierarchy, charts, filters, tables, and responsive reporting views."],
      ["fa-light fa-file-export", "Reporting Workflow", "Scheduled reports, exports, access rules, and stakeholder-ready summaries."]
    ],
    stackTitle: "Analytics and visualization tools we use",
    stackIntro: "We use BI, analytics, database, and visualization tools to create reporting systems teams can trust.",
    stack: ["Looker Studio", "Power BI", "Tableau", "Google Analytics", "SQL", "BigQuery", "PostgreSQL", "Python", "Dashboards", "Charts", "ETL", "Reports"],
    processTitle: "Turning business data into useful dashboards and reports",
    process: [
      ["KPI Discovery", "We define business questions, user groups, metrics, data sources, and reporting goals."],
      ["Data Review", "We audit data availability, quality, definitions, gaps, and refresh needs."],
      ["Dashboard Planning", "We design views, filters, charts, tables, permissions, and decision-focused layouts."],
      ["Implementation", "We connect data, build dashboards, configure metrics, and create reporting flows."],
      ["Validation", "We verify calculations, filters, data freshness, and stakeholder expectations."],
      ["Optimization", "We improve dashboard usability, performance, adoption, and metric coverage over time."]
    ],
    faqs: [
      ["Can you build dashboards from my existing data?", "Yes. We can connect existing spreadsheets, databases, analytics tools, CRMs, and APIs where access is available."],
      ["Can you help define KPIs?", "Yes. We help define metrics based on business goals, team responsibilities, and available data."],
      ["Can dashboards be updated automatically?", "Yes. We can set up scheduled refreshes, connected data sources, and automated reporting workflows."]
    ]
  },
  {
    title: "AI & Machine Learning",
    slug: "AI-consulting.html",
    group: "Data Intelligence",
    heroLines: ["Artificial Intelligence", "Development", "Company"],
    summary: "Advance your operations with AI and machine learning services that bring intelligent automation and predictive insight into your business.",
    leftLabel: "AI software development services",
    mainTitle: "Transform your business with our expert AI and machine learning solutions",
    intro: [
      "As an artificial intelligence software development company, we offer customized AI services and solutions tailored to your specific business needs.",
      "By combining advanced algorithms with robust data analytics, we build intelligent applications that improve efficiency, decision-making, and operational performance."
    ],
    advantageTitle: "What sets us apart as a top-rated AI consulting company?",
    advantage: [
      "Our AI expertise covers machine learning models, NLP, AI-driven automation, data readiness, integration, deployment, and support.",
      "Whether you are starting your AI journey or optimizing existing systems, we create AI-powered tools that improve operations and provide practical predictive insights."
    ],
    features: [
      ["fas fa-brain", "Cutting-Edge Expertise", "Our specialists work across AI-powered innovations, model workflows, and practical implementation for business challenges."],
      ["fas fa-puzzle-piece", "Customized Solutions", "We tailor AI solutions around your workflows, data, users, and measurable business objectives."],
      ["fas fa-chart-line", "Proven Delivery Process", "We validate AI ideas, prepare data, build models, integrate systems, and support production rollout."]
    ],
    useCasesKicker: "AI Use Cases",
    useCasesTitle: "AI solutions built around real business workflows.",
    useCasesIntro: "We focus on AI features that can be measured, maintained, and integrated into your existing operations without creating unnecessary complexity.",
    useCases: [
      ["Intelligent Automation", "Automate repetitive business tasks, approvals, data entry, document review, and customer support workflows."],
      ["Predictive Analytics", "Forecast demand, identify risk, detect patterns, and convert business data into practical decisions."],
      ["AI Assistants", "Create internal copilots, chatbots, knowledge search, and guided support tools for faster response."],
      ["Computer Vision", "Build image recognition, document intelligence, quality checks, and visual inspection workflows."]
    ],
    capabilityTitle: "From AI idea to production-ready product.",
    capabilityIntro: "Our team covers strategy, data, model development, integration, user experience, deployment, and support.",
    capabilities: [
      ["fa-light fa-database", "Data Readiness", "Data audit, cleaning, enrichment, permissions, and reliable pipelines."],
      ["fa-light fa-brain-circuit", "Model Engineering", "Machine learning, NLP, model tuning, evaluation, and accuracy improvement."],
      ["fa-light fa-plug", "System Integration", "Connect AI workflows with CRM, ERP, websites, dashboards, and internal tools."],
      ["fa-light fa-shield-check", "Governance", "Security, privacy, monitoring, human review, and maintainable release controls."]
    ],
    stackTitle: "AI development technologies we use",
    stackIntro: "Using modern AI frameworks, cloud platforms, data tools, and deployment systems, we build intelligent products ready for real business workflows.",
    stack: ["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "Vector DB", "FastAPI", "Cloud Deployments", "AWS", "Docker", "PostgreSQL", "Analytics"],
    processTitle: "Employing advanced algorithms and forward-thinking practices in our AI and machine learning projects",
    process: [
      ["Discovery and Requirement Analysis", "We understand business needs and define an AI solution aligned with your objectives."],
      ["Feasibility Study and Solution Design", "We assess technical and business feasibility, then create a practical solution blueprint."],
      ["Data Strategy and Preparation", "We curate, clean, enrich, and structure datasets for high-quality model inputs."],
      ["Prototype Development", "We build rapid prototypes and proofs of concept to validate assumptions early."],
      ["Model Development and Training", "We train, tune, and evaluate models for accuracy, latency, and scalability."],
      ["Deployment and Integration", "We deploy AI workflows with monitoring, controls, and integration into your existing stack."]
    ],
    faqs: [
      ["What is the typical timeframe for building an AI-based product?", "Typically it takes 4-12 weeks depending on complexity, data readiness, features, and integrations required."],
      ["How do I choose the ideal AI software development company?", "Look for practical experience, data understanding, security awareness, integration capability, and a clear delivery process."],
      ["How can I track progress during an AI project?", "Progress is tracked through regular updates, sprint reviews, prototypes, milestones, and measurable validation checkpoints."]
    ]
  }
];

const groups = ["Software Engineering", "User Experience Design", "CloudOps", "Data Intelligence"];

function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function serviceMenuHtml() {
  return `<li class="has-dropdown p-inherit">
                              <a href="#">Services
                                 <span>
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                    </svg>
                                 </span>
                              </a>
                              <div class="tp-megamenu-wrapper mega-menu megamenu-white-bg">
                                 <div class="row gx-0">
                                    <div class="col-xl-12">
                                       <div class="row gx-0">
${groups.map(group => {
  const items = services.filter(service => service.group === group);
  return `                                          <div class="col-xl-3">
                                             <div class="tp-megamenu-list">
                                                <h4 class="tp-megamenu-title">${group}</h4>
                                                <ul>
${items.map(item => `                                                   <li><a href="${item.slug}">${item.title}</a></li>`).join("\n")}
                                                </ul>
                                             </div>
                                          </div>`;
}).join("\n")}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>`;
}

function replaceServiceMenu(html) {
  const serviceMatch = html.match(/<li class="has-dropdown p-inherit">\s*<a href="(?:#|index\.html)">Service(?:s)?\s*[\s\S]*?<\/a>\s*<div class="tp-megamenu-wrapper mega-menu megamenu-white-bg">/);
  const s = serviceMatch ? serviceMatch.index : -1;
  if (s < 0) return html;

  const rest = html.slice(s + 1);
  const technologyMatch = rest.match(/<li class="has-dropdown p-inherit">\s*<a href="#">Technologies/);
  if (!technologyMatch) return html;
  const e = s + 1 + technologyMatch.index;

  return html.slice(0, s) + serviceMenuHtml() + "\n" + html.slice(e);
}

function stackClass(index) {
  const names = ["color-python", "color-tensor", "color-pytorch", "color-openai", "color-lang", "color-vector", "color-fastapi", "color-cloud", "color-aws", "color-docker", "color-postgres", "color-analytics"];
  return names[index % names.length];
}

function stackIcon(label) {
  const key = label.toLowerCase();
  const icons = [
    ["html", "fa-brands fa-html5"],
    ["css", "fa-brands fa-css3-alt"],
    ["javascript", "fa-brands fa-js"],
    ["typescript", "fa-light fa-code"],
    ["wordpress", "fa-brands fa-wordpress"],
    ["react native", "fa-brands fa-react"],
    ["react", "fa-brands fa-react"],
    ["next", "fa-light fa-n"],
    ["vue", "fa-brands fa-vuejs"],
    ["angular", "fa-brands fa-angular"],
    ["node", "fa-brands fa-node-js"],
    ["laravel", "fa-brands fa-laravel"],
    ["python", "fa-brands fa-python"],
    ["flutter", "fa-light fa-mobile-screen-button"],
    ["swift", "fa-brands fa-swift"],
    ["kotlin", "fa-light fa-mobile-screen"],
    ["firebase", "fa-light fa-fire-flame-curved"],
    ["php", "fa-brands fa-php"],
    ["mysql", "fa-light fa-database"],
    ["postgres", "fa-light fa-elephant"],
    ["mongodb", "fa-light fa-leaf"],
    ["database", "fa-light fa-database"],
    ["sql", "fa-light fa-database"],
    ["aws", "fa-brands fa-aws"],
    ["azure", "fa-brands fa-microsoft"],
    ["google cloud", "fa-brands fa-google"],
    ["cloud", "fa-light fa-cloud-arrow-up"],
    ["docker", "fa-brands fa-docker"],
    ["kubernetes", "fa-light fa-dharmachakra"],
    ["terraform", "fa-light fa-cubes"],
    ["linux", "fa-brands fa-linux"],
    ["nginx", "fa-light fa-server"],
    ["github", "fa-brands fa-github"],
    ["gitlab", "fa-brands fa-gitlab"],
    ["git", "fa-brands fa-git-alt"],
    ["figma", "fa-brands fa-figma"],
    ["wireframe", "fa-light fa-grid-2"],
    ["design system", "fa-light fa-swatchbook"],
    ["prototype", "fa-light fa-object-group"],
    ["responsive", "fa-light fa-display-code"],
    ["typography", "fa-light fa-font"],
    ["brand", "fa-light fa-palette"],
    ["ui component", "fa-light fa-layer-group"],
    ["accessibility", "fa-light fa-universal-access"],
    ["content", "fa-light fa-pen-to-square"],
    ["seo", "fa-light fa-magnifying-glass-chart"],
    ["handoff", "fa-light fa-handshake-angle"],
    ["interview", "fa-light fa-comments-question"],
    ["survey", "fa-light fa-square-poll-vertical"],
    ["journey", "fa-light fa-route"],
    ["persona", "fa-light fa-user-group"],
    ["usability", "fa-light fa-vial"],
    ["heatmap", "fa-light fa-chart-heatmap"],
    ["analytics", "fa-light fa-chart-line-up"],
    ["competitor", "fa-light fa-chess"],
    ["workshop", "fa-light fa-people-group"],
    ["sitemap", "fa-light fa-sitemap"],
    ["taxonomy", "fa-light fa-folder-tree"],
    ["card sorting", "fa-light fa-table-cells"],
    ["cms", "fa-light fa-rectangle-history"],
    ["navigation", "fa-light fa-signs-post"],
    ["etl", "fa-light fa-pipe"],
    ["pandas", "fa-light fa-table"],
    ["airflow", "fa-light fa-wind"],
    ["bigquery", "fa-brands fa-google"],
    ["looker", "fa-brands fa-google"],
    ["power bi", "fa-light fa-chart-simple"],
    ["tableau", "fa-light fa-chart-mixed"],
    ["chart", "fa-light fa-chart-pie-simple"],
    ["report", "fa-light fa-file-chart-column"],
    ["tensorflow", "fa-light fa-wave-pulse"],
    ["pytorch", "fa-light fa-fire-flame-curved"],
    ["openai", "fa-light fa-brain-circuit"],
    ["langchain", "fa-light fa-link"],
    ["vector", "fa-light fa-database"],
    ["fastapi", "fa-light fa-bolt"],
    ["solidity", "fa-light fa-file-contract"],
    ["ethereum", "fa-brands fa-ethereum"],
    ["polygon", "fa-light fa-hexagon-nodes"],
    ["web3", "fa-light fa-link"],
    ["ethers", "fa-light fa-link"],
    ["hardhat", "fa-light fa-helmet-safety"],
    ["ipfs", "fa-light fa-share-nodes"],
    ["metamask", "fa-light fa-wallet"],
    ["smart contract", "fa-light fa-file-contract"],
    ["api", "fa-light fa-plug"],
    ["graphql", "fa-light fa-project-diagram"],
    ["bootstrap", "fa-brands fa-bootstrap"],
    ["push notification", "fa-light fa-bell"],
    ["app store", "fa-brands fa-app-store-ios"],
    ["play store", "fa-brands fa-google-play"],
    ["rds", "fa-light fa-database"],
    ["s3", "fa-light fa-bucket"],
    ["dependency", "fa-light fa-code-branch"],
    ["user flow", "fa-light fa-route"],
    ["component", "fa-light fa-layer-group"],
    ["dashboard", "fa-light fa-chart-tree-map"],
    ["prioritization", "fa-light fa-list-check"],
    ["performance", "fa-light fa-gauge-high"],
    ["stripe", "fa-brands fa-stripe"],
    ["razorpay", "fa-light fa-credit-card"],
    ["payment", "fa-light fa-credit-card"],
    ["email", "fa-light fa-envelope"],
    ["monitoring", "fa-light fa-heart-pulse"],
    ["backup", "fa-light fa-database"],
    ["security", "fa-light fa-shield-check"],
    ["waf", "fa-light fa-shield-halved"],
    ["mfa", "fa-light fa-user-lock"],
    ["ssl", "fa-light fa-lock-keyhole"],
    ["firewall", "fa-light fa-fire"],
    ["owasp", "fa-light fa-bug-slash"],
    ["access control", "fa-light fa-user-shield"],
    ["ci/cd", "fa-light fa-code-merge"],
    ["logs", "fa-light fa-rectangle-list"],
    ["support", "fa-light fa-headset"]
  ];
  const match = icons.find(([needle]) => key.includes(needle));
  return match ? match[1] : "fa-light fa-circle-nodes";
}

function main(item) {
  const id = item.slug.replace(".html", "").replace(/[^a-z0-9]/gi, "-").toLowerCase();
  return `         <main>
<section class="ai-hero d-flex align-items-center">
  <div class="container">
    <nav class="ai-breadcrumb" aria-label="Breadcrumb">
      <a href="index.html">Home</a>
      <span>Services</span>
      <strong>${item.title}</strong>
    </nav>

    <h1 class="ai-title">
      ${item.heroLines[0]} <br>
      <span class="gradient-text">${item.heroLines[1]}</span> <br>
      ${item.heroLines[2]}
    </h1>

    <p class="ai-desc">${item.summary}</p>

    <a href="contact-us.html" class="btn ai-btn">Let's Get Started -></a>
  </div>
</section>

<section class="ai-service-section">
  <div class="container">
    <div class="row align-items-start">
      <div class="col-lg-3">
        <div class="ai-left-text">${item.leftLabel.replace(/\s+/g, " <br>\n          ")}</div>
      </div>
      <div class="col-lg-9">
        <h2 class="ai-main-title">${item.mainTitle}</h2>
        ${item.intro.map(text => `<p class="ai-para">${text}</p>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="ai-advantage-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <p class="ai-tag">The Unified Advantage</p>
        <h2 class="ai-heading">${item.advantageTitle}</h2>
        ${item.advantage.map(text => `<p class="ai-text">${text}</p>`).join("\n        ")}
      </div>
      <div class="col-lg-6">
        ${item.features.map((feature, index) => `<div class="ai-feature">
          <div class="ai-icon"><i class="${feature[0]}"></i></div>
          <div>
            <h4>${feature[1]}</h4>
            <p>${feature[2]}</p>
          </div>
        </div>${index < item.features.length - 1 ? "\n        <div class=\"ai-divider\"></div>" : ""}`).join("\n\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="ai-premium-usecases">
  <div class="container">
    <div class="row align-items-end gy-4 mb-45">
      <div class="col-lg-7">
        <span class="ai-premium-kicker">${item.useCasesKicker}</span>
        <h2>${item.useCasesTitle}</h2>
      </div>
      <div class="col-lg-5">
        <p>${item.useCasesIntro}</p>
      </div>
    </div>
    <div class="row g-4">
      ${item.useCases.map((useCase, index) => `<div class="col-lg-3 col-md-6">
        <div class="ai-premium-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${useCase[0]}</h3>
          <p>${useCase[1]}</p>
        </div>
      </div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="ai-premium-capabilities">
  <div class="container">
    <div class="row g-4 align-items-stretch">
      <div class="col-lg-5">
        <div class="ai-premium-dark-panel">
          <span class="ai-premium-kicker">Capability Map</span>
          <h2>${item.capabilityTitle}</h2>
          <p>${item.capabilityIntro}</p>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="ai-premium-capability-grid">
          ${item.capabilities.map(capability => `<div><i class="${capability[0]}"></i><h3>${capability[1]}</h3><p>${capability[2]}</p></div>`).join("\n          ")}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="ai-premium-stack">
  <div class="container">
    <div class="ai-stack-heading text-center">
      <span class="ai-premium-kicker">${item.title} Stack</span>
      <h2>${item.stackTitle}</h2>
      <p>${item.stackIntro}</p>
    </div>
    <div class="ai-premium-stack-list">
      ${item.stack.map((label, index) => `<div class="ai-stack-chip ${stackClass(index)}"><i class="${stackIcon(label)}"></i><span>${label}</span></div>`).join("\n      ")}
    </div>
    <div class="ai-stack-link text-center">
      <a href="contact-us.html">Ask about our ${item.title.toLowerCase()} approach <i class="fa-light fa-arrow-right"></i></a>
    </div>
  </div>
</section>

<section class="ai_contidi">
  <div class="container-xxl px-3 px-md-5">
    <div class="row align-items-start mb-10 g-4" style="margin-bottom: 60px;">
      <div class="col-12 col-md-3">
        <div class="section-labelx">Our Process<br>Involvement</div>
      </div>
      <div class="col-12 col-md-9">
        <h2 class="section-heading mb-0">${item.processTitle}</h2>
      </div>
    </div>

    <div class="process-row">
      ${item.process.map((step, index) => {
        const cardId = `${id}-card-${String(index + 1).padStart(2, "0")}`;
        return `<div class="process-card${index === 0 ? " active" : ""}" id="${cardId}" onclick="activateCard('${cardId}')">
        <div>
          <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
          <div class="card-icon">
            <svg viewBox="0 0 44 44"><rect x="8" y="8" width="28" height="28" rx="6"/><path d="M15 23l5 5 10-12"/><circle cx="32" cy="12" r="4"/></svg>
          </div>
        </div>
        <div class="card-body-content">
          <div class="card-title">${step[0]}</div>
          <div class="card-desc">${step[1]}</div>
          <button class="arrow-btn" aria-label="Learn more">
            <svg viewBox="0 0 16 16"><polyline points="3 8 13 8"/><polyline points="9 4 13 8 9 12"/></svg>
          </button>
        </div>
      </div>`;
      }).join("\n      ")}
    </div>
  </div>
</section>

<section class="faq-section py-5">
  <div class="container">
    <h2 class="faq-title text-center mb-5">Frequently Asked Questions <span>( FAQs )</span></h2>
    <div class="accordion custom-faq" id="faq-${id}">
      ${item.faqs.map((faq, index) => {
        const faqId = `${id}-faq-${index + 1}`;
        return `<div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#${faqId}">
            ${faq[0]}
          </button>
        </h2>
        <div id="${faqId}" class="accordion-collapse collapse" data-bs-parent="#faq-${id}">
          <div class="accordion-body">${faq[1]}</div>
        </div>
      </div>`;
      }).join("\n      ")}
    </div>
  </div>
</section>
<script>
  function activateCard(id) {
    document.querySelectorAll('.process-card').forEach(card => card.classList.remove('active'));
    const activeCard = document.getElementById(id);
    if (activeCard) activeCard.classList.add('active');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.process-card').forEach(card => {
      card.addEventListener('mouseenter', () => activateCard(card.id));
    });
  });
</script>
         </main>
`;
}

function updateTitleAndMeta(html, item) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${item.title} Company in Noida, Delhi : Cybetiq</title>`);
  if (/<meta name="description" content="[^"]*">/.test(html)) {
    html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(item.summary)}">`);
  } else {
    html = html.replace("</title>", `</title>\n   <meta name="description" content="${esc(item.summary)}">`);
  }
  return html;
}

const htmlFiles = fs.readdirSync(root).filter(file => file.endsWith(".html"));
for (const file of htmlFiles) {
  const fullPath = path.join(root, file);
  const updated = replaceServiceMenu(fs.readFileSync(fullPath, "utf8"));
  fs.writeFileSync(fullPath, updated);
}

let source = replaceServiceMenu(fs.readFileSync(path.join(root, "index.html"), "utf8"));
fs.writeFileSync(path.join(root, "index.html"), source);

const mainStart = source.indexOf("         <main>");
const footerStart = source.indexOf("         <footer>");
if (mainStart < 0 || footerStart < 0) {
  throw new Error("Could not find main/footer boundaries in index.html");
}

const before = source.slice(0, mainStart);
const after = source.slice(footerStart);

for (const item of services) {
  let html = before + main(item) + after;
  html = updateTitleAndMeta(html, item);
  fs.writeFileSync(path.join(root, item.slug), html);
}

console.log(`Generated ${services.length} service pages and updated service navigation.`);
