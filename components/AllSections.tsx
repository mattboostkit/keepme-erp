'use client';

import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Package, Mail, BarChart, Clock, Shield, FileText, Calendar, DollarSign } from 'lucide-react';

export default function AllSections() {
  return (
    <>
      {/* Why Consolidate */}
      <section id="why-consolidate" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            Why Consolidate Everything
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                title: 'Single Platform Simplicity',
                content: 'Stop juggling three different systems. Everything in one unified Odoo platform means no more data synchronisation between systems, no duplicate data entry across platforms, single login for your entire team, unified reporting instead of piecing together insights, lower total software licensing costs, simpler employee training and onboarding, and one vendor relationship instead of three.'
              },
              {
                title: 'Keep Your Perfect Website',
                content: 'Your existing Next.js website at keepme.co.uk stays exactly as it is. We don\'t touch your beautiful frontend - we simply add powerful API integrations that connect it to your new consolidated backend. You get modern ERP power without sacrificing your custom design.'
              },
              {
                title: 'True Data Integration',
                content: 'When lead generation, CRM, projects, and accounting are separate systems, data gets lost in the gaps. With everything in Odoo, leads flow automatically to sales pipeline, won deals create projects automatically, projects generate invoices seamlessly, financial data informs sales forecasting, inventory connects to production and sales, and one customer record exists across all touchpoints.'
              },
              {
                title: 'Cost Savings & ROI',
                content: 'Annual Software Costs: Sage 50 (£500-800/year) + Trello Business (£120/user/year × team size) + Boostkit (£1200/year). One Odoo System means lower total cost plus unified platform. Implementation ROI recovered through efficiency gains in 12-18 months.'
              }
            ].map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl border border-[#E0E0E0]"
              >
                <h3 className="mb-4">{block.title}</h3>
                <p className="text-[#666666] leading-relaxed">{block.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            Unified Business Architecture
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F5F5F5] to-white border-2 border-[#E0E0E0] rounded-2xl p-8 font-mono text-sm"
          >
            <pre className="overflow-x-auto text-[#2C2C2C]">
{`┌─────────────────────────────────────────────────┐
│   EXISTING NEXT.JS WEBSITE (keepme.co.uk)       │
│            Stays Exactly As Is                  │
│   + Enhanced API Integrations for Portal        │
└──────────────────┬──────────────────────────────┘
                   │
                   │ Secure REST API Layer
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│      ODOO ERP (Complete Backend System)         │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │  LEAD GENERATION (Replaces Boostkit)    │   │
│  │  • Lead capture & scoring               │   │
│  │  • Automated nurturing sequences        │   │
│  │  • Source attribution & ROI tracking    │   │
│  └─────────────────────────────────────────┘   │
│                    ↓ Automatic Flow             │
│  ┌─────────────────────────────────────────┐   │
│  │  SALES CRM                              │   │
│  │  • Opportunity pipeline management      │   │
│  │  • Quoting & pricing                    │   │
│  └─────────────────────────────────────────┘   │
│                    ↓ Triggers                   │
│  ┌─────────────────────────────────────────┐   │
│  │  ACCOUNTING (Replaces Sage 50)          │   │
│  │  • Invoicing & payments                 │   │
│  │  • Multi-currency, UK VAT               │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │  PROJECTS (Replaces Trello)             │   │
│  │  • Task & milestone management          │   │
│  │  • Team collaboration                   │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│     REPLACES: Sage 50 + Trello + Boostkit      │
│        ONE SYSTEM • ONE LOGIN • ONE TRUTH       │
└─────────────────────────────────────────────────┘`}
            </pre>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              'Zero data synchronisation issues',
              'Single source of truth for all data',
              'Automatic workflow triggers',
              'One login for entire team',
              'Unified reporting dashboard',
              'Lower total software costs',
              'Simpler IT infrastructure',
              'Faster employee onboarding'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 bg-[#F5F5F5] p-4 rounded-lg"
              >
                <Check className="text-[#10B981] w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={3} />
                <p className="text-sm text-[#2C2C2C]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            6 Month Complete Consolidation Plan
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1: Discovery & Migration Planning',
                duration: '2 weeks',
                investment: '£4,000',
                items: [
                  '3 days on-site with your team',
                  'Document current processes across all systems',
                  'Map Boostkit lead generation workflows for replication',
                  'Plan Sage 50 financial data migration strategy',
                  'Export Trello boards and project data',
                  'Design Next.js ↔ Odoo API architecture'
                ],
                deliverable: 'Complete migration blueprint'
              },
              {
                phase: 'Phase 2: Core Accounting & CRM Foundation',
                duration: '6 weeks',
                investment: '£10,000',
                items: [
                  'Complete Sage 50 migration to Odoo Accounting',
                  'Migrate chart of accounts, customers, suppliers',
                  'Setup multi-currency and UK VAT compliance',
                  'Replicate Boostkit lead capture and scoring',
                  'Configure automated nurturing sequences',
                  'Basic Sales CRM and API endpoints'
                ],
                deliverable: 'Working accounting system + lead generation'
              },
              {
                phase: 'Phase 3: Operations & Project Management',
                duration: '8 weeks',
                investment: '£10,000',
                items: [
                  'Inventory and warehouse management setup',
                  'Production scheduling and MRP configuration',
                  'Migrate all Trello boards to Odoo Projects',
                  'Import tasks, comments, and attachments',
                  'Claude AI integration across all modules',
                  'Intelligent automation workflows'
                ],
                deliverable: 'Complete ERP + project management'
              },
              {
                phase: 'Phase 4: Next.js API Integration & Portal',
                duration: '3 weeks',
                investment: '£4,000',
                items: [
                  'Design REST API architecture',
                  'Build customer portal API endpoints',
                  'Integrate lead capture forms with Odoo',
                  'Product catalogue and inventory APIs',
                  'Order tracking and document access',
                  'API documentation and testing'
                ],
                deliverable: 'Fully integrated website + backend'
              },
              {
                phase: 'Phase 5: Complete Migration & Go-Live',
                duration: '3 weeks',
                investment: '£4,000',
                items: [
                  'Complete data validation across all systems',
                  'UAT with key team members',
                  'Comprehensive team training sessions',
                  'Begin parallel running with legacy systems',
                  'Final cutover to Odoo',
                  'On-site support for full week'
                ],
                deliverable: 'Live unified system'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border-2 border-[#E0E0E0]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl mb-2 md:mb-0">{phase.phase}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-2 text-[#666666]">
                      <Clock size={16} />
                      {phase.duration}
                    </span>
                    <span className="flex items-center gap-2 font-semibold text-[#00A896]">
                      <DollarSign size={16} />
                      {phase.investment}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#666666]">
                      <ArrowRight size={16} className="text-[#00A896] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#F5F5F5] p-4 rounded-lg">
                  <p className="text-sm">
                    <strong className="text-[#2C2C2C]">Deliverable:</strong>{' '}
                    <span className="text-[#666666]">{phase.deliverable}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#00A896] to-[#3A5A78] text-white p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl mb-4">Total Investment: £32,000</h3>
            <p className="text-lg opacity-90 mb-2">Total Timeline: 22 weeks (6 months)</p>
            <p className="text-xl font-semibold">Payment Terms: 6 equal monthly instalments of £5,333.33</p>
          </motion.div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section id="investment" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            Investment Breakdown
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00A896] to-[#3A5A78] text-white p-12 rounded-2xl mb-12 shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Complete Business System Consolidation
            </h3>

            <div className="text-center mb-8">
              <p className="text-5xl md:text-6xl font-bold mb-4">£32,000 over 6 Months</p>
              <p className="text-2xl opacity-90">£5,333.33 per month (6 payments)</p>
            </div>

            <div className="border-t border-white/20 pt-8 mb-8">
              <h4 className="text-xl font-semibold mb-4">Phase Investment Breakdown:</h4>
              <div className="space-y-2 text-lg">
                {[
                  ['Phase 1: Discovery & Planning', '£4,000'],
                  ['Phase 2: Accounting & CRM Foundation', '£10,000'],
                  ['Phase 3: Operations & Projects', '£10,000'],
                  ['Phase 4: Next.js API Integration', '£4,000'],
                  ['Phase 5: Migration & Go-Live', '£4,000']
                ].map(([phase, cost]) => (
                  <div key={phase} className="flex justify-between items-center">
                    <span className="opacity-90">{phase}</span>
                    <span className="font-semibold">{cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h4 className="text-xl font-semibold mb-4">What You Get:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm md:text-base">
                {[
                  'Replace Sage 50 with Odoo Accounting',
                  'Replace Boostkit with Odoo CRM (full functionality replication + AI)',
                  'Replace Trello with Odoo Projects',
                  'Complete operations & inventory management',
                  'Manufacturing & quality control workflows',
                  'API integration to existing Next.js site',
                  'Claude AI automation across all modules',
                  'Customer portal and document access',
                  'Unified reporting dashboard',
                  'Complete data migration (all 3 systems)',
                  'Comprehensive team training',
                  '1 week on-site hypercare support',
                  'Legacy system decommissioning support'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check size={20} className="flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-8 rounded-xl border border-[#E0E0E0]"
            >
              <h3 className="mb-4">Annual Software Cost Analysis</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#666666]">Current Software Costs (Estimated):</h4>
                  <ul className="space-y-1 text-[#666666]">
                    <li>• Sage 50 Professional: £650/year</li>
                    <li>• Trello Business (5 users): £600/year</li>
                    <li>• Boostkit: £1200/year</li>
                  </ul>
                </div>
                <div className="border-t border-[#E0E0E0] pt-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#00A896]">New Odoo System:</h4>
                  <ul className="space-y-1 text-[#666666]">
                    <li>• Lower total licensing cost</li>
                    <li>• Reduced IT overhead</li>
                    <li>• Eliminated integration costs</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-8 rounded-xl border border-[#E0E0E0]"
            >
              <h3 className="mb-4">Efficiency Gains</h3>
              <div className="space-y-3">
                {[
                  { icon: DollarSign, text: 'No duplicate data entry across systems' },
                  { icon: ArrowRight, text: 'Faster workflows (integrated processes)' },
                  { icon: BarChart, text: 'Better decision making (unified data)' },
                  { icon: Clock, text: 'Reduced admin time (one system to manage)' },
                  { icon: Check, text: 'Improved accuracy (single source of truth)' }
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon size={20} className="text-[#00A896] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666666]">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#00A896] text-white rounded-lg">
                <p className="text-sm font-semibold">
                  ROI Timeline: Implementation cost recovered through efficiency gains and reduced software costs in 12-18 months
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boostkit Migration */}
      <section id="boostkit-migration" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            How We&apos;ll Replicate & Enhance Your Boostkit Functionality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-[#666666] mb-12 max-w-3xl mx-auto"
          >
            We&apos;ll migrate everything you love about Boostkit to Odoo, then make it even better with AI and full ERP integration.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Package,
                title: 'Lead Capture & Forms',
                current: 'Lead capture forms on website, basic field collection, email notifications',
                new: 'Same forms rebuilt in Odoo (via API), enhanced field logic and validation, AI-powered lead scoring on capture, automatic lead routing to right salesperson, smart duplicate detection, integrated with your Next.js site seamlessly'
              },
              {
                icon: Mail,
                title: 'Lead Nurturing & Email Automation',
                current: 'Automated email sequences, basic triggers and delays, template management',
                new: 'All email sequences replicated, enhanced trigger logic (based on behaviour), AI-suggested email content, personalisation using CRM data, A/B testing capabilities, integration with sales pipeline stages'
              },
              {
                icon: BarChart,
                title: 'Source Tracking & Attribution',
                current: 'UTM parameter tracking, source reporting, campaign tracking',
                new: 'Full UTM capture and analysis, multi-touch attribution modelling, ROI tracking by source and campaign, integration with sales and revenue data, predictive source value scoring, closed-loop reporting (lead → sale → revenue)'
              },
              {
                icon: FileText,
                title: 'Pipeline & Lead Management',
                current: 'Lead status tracking, basic pipeline stages, manual updates',
                new: 'Visual kanban board management, drag-and-drop interface, automatic stage progression rules, AI-suggested next actions, predictive conversion probability, integration with quotes, orders, projects'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-[#E0E0E0]"
                >
                  <Icon className="w-10 h-10 text-[#00A896] mb-4" />
                  <h3 className="text-xl mb-4">{feature.title}</h3>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <X size={16} className="text-[#F59E0B]" />
                      <h4 className="text-sm font-semibold text-[#666666]">CURRENT (Boostkit):</h4>
                    </div>
                    <p className="text-sm text-[#666666] ml-6">{feature.current}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Check size={16} className="text-[#10B981]" strokeWidth={3} />
                      <h4 className="text-sm font-semibold text-[#00A896]">NEW (Odoo + AI):</h4>
                    </div>
                    <p className="text-sm text-[#2C2C2C] ml-6">{feature.new}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#00A896] to-[#3A5A78] text-white p-8 rounded-xl"
          >
            <h3 className="text-2xl mb-4">Plus AI Enhancements You Don&apos;t Have Now:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Intelligent Lead Scoring: Claude AI analyses lead data to predict conversion likelihood and lifetime value',
                'Automated Response Suggestions: AI drafts personalised email responses based on lead inquiry content and history',
                'Smart Lead Routing: Automatically assign leads to best-fit salesperson based on product, location, and expertise',
                'Predictive Analytics: Forecast pipeline health, identify at-risk deals, and suggest actions to improve conversion',
                'Continuous Optimisation: System learns from your successful conversions and automatically improves scoring and routing'
              ].map((enhancement) => (
                <div key={enhancement} className="flex items-start gap-2">
                  <Check size={20} className="flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-sm">{enhancement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Automation */}
      <section id="ai-automation" className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            Claude AI Integration Across Your Entire Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-[#666666] mb-12 max-w-3xl mx-auto"
          >
            Unlike traditional ERP implementations where AI is an afterthought, we build intelligence into every module from day one.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Intelligent Lead Scoring & Routing',
                description: 'Analyses incoming leads in real-time, scores based on fit, urgency, and value potential. Automatically routes to best-fit salesperson and predicts optimal follow-up timing.',
                impact: 'Focus sales effort where it matters most. Convert more leads with less wasted time.'
              },
              {
                title: 'Automated Quote Generation',
                description: 'Reads inquiry content and context, generates professional quotes with appropriate products. Calculates pricing with intelligent logic and suggests upsell opportunities.',
                impact: 'Respond to inquiries faster. Maintain quote consistency. Free up sales team for relationship building.'
              },
              {
                title: 'Predictive Inventory Management',
                description: 'Forecasts stock requirements based on historical data. Identifies seasonal trends and anomalies. Alerts on potential shortages before they happen.',
                impact: 'Reduce stockouts and overstock. Optimise working capital. Improve customer satisfaction.'
              },
              {
                title: 'Natural Language Business Intelligence',
                description: 'Ask questions in plain English ("Show me top products this quarter by profit margin"). Automatic anomaly detection in sales and inventory. Customised insights based on your KPIs.',
                impact: 'Data-driven decisions without needing a data analyst. Catch problems early.'
              },
              {
                title: 'Financial Intelligence',
                description: 'Automated invoice matching and reconciliation. Cash flow forecasting. Payment default risk prediction. Optimal payment term suggestions.',
                impact: 'Reduce accounting workload. Better cash management. Fewer errors.'
              },
              {
                title: 'Project Resource Optimisation',
                description: 'Suggests optimal resource allocation for projects. Predicts project completion dates based on current pace. Identifies potential bottlenecks before they occur.',
                impact: 'Complete projects on time and budget. Better resource utilisation.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5F5F5] to-white p-6 rounded-xl border border-[#E0E0E0] hover:border-[#00A896] transition-all duration-300"
              >
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-[#666666] mb-4 text-sm">{feature.description}</p>
                <div className="bg-[#00A896]/10 p-4 rounded-lg border-l-4 border-[#00A896]">
                  <p className="text-sm font-semibold text-[#2C2C2C]">Business Impact:</p>
                  <p className="text-sm text-[#666666] mt-1">{feature.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#3A5A78] text-white p-8 rounded-xl"
          >
            <h3 className="text-2xl mb-4 text-center">Why This Matters</h3>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg mb-4">
                <strong>Traditional ERP →</strong> Static rules that never change
              </p>
              <p className="text-lg mb-6">
                <strong>Our Odoo + AI →</strong> Living system that continuously improves
              </p>
              <p className="opacity-90">
                As your business evolves, the AI adapts. As Claude AI capabilities improve, your system automatically benefits. This is the future of business software.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Delivery */}
      <section id="project-delivery" className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            What to Expect During Implementation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-[#666666] mb-12 max-w-3xl mx-auto"
          >
            This is a partnership, not just a vendor relationship. Here&apos;s exactly how we&apos;ll work together over 6 months.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Weekly Review Meetings',
                description: 'Every week we\'ll have 1-hour progress review call or on-site visit, demo of new functionality built that week, discussion of upcoming work, and address any questions or concerns. Stay aligned and involved throughout.'
              },
              {
                icon: ArrowRight,
                title: 'Agile Incremental Delivery',
                description: 'We don\'t wait until the end. Each module goes live as it\'s completed. Start using functionality immediately, gather feedback early and often, adjust based on real-world use. No big bang go-live surprises.'
              },
              {
                icon: FileText,
                title: 'Continuous Training',
                description: 'Learning happens throughout: end-of-phase training sessions, department-specific workflow training, admin and power user certification, self-service documentation and videos, office hours for questions.'
              },
              {
                icon: Check,
                title: 'Clear Success Metrics',
                description: 'We\'ll track on-time phase completion, user adoption rates, data migration accuracy, system performance benchmarks, and team satisfaction scores. Measurable progress you can trust.'
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'We proactively handle regular backups throughout, rollback plans if needed, parallel running period, staged cutover approach, and hypercare support post-launch. Your business never stops.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-[#E0E0E0]"
                >
                  <Icon className="w-10 h-10 text-[#00A896] mb-4" />
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-[#666666]">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#00A896] to-[#3A5A78] text-white p-8 rounded-xl"
          >
            <h3 className="text-2xl mb-4 text-center">Post Go-Live Support</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="font-semibold mb-1">Week 1</p>
                <p className="text-sm opacity-90">Full-time on-site hypercare</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Weeks 2-4</p>
                <p className="text-sm opacity-90">Daily check-ins and support</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Months 2-3</p>
                <p className="text-sm opacity-90">Weekly check-ins</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Month 3+</p>
                <p className="text-sm opacity-90">Ongoing support options</p>
              </div>
            </div>
            <p className="text-center mt-6 text-lg">
              We don&apos;t disappear after launch. Your success is our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#00A896] to-[#3A5A78] text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-white"
          >
            Ready to Consolidate Your Business Systems?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Replace Sage 50, Trello, and Boostkit with one powerful, unified Odoo ERP system. Keep your perfect website. Gain AI-powered intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:contact@boostkit.com"
              className="inline-block bg-white text-[#00A896] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <button className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Download PDF Version
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sm opacity-75">
              Proposal valid for 14 days from October 1, 2025
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
