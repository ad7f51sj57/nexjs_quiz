"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string>("math");
  const router = useRouter();

  return (
    <>
      <select
        name="category"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="bg-white p-2 mb-7 border-4 rounded-md border-ridge border-gray-300 outline-none"
      >
        <option value="math">math</option>
        <option value="alphabet">alphabet</option>
      </select>
      <button
        className="bg-slate-800 text-white p-3 rounded-md"
        onClick={() => {
          router.push(`/quiz/${selectedOption}`);
        }}
      >
        연습 테스트 시작
      </button>
    </>
  );
}
