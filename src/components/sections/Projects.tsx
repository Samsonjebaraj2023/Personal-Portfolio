"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity, Server, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AWS Infrastructure Monitoring System",
    description: "Designed and implemented an AWS monitoring solution for EC2, RDS, S3, and ALB, generating automated daily health reports.",
    details: [
      "Leveraged CloudWatch and EventBridge to collect performance metrics and automate monitoring workflows.",
      "Configured YAML-based multi-database monitoring with email notifications for proactive incident detection.",
    ],
    tags: ["AWS CloudWatch", "EventBridge", "EC2", "RDS", "S3", "ALB", "YAML"],
    icon: <Activity className="w-8 h-8 text-primary" />,
    link: "#",
    github: "#",
  },
  {
    title: "FinOps Assistant",
    description: "Developed a FinOps chatbot using Chainlit and AWS MCP servers, integrating Cost Explorer APIs to provide conversational access to cloud cost insights and chargeback analysis.",
    details: [
      "Integrated AWS Cost Explorer APIs to provide service-level spend analysis, historical cost comparisons, and internal chargeback visibility.",
    ],
    tags: ["Chainlit", "AWS MCP", "Cost Explorer API", "FinOps", "Python"],
    icon: <Server className="w-8 h-8 text-accent" />,
    link: "#",
    github: "#",
  },
  {
    title: "Automated Website Monitoring & Alerting",
    description: "Built a monitoring stack using Prometheus, Grafana, Blackbox Exporter, and Alertmanager to track website availability and service health.",
    details: [
      "Configured alerting integrations with Slack, Microsoft Teams, and Email, improving incident response and reducing mean time to detection (MTTD).",
      "Designed dashboards for real-time observability, enabling faster troubleshooting and improved service reliability.",
    ],
    tags: ["Prometheus", "Grafana", "Alertmanager", "Blackbox Exporter", "Slack API"],
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work in cloud infrastructure, monitoring, and FinOps automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-primary transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-slate-400 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-slate-500 text-sm flex items-start">
                      <span className="mr-2 text-primary">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
