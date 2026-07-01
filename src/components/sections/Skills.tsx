"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2, VPC, IAM, EKS, S3, ALB, Lambda)", level: 90 },
      { name: "Terraform", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes (EKS)", level: 85 },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "Bash / Shell Scripting", level: 80 },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 85 },
      { name: "CloudWatch", level: 90 },
      { name: "Loki", level: 75 },
    ],
  },
  {
    title: "Development & Data",
    skills: [
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MariaDB / MySQL", level: 80 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, continuously evolving with modern cloud standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
