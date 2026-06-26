import { FaFaceSmile } from "react-icons/fa6";
import { FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { SiTistory } from "react-icons/si";

export default function About() {
  return (
    <section className="px-6 md:px-16 py-section">
      <div className="max-w-5xl mx-auto justify-between">
        <h2 className="text-5xl font-bold dark:text-gray-300 pb-20 text-center">About</h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
          <li className="flex flex-col gap-2 p-6 rounded-xl bg-bg-elevated dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <FaFaceSmile className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">이름</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">배수현</span>
          </li>
          <li className="flex flex-col gap-2 p-6 rounded-xl bg-bg-elevated dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <FaMapMarkerAlt className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">위치</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">경기도 의정부시</span>
          </li>
          <li className="flex flex-col gap-2 p-6 rounded-xl bg-bg-elevated dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <MdEmail className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">이메일</span>
            <span className="text-gray-700 dark:text-gray-300  font-medium">qotn0521@naver.com</span>
          </li>
          <li className="flex flex-col gap-2 p-6 rounded-xl bg-bg-elevated dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <IoIosSchool className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">학력</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">동덕여자대학교 컴퓨터학과</span>
          </li>
          <li className="flex flex-col gap-2 p-6 rounded-xl bg-bg-elevated dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <FaGithub className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">GitHub</span>
            <a
              href="https://github.com/bsh-ko"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-accent"
            >
              github.com/bsh-ko
            </a>
          </li>

          <li className="flex flex-col gap-2 p-6 rounded-xl bg-bg-elevated dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <SiTistory className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Tistory</span>
            <a
              href="https://bsh-ko.tistory.com"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-accent"
            >
              bsh-ko.tistory.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
