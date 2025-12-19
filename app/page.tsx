"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Database,
  Brain,
  Terminal,
  Server,
} from "lucide-react";

// --- DATA ---
const personalInfo = {
  name: "Thushar Nandam",
  title: "Full Stack Engineer & AI Practitioner",
  tagline:
    "Bridging the gap between scalable architectures and intelligent AI solutions.",
  email: "thushar554@gmail.com",
  location: "Chennai, India",
  links: {
    github: "https://github.com/Thushar1015424",
    linkedin: "https://linkedin.com/in/thushar-nandam-110aa9223/",
  },
};

const skills = [
  {
    name: "Frontend",
    icon: <Code2 />,
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Bootstrap",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    icon: <Server />,
    items: ["Python", "Java", "C/C++", "C#", "Node.js", "Express", "Django"],
  },
  {
    name: "Database & Tools",
    icon: <Database />,
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle SQL",
      "Git",
      "MUI",
      "Figma",
      "JDBC/Dapper ORM",
    ],
  },
  {
    name: "Technologies",
    icon: <Brain />,
    items: [
      "AI/ML",
      "PyTorch",
      "Deep Learning",
      "CUDA",
      "ASP .NET Core",
      "REST APIs",
      "Agile Methodologies",
    ],
  },
];

const experience = [
  {
    company: "Avaniral Technologies",
    role: "Full Stack Developer Intern",
    date: "Aug 2025 - Oct 2025",
    desc: "Engineered a full-stack Organization Management System using RESTful .NET API and Next.js. Implemented Microservices architecture and recruitment workflows.",
    tech: [
      "ASP .NET Core",
      "C#",
      "TypeScript",
      "Next.js",
      "Dapper ORM",
      "PostgreSQL",
      "Git",
      "REST APIs",
    ],
  },
  {
    company: "Accenture",
    role: "Advanced App Analyst Intern",
    date: "Jun 2024 - Jul 2024",
    desc: "Designed an ML model with 87% accuracy and integrated it into a full-stack web app. Led solution architecture for business problems.",
    tech: [
      "Python",
      "ML",
      "HTML/CSS",
      "JavaScript",
      "Bootstrap",
      "Agile Methodologies",
    ],
  },
];

const education = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Computer Science",
    date: "2021 - 2025",
    coursework: [
      "DSA",
      "DBMS",
      "OOP",
      "UI/UX",
      "AI/ML",
      "OS",
      "Computer Networks",
      "Data Science",
      "COA",
      "Compiler Design",
    ],
    gpa: "7.96/10",
  },
  {
    institution: "Maharishi Vidya Mandir",
    degree: "Higher Secondary (XII) - CBSE",
    date: "2019 - 2021",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English",
      "Computer Science",
    ],
    gpa: "89.8/100",
  },
  {
    institution: "Maharishi Vidya Mandir",
    degree: "Secondary School (X) - CBSE",
    date: "2018 - 2019",
    coursework: [
      "Science",
      "Mathematics",
      "Social Studies",
      "English",
      "Sanskrit",
    ],
    gpa: "87.8/100",
  },
];

const projects = [
  {
    title: "CNN Weight-Pruning",
    desc: "Adaptive evolutionary pruning technique leveraging genetic masking to reduce CNN complexity while preserving performance.",
    tech: ["PyTorch", "CUDA", "Python", "Evolutionary Algos", "MiniConda"],
    link: "#",
  },
  // {
  //   title: "Org Management System",
  //   desc: "Enterprise-grade system for work-time tracking and recruitment, built with object-oriented design principles.",
  //   tech: [".NET Core", "React", "PostgreSQL"],
  //   link: "#",
  // },
  {
    title: "Virtual Classroom",
    desc: "Web application enabling remote learning, applying DSA concepts for performance optimization.",
    tech: [
      "Java (JSP)",
      "MySQL",
      "HTML/CSS",
      "JavaScript",
      "Bootstrap",
      "JDBC",
    ],
    link: "#",
  },
  {
    title: "Fake News Detection",
    desc: "AI model determining the authenticity of news articles with a 92% accuracy rate.",
    tech: ["Python", "Jupyter", "ML", "Data Analysis", "Kaggle"],
    link: "#",
  },
];

// --- COMPONENTS ---

const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`py-20 px-6 md:px-20 ${className}`}
  >
    {children}
  </motion.section>
);

const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-xl font-bold text-teal-400">TN.</span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-teal-400 transition">
          Expertise
        </a>
        <a href="#experience" className="hover:text-teal-400 transition">
          Experience
        </a>
        <a href="#education" className="hover:text-teal-400 transition">
          Education
        </a>
        <a href="#projects" className="hover:text-teal-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-teal-400 transition">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default function Portfolio() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-teal-500/30">
      <NavBar />

      {/* HERO */}
      <header className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-teal-400 font-medium mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-50">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            Crafting the next generation of web and AI-driven products.
          </h2>
          <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed text-justify hyphens-auto">
            {personalInfo.tagline} Focused on{" "}
            <span className="text-teal-400">Full Stack Development</span> and{" "}
            <span className="text-teal-400">Machine Learning</span>.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-teal-500 text-slate-950 font-bold rounded hover:bg-teal-400 transition"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-teal-500 text-teal-400 font-bold rounded hover:bg-teal-500/10 transition flex items-center gap-2"
              target="blank"
            >
              <FileText size={18} /> Resume
            </a>
          </div>
        </motion.div>
      </header>

      {/* EXPERTISE */}
      <Section className="bg-slate-900" id="about">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
            <span className="text-teal-400">01.</span> Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-500/50 transition duration-300"
              >
                <div className="text-teal-400 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
            <span className="text-teal-400">02.</span> Experience
          </h3>
          <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8 relative">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-950 border-2 border-teal-500 rounded-full"></span>
                <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                <p className="text-teal-400 mb-2">
                  {job.company}{" "}
                  <span className="text-slate-500">| {job.date}</span>
                </p>
                <p className="text-slate-400 mb-4 max-w-2xl">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section className="bg-slate-900" id="education">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
            <span className="text-teal-400">03.</span> Education
          </h3>
          <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8 relative">
            {education.map((edu, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-950 border-2 border-teal-500 rounded-full"></span>

                <h4 className="text-xl font-bold text-slate-100">
                  {edu.institution}
                </h4>

                <p className="text-teal-400 mb-2">
                  {edu.degree}{" "}
                  <span className="text-slate-500">| {edu.date}</span>
                </p>

                <p className="text-slate-400 mb-4 max-w-2xl">GPA: {edu.gpa}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((sub, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-300 rounded"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
            <span className="text-teal-400">04.</span> Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border border-slate-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-teal-400">
                    <Terminal size={40} />
                  </div>
                  <div className="flex gap-4">
                    {/* <a
                      href={project.link}
                      className="text-slate-400 hover:text-teal-400"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      className="text-slate-400 hover:text-teal-400"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition">
                  {project.title}
                </h4>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 bg-teal-500/10 text-slate-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="text-center bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-teal-400 font-mono mb-4">04. What's Next?</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-10">
            I am currently open to new opportunities in Full Stack Development
            and AI. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-8 py-4 border border-teal-500 text-teal-400 font-bold rounded hover:bg-teal-500/10 transition"
          >
            Say Hello
          </a>

          <div className="mt-20 flex justify-center gap-8">
            <a
              href={personalInfo.links.github}
              className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition"
              target="blank"
            >
              <Github />
            </a>
            <a
              href={personalInfo.links.linkedin}
              className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition"
              target="blank"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-6 text-center text-slate-600 text-sm">
        <p>Designed & Built by {personalInfo.name}</p>
      </footer>
    </div>
  );
}
