export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-16 pt-20 gap-16 bg-accent-bg dark:bg-accent-dark/20 border-b-3 border-accent/20 dark:border-accent/30">
      <img src="/suhyun.jpg" alt="내 사진" className="w-48 h-fit rounded-full object-cover" />
      <div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">안녕하세요,</p>
        <h1 className="text-5xl dark:text-gray-300 font-bold mb-4">배수현입니다.</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          문제를 기억하고 성장하는 <span className="text-accent font-bold">풀스택 개발자</span>
        </p>
      </div>
    </section>
  );
}
