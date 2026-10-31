import { CaseStudyItem } from '../types';

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  // -------------------------------------------------------------
  // Category A: Analytics Projects
  // -------------------------------------------------------------
  {
    id: 'hospital-performance-analytics',
    slug: 'hospital-performance-readmission-analytics',
    title: 'Hospital Performance & 30-Day Readmission Analytics',
    clientOrTopic: 'Healthcare Operational & Clinical Analytics',
    category: 'Analytics Projects',
    projectNature: 'Commercial Analytics Project',
    industry: 'Healthcare & Hospital Operations',
    duration: '4-Week Intensive Diagnostic',
    summary: 'In-depth analytical diagnostic of 100,000+ patient records analyzing 30-day readmission drivers, bed occupancy rates, and length-of-stay bottlenecks across multi-specialty care departments.',
    overview: 'A clinical and operational business analytics initiative evaluating patient stay durations, medication changes, diagnostic categories, and post-discharge factors that drive costly 30-day readmissions.',
    businessContext: 'Modern healthcare institutions operate under severe margin pressures where unscheduled 30-day readmissions penalize hospital accreditation ratings and escalate avoidable operating costs. Hospital leadership required data-backed visibility into departmental bottlenecks.',
    problemStatement: 'Unplanned readmission rates were elevating operational costs, while bed turnaround delays in cardiology and acute care units caused emergency department boarding delays without clear visibility into patient-specific risk factors.',
    objectives: [
      'Quantify primary clinical and demographic predictors of 30-day readmission.',
      'Analyze length of stay (LOS) variance across 8 core medical specialties.',
      'Evaluate the impact of inpatient medication adjustments on discharge outcomes.',
      'Design an executive dashboard tracking bed utilization, discharge velocity, and readmission risk scores.'
    ],
    roleAndContribution: 'Lead Business & Healthcare Data Analyst responsible for data pipeline architecture, exploratory cohort modeling, SQL feature engineering, and interactive dashboard creation.',
    researchAndAnalyticalApproach: 'Applied retrospective cohort analysis on 100,000+ standardized inpatient encounters. Conducted bivariate statistical testing, risk-stratified subgroup analyses, and multi-factor regression to decouple correlation from clinical operational causation.',
    workPerformed: [
      'Cleaned, normalized, and mapped 101,766 patient encounter records with 50+ clinical variables.',
      'Engineered clinical features including admission severity score, polypharmacy count, and prior 12-month admission count.',
      'Built advanced SQL queries for cohort segmentation across age brackets, primary diagnoses, and discharge disposition codes.',
      'Constructed interactive Power BI dashboards with drill-through capabilities from executive overview to physician-level discharge summaries.'
    ],
    toolsAndMethodology: [
      'SQL (PostgreSQL) for cohort filtering and data transformation',
      'Power BI for multi-page executive operational dashboards',
      'Microsoft Excel (Pivot modeling, What-If scenario analysis)',
      'Statistical correlation and risk stratification modeling'
    ],
    keyFindings: [
      'Patients with >= 3 prior hospital visits within 12 months exhibited a 4.2x higher likelihood of 30-day readmission.',
      'Medication adjustments made within 24 hours prior to discharge without a 48-hour follow-up window correlated with a 28% spike in emergency returns.',
      'Average Length of Stay (ALOS) was 1.8 days longer than national benchmarks for acute cardiology primarily due to delayed weekend lab clearances.'
    ],
    recommendations: [
      'Implement an automated discharge risk score flagged inside the electronic medical record 48 hours prior to anticipated release.',
      'Establish a standard 72-hour post-discharge telephonic care check-in protocol for high-risk cohorts.',
      'Re-engineer lab diagnostic workflows for Friday afternoon submissions to prevent unnecessary weekend inpatient bed occupancy.'
    ],
    deliverables: [
      'Executive Clinical Analytics Diagnostic Report',
      'Production-Ready Interactive Power BI Dashboard (.pbix)',
      'SQL Analytical Query Codebase and Data Pipeline Documentation',
      'Departmental Length of Stay (LOS) Variance Analysis Sheet'
    ],
    verifiedOutcomes: [
      'Identified actionable clinical workflows capable of reducing unmanaged readmission risk by an estimated 15-20%.',
      'Delivered automated reporting replacing 18 hours per month of manual reporting by administrative staff.',
      'Note: Analysis conducted on retrospective inpatient encounter datasets; operational recommendations presented to clinical operations review board.'
    ],
    learnings: [
      'Healthcare analytics requires rigorous validation against clinical protocols; statistical significance must always be vetted by medical domain experts.',
      'Operational handoffs (such as weekend lab clearances) often introduce greater variance into length-of-stay than clinical condition severity.'
    ],
    relatedServiceIds: ['business-analytics-dashboards', 'business-operations-process-improvement']
  },
  {
    id: 'nykaa-brand-perception',
    slug: 'nykaa-brand-perception-market-analysis',
    title: 'Nykaa Brand Perception & Beauty E-Commerce Market Analysis',
    clientOrTopic: 'Omnichannel Beauty & Personal Care Commerce',
    category: 'Analytics Projects',
    projectNature: 'Strategic Research & Market Audit',
    industry: 'Consumer Internet & D2C E-Commerce',
    duration: '3-Week Deep-Dive Research Project',
    summary: 'Comprehensive market intelligence audit evaluating Nykaa’s brand positioning, consumer sentiment across product categories, pricing competitiveness, and omnichannel fulfillment moat against Tier-1 competitors.',
    overview: 'A deep-dive market research and brand perception study evaluating consumer sentiment, repeat purchase drivers, category margins, and competitive threats across the Indian beauty and personal care landscape.',
    businessContext: 'With rapid entry from Tata CliQ Palette, Reliance Tira, and quick-commerce players (Blinkit, Zepto) delivering beauty essentials in 10 minutes, legacy beauty commerce platforms must defend their high-AOV premium positioning.',
    problemStatement: 'Understanding whether consumer sentiment shifts toward speed and price discounts threaten Nykaa’s curated luxury brand equity and loyalty program retention.',
    objectives: [
      'Benchmark consumer sentiment across 15,000+ consumer reviews and social touchpoints.',
      'Map price elasticity and promotional discount dependencies across mass, masstige, and luxury beauty tiers.',
      'Evaluate omnichannel physical store role in driving high-margin private label penetration.',
      'Formulate strategic defensive and offensive recommendations for customer lifetime value (LTV) enhancement.'
    ],
    roleAndContribution: 'Strategic Market Intelligence Lead designing the benchmarking taxonomy, crawling review sentiment structures, synthesizing financial report insights, and authoring the strategic executive report.',
    researchAndAnalyticalApproach: 'Multi-source secondary research combining annual investor reports, sentiment classification across consumer review samples, competitor pricing scraping across 200 key SKUs, and retail footprint analysis.',
    workPerformed: [
      'Analyzed price points and promotional discount frequencies across Nykaa, Tira, and Amazon India for 200 benchmark beauty SKUs.',
      'Coded qualitative customer feedback across fulfillment speed, authenticity assurance, product expiry, and return ease.',
      'Evaluated private label margin contributions (Nykaa Cosmetics, Kay Beauty) vs third-party brand distribution fees.',
      'Created a strategic positioning map identifying vulnerability in the 500-1,500 INR price segment.'
    ],
    toolsAndMethodology: [
      'Secondary Market Intelligence & Public Filings Audit',
      'Competitor Price Benchmarking Matrix (Excel)',
      'Customer Sentiment Taxonomy & Review Classification',
      'SWOT & Strategic Positioning Framework'
    ],
    keyFindings: [
      'Brand authenticity remains Nykaa’s highest-rated attribute (89% trust rating), protecting its luxury/prestige segment from quick-commerce inroads.',
      'Mass and daily-care replenishment items (< 600 INR) show high vulnerability to quick-commerce delivery timelines.',
      'Private label brands yield 2.4x higher gross margins than third-party distribution, yet store associates under-recommend them when commissions are uniform.'
    ],
    recommendations: [
      'Double down on exclusive international prestige brand partnerships where quick-commerce lacks supply chain authenticity clearance.',
      'Restructure Nykaa Prive rewards to emphasize exclusive masterclasses and sample tiers rather than flat percentage discount vouchers.',
      'Align store staff incentives specifically to high-margin private-label trials and consultation conversions.'
    ],
    deliverables: [
      '38-Slide Executive Strategy Presentation',
      'Beauty Commerce Competitor Benchmarking Matrix',
      'Consumer Sentiment & Friction Point Report',
      'Category Vulnerability & White-Space Assessment'
    ],
    verifiedOutcomes: [
      'Produced comprehensive strategic reference deck on consumer switching costs and brand perception.',
      'Identified the 800-1,500 INR category as the prime battleground requiring curated bundles rather than direct price competition.',
      'Note: Conducted as an independent market intelligence and strategy study.'
    ],
    learnings: [
      'In consumer e-commerce, speed does not entirely displace trust for high-consequence products (like skincare and luxury cosmetics).',
      'Omnichannel physical stores serve primarily as trust anchors and experiential trial centers rather than mere pickup points.'
    ],
    relatedServiceIds: ['market-research-competitive-analysis', 'business-model-pricing-strategy']
  },
  {
    id: 'regional-sales-performance',
    slug: 'regional-sales-performance-analytics',
    title: 'Regional Sales Performance & Territory Profitability Modeling',
    clientOrTopic: 'Multi-Territory Commercial Distribution',
    category: 'Analytics Projects',
    projectNature: 'Commercial Analytics Project',
    industry: 'B2B Distribution & Wholesale Goods',
    duration: '3-Week Analytics Engagement',
    summary: 'Consolidation and performance modeling of multi-region sales transactions across 4 geographical zones, revealing hidden territory margin leakage, dealer discount abuses, and quota misalignments.',
    overview: 'A commercial analytics initiative analyzing 3 years of regional transactional sales data across four domestic zones, uncovering stark variations between top-line revenue volume and bottom-line net margin contribution.',
    businessContext: 'A growing distributor experienced record top-line revenue growth (+24% YoY) but suffered declining operating profits. Management lacked cross-regional visibility into trade discounts, freight costs, and credit payment cycles.',
    problemStatement: 'Sales leadership rewarded volume over profitability, leading field managers to grant excessive spot discounts and extend 90-day credit terms to low-margin clients, diluting working capital.',
    objectives: [
      'Consolidate disjointed transactional records across North, South, East, and West sales zones.',
      'Calculate true Contribution Margin 2 (CM2) incorporating freight, storage, and dealer credit terms.',
      'Identify the top 20% unprofitable dealer accounts driving working capital drag.',
      'Build a dynamic Power BI regional sales dashboard for monthly executive review.'
    ],
    roleAndContribution: 'Analytics Consultant. Led data cleaning, SQL transactional queries, contribution margin formula modeling, and Power BI report authoring.',
    researchAndAnalyticalApproach: 'Transactional database analysis covering 45,000+ sales orders. Implemented ABC product categorization, dealer profitability waterfall analysis, and geographic variance modeling.',
    workPerformed: [
      'Extracted and cleansed 45,000+ order rows across disparate ERP branches.',
      'Built a centralized SQL data model linking invoices, freight tables, and accounts receivable logs.',
      'Formulated net margin logic factoring freight distance, volume rebate slabs, and cost-of-capital on overdue receivables.',
      'Designed executive and regional manager views with territory drill-downs and discount threshold alerts.'
    ],
    toolsAndMethodology: [
      'SQL for data merging and transactional aggregation',
      'Power BI (DAX modeling, regional heatmaps, interactive slicers)',
      'Advanced Excel (Waterfall charts, dealer sensitivity testing)',
      'ABC & 80/20 Profitability Segmentation'
    ],
    keyFindings: [
      'The Western sales zone generated 38% of total volume but contributed only 14% of operating profit due to unmonitored logistics freight absorption.',
      '12 Tier-A dealers routinely delayed payments to 110 days while still claiming upfront 5% cash-discount rebates.',
      'Three product SKUs in the mid-tier category were consistently sold at negative gross margins when expedited freight was incurred.'
    ],
    recommendations: [
      'Implement strict system-enforced discount authorization matrices requiring VP sign-off for gross margins below 18%.',
      'Tie regional sales manager bonuses to Net Margin Realization rather than raw booked invoiced volume.',
      'Revamp dealer terms: strictly freeze discount eligibility for accounts with outstanding dues beyond 45 days.'
    ],
    deliverables: [
      'Regional Sales & Margin Diagnostic Report',
      'Interactive Power BI Sales & Territory Profitability Dashboard',
      'Dealer Margin Variance Matrix & Account Classification Sheet',
      'Sales Incentive Realignment Framework'
    ],
    verifiedOutcomes: [
      'Identified over 4.2M INR in annual profit leakage caused by unearned cash discounts and rogue freight absorption.',
      'Streamlined quarterly sales reporting turnaround from 14 days down to real-time automated dashboard updates.',
      'Note: Analytics model deployed across client operations.'
    ],
    learnings: [
      'Volume-based incentives without margin guardrails will inevitably erode enterprise value.',
      'Data visibility alone drives accountability: simply publishing the dealer margin leaderboard changes sales rep behavior.'
    ],
    relatedServiceIds: ['business-analytics-dashboards', 'business-model-pricing-strategy']
  },
  {
    id: 'amazon-fresh-analytics',
    slug: 'amazon-fresh-business-analytics',
    title: 'Amazon Fresh Business Analytics & Quick-Commerce Basket Dynamics',
    clientOrTopic: 'Grocery Quick-Commerce & Fulfillment Operations',
    category: 'Analytics Projects',
    projectNature: 'Commercial Analytics Project',
    industry: 'Retail & Quick Commerce',
    duration: '3-Week Research & Modeling Sprint',
    summary: 'Granular basket analysis and fulfillment economics evaluation investigating Average Order Value (AOV), SKU affinity, perishables wastage rates, and delivery slot efficiency in dense urban clusters.',
    overview: 'An operational and consumer purchasing study assessing grocery e-commerce basket composition, cross-category attachment rates, and delivery unit economics in metro markets.',
    businessContext: 'Quick-commerce grocery platforms struggle with tight unit economics where last-mile fulfillment costs must be recouped through optimal basket sizes, private label penetration, and low perishables write-downs.',
    problemStatement: 'Low Average Order Value (AOV) and high delivery density costs threaten unit economics without strategic bundle recommendations and targeted delivery slot pricing.',
    objectives: [
      'Analyze market basket association rules (Apriori affinity) across staple, fresh, and impulse categories.',
      'Evaluate delivery slot utilization and density economics across time-of-day cohorts.',
      'Model the impact of minimum order thresholds on checkout drop-off rates versus contribution margin.',
      'Provide concrete merchandising and promotional bundling recommendations.'
    ],
    roleAndContribution: 'Data Analyst and Strategy Consultant handling transaction modeling, affinity analysis, and unit economics simulation.',
    researchAndAnalyticalApproach: 'Applied Market Basket Analysis (affinity and lift calculations) alongside cohort time-of-day order clustering to model contribution margins across delivery modes.',
    workPerformed: [
      'Analyzed multi-category grocery transaction logs with 25,000+ checkout events.',
      'Computed item-pair support, confidence, and lift metrics for cross-sell recommendations.',
      'Simulated financial impact of shifting minimum free delivery thresholds from 499 to 599 INR.',
      'Visualized slot fulfillment utilization across weekday morning vs weekend evening peaks.'
    ],
    toolsAndMethodology: [
      'Python / Pandas for Market Basket association mining',
      'Power BI for transaction visualization and basket decomposition',
      'Microsoft Excel for contribution margin sensitivity models',
      'Affinity & Lift Analysis methodology'
    ],
    keyFindings: [
      'Fresh produce orders had a 68% attachment probability to dairy items, but only an 11% attachment to high-margin personal care or cleaning goods.',
      'Orders placed between 7 AM and 9 AM were 40% more likely to be small single-item emergency breakfast purchases that operated at a negative contribution margin.',
      'A smart post-cart prompt offering a curated staple add-on increased AOV by 18% with negligible cart abandonment in simulation.'
    ],
    recommendations: [
      'Implement dynamic pre-checkout bundles pairing fast-moving low-margin produce with high-margin pantry staples.',
      'Introduce a nominal convenience surcharge for micro-baskets under 300 INR during morning rush hours to drive order consolidation.',
      'Create personalized replenishment reminder widgets for recurring weekly essentials based on historical consumption velocity.'
    ],
    deliverables: [
      'Grocery Basket Dynamics & Affinity Research Report',
      'Unit Economics Contribution Margin Model',
      'Delivery Slot Utilization & Scheduling Heatmaps',
      'Merchandising Cross-Sell & Bundling Playbook'
    ],
    verifiedOutcomes: [
      'Delivered structured merchandising blueprint demonstrating path to +12% AOV expansion.',
      'Identified critical margin thresholds preventing negative-margin micro-deliveries.',
      'Note: Commercial analytics project based on retail transaction benchmarking data.'
    ],
    learnings: [
      'High order frequency without basket depth accelerates operational burnout in last-mile logistics.',
      'Strategic product placement must occur in the pre-checkout drawer, where intent is highest and friction lowest.'
    ],
    relatedServiceIds: ['business-analytics-dashboards', 'business-operations-process-improvement']
  },
  {
    id: 'digital-marketing-campaign-analytics',
    slug: 'digital-marketing-campaign-analytics',
    title: 'Multi-Channel Digital Marketing Campaign Analytics & Attribution',
    clientOrTopic: 'Cross-Platform Performance Marketing & Funnel Diagnostics',
    category: 'Analytics Projects',
    projectNature: 'Commercial Analytics Project',
    industry: 'Digital Media & Performance Marketing',
    duration: '2-Week Analytical Audit',
    summary: 'Consolidation and attribution analysis of paid ad spend across Meta Ads, Google Ads, and remarketing channels, eliminating attribution double-counting and reallocating capital to high-ROAS creative angles.',
    overview: 'A deep performance marketing audit reviewing advertising spend, click-through rates, conversion funnels, and true blended ROAS across multi-platform acquisition channels.',
    businessContext: 'A direct-to-consumer brand was spending heavily across Google Search and Meta Ads, but platform attribution was reporting overlapping conversions, inflating reported ROAS while cash-in-bank margins declined.',
    problemStatement: 'Platform-reported ROAS claimed 3.8x on Meta and 4.2x on Google, yet blended bank revenue indicated an actual ROAS of only 2.1x, masking severe ad fatigue and wasted ad spend on branded search cannibalization.',
    objectives: [
      'Reconcile multi-channel ad spend against actual backend Shopify / payment gateway orders.',
      'Audit search query reports to isolate non-branded incremental conversions from branded search cannibalization.',
      'Evaluate creative fatigue velocity across visual ad variants.',
      'Build a blended marketing efficiency ratio (MER) tracking dashboard.'
    ],
    roleAndContribution: 'Lead Performance Analytics Consultant. Audited UTM structures, built attribution reconciliation model, and created campaign optimization playbooks.',
    researchAndAnalyticalApproach: 'Reconciled first-party analytics (UTM tracking and order IDs) against ad network API reports. Conducted incrementality testing analysis and creative fatigue decay curves.',
    workPerformed: [
      'Extracted 6 months of ad spend and conversion logs across Meta Ads Manager, Google Ads, and payment logs.',
      'Eliminated double-counted attribution by tagging orders with unique first-click and last-click attribution IDs.',
      'Quantified brand search cannibalization where the company paid up to 35 INR per click for users already intending to visit direct.',
      'Constructed a unified Marketing Efficiency Ratio (MER) dashboard tracking daily cash return.'
    ],
    toolsAndMethodology: [
      'SQL & Google BigQuery for UTM order attribution mapping',
      'Tableau & Power BI for daily MER & blended CAC tracking',
      'Microsoft Excel for creative cohort performance decay tables',
      'First-Touch / Last-Touch / Blended Incrementality Modeling'
    ],
    keyFindings: [
      '31% of conversions claimed by Google Search were existing customers clicking on branded search ads that could have been captured via organic SEO.',
      'Meta Ad creative experienced significant fatigue within 18 days, with frequency > 3.2 resulting in a 42% spike in cost per acquisition (CPA).',
      'Video testimonials generated 2.3x higher purchase intent than generic product-on-white lifestyle photography.'
    ],
    recommendations: [
      'Cap branded search spend using exact-match negatives and lower bids, diverting saved budget into high-intent generic non-brand keywords.',
      'Enforce an agile 14-day creative refresh cycle testing at least 4 new hook variations every sprint.',
      'Adopt Blended Marketing Efficiency Ratio (MER = Total Revenue / Total Paid Spend) as the primary steering metric rather than in-platform self-reported ROAS.'
    ],
    deliverables: [
      'Digital Marketing Performance Audit & Attribution Diagnostic',
      'Daily Blended MER & Paid Spend Tracker (Excel & Dashboard)',
      'Brand Search Incrementality & Cannibalization Assessment',
      'Creative Optimization & Testing Protocol Guide'
    ],
    verifiedOutcomes: [
      'Identified over 300,000 INR per month in non-incremental ad spend on brand keywords that was safely reallocated.',
      'Improved true blended ROAS from 2.1x to 2.8x within 45 days post-reallocation.',
      'Note: Implemented on commercial ad accounts.'
    ],
    learnings: [
      'Never rely exclusively on platform-reported attribution; ad networks are incentivized to claim credit for every shared touchpoint.',
      'Incrementality testing is essential for scaling brands spending over 500,000 INR per month.'
    ],
    relatedServiceIds: ['data-driven-marketing-analytics', 'business-analytics-dashboards']
  },
  {
    id: 'digital-presence-audit',
    slug: 'digital-presence-conversion-audit',
    title: 'Enterprise Digital Presence & Funnel Conversion Audit',
    clientOrTopic: 'Website Architecture & Digital Conversion Efficiency',
    category: 'Analytics Projects',
    projectNature: 'Strategic Research & Market Audit',
    industry: 'B2B Services & Enterprise Technology',
    duration: '2-Week Comprehensive Diagnostic',
    summary: 'Technical and user-journey audit examining web traffic behavior, search visibility, mobile bounce rates, and lead capture micro-friction across high-intent conversion pathways.',
    overview: 'A systematic audit of a high-value B2B service firm’s digital footprint, evaluating organic search authority, page speed benchmarks, user scroll engagement, and contact form drop-off friction.',
    businessContext: 'An established corporate services firm was driving substantial traffic from paid LinkedIn campaigns and industry webinars, but high bounce rates and dismal form completion rates (< 1.2%) stalled sales pipeline growth.',
    problemStatement: 'Prospective high-value enterprise clients were visiting the site but failing to convert into discovery calls due to clunky mobile layouts, 12-field inquiry forms, and slow load times.',
    objectives: [
      'Audit page performance, Core Web Vitals, and mobile responsiveness.',
      'Analyze scroll depth, heatmaps, and micro-drop-off rates across key landing pages.',
      'Review technical SEO foundations, semantic structure, and keyword cannibalization.',
      'Provide a prioritised conversion rate optimisation (CRO) backlog.'
    ],
    roleAndContribution: 'Conversion & Digital Analytics Specialist leading heat-map session analysis, speed profiling, and UX copy recommendations.',
    researchAndAnalyticalApproach: 'Combined quantitative analytics (Google Analytics 4 event streams, PageSpeed Insights, Search Console) with qualitative heuristic UX evaluations and form field abandonment logs.',
    workPerformed: [
      'Profiled page load speeds across desktop and mobile 4G network profiles, finding 4.8s mobile LCP on core services pages.',
      'Analyzed field-by-field form abandonment on the client consultation enquiry form.',
      'Audited organic search positioning across 150 primary high-intent B2B keywords.',
      'Created wireframe recommendations for simplified high-converting consultation landing pages.'
    ],
    toolsAndMethodology: [
      'Google Analytics 4 (GA4) custom event funnels',
      'Google Search Console & Technical SEO Crawlers',
      'PageSpeed Insights & Lighthouse performance profiling',
      'Heuristic Conversion Rate Optimisation (CRO) Framework'
    ],
    keyFindings: [
      '62% of mobile visitors bounced before reaching the primary value proposition due to slow asset load and a large uncompressed hero graphic.',
      'Dropping required fields from 11 down to 5 (removing fax, physical address, and detailed text essay) eliminated 47% of form abandonment.',
      'Client case studies were buried behind an unlabeled "Resources" navigation tab, starving visitors of proof before booking.'
    ],
    recommendations: [
      'Re-engineer the consultation form with progressive disclosure: simple 4-field initial capture followed by an optional scheduling calendar.',
      'Elevate client proof and verified logos directly adjacent to the primary hero CTA.',
      'Compress image assets and implement CDN caching to bring mobile LCP under 1.8 seconds.'
    ],
    deliverables: [
      'Digital Presence & Conversion Architecture Audit Report',
      'Technical SEO & Core Web Vitals Optimization Checklist',
      'Form Abandonment & CRO Wireframe Blueprint',
      'High-Intent Keyword Opportunity Matrix'
    ],
    verifiedOutcomes: [
      'Delivered concrete engineering and design roadmap to double inquiry capture rate.',
      'Estimated reduction of 60% in bounce rates by addressing core web vital bottlenecks.',
      'Note: Conducted as a strategic digital presence diagnostic.'
    ],
    learnings: [
      'Enterprise buyers value speed and clarity; asking for too much information upfront signals bureaucracy rather than consulting prestige.',
      'Proof elements (case studies, client outcomes) must never be hidden; they belong in the direct eyeline of the conversion CTA.'
    ],
    relatedServiceIds: ['data-driven-marketing-analytics', 'market-research-competitive-analysis']
  },
  {
    id: 'sugar-cosmetics-analysis',
    slug: 'sugar-cosmetics-instagram-analytics',
    title: 'Sugar Cosmetics Instagram Analytics & Influencer Content Architecture',
    clientOrTopic: 'Social Media Performance & Content ROI Diagnostics',
    category: 'Analytics Projects',
    projectNature: 'Strategic Research & Market Audit',
    industry: 'Consumer Goods, Beauty & Social Commerce',
    duration: '2-Week Social Intelligence Project',
    summary: 'Audited 1,200+ Instagram video reels and brand collaborations, identifying key content formats, audio velocity, and engagement ratios that drive high organic follower-to-buyer transitions.',
    overview: 'A social commerce and digital content analytics study examining Sugar Cosmetics’ social engagement patterns, influencer collaboration tiers, and audience comment sentiment across key product launches.',
    businessContext: 'D2C beauty brands allocate millions to influencer seeding and short-form video production. Brands must understand which specific video formats (swatches, wear-tests, celebrity tie-ins, tutorials) produce authentic commercial resonance rather than passive likes.',
    problemStatement: 'High view counts on social reels failed to correlate reliably with website traffic and product sales, raising the question of which creative architectures generate active product interest.',
    objectives: [
      'Categorize and benchmark 1,200+ Instagram posts across creative format, video duration, and product category.',
      'Analyze comment sentiment (purchase intent vs giveaway spam).',
      'Identify the correlation between influencer tier (nano, micro, macro) and high-intent engagement.',
      'Formulate a data-driven short-form video content strategy.'
    ],
    roleAndContribution: 'Social Media & Brand Analytics Lead. Developed data collection scripts, sentiment categorization rubrics, and content performance matrices.',
    researchAndAnalyticalApproach: 'Structured content analysis combining engagement rate calculations, categorical tag clustering, and manual qualitative review of top 50 viral vs bottom 50 underperforming reels.',
    workPerformed: [
      'Catalogued 1,200 Instagram media items with metrics: views, likes, comment count, and video length.',
      'Segmented content into 6 functional archetypes: Product Demos, Shade Matching, Before/After, Influencer Collabs, Trend Memes, and Promotional Offers.',
      'Calculated Engagement Ratio (ER) and Comment-to-View Ratio (CVR) across categories.',
      'Identified optimal video duration sweet spots and audio trend correlations.'
    ],
    toolsAndMethodology: [
      'Instagram Graph Data Extraction & Python Parser',
      'Microsoft Excel (Pivot tables, correlation matrices)',
      'Content Categorization & Sentiment Coding Matrix',
      'Engagement & Intent Scoring Framework'
    ],
    keyFindings: [
      '15-30 second "Transfer-Proof & Wear-Test" videos yielded a 3.4x higher comment inquiry rate ("which shade?", "where to buy?") compared to lifestyle brand shoots.',
      'Micro-influencers (20k-80k followers) delivered 4.1x higher intent-driven comments per dollar invested than celebrity partnerships.',
      'Posts featuring giveaways saw huge comment volume but 0.08% click-through rate, driving irrelevant algorithm signals that harmed subsequent organic reach.'
    ],
    recommendations: [
      'Rebalance content mix: allocate 60% of video output to short wear-tests and shade swatches on diverse skin tones.',
      'Shift influencer budget toward long-term affiliate retainers with micro-creators rather than one-off macro endorsements.',
      'Cease vanity giveaway loops; replace with product education and problem-solution reels.'
    ],
    deliverables: [
      'Social Media Performance & Content Diagnostics Report',
      'Creative Format Engagement & Intent Matrix',
      'Micro vs Macro Influencer ROI Framework',
      'Short-Form Video Production Blueprint'
    ],
    verifiedOutcomes: [
      'Delivered clear empirical evidence that functional product proof outperforms high-budget aesthetic lifestyle videos in driving commercial intent.',
      'Note: Conducted as an independent market analytics and brand intelligence project.'
    ],
    learnings: [
      'Views are a vanity metric; comment quality and product inquiry depth are the only reliable social signals for commercial purchase intent.',
      'Diverse real-world product application builds trust faster than studio lighting.'
    ],
    relatedServiceIds: ['data-driven-marketing-analytics', 'market-research-competitive-analysis']
  },
  {
    id: 'zomato-order-analysis',
    slug: 'zomato-order-restaurant-analytics',
    title: 'Zomato Food Delivery Order & Restaurant Operational Analytics',
    clientOrTopic: 'Food-Tech Logistics & Merchant Economics',
    category: 'Analytics Projects',
    projectNature: 'Commercial Analytics Project',
    industry: 'Food Technology & Quick Delivery Logistics',
    duration: '3-Week Analytics Diagnostic',
    summary: 'Analyzed 50,000+ restaurant order records across cuisine types, delivery radius brackets, peak order windows, and rating tiers to model cloud kitchen profitability and delivery delays.',
    overview: 'A data-intensive study dissecting restaurant delivery performance, kitchen prep times, rider transit friction, and order discount patterns across multi-cuisine urban cloud kitchens.',
    businessContext: 'Cloud kitchens and restaurant partners face fierce platform competition on food aggregators like Zomato. High platform commission rates (20-25%) leave minimal room for errors in preparation time and rider delays.',
    problemStatement: 'High kitchen prep times (KPT) during 8 PM - 10 PM weekend rushes caused rider wait times, food temperature degradation, and negative customer ratings that triggered platform algorithmic demotions.',
    objectives: [
      'Quantify the impact of kitchen preparation delays on customer satisfaction ratings and repeat orders.',
      'Model demand curves across cuisine types to optimize kitchen staffing shifts.',
      'Analyze discounting elasticity across order value bands.',
      'Develop an operational efficiency scorecard for cloud kitchen management.'
    ],
    roleAndContribution: 'Data Analyst handling SQL queries, delivery metric modeling, and operational scorecard visualization.',
    researchAndAnalyticalApproach: 'Multi-variable transactional data analysis examining 50,000+ anonymized food delivery orders. Created delivery time decomposition models (Order to Prep, Prep to Pickup, Pickup to Drop).',
    workPerformed: [
      'Aggregated order logs including timestamps, order values, item counts, ratings, and delivery distances.',
      'Built SQL queries decomposing total fulfillment time into KPT (Kitchen Prep Time) and RTT (Rider Transit Time).',
      'Segmented order cancellations and refund rates by preparation delay thresholds.',
      'Designed an operational kitchen health dashboard in Power BI.'
    ],
    toolsAndMethodology: [
      'SQL for order aggregation and delivery time decomposition',
      'Power BI for restaurant operations dashboard',
      'Microsoft Excel for cuisine demand elasticity models',
      'Operations Queuing & Cycle-Time Analytics'
    ],
    keyFindings: [
      'When Kitchen Prep Time exceeded 22 minutes, customer ratings dropped by an average of 0.8 stars, cutting organic listing visibility by 35% on the subsequent day.',
      'Orders containing more than 4 distinct custom items experienced 2.2x higher packaging errors and rider wait times.',
      'Biryani and North Indian categories showed rigid price elasticity, whereas fast food and desserts were highly sensitive to 50 INR discount triggers.'
    ],
    recommendations: [
      'Cap kitchen menu breadth during 8:00 PM - 10:00 PM peak periods, pausing complex low-margin items to protect fast-prep throughput.',
      'Pre-pack high-volume accompaniments (salads, dips, cutlery) during afternoon prep windows to eliminate final-stage dispatch delays.',
      'Implement real-time kitchen tablet alerts when active ticket queue exceeds 8 orders to throttle platform dispatch buffer automatically.'
    ],
    deliverables: [
      'Food Delivery Operational Analytics & KPT Report',
      'Interactive Restaurant Operations Power BI Dashboard',
      'Peak-Hour Menu Engineering & Throughput Optimization Guide',
      'Cuisine Price Elasticity & Discounting Model'
    ],
    verifiedOutcomes: [
      'Mapped concrete operational changes capable of trimming 6-8 minutes off average weekend order preparation cycles.',
      'Identified critical menu trimming opportunities to prevent algorithmic platform penalties.',
      'Note: Analytics model formulated on food delivery transactional datasets.'
    ],
    learnings: [
      'On delivery platforms, kitchen operational speed directly dictates customer discovery algorithms; fast dispatch creates a compounding positive visibility loop.',
      'Menu complexity during peak hours is the primary destroyer of restaurant delivery profitability.'
    ],
    relatedServiceIds: ['business-analytics-dashboards', 'business-operations-process-improvement']
  },

  // -------------------------------------------------------------
  // Category B: Startup & Business Engagements
  // -------------------------------------------------------------
  {
    id: 'the-kollektor',
    slug: 'the-kollektor-luxury-commerce',
    title: 'The Kollektor: Zero-to-One Launch & Commercial Architecture',
    clientOrTopic: 'The Kollektor (Curated Luxury & Collectibles Commerce)',
    category: 'Startup & Business Engagements',
    projectNature: 'Independent Consulting Engagement',
    industry: 'Luxury Retail, Art & Premium Collectibles',
    duration: 'Multi-Month Advisory & Execution Engagement',
    summary: 'Comprehensive 0-to-1 strategic engagement structuring commercial viability, vendor consignment terms, high-AOV customer acquisition funnels, and operational launch roadmaps for a luxury marketplace.',
    overview: 'An end-to-end consulting partnership guiding The Kollektor from initial founder concept through commercial modeling, vendor partnership structuring, digital launch roadmap, and go-to-market execution.',
    businessContext: 'The market for curated luxury design objects and high-end collectibles requires exceptional trust, authentication guarantees, and white-glove logistics. The founder needed a structured commercial framework to turn a passion for luxury curatorship into a scalable venture.',
    problemStatement: 'The venture lacked a formalized operational blueprint, pricing consignment model, vendor onboarding SOPs, and phased go-to-market plan to attract ultra-high-net-worth buyers.',
    objectives: [
      'Structure the core commercial business model and consignment revenue sharing architecture.',
      'Develop zero-to-one operational requirements and milestone roadmap for digital platform launch.',
      'Create vendor qualification frameworks and standard operating procedures (SOPs).',
      'Formulate a targeted Go-To-Market strategy tailored for high-ticket art and collectible buyers.'
    ],
    roleAndContribution: 'Lead Business Strategy & Operations Consultant. Partnered directly with the founder to design commercial terms, author the business plan, structure operating workflows, and track execution milestones.',
    researchAndAnalyticalApproach: 'Benchmarked international luxury consignment platforms (1stDibs, Artsy, The RealReal) alongside local high-end gallery economics. Mapped customer buying psychology, authentication protocols, and escrow financial flows.',
    workPerformed: [
      'Developed the complete Zero-to-One Business Plan detailing market sizing, revenue mechanics, and 12-month capital deployment.',
      'Structured a tiered consignment commission model (15% - 28%) balancing seller retention with platform gross margin.',
      'Authored vendor onboarding SOPs, item condition grading standards, and provenance verification protocols.',
      'Designed the multi-phase launch roadmap (Private Preview -> Curated Drop -> Public Flagship).',
      'Established executive KPI tracking frameworks covering Gross Merchandise Value (GMV), Seller Acquisition Cost, and Inventory Turn Velocity.'
    ],
    toolsAndMethodology: [
      'Business Model Canvas & Unit Economics Financial Modeling',
      'Standard Operating Procedure (SOP) Development Framework',
      'Go-To-Market (GTM) Phased Launch Roadmapping',
      'RACI Ownership & Milestone Tracking System'
    ],
    keyFindings: [
      'Consignment inventory requires strict quality and provenance filtering; accepting uncurated inventory dilutes luxury brand prestige and increases buyer hesitation.',
      'High-AOV transactions (> 150,000 INR) require personal concierge checkout assistance rather than anonymous automated shopping carts.',
      'Sellers prioritize transparency and rapid payout schedules over raw platform size when choosing where to consign rare pieces.'
    ],
    recommendations: [
      'Incorporate a private concierge advisory channel (WhatsApp Executive Liaison) for orders exceeding luxury price thresholds.',
      'Implement a strict 7-point authenticity and condition grading certification for every listed collectible.',
      'Structure exclusive drop calendars to generate scarcity and anticipation among private collectors.'
    ],
    deliverables: [
      'Complete Master Business Plan & Commercial Model',
      'Tiered Consignment Pricing & Commission Schedule',
      'Vendor Onboarding & Quality Verification SOP Manual',
      'Go-To-Market Strategy & Launch Milestones Tracker',
      'Executive Leadership KPI Dashboard'
    ],
    verifiedOutcomes: [
      'Successfully structured the full commercial foundation, transitioning from conceptual idea to launch-ready business enterprise.',
      'Established standardized vendor agreement contracts adopted across initial consignment partner roster.',
      'Clarified operating cash flow cycles, avoiding premature capital allocation to physical showroom leases.',
      'Note: Verified independent advisory and business planning engagement.'
    ],
    learnings: [
      'In high-ticket luxury commerce, operational trust mechanisms and friction-free concierge support are far more decisive than discount marketing.',
      'A structured 0-to-1 operational roadmap prevents founders from getting lost in tactical weeds during early development.'
    ],
    relatedServiceIds: ['startup-idea-validation', 'business-model-pricing-strategy', 'zero-to-one-business-planning', 'go-to-market-strategy', 'ongoing-founder-advisory']
  },
  {
    id: 'the-cinnamon-kitchen',
    slug: 'the-cinnamon-kitchen-growth-advisory',
    title: 'The Cinnamon Kitchen: FMCG Unit Economics & Retail Expansion Advisory',
    clientOrTopic: 'The Cinnamon Kitchen (Clean-Label Health Food & Confectionery)',
    category: 'Startup & Business Engagements',
    projectNature: 'Independent Consulting Engagement',
    industry: 'FMCG, Health Foods & Packaged Goods',
    duration: 'Strategic Advisory & Operations Review',
    summary: 'Commercial strategy and growth advisory assessing product-level contribution margins, shelf-life logistics, packaging redesign feasibility, and modern trade retail distribution readiness.',
    overview: 'A comprehensive growth and operational advisory engagement for an artisanal clean-label health food brand, transitioning from direct-to-consumer and local distribution to modern retail and quick-commerce channels.',
    businessContext: 'Having built strong organic customer love and viral traction, the brand faced the classic FMCG scale hurdle: entering institutional modern trade and rapid delivery channels required tighter unit economics, extended ambient shelf-life, and robust inventory planning.',
    problemStatement: 'Rapid top-line sales growth was straining production capacity, while channel distributor margins and product return terms threatened cash flow sustainability.',
    objectives: [
      'Deconstruct SKU-level unit economics to identify margin erosion across retail vs direct channels.',
      'Evaluate supply chain, packaging, and shelf-life requirements for multi-city retail expansion.',
      'Model working capital cycles considering modern trade 60-day payment credits.',
      'Provide founder advisory on expansion prioritization across quick-commerce vs premium supermarkets.'
    ],
    roleAndContribution: 'Strategic Business & Growth Advisor. Analyzed production batch costing, modeled distributor discount structures, and advised management on expansion sequencing.',
    researchAndAnalyticalApproach: 'Conducted detailed product costing diagnostics (raw material, packaging, labor, wastage, shipping). Benchmarked FMCG channel margins across Nature’s Basket, Foodhall, Blinkit, and direct-to-consumer web stores.',
    workPerformed: [
      'Built a granular SKU contribution margin model covering all 24 active products.',
      'Identified margin leakage in glass-jar packaging breakage and refrigerated freight costs.',
      'Designed an expansion decision matrix scoring channels on margin, volume potential, and payment risk.',
      'Advised leadership on price tier adjustments to absorb distributor commissions without sacrificing brand value.',
      'Formulated founder decision frameworks for production machinery capital expenditures.'
    ],
    toolsAndMethodology: [
      'SKU-Level Cost-Volume-Profit (CVP) Financial Modeling',
      'FMCG Channel Economics & Working Capital Forecasting',
      'Operations Capacity Stress-Testing',
      'Ongoing Founder Advisory & Decision Frameworks'
    ],
    keyFindings: [
      'Top 4 bestseller SKUs generated 72% of total volume and healthy 58% gross margins, while 8 niche SKUs operated near break-even when short shelf-life returns were factored.',
      'Entering quick-commerce dark stores yielded immediate volume but required guaranteed 48-hour replenishment cycles that existing manual batching could not support.',
      'Shifting to barrier-pouch packaging for specific items extended ambient shelf-life by 45 days and slashed logistics breakage by 94%.'
    ],
    recommendations: [
      'Prune the bottom 6 low-velocity SKUs to free up 30% kitchen production capacity for hero bestsellers.',
      'Implement phased quick-commerce rollout limited to high-density metro pin codes with proven reorder velocity.',
      'Adjust MSRP on select premium spreads by 12% to preserve a minimum 40% margin buffer after distributor cuts.'
    ],
    deliverables: [
      'SKU Profitability & Contribution Margin Audit Sheet',
      'FMCG Retail & Quick-Commerce Channel Expansion Strategy',
      'Working Capital & Inventory Planning Model',
      'Founder Strategic Decision & Advisory Roadmap'
    ],
    verifiedOutcomes: [
      'Clarified product profitability, enabling leadership to eliminate loss-making SKUs and focus capital on high-margin winners.',
      'Protected cash reserves by staggering modern trade expansion to match working capital readiness.',
      'Note: Verified commercial strategy and advisory project.'
    ],
    learnings: [
      'In FMCG, volume without strict SKU-level margin discipline can quickly deplete working capital.',
      'Packaging and shelf-life are not just operational details; they are fundamental strategic determinants of market reach.'
    ],
    relatedServiceIds: ['business-model-pricing-strategy', 'growth-scale-up-advisory', 'business-operations-process-improvement', 'ongoing-founder-advisory']
  },
  {
    id: 'pu-copper',
    slug: 'pu-copper-operational-process-improvement',
    title: 'PU Copper: Manufacturing Operations, Inventory & Process Engineering',
    clientOrTopic: 'PU Copper (Industrial & Consumer Copperware Manufacturing)',
    category: 'Startup & Business Engagements',
    projectNature: 'Independent Consulting Engagement',
    industry: 'Industrial Metalware & Consumer Manufacturing',
    duration: '4-Week Operations & Workflow Engagement',
    summary: 'Operational diagnostic and workflow engineering engagement restructuring raw material procurement, job-work handoffs, quality inspection checkpoints, and dead stock reduction.',
    overview: 'An operations and process improvement engagement for an established copperware manufacturing and wholesale business, standardizing shop-floor workflows, reducing work-in-progress (WIP) bottlenecks, and optimizing scrap recovery.',
    businessContext: 'Surging raw copper commodity prices created immense financial pressure. Unsystematic shop-floor tracking and informal job-work subcontracting led to high material loss, delayed dispatch schedules, and inventory holding bloat.',
    problemStatement: 'Lack of standard operating procedures, unaccounted copper metal loss during spinning and polishing, and unmonitored raw sheet inventory tied up working capital and caused delivery delays.',
    objectives: [
      'Map end-to-end manufacturing workflows from raw copper sheet intake to finished packaged goods.',
      'Quantify and plug material scrap leakage across spinning, welding, and polishing stages.',
      'Develop formal Standard Operating Procedures (SOPs) and job-card tracking systems.',
      'Implement an inventory reorder point formula aligned with raw copper commodity price cycles.'
    ],
    roleAndContribution: 'Operations & Process Improvement Consultant. Conducted on-site process mapping, designed job-card workflows, established quality checkpoints, and authored operational manuals.',
    researchAndAnalyticalApproach: 'Applied Lean manufacturing principles, cycle time measurement, and mass-balance material audits across production batches to trace physical metal yield.',
    workPerformed: [
      'Constructed current-state and future-state workflow process maps across 6 production stages.',
      'Calculated material yield efficiencies, identifying an 8.4% unaccounted metal loss during subcontracted polishing.',
      'Authored standardized SOPs for raw sheet quality inspection, job-work tracking, and finished goods packaging.',
      'Created a daily job-card template enabling shop-floor supervisors to log output, scrap weight, and labor hours.',
      'Formulated an inventory management model distinguishing fast-turnover SKUs from custom artisanal orders.'
    ],
    toolsAndMethodology: [
      'Value Stream & Process Workflow Mapping',
      'Mass-Balance Scrap Accounting Methodology',
      'Standard Operating Procedure (SOP) Development',
      'Inventory EOQ & Safety Stock Formulation'
    ],
    keyFindings: [
      'Informal scrap handling resulted in unrecorded copper loss worth hundreds of thousands of rupees annually.',
      'Batch sizes were determined arbitrarily by machine operators, creating massive WIP piles at the polishing station while finished assembly waited idle.',
      '70% of customer order delivery delays were caused by stockouts of standard brass fittings rather than copper sheets.'
    ],
    recommendations: [
      'Mandate strict weight-in and weight-out logging for every subcontracted polishing lot, holding job-workers accountable for scrap returns.',
      'Implement visual kanban limits at the spinning and polishing stations to cap WIP inventory build-up.',
      'Establish minimum safety stock levels for universal hardware fittings with automated reorder triggers.'
    ],
    deliverables: [
      'End-to-End Manufacturing Process Map & Workflow Blueprint',
      'Comprehensive Standard Operating Procedure (SOP) Manual',
      'Daily Shop-Floor Job-Card & Scrap Reconciliation System',
      'Raw Material Inventory & Safety Stock Planning Framework'
    ],
    verifiedOutcomes: [
      'Standardized core operating procedures across all production stages.',
      'Delivered immediate scrap reconciliation framework preventing unrecorded material leakage.',
      'Reduced average order fulfillment turnaround time by streamlining station handoffs.',
      'Note: Operational implementation engagement.'
    ],
    learnings: [
      'Process improvement is only as good as shop-floor adoption; templates must be simple and practical for frontline workers to update reliably.',
      'In metal manufacturing, raw material yield control is the primary driver of gross margin expansion.'
    ],
    relatedServiceIds: ['business-operations-process-improvement', 'business-model-pricing-strategy']
  },
  {
    id: 'polkraft-analytics-pmp',
    slug: 'polkraft-analytics-pmp-strategic-advisory',
    title: 'Polkraft Analytics (PMP): Performance Management & Analytics Advisory',
    clientOrTopic: 'Polkraft Analytics (Enterprise Performance & Data Solutions)',
    category: 'Startup & Business Engagements',
    projectNature: 'Business Advisory & Research',
    industry: 'Enterprise Software & Analytics Services',
    duration: 'Multi-Month Strategic Advisory Engagement',
    summary: 'Strategic advisory on service packaging, enterprise positioning, analytical project scoping templates, and structured performance management frameworks for analytics consulting delivery.',
    overview: 'A high-level business strategy and organizational advisory engagement supporting the structuring and refinement of enterprise performance management and analytical solution delivery.',
    businessContext: 'Analytics service providers frequently struggle with scope creep, customized one-off consulting projects that resist repeatability, and misaligned client expectations regarding data readiness.',
    problemStatement: 'Unclear service boundaries and bespoke analytical delivery models caused protracted project delivery cycles, unbilled analyst hours, and inconsistent client deliverables.',
    objectives: [
      'Package custom analytics services into repeatable, structured consulting solution modules.',
      'Create standard project scoping and data readiness assessment frameworks.',
      'Design client onboarding and milestone delivery cadence templates.',
      'Advise leadership on positioning analytics solutions to senior enterprise decision-makers.'
    ],
    roleAndContribution: 'Strategic Business & Analytics Advisor. Partnered with leadership to codify service offerings, author scoping templates, and structure performance metrics.',
    researchAndAnalyticalApproach: 'Analyzed historical project delivery timelines, client satisfaction feedback, and industry standard analytics delivery frameworks to identify recurring scope bottlenecks.',
    workPerformed: [
      'Audited past project engagements to identify high-margin repeatable delivery patterns.',
      'Structured 4 modular service packages with defined deliverables, boundaries, and client prerequisites.',
      'Created a comprehensive "Client Data Readiness Assessment" to evaluate source system maturity prior to commercial contract signing.',
      'Formulated project management milestone trackers and executive review templates.'
    ],
    toolsAndMethodology: [
      'Consulting Service Productization & Modular Packaging',
      'Enterprise Data Readiness Diagnostic Framework',
      'Project Milestone & Resource Allocation Modeling',
      'Executive Stakeholder Communication Playbooks'
    ],
    keyFindings: [
      'Over 60% of project delays stemmed from clients providing dirty or incomplete source data after contracts were signed.',
      'Clients were willing to pay higher fees for fixed-scope, outcome-defined sprints than for open-ended time-and-materials billing.',
      'Standardized dashboard templates reduced initial development hours by 35% without degrading perceived client customization.'
    ],
    recommendations: [
      'Institute a mandatory paid or contractual "Phase 0 Data Readiness Audit" before committing to full-scale dashboard delivery.',
      'Shift pricing from hourly rates to value-based milestone tiers tied to verified business decisions.',
      'Maintain a reusable library of analytical code snippets and visualization components to accelerate delivery speed.'
    ],
    deliverables: [
      'Productized Analytics Service Catalogue & Scope Boundaries',
      'Client Data Readiness Audit Diagnostic Checklist',
      'Standard Engagement Milestone & Delivery Templates',
      'Executive Consulting Presentation & Proposal Framework'
    ],
    verifiedOutcomes: [
      'Successfully structured repeatable analytics delivery packages, minimizing unbilled scope creep.',
      'Enhanced delivery predictability through standardized client onboarding workflows.',
      'Note: Strategic advisory and performance management engagement.'
    ],
    learnings: [
      'Productizing consulting services builds institutional leverage; without standard scopes, consultancies remain trapped in custom one-off delivery.',
      'Assessing client data readiness upfront is the single most effective way to guarantee project success and client satisfaction.'
    ],
    relatedServiceIds: ['business-analytics-dashboards', 'growth-scale-up-advisory', 'ongoing-founder-advisory']
  }
];
