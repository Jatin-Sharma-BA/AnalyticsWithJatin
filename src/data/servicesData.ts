import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-01',
    slug: 'startup-idea-validation',
    number: '01',
    title: 'Startup Idea Validation',
    shortTitle: 'Idea Validation',
    category: 'Strategy & Planning',
    tagline: 'Evaluate business ideas before committing significant time, money and resources.',
    positioning: 'Evaluate business ideas before committing significant time, money and resources through structured hypothesis testing, market demand research, and competitive viability analysis.',
    clientChallenges: [
      'Is the idea commercially viable in today’s market?',
      'Does a real, urgent customer problem exist?',
      'Is there sufficient market demand and willingness to pay?',
      'Who are the exact initial target customers?',
      'What alternatives and indirect substitutes already exist?',
      'What critical assumptions must be tested before capital commitment?'
    ],
    whatWeProvide: 'A rigorous feasibility and research framework that de-risks business concepts before substantial capital or developer investment. We audit customer problem severity, quantify addressable market segments, map incumbents and workarounds, and pressure-test operational assumptions.',
    scopeOfWork: [
      'Business idea assessment and core thesis interrogation',
      'Customer problem identification and severity grading',
      'Target customer research and persona profiling',
      'Market opportunity assessment (TAM / SAM / SOM calculation)',
      'Competitor and substitute alternative analysis',
      'Demand signals and commercial feasibility research',
      'Business assumptions assessment and risk matrix',
      'Strategic opportunity and risk identification'
    ],
    deliverables: [
      'Comprehensive Idea Validation Report',
      'Market Opportunity & Demand Summary',
      'Target Customer Segment Profiles & Buyer Archetypes',
      'Competitor & Substitute Comparison Matrix',
      'Commercial & Technical Feasibility Assessment',
      'Actionable Validation Recommendations',
      'Recommended Next Steps & Resource Allocation Guide'
    ],
    typicalProcess: [
      { step: '01', title: 'Thesis Deconstruction', description: 'Isolate underlying commercial assumptions, customer profiles, and value propositions.' },
      { step: '02', title: 'Market & Secondary Intelligence', description: 'Investigate target segment size, competitor offerings, and customer alternatives.' },
      { step: '03', title: 'Feasibility Assessment', description: 'Pressure test willingness-to-pay, distribution hurdles, and unit economics.' },
      { step: '04', title: 'Synthesis & Recommendation', description: 'Deliver a structured Go / No-Go / Pivot decision report with execution milestones.' }
    ],
    relatedCaseStudyIds: ['the-kollektor', 'the-cinnamon-kitchen'],
    ctaText: 'Validate Your Business Idea →',
    idealFor: 'Early-stage founders, angel-backed entrepreneurs, and corporate intrapreneurs considering a new venture.'
  },
  {
    id: 'service-02',
    slug: 'market-research-competitive-analysis',
    number: '02',
    title: 'Market Research & Competitive Analysis',
    shortTitle: 'Market & Competitor Analysis',
    category: 'Strategy & Planning',
    tagline: 'Understand the market, customers, competitors and opportunities before making important business decisions.',
    positioning: 'Understand the market, customers, competitors and opportunities before making important business decisions with structured industry intelligence and benchmarking.',
    clientChallenges: [
      'Limited understanding of evolving market dynamics and regulatory shifts.',
      'Unclear customer segments and changing purchasing behaviors.',
      'Increasing competition from direct incumbents and emerging alternatives.',
      'Uncertain market positioning and lack of differentiation.',
      'Difficulty identifying unaddressed gaps and high-margin niches.'
    ],
    whatWeProvide: 'In-depth secondary market intelligence and competitor benchmarking. We systematically dissect industry trends, incumbent positioning, pricing structures, customer dissatisfaction points, and white-space opportunities to guide market entry and expansion.',
    scopeOfWork: [
      'Industry structure and market size research',
      'Macro and micro market trends analysis',
      'Target audience research and demographic/firmographic segmentation',
      'Customer buying behavior and trigger event analysis',
      'Direct and indirect competitor identification',
      'Competitor feature, pricing, and capability benchmarking',
      'Product and service comparison matrices',
      'Market opportunity identification and white-space mapping',
      'SWOT and competitive positioning analysis'
    ],
    deliverables: [
      'In-Depth Market Research Report',
      'Competitor Benchmarking & Feature Matrix',
      'Customer Segment & Buyer Behavior Analysis',
      'Industry Trend & Regulatory Summary',
      'Market White-Space & Opportunity Assessment',
      'Strategic Research Presentation (Executive Deck)'
    ],
    typicalProcess: [
      { step: '01', title: 'Scope & Taxonomy', description: 'Define market parameters, segment categories, and direct/indirect competitor universes.' },
      { step: '02', title: 'Data Gathering & Auditing', description: 'Compile market datasets, financial filings, pricing catalogues, and customer feedback.' },
      { step: '03', title: 'Benchmarking Matrix', description: 'Compare offerings across product capabilities, pricing tiers, distribution channels, and messaging.' },
      { step: '04', title: 'Strategic Recommendations', description: 'Synthesize findings into strategic positioning levers and competitive moats.' }
    ],
    relatedCaseStudyIds: ['nykaa-brand-perception', 'sugar-cosmetics-analysis'],
    ctaText: 'Explore Your Market →',
    idealFor: 'Companies entering new verticals, launching major product lines, or facing rising incumbent pressure.'
  },
  {
    id: 'service-03',
    slug: 'business-model-pricing-strategy',
    number: '03',
    title: 'Business Model, Pricing & Strategy',
    shortTitle: 'Business Model & Pricing',
    category: 'Strategy & Planning',
    tagline: 'Develop a clearer business model, evaluate revenue opportunities and structure the commercial foundation of a business.',
    positioning: 'Develop a clearer business model, evaluate revenue opportunities and structure the commercial foundation of a business for profitability and scale.',
    clientChallenges: [
      'Unclear or fragmented revenue models with low margin capture.',
      'Pricing uncertainty — underpricing services or leaving enterprise value on the table.',
      'Uncertain cost assumptions and unpredictable contribution margins.',
      'Weak, undifferentiated value proposition that confuses buyers.',
      'Difficulty identifying the most profitable customer tiers.'
    ],
    whatWeProvide: 'Comprehensive commercial architecture design. We evaluate unit economics, test tiered and value-based pricing structures, model contribution margins, and align value propositions directly with high-LTV customer archetypes.',
    scopeOfWork: [
      'Business model evaluation and unit economics audit',
      'Business Model Canvas development and stress-testing',
      'Revenue stream identification and diversification modeling',
      'Value-based, tiered, and usage-based pricing strategy',
      'Cost structure and revenue assumption sensitivity analysis',
      'Value proposition refinement and packaging design',
      'Customer segment prioritisation by gross margin contribution',
      'Commercial opportunity assessment and monetization roadmap',
      'Business model improvement and margin expansion recommendations'
    ],
    deliverables: [
      'Business Model Framework & Operating Archetype',
      'Revenue Model & Monetization Architecture Document',
      'Pricing Strategy & Packaging Tier Guide',
      'Commercial Assumptions & Unit Economics Model',
      'Value Proposition & Positioning Blueprint',
      'Strategic Commercial Recommendations'
    ],
    typicalProcess: [
      { step: '01', title: 'Financial Architecture Review', description: 'Audit current revenue mechanisms, cost drivers, and customer cohort profitability.' },
      { step: '02', title: 'Pricing & Packaging Design', description: 'Analyze willingness-to-pay elasticity, competitive packaging, and pricing metrics.' },
      { step: '03', title: 'Scenario Modeling', description: 'Simulate revenue impact across multiple volume, margin, and retention scenarios.' },
      { step: '04', title: 'Commercial Playbook', description: 'Provide final pricing schedules, sales battlecards, and margin guardrails.' }
    ],
    relatedCaseStudyIds: ['the-cinnamon-kitchen', 'pu-copper'],
    ctaText: 'Structure Your Business Model →',
    idealFor: 'Businesses transitioning from beta to paid, restructuring pricing, or addressing margin compression.'
  },
  {
    id: 'service-04',
    slug: 'zero-to-one-business-planning',
    number: '04',
    title: 'Zero-to-One Business Planning',
    shortTitle: 'Zero-to-One Planning',
    category: 'Strategy & Planning',
    tagline: 'Turn a business concept into a structured business plan with clear priorities, milestones and execution requirements.',
    positioning: 'Turn a business concept into a structured business plan with clear priorities, milestones and execution requirements to guide disciplined implementation.',
    clientChallenges: [
      'Having a promising business idea without a coherent, actionable operational roadmap.',
      'Unstructured execution leading to wasted capital, delayed timelines, and team confusion.',
      'Unclear launch priorities — trying to build everything at once.',
      'Missing operational, supply chain, and regulatory prerequisites.',
      'Difficulty moving smoothly from conceptual planning to day-to-day implementation.'
    ],
    whatWeProvide: 'An end-to-end execution blueprint that translates founder vision into detailed operating realities. We define milestones, critical path dependencies, resource models, and operational cadence so teams execute without hesitation.',
    scopeOfWork: [
      'Business concept structuring and operational scope definition',
      'Business requirements analysis and tech/ops dependency mapping',
      'Launch planning and phase-gate sequencing',
      'Milestone definition with explicit completion criteria',
      'Operational requirement identification (vendors, compliance, tooling)',
      'Resource, budget, and dependency planning',
      'Execution roadmap development (Week 1 through Month 6)',
      'Core business process structuring and ownership definition',
      'Initial KPI identification and reporting baseline'
    ],
    deliverables: [
      'Comprehensive 0-to-1 Business Plan',
      'Business Requirements Document (BRD)',
      'Launch Roadmap & Critical Path Schedule',
      'Detailed Execution Plan with Phase-Gate Milestones',
      'Milestone Tracker & Accountability Matrix',
      'Operational Planning & Tooling Framework'
    ],
    typicalProcess: [
      { step: '01', title: 'Vision & Scope Alignment', description: 'Document business boundaries, target launch date, and key strategic outcomes.' },
      { step: '02', title: 'Workstream Deconstruction', description: 'Break operations down into Product, Ops, Marketing, Legal, and Finance workstreams.' },
      { step: '03', title: 'Dependency & Resource Mapping', description: 'Identify lead times, critical path dependencies, and vendor requirements.' },
      { step: '04', title: 'Master Launch Framework', description: 'Deliver operational blueprints and weekly milestone execution trackers.' }
    ],
    relatedCaseStudyIds: ['the-kollektor', 'the-cinnamon-kitchen'],
    ctaText: 'Build Your Business Roadmap →',
    idealFor: 'Founders preparing to launch, businesses spinning out new divisions, or teams seeking structured execution.'
  },
  {
    id: 'service-05',
    slug: 'go-to-market-strategy',
    number: '05',
    title: 'Go-to-Market Strategy',
    shortTitle: 'Go-To-Market (GTM)',
    category: 'Strategy & Planning',
    tagline: 'Develop a structured market-entry and launch strategy for a product, service or new business.',
    positioning: 'Develop a structured market-entry and launch strategy for a product, service or new business that maximizes early adoption and customer acquisition efficiency.',
    clientChallenges: [
      'Unclear target audience and inability to identify the early adopter beachhead.',
      'Weak market positioning that blends into competitor noise.',
      'Uncertain launch channels and unvalidated customer acquisition paths.',
      'Difficulty acquiring initial reference customers and driving trial.',
      'Lack of a structured, phased launch sequence.'
    ],
    whatWeProvide: 'A phased, tactical market-entry playbook. We pinpoint high-intent early customer cohorts, craft differentiated value messaging, select the most efficient acquisition channels, and design launch funnels with quantifiable metrics.',
    scopeOfWork: [
      'Target customer identification and beachhead segment selection',
      'Market positioning and value proposition differentiation',
      'Product and service messaging hierarchies for distinct buyer personas',
      'Channel evaluation (Inbound, Outbound, Partnerships, Paid, Content)',
      'Customer acquisition planning and CAC/LTV feasibility',
      'Launch strategy formulation (Soft Launch, Beta, General Availability)',
      'Funnel architecture and conversion touchpoint planning',
      'Market-entry risk mitigation and contingency recommendations',
      'Launch KPI definition and tracking setup'
    ],
    deliverables: [
      'Complete Go-To-Market (GTM) Strategy Deck',
      'Target Audience & Ideal Customer Profile (ICP) Framework',
      'Positioning & Core Messaging Architecture Document',
      'Channel Selection Matrix & Tactical Playbook',
      'Launch Roadmap & Multi-Phase Rollout Schedule',
      'Customer Acquisition & Lead Funnel Plan',
      'GTM Performance Measurement & KPI Framework'
    ],
    typicalProcess: [
      { step: '01', title: 'Beachhead Discovery', description: 'Identify the segment with the highest willingness-to-buy and lowest adoption friction.' },
      { step: '02', title: 'Messaging Architecture', description: 'Develop differentiated positioning statements, hooks, and proof points.' },
      { step: '03', title: 'Channel & Funnel Engineering', description: 'Select distribution channels and map user progression from awareness to conversion.' },
      { step: '04', title: 'Launch Execution Roadmap', description: 'Establish phased milestone criteria, team assignments, and target funnel KPIs.' }
    ],
    relatedCaseStudyIds: ['the-kollektor', 'sugar-cosmetics-analysis'],
    ctaText: 'Plan Your Market Entry →',
    idealFor: 'Startups launching their first product, or established firms introducing new offerings into competitive markets.'
  },
  {
    id: 'service-06',
    slug: 'data-driven-marketing-analytics',
    number: '06',
    title: 'Data-Driven Marketing & Ads',
    shortTitle: 'Marketing & Ads Analytics',
    category: 'Analytics & Performance',
    tagline: 'Understand marketing performance through data and identify opportunities to improve campaign effectiveness.',
    positioning: 'Understand marketing performance through data and identify opportunities to improve campaign effectiveness and customer acquisition efficiency.',
    clientChallenges: [
      'Unclear advertising performance across Meta, Google, LinkedIn, and organic channels.',
      'Rising Customer Acquisition Costs (CAC) with deteriorating conversion rates.',
      'Low lead quality and leaky marketing funnels.',
      'Poor visibility into true blended Return on Ad Spend (ROAS) and marketing ROI.',
      'Difficulty comparing channel efficiency to reallocate marketing spend.'
    ],
    whatWeProvide: 'Rigorous attribution and campaign performance analytics. We audit tracking setups, analyze audience cohorts, dissect funnel bottlenecks, calculate blended ROAS and CAC, and deliver actionable optimizations to improve campaign yield.',
    scopeOfWork: [
      'Multi-channel marketing campaign data consolidation and hygiene check',
      'Advertising performance analysis (Google Ads, Meta Ads, LinkedIn Ads)',
      'Channel performance and CAC comparison',
      'Customer acquisition metrics and cohort lifetime value modeling',
      'Conversion rate analysis across landing pages and checkout steps',
      'ROAS, ROI, and contribution margin evaluation by campaign',
      'Marketing funnel leakage and drop-off analysis',
      'Campaign KPI monitoring frameworks and automated alert rules',
      'Data-driven performance improvement and budget reallocation recommendations'
    ],
    deliverables: [
      'Comprehensive Marketing Performance Analysis Report',
      'Campaign & Channel Performance Dashboard',
      'Channel Efficiency & CAC Comparison Matrix',
      'Marketing KPI Tracking Framework',
      'Cohort-Level ROAS & ROI Evaluation Sheet',
      'Actionable Campaign Optimisation & Budget Allocation Playbook'
    ],
    typicalProcess: [
      { step: '01', title: 'Data Audit & Reconciliation', description: 'Validate tracking pixels, UTM governance, platform spend, and attribution data.' },
      { step: '02', title: 'Channel Cohort Breakdown', description: 'Segment performance by creative angle, audience archetype, and conversion step.' },
      { step: '03', title: 'Funnel Friction Analysis', description: 'Detect high-dropoff stages in the landing, signup, and purchase journey.' },
      { step: '04', title: 'Optimization & Budget Shift', description: 'Deliver recommendations on creative fatigue, bid caps, and high-yield channels.' }
    ],
    relatedCaseStudyIds: ['digital-marketing-campaign-analytics', 'digital-presence-audit'],
    ctaText: 'Analyse Your Marketing Performance →',
    idealFor: 'E-commerce brands, D2C ventures, and B2B companies spending on paid media seeking better ROI.'
  },
  {
    id: 'service-07',
    slug: 'business-analytics-dashboards',
    number: '07',
    title: 'Business Analytics & Dashboards',
    shortTitle: 'Analytics & Dashboards',
    category: 'Analytics & Performance',
    tagline: 'Convert business data into understandable performance insights, reports and dashboards.',
    positioning: 'Convert disparate business data into understandable performance insights, executive reports and automated dashboards that empower rapid decision-making.',
    clientChallenges: [
      'Data spread across disparate silos: ERP, CRM, spreadsheets, payment gateways.',
      'Lack of real-time KPI visibility for leadership and operations teams.',
      'Labor-intensive manual reporting that consumes days each month.',
      'Difficulty identifying emerging performance trends, anomalies, and churn drivers.',
      'Limited visibility into operational margins and cash cycle metrics.'
    ],
    whatWeProvide: 'End-to-end analytical data pipelines and intuitive executive dashboards. Using SQL, Excel, Power BI, and Tableau, we clean unstructured data, build standardized data models, and create live dashboards that present key business metrics clearly.',
    scopeOfWork: [
      'Business data architecture review and source system audit',
      'Data extraction, cleaning, transformation, and reconciliation',
      'KPI identification, metric formula standardization, and governance',
      'Trend, seasonality, and variance analysis',
      'Sales velocity, revenue churn, and cohort retention analysis',
      'Customer profitability and operational performance breakdown',
      'SQL-based analytical queries, data views, and data marts',
      'Advanced Excel modeling with dynamic pivot tables and scenario testing',
      'Interactive Power BI dashboard development and semantic modeling',
      'Tableau dashboard design and executive visualization'
    ],
    deliverables: [
      'Comprehensive Business Analytics Diagnostic Report',
      'Validated SQL Analytical Codebase & Query Documentation',
      'Automated Excel Performance & Scenario Models',
      'Production-Ready Power BI Dashboard (.pbix / web view)',
      'Interactive Tableau Executive Dashboard',
      'Standardized KPI Definition & Governance Framework',
      'Monthly Executive Performance Presentation Template'
    ],
    typicalProcess: [
      { step: '01', title: 'Data Inventory & KPI Definition', description: 'Catalogue data sources, identify critical metrics, and establish source-of-truth formulas.' },
      { step: '02', title: 'Data Cleaning & SQL Modeling', description: 'Build relational models, clean dirty inputs, and develop optimized SQL queries.' },
      { step: '03', title: 'Dashboard Design & Prototyping', description: 'Create responsive visual layouts in Power BI / Tableau tailored to executive workflows.' },
      { step: '04', title: 'Deployment & Training', description: 'Train management on interpreting visualizations and setting automated alerts.' }
    ],
    relatedCaseStudyIds: ['hospital-performance-analytics', 'regional-sales-performance', 'amazon-fresh-analytics', 'zomato-order-analysis'],
    ctaText: 'Turn Your Data Into Insights →',
    idealFor: 'Growing enterprises, operations managers, and business owners tired of manual spreadsheets and blind spots.'
  },
  {
    id: 'service-08',
    slug: 'business-operations-process-improvement',
    number: '08',
    title: 'Business Operations & Process Improvement',
    shortTitle: 'Operations & Process Improvement',
    category: 'Advisory & Operations',
    tagline: 'Understand business operations, identify process gaps and develop practical improvement recommendations.',
    positioning: 'Understand business operations, identify process gaps and develop practical improvement recommendations that eliminate bottlenecks and reduce operating friction.',
    clientChallenges: [
      'Unstructured, ad-hoc workflows leading to inconsistent quality and errors.',
      'Operational inefficiencies that eat away at gross margins.',
      'Repeated manual tasks that drain team productivity and morale.',
      'Absence of Standard Operating Procedures (SOPs) for onboarding and fulfillment.',
      'Unclear ownership, overlapping responsibilities, and team friction.',
      'Execution bottlenecks that limit throughput as transaction volume grows.'
    ],
    whatWeProvide: 'Structured operational diagnostics and business process engineering. We map current-state workflows, measure turnaround times, locate root causes of rework, craft actionable SOPs, and establish clear responsibility matrices (RACI).',
    scopeOfWork: [
      'Current-state business process analysis and workflow mapping',
      'End-to-end operational assessment across functional departments',
      'Bottleneck and friction point identification via cycle-time analysis',
      'Standard Operating Procedure (SOP) development, structuring, and documentation',
      'Process documentation and knowledge base architecture',
      'Responsibility, role, and accountability mapping (RACI matrix)',
      'Operational KPI identification and throughput metrics',
      'Tooling and lightweight workflow automation recommendations',
      'Process improvement implementation roadmap and change guidance'
    ],
    deliverables: [
      'Comprehensive Operations & Process Diagnostic Report',
      'Visual Workflow Maps (Current State vs Future State)',
      'Standard Operating Procedure (SOP) System & Templates',
      'Actionable Operational Improvement Recommendations',
      'Phased Process Improvement Roadmap',
      'Organizational Responsibility Matrix (RACI Framework)',
      'Operational Health & Efficiency KPI Dashboard'
    ],
    typicalProcess: [
      { step: '01', title: 'Operational Audit', description: 'Interview stakeholders, observe operational flows, and catalog repeat manual tasks.' },
      { step: '02', title: 'Bottleneck & Friction Mapping', description: 'Quantify cycle times, error rates, and inter-departmental handoff delays.' },
      { step: '03', title: 'Future-State Redesign', description: 'Eliminate redundant steps, draft clear SOPs, and define ownership matrices.' },
      { step: '04', title: 'Implementation & Review', description: 'Roll out simplified operating procedures and track throughput gains.' }
    ],
    relatedCaseStudyIds: ['pu-copper', 'hospital-performance-analytics'],
    ctaText: 'Improve Your Business Operations →',
    idealFor: 'Growing companies experiencing growing pains, high error rates, or scaling friction across operations.'
  },
  {
    id: 'service-09',
    slug: 'growth-scale-up-advisory',
    number: '09',
    title: 'Growth & Scale-Up Advisory',
    shortTitle: 'Growth & Scale-Up',
    category: 'Advisory & Operations',
    tagline: 'Help growing businesses evaluate growth opportunities and develop structured plans for sustainable expansion.',
    positioning: 'Help growing businesses evaluate growth opportunities and develop structured plans for sustainable expansion without compromising unit economics.',
    clientChallenges: [
      'Stagnant growth or plateauing customer acquisition in core markets.',
      'Unclear expansion paths — uncertainty between new product lines vs new geographies.',
      'Customer churn and difficulty sustaining expansion revenue.',
      'Difficulty prioritising dozens of competing growth opportunities.',
      'Operational and capacity constraints that break under rapid volume spikes.'
    ],
    whatWeProvide: 'Strategic expansion blueprints that balance ambition with operational discipline. We assess growth engines, evaluate new market and product adjacencies, audit customer retention cohorts, and define a sequenced roadmap for durable growth.',
    scopeOfWork: [
      'Comprehensive business growth engine assessment',
      'Growth opportunity identification and market adjacency evaluation',
      'Customer retention, cohort churn, and Net Revenue Retention (NRR) analysis',
      'Geographical and demographic market expansion research',
      'Revenue expansion opportunity evaluation (upsells, cross-sells, new tiers)',
      'Growth channel capacity and marginal return assessment',
      'Operational readiness and capacity stress-testing for scaling',
      'Strategic scaling priorities and resource allocation modeling',
      'Multi-quarter growth roadmap development with milestone gates'
    ],
    deliverables: [
      'Growth Opportunity Assessment & Scoring Matrix',
      'Comprehensive Business Growth & Expansion Roadmap',
      'New Market / Product Expansion Strategy Document',
      'Customer Retention & Churn Reduction Recommendations',
      'Growth KPI & North Star Metric Framework',
      'Executive Strategic Action Plan'
    ],
    typicalProcess: [
      { step: '01', title: 'Growth Engine Diagnostics', description: 'Analyze historical revenue drivers, cohort retention curves, and channel ceilings.' },
      { step: '02', title: 'Opportunity Sizing & Scoring', description: 'Filter expansion opportunities using ICE / RICE scoring frameworks against ROI.' },
      { step: '03', title: 'Operational Stress-Testing', description: 'Verify fulfillment capacity, staffing, and cash cycles required to support growth.' },
      { step: '04', title: 'Execution Roadmap', description: 'Establish phased quarterly milestones with accountable leads and KPI benchmarks.' }
    ],
    relatedCaseStudyIds: ['the-cinnamon-kitchen', 'polkraft-analytics-pmp'],
    ctaText: 'Explore Growth Opportunities →',
    idealFor: 'Businesses with established product-market fit preparing for the next stage of organic or geographic scale.'
  },
  {
    id: 'service-10',
    slug: 'ongoing-founder-advisory',
    number: '10',
    title: 'Ongoing Founder Advisory',
    shortTitle: 'Founder Advisory',
    category: 'Advisory & Operations',
    tagline: 'Provide structured business thinking and ongoing strategic support to founders navigating critical decisions.',
    positioning: 'Provide structured business thinking and ongoing strategic support to founders navigating critical decisions, resource tradeoffs, and operational hurdles.',
    clientChallenges: [
      'Drowning in competing daily fires without space for high-level strategic thinking.',
      'Difficult high-stakes business decisions without an objective sounding board.',
      'Lack of structured planning cadence and accountability mechanisms.',
      'Unclear visibility into actual progress against long-term business goals.',
      'Need for an independent, data-grounded business perspective.'
    ],
    whatWeProvide: 'A confidential, rigorous sparring partner for business leadership. Through recurring strategy sessions, milestone accountability tracking, and ad-hoc decision frameworks, we keep founders focused on highest-leverage growth levers.',
    scopeOfWork: [
      'Recurring bi-weekly or monthly executive strategy discussions',
      'Business performance and management metric reviews',
      'Priority setting and backlog triage (Eisenhower matrix applied to business operations)',
      'Structured business problem-solving and root-cause analysis',
      'Strategic decision support on hiring, pricing, expansion, and partnerships',
      'Commercial opportunity evaluation and threat mitigation',
      'KPI, milestone, and OKR reviews against quarterly objectives',
      'Accountability tracking and action item follow-up',
      'Post-meeting strategic synthesis and follow-up planning'
    ],
    deliverables: [
      'Regular Structured Strategy & Advisory Sessions',
      'Executive Business Review Summaries (post-session synthesis)',
      'Custom Decision Frameworks & Tradeoff Matrices',
      'Quarterly Priority & Milestone Trackers',
      'Action Plans with Explicit Deadlines and Owners',
      'Strategic Recommendations & Independent Assessments',
      'Quarterly Progress & Retrospective Documents'
    ],
    typicalProcess: [
      { step: '01', title: 'Diagnostic Baseline', description: 'Review current business metrics, active bottlenecks, and quarterly milestones.' },
      { step: '02', title: 'Cadenced Strategy Sessions', description: 'Meet bi-weekly for dedicated, structured problem-solving on active priorities.' },
      { step: '03', title: 'Decision Frameworks', description: 'Deliver structured evaluations for critical vendor, pricing, or hiring choices.' },
      { step: '04', title: 'Accountability Tracking', description: 'Maintain continuous oversight of agreed commitments and KPI outcomes.' }
    ],
    relatedCaseStudyIds: ['the-kollektor', 'the-cinnamon-kitchen', 'polkraft-analytics-pmp'],
    ctaText: 'Discuss Founder Advisory →',
    idealFor: 'Solo founders, co-founding teams, and SMB owners seeking an experienced, analytical strategic partner without full-time executive overhead.'
  }
];
