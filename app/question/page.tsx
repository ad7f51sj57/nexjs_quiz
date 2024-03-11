import QuizItem from "../components/QuizItem";
import { quizList } from "../data/Item";

export default function QuestionPage() {
  const quizzes = quizList("question");
  return (
    <section className="flex flex-col p-6 gap-6">
      {quizzes.map((quiz) => (
        <article key={quiz.id}>
          <QuizItem quiz={quiz} />
        </article>
      ))}
    </section>
  );
}
