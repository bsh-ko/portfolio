export default function About() {
  const text = `
   더 나은 코드를 향해 매일 성장하는 개발자, 배수현입니다.
   백엔드와 프론트엔드 양쪽을 경험하며 풀스택 역량을 쌓고 있습니다.
   문제를 마주했을 때 포기하지 않고 끝까지 파고드는 것이 저의 가장 큰 강점입니다.
  `;
  return (
    <section>
      <div>{text}</div>
      <div>
        <ul>
          <li>이름</li>
          <li>위치</li>
          <li>이메일</li>
          <li>학력</li>
          <li>Github</li>
          <li>Velog</li>
        </ul>
      </div>
    </section>
  );
}
