'use client';

import { motion } from 'framer-motion';
import { Target, DollarSign, Clipboard, Factory, BarChart3, Bot, Globe, Database } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Lead Generation & CRM (Replaces BoostKit)',
    description: 'Replicate all BoostKit lead generation functionality in Odoo with enhanced AI capabilities. Advanced lead scoring, automated nurturing workflows, source tracking, and seamless pipeline management. Your lead generation becomes smarter with Claude AI integration.'
  },
  {
    icon: DollarSign,
    title: 'Accounting & Finance (Replaces Sage 50)',
    description: 'Complete migration from Sage 50 to modern Odoo Accounting. Multi-currency operations, UK VAT compliance, automated invoicing, accounts payable/receivable, payment processing, and comprehensive financial reporting. Everything your finance team needs in one place.'
  },
  {
    icon: Clipboard,
    title: 'Project Management (Replaces Trello)',
    description: 'All Trello boards, tasks, and workflows migrated to Odoo Projects. Task management, team collaboration, timeline/Gantt views, file attachments, and integrated time tracking. Better than Trello because it connects directly to your operations and sales.'
  },
  {
    icon: Factory,
    title: 'Operations & Manufacturing',
    description: 'Production scheduling and MRP, quality control workflows, inventory and warehouse management, supplier management and purchasing. Integrated with your sales and projects for complete visibility.'
  },
  {
    icon: BarChart3,
    title: 'Unified Reporting & Analytics',
    description: 'Single dashboard for all business metrics. Real-time insights across lead generation, sales, finance, operations, and projects. Custom KPIs, performance tracking, and predictive analytics powered by AI.'
  },
  {
    icon: Bot,
    title: 'AI Automations Across Everything',
    description: 'Claude-powered intelligence throughout: intelligent lead scoring and routing, automated quote generation, predictive inventory management, smart resource allocation for projects, financial reconciliation assistance, and continuous workflow optimisation.'
  },
  {
    icon: Globe,
    title: 'API Integration to Your Website',
    description: 'Your existing keepme.co.uk stays exactly as it is - we add powerful APIs for customer portal, real-time product catalogue, lead capture forms, order tracking, and document access. Best of both worlds.'
  },
  {
    icon: Database,
    title: 'Complete Data Migration',
    description: 'Legacy data from Sage 50, Trello, and BoostKit carefully migrated and validated. Historical transactions, customer records, project data, and lead information all preserved in your new unified system.'
  }
];

export default function CompleteSolution() {
  return (
    <section id="complete-solution" className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-6">The Complete Solution</h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            We are implementing a comprehensive headless Odoo ERP solution that consolidates your entire business technology stack. Odoo will replace Sage 50, Trello, AND BoostKit, providing unified management for lead generation, sales, accounting, operations, inventory, and project management - all accessible through your existing Next.js website at keepme.co.uk via secure APIs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#F5F5F5] to-white p-6 rounded-xl border border-[#E0E0E0] hover:border-[#00A896] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#00A896] p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-[#666666] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-br from-[#00A896] to-[#3A5A78] text-white rounded-xl"
        >
          <h3 className="text-2xl mb-4">Complete System Replacement:</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            Replaces Sage 50 + Trello + BoostKit with one powerful, integrated platform. One system, one login, one source of truth for your entire business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
