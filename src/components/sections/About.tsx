"use client";

import { motion } from "framer-motion";
import { Terminal, Cloud, Shield } from "lucide-react";

const cards = [
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Cloud Infrastructure",
    description: "Designing scalable and highly available AWS architectures using EKS, ECS, and Terraform.",
  },
  {
    icon: <Terminal className="w-6 h-6 text-accent" />,
    title: "Automation & CI/CD",
    description: "Building robust Jenkins and GitHub Actions pipelines to streamline deployments and reduce release times.",
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Observability",
    description: "Implementing comprehensive monitoring stacks with Prometheus, Grafana, and CloudWatch.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I am a passionate DevOps Engineer with a proven track record of designing, automating, 
            and managing robust cloud-native applications on AWS. With a strong foundation in Computer 
            Science from Vel Tech Multi Tech Engineering College, I specialize in bridging the gap between 
            development and operations to deliver secure, scalable, and highly available systems. 
            My expertise spans Kubernetes, Infrastructure as Code, and advanced observability tools, 
            always focusing on optimizing costs and improving release efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
