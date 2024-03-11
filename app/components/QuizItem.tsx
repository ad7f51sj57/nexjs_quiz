"use client";
import { useState } from "react";
import { Quiz } from "../data/Item";

export default function QuizItem({ quiz }: { quiz: Quiz }) {
  const [correct, setCorrect] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: HTMLInputElement) => {
    if (e.checked) setCorrect(e.value);
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    correct === quiz.correct ? setSuccess("success") : setSuccess("fail");
    setCorrect("");
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className={`bg-white p-6 flex flex-col gap-y-4 border-4 rounded-md border-ridge ${
        success === "success"
          ? "border-teal-400"
          : success === "fail"
          ? "border-red-400"
          : "border-gray-300"
      }`}
    >
      <h2 className="text-lg font-semibold">{quiz.problem}</h2>
      {quiz.options.map((opt, i) => (
        <div key={i}>
          <span className={`mr-3 ${success ? "inline" : "hidden"}`}>
            {quiz.correct === opt ? "✅" : "❌"}
          </span>
          <label>
            <input
              type="radio"
              name={quiz.id}
              value={opt}
              onChange={(e) => handleChange(e.target)}
              className="mr-3"
            />
            {opt}
          </label>
        </div>
      ))}
      <button
        className={`bg-slate-900 text-white p-3 rounded-md ${
          correct ? "inline" : "hidden"
        }`}
      >
        정답 확인
      </button>
    </form>
  );
}
