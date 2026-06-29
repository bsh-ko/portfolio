import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

export default function Archiving() {
  const archives = [
    {
      title: "GitHub",
      url: "https://github.com/bsh-ko",
      displayUrl: "github.com/bsh-ko",
      description: "진행한 프로젝트와 코드를 확인할 수 있습니다.",
      icon: <FaGithub className="w-5 h-5 text-accent shrink-0" />,
    },
    {
      title: "Tistory",
      url: "https://bsh-ko.tistory.com",
      displayUrl: "bsh-ko.tistory.com",
      description: "개발하며 학습한 내용을 정리하는 공간입니다.",
      icon: <SiTistory className="w-5 h-5 text-accent shrink-0" />,
    },
  ];
  return (
    <section id="archiving" className="px-6 md:px-16 py-section">
      <div className="max-w-5xl mx-auto justify-between">
        <h2 className="text-5xl font-bold dark:text-gray-300 pb-20 text-center">Archiving</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archives.map((archive) => (
            <a
              key={archive.title}
              href={archive.url}
              target="_blank"
              className="group flex flex-col gap-5 p-8 rounded-2xl bg-bg-elevated/50 dark:bg-bg-elevated border border-gray-200 dark:border-gray-700 hover:-translate-0.5 transition"
            >
              <div className="w-14 h-14 rounded-full bg-accent-bg dark:bg-accent-dark/30 flex items-center justify-center">
                {archive.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-accent transition">
                  {archive.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{archive.displayUrl}</p>
              </div>
              <span className="mt-auto text-sm font-medium text-accent">{archive.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
