'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function ConsolidationCard() {
  return (
    <section id="consolidation" className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F5F5F5] to-white border-2 border-[#E0E0E0] rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-center mb-12">Complete Business System Consolidation</h2>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-12">
            {/* Current Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-[#3A5A78]">CURRENT STACK</h3>
              <div className="space-y-3">
                {['Sage 50', 'Trello', 'BoostKit', '+ Your Next.js site'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg border border-[#E0E0E0] shadow-sm"
                  >
                    <p className="font-medium text-[#2C2C2C]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="text-[#00A896] w-12 h-12 md:w-16 md:h-16" strokeWidth={2} />
            </div>

            {/* New Unified System */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-[#00A896]">NEW UNIFIED SYSTEM</h3>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#00A896] to-[#3A5A78] p-6 rounded-lg shadow-lg text-white"
              >
                <p className="text-2xl font-bold mb-2">Odoo ERP</p>
                <p className="text-lg opacity-90">(All-in-One)</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg border border-[#E0E0E0] shadow-sm"
              >
                <p className="font-medium text-[#2C2C2C]">+ Your Next.js site</p>
              </motion.div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="border-t border-[#E0E0E0] pt-8">
            <h3 className="text-xl font-semibold mb-6 text-center text-[#2C2C2C]">KEY BENEFITS:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Lower total software costs',
                'No data synchronisation delays',
                'Single source of truth',
                'One login for entire team',
                'Unified reporting dashboard',
                'Keep your perfect website'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-[#10B981] w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <p className="text-[#2C2C2C]">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#00A896] text-white p-8 rounded-xl text-center"
          >
            <p className="text-3xl md:text-4xl font-bold mb-2">£32,000 | 6 Months</p>
            <p className="text-xl opacity-90">£5,333.33/month</p>
            <p className="text-sm opacity-80 mt-2">6 equal monthly instalments</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
