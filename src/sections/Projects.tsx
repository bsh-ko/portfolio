import Section from "../components/Section";
export default function Project() {
  const projects = [
    {
      title: "모아요",
      role: "백엔드 파트 리더",
      description: "이력 기반 팀 빌딩 플랫폼. AI로 이력을 정리하고 태그 기반으로 팀원을 매칭해주는 서비스",
      skills: ["Java", "Spring Boot", "MySQL", "Docker", "AWS", "GitHub Actions"],
      links: {
        github: "https://github.com/moayo-team/moayo-backend",
        notion: "https://app.notion.com/p/2e6ed750e6be80edacc6d09bb8e8e424",
      },
    },
    {
      title: "내일",
      role: "프론트엔드",
      description: "중장년층 건강 상태에 맞는 맞춤형 일자리 추천 서비스",
      skills: ["React", "TypeScript"],
      links: {
        github: "https://github.com/UMC-TOMORROW/Tomorrow-Frontend",
      },
    },
    {
      title: "오는길에",
      role: "프론트엔드",
      description: "내 손과 발이 되어줄 믿음직한 심부름 매칭 서비스",
      skills: ["React", "TypeScript", "Zustand"],
      links: {
        github: "https://github.com/bsh-ko/5MyGod",
      },
    },
  ];

  return (
    <Section id="project" className="px-6 md:px-16 py-section">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold dark:text-gray-300 pb-20 text-center">Projects</h2>
        <div className="">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex p-6 my-6 justify-between gap-8 border border-gray-200 dark:border-gray-800 rounded-2xl"
            >
              <div className="">
                <p className="text-xs text-accent-dark py-1">{project.role}</p>
                <h3 className="font-semibold text-xl py-1 text-gray-800 dark:text-gray-300">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
              <div className="w-60 hirink-0 flex flex-col items-end gap-3 ">
                <div className="w-full flex flex-wrap justify-end gap-2 ">
                  {project.skills.map((skill) => (
                    <span className="whitespace-nowrap px-2 py-1 text-xs text-accent bg-accent-bg rounded-xl">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="px-2 py-1 text-xs border rounded-lg border-accent text-accent hover:bg-accent-bg "
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.notion && (
                    <a
                      href={project.links.notion}
                      target="_blank"
                      className="px-2 py-1 text-xs border rounded-lg border-accent text-accent hover:bg-accent-bg "
                    >
                      Notion
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
