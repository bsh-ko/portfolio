export default function Skills() {
  const skills = {
    Frontend: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    Backend: ["Java", "Spring Boot"],
    "Database & Infra": ["MySQL", "Docker", "AWS"],
    Tools: ["Git", "GitHub", "Figma", "Notion"],
  };

  return (
    <section id="skill" className="px-6 md:px-16 py-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold pb-20 dark:text-gray-300 text-center">Skills</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 items-start">
              <h3 className="text-lg font-semibold mb-4 dark:text-gray-300 ">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-accent-bg text-accent dark:bg-accent-dark/30 dark:text-accent-hover"
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
