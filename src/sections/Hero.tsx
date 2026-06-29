import { useThemeContext } from "../context/ThemeContext";
export default function Hero() {
  const { theme } = useThemeContext();
  console.log(theme);

  const text = `
   백엔드와 프론트엔드 양쪽을 경험하며 풀스택 역량을 쌓고 있습니다.
   문제를 마주했을 때 포기하지 않고 끝까지 파고드는 것이 저의 가장 큰 강점입니다.
  `;

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center text-center px-6 md:px-16 pt-20 gap-16"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #0d0b1a, #0d1117, #1a1535)"
            : "linear-gradient(135deg, #eeedfe, #ffffff, #afa9ec)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 6s ease infinite",
      }}
    >
      <div>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-3">안녕하세요,</p>
        <h1 className="text-5xl dark:text-gray-300 font-bold mb-4">
          <span className="text-accent font-bold">풀스택 개발자</span> 배수현입니다.
        </h1>
        <p className="whitespace-pre-line text-gray-500 dark:text-gray-400">{text}</p>
      </div>
    </section>
  );
}
