"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap className="w-48 h-48 text-primary" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium">
                Sep 2020 - Apr 2024
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Bachelor of Engineering in Computer Science and Engineering
            </h3>
            <h4 className="text-xl text-primary font-medium mb-6">
              Vel Tech Multi Tech Engineering College
            </h4>
            
            <div className="inline-block px-6 py-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-400">CGPA: </span>
              <span className="text-xl font-bold text-white ml-2">8.04</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
