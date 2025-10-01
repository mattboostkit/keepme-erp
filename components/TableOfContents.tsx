'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Link2, Calendar, DollarSign, RefreshCw, Rocket, Bot } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

const sections = [
  { id: 'complete-solution', title: 'The Complete Solution', icon: Target, description: 'What we\'re consolidating' },
  { id: 'why-consolidate', title: 'Why Consolidate Everything', icon: Zap, description: 'Benefits of single platform' },
  { id: 'architecture', title: 'System Architecture', icon: Link2, description: 'How everything connects' },
  { id: 'timeline', title: 'Implementation Timeline', icon: Calendar, description: '6 months to full consolidation' },
  { id: 'investment', title: 'Investment Breakdown', icon: DollarSign, description: 'Pricing & ROI' },
  { id: 'boostkit-migration', title: 'BoostKit Migration', icon: RefreshCw, description: 'How we replicate functionality' },
  { id: 'project-delivery', title: 'Project Delivery', icon: Rocket, description: 'What to expect' },
  { id: 'ai-automation', title: 'AI Automation', icon: Bot, description: 'Claude-powered intelligence' }
];

export default function TableOfContents() {
  return (
    <section id="toc" className="py-20 px-6 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          Explore the Proposal
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                onClick={() => smoothScrollTo(section.id)}
                className="bg-white p-6 rounded-xl border border-[#E0E0E0] text-left transition-all duration-300 hover:border-[#00A896] group cursor-pointer"
              >
                <Icon className="w-10 h-10 text-[#00A896] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="mb-2 text-[#2C2C2C]">{section.title}</h4>
                <p className="text-sm text-[#666666]">{section.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
