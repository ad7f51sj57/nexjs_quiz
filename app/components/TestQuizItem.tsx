"use client";
import { useState } from "react";
import { Quiz } from "../data/Item";
import { useRouter } from "next/navigation";

export default function QuizItem({ quiz }: { quiz: Quiz[] }) {
  const [correct, setCorrect] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();
  const currentQuiz = quiz[currentIndex - 1];

  const handleChange = (e: HTMLInputElement) => {
    if (e.checked) setCorrect(e.value);
  };

  const handleNext = () => {
    if (currentIndex > 4) return;

    if (correct === currentQuiz.correct) setCorrectCount(correctCount + 1);
    setCurrentIndex(currentIndex + 1);
    setCorrect(null);
  };

  return currentIndex <= 4 ? (
    <div>
      <form className="bg-white p-6 flex flex-col gap-y-4 border-4 rounded-md border-ridge">
        <h2 className="text-lg font-semibold">{currentQuiz.problem}</h2>
        {currentQuiz.options.map((opt, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                name={currentQuiz.id}
                value={opt}
                checked={correct === opt}
                onChange={(e) => handleChange(e.target)}
                className="mr-3"
              />
              {opt}
            </label>
          </div>
        ))}
      </form>
      <div className="flex justify-between mt-3">
        <span>문제 {currentIndex}/4</span>
        <button
          onClick={handleNext}
          className={`bg-slate-900 text-white py-3 px-5 rounded-md ${
            correct ? "inline" : "hidden"
          }`}
        >
          다음
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-lg font-semibold">결과</h2>
      <hr />
      <p>
        <strong>4</strong>점중
        <strong className="text-red-500"> {correctCount}</strong>
        점을 획득했습니다.
      </p>
      <p>
        {correctCount === 4 ? "시험에 합격했습니다." : "시험에 합격하지 못했습니다."}
      </p>
      <button
        onClick={() => router.push("/quiz")}
        className="p-3 bg-slate-900 text-white rounded-md"
      >
        새로운 연습 테스트를 시작하세요.
      </button>
    </div>
  );
}
