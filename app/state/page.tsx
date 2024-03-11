"use client";
import { useState } from "react";
import { quizList } from "../data/Item";
import QuizItem from "../components/QuizItem";

export default function StatePage() {
  const [selectedOption, setSelectedOption] = useState<string>("math");
  const quizzes = quizList(selectedOption);

  return (
    <section className="flex flex-col p-6 gap-6">
      <select
        name="category"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="bg-white p-2 mb-7 border-4 rounded-md border-ridge border-gray-300 outline-none"
      >
        <option value="math">math</option>
        <option value="alphabet">alphabet</option>
      </select>
      {quizzes.map((quiz) => (
        <article key={quiz.id}>
          <QuizItem quiz={quiz} />
        </article>
      ))}
    </section>
  );
}
