"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Devops Engineer",
    company: "Sedin Technologies",
    period: "Jun 2025 - Present",
    description: [
      "Managed Sedstart, a no-code automation platform, across EKS-based QA and Production clusters, leveraging Helm charts, Envoy Gateway, and AWS WAF to ensure highly available, secure, and scalable deployments.",
      "Designed and maintained Jenkins CI/CD pipelines for Sedstart components, automating deployments and improving release efficiency by 50%.",
      "Implemented self-hosted Jenkins runners to support parallel builds and deployments, reducing CI/CD infrastructure costs by 40%.",
      "Imported and managed existing AWS resources using Terraform, enabling Infrastructure as Code adoption and improving cost governance.",
    ],
  },
  {
    role: "Associate Devops Engineer",
    company: "Ency Consulting LLP",
    period: "Jun 2024 - Jun 2025",
    description: [
      "Deployed and managed a multi-tenant driving school platform on AWS, reducing tenant onboarding time by 30%.",
      "Automated deployments and operational workflows using GitHub Actions and scripting, improving release efficiency.",
      "Managed Dockerized applications, cloud infrastructure, and monitoring to ensure reliable and scalable production environments.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[54px] md:-left-[70px] top-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-start">
                      <span className="mr-3 text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
