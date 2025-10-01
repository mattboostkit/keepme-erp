'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#F5F5F5]">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#00A896] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-[#3A5A78] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00A896] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[#3A5A78] font-semibold mb-4 text-sm tracking-wider uppercase">
            Boostkit × KeepMe Lifestyle
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#2C2C2C]"
        >
          Your Strategic Technology Partner
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#2C2C2C]">
            Complete Business Systems Consolidation
          </h2>
          <p className="text-lg md:text-xl text-[#666666]">
            Replace Sage 50 • Trello • Boostkit with Unified Odoo ERP
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 text-sm text-[#666666]"
        >
          <p>
            <strong className="text-[#2C2C2C]">Proposal No:</strong> KEEP-2025-001
          </p>
          <span className="hidden md:inline">•</span>
          <p>
            <strong className="text-[#2C2C2C]">Date:</strong> October 1, 2025
          </p>
          <span className="hidden md:inline">•</span>
          <p>
            <strong className="text-[#2C2C2C]">Valid For:</strong> 14 Days
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          onClick={() => smoothScrollTo('consolidation')}
          className="inline-flex items-center gap-2 bg-[#00A896] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#008577] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          View Complete Proposal
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
