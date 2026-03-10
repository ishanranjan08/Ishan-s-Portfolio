import { Code2, Database, Layout, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-zinc-400" />,
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    title: "Frameworks & Tools",
    icon: <Layout className="w-6 h-6 text-zinc-400" />,
    skills: ["Spring Boot", "Spring AI", "Bootstrap"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-zinc-400" />,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Other Skills",
    icon: <Wrench className="w-6 h-6 text-zinc-400" />,
    skills: ["REST APIs", "GitHub", "Postman", "MsExcel", "Design Pattern"],
  },
];

export default function Skills() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
        <div className="mb-16">
          <h3 className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-4">
            Technical Arsenal
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
