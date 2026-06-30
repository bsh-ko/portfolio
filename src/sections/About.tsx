import { FaFaceSmile } from "react-icons/fa6";
import { FaMapMarkerAlt, FaCertificate } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";

import Section from "../components/Section";

export default function About() {
  const email = "qotn0521@naver.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    "포트폴리오를 보고 연락드립니다",
  )}`;

  return (
    <Section id="about" className="px-6 md:px-16 py-section">
      <div className="max-w-5xl mx-auto justify-between">
        <h2 className="text-5xl font-bold dark:text-gray-300 pb-20 text-center">About</h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4 ">
          <li className="flex flex-col gap-2 md:p-6 p-4 rounded-xl bg-bg-elevated/50 dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <FaFaceSmile className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">이름</span>
            <span className="text-gray-700 dark:text-gray-300 md:font-medium font-normal text-sm">배수현</span>
          </li>
          <li className="flex flex-col gap-2 md:p-6 p-4 rounded-xl bg-bg-elevated/50 dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <IoCalendar className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">생년월일</span>
            <span className="text-gray-700 dark:text-gray-300 md:font-medium font-normal text-sm">2001.05.21</span>
          </li>
          <li className="flex flex-col gap-2 md:p-6 p-4 rounded-xl bg-bg-elevated/50  dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <FaMapMarkerAlt className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">위치</span>
            <span className="text-gray-700 dark:text-gray-300 md:font-medium font-normal text-sm">경기도 의정부시</span>
          </li>
          <li className="flex flex-col gap-2 md:p-6 p-4 rounded-xl bg-bg-elevated/50 dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <IoIosSchool className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">학력</span>
            <span className="whitespace-pre-line text-gray-700 dark:text-gray-300 md:font-medium font-normal text-sm">
              {`동덕여자대학교\n컴퓨터학과`}
            </span>
          </li>
          <li className="flex flex-col gap-2 md:p-6 p-4 rounded-xl bg-bg-elevated/50 dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <MdEmail className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">이메일</span>

            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-pre-line md:hidden text-gray-700 dark:text-gray-300 font-normal text-sm hover:text-accent transition-colors"
            >
              {`클릭해서\n이메일 전송`}
            </a>

            <span className="hidden md:inline text-gray-700 dark:text-gray-300 font-medium text-sm">{email}</span>
          </li>
          <li className="flex flex-col gap-2 md:p-6 p-4 rounded-xl bg-bg-elevated/50 dark:bg-bg-elevated items-center text-center border border-gray-200 dark:border-gray-800">
            <FaCertificate className="w-5 h-5 text-accent shrink-0" />
            <span className="text-xs text-gray-400 dark:text-gray-500">자격증</span>
            <span className="whitespace-pre-line text-gray-700 dark:text-gray-300 md:font-medium font-normal text-sm">
              {`SQLD\n정보처리기사(필기)`}
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}
