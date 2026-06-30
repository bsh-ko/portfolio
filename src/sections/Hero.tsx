import { useThemeContext } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useThemeContext();
  console.log(theme);

  const desktopText = `
   백엔드와 프론트엔드 양쪽을 경험하며 풀스택 역량을 쌓고 있습니다.
   기능 구현에 그치지 않고, 구조와 흐름을 고민하며 더 나은 코드를 작성하려 노력합니다.
  `.trim();

  const mobileText = `백엔드와 프론트엔드를 함께 경험하며\n 구조와 흐름을 고민하는 개발자입니다.`;

  return (
    <section
      id="hero"
      className="md:min-h-[90vh] min-h-screen flex items-center justify-center text-center px-6 md:px-16 pt-20 gap-16"
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
        <h1 className="md:text-5xl text-3xl dark:text-gray-300 font-bold mb-8">
          <span className="text-accent font-bold md:inline block text-4xl md:text-5xl mb-4">풀스택 개발자</span>{" "}
          배수현입니다.
        </h1>

        <p className="md:hidden whitespace-pre-line text-gray-500 dark:text-gray-400 text-sm leading-7 max-w-75 mx-auto break-keep">
          {mobileText}
        </p>
        <p className="hidden md:block whitespace-pre-line text-gray-500 dark:text-gray-400 text-base leading-8 max-w-2xl mx-auto break-keep">
          {desktopText}
        </p>
      </div>
    </section>
  );
}
