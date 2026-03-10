import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Grade Scale",
    description: "A responsive web application for result viewing, built with Spring Boot, REST APIs, and Tailwind CSS.",
    year: "Academic",
    role: "Full-Stack Developer",
  },
  {
    id: 2,
    title: "First Foodo",
    description: "A scalable food ordering system using Spring Boot, Java, and MySQL, developed via Agile methodology.",
    year: "Academic",
    role: "Backend Engineer",
  },
  {
    id: 3,
    title: "Library Management",
    description: "System improving library record efficiency by 30%, developed during an apprenticeship at BirlaSoft.",
    year: "2023-2025",
    role: "Apprentice",
  },
  {
    id: 4,
    title: "Enterprise Solutions",
    description: "Building scalable Java applications, secure APIs, and integrated database endpoints at Tata Technologies.",
    year: "2025",
    role: "Java Developer",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] pt-32 pb-48 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
        <div className="mb-20">
          <h3 className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-4">
            Selected Work
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Recent Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative p-8 md:p-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-zinc-400">{project.year}</span>
                  <span className="text-sm font-medium text-zinc-300">{project.role}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <h4 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-lg md:text-xl font-light max-w-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
