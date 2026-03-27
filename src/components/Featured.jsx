import React from 'react';
import { motion } from 'motion/react';

export default function Featured() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
        {/* Large Featured */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 relative group overflow-hidden rounded-2xl shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
            alt="Men's collection" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-12 left-12 text-white z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-70">New Arrivals</p>
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">Fashion<br/>Daily</h2>
            <a href="/collections" className="inline-block bg-white text-ink px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent-brown hover:text-white transition-all duration-500">Shop Collections</a>
          </div>
        </motion.div>

        {/* Side Grid */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" 
              alt="Women's collection" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500"></div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-3xl font-light mb-4 italic">Golden Arrow</h3>
              <a href="/collections" className="text-[10px] uppercase tracking-[0.3em] border-b border-white/50 pb-1 hover:border-white transition-all font-bold">Shop Collections</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1200" 
              alt="Accessories" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500"></div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h3 className="text-3xl font-light mb-4">Refinements</h3>
              <a href="/collections" className="text-[10px] uppercase tracking-[0.3em] border-b border-white/50 pb-1 hover:border-white transition-all font-bold">Explore Collections</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
