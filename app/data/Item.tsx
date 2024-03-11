export type Quiz = {
  id: string;
  problem: string;
  options: string[];
  correct: string;
};

const loadQuiz = () => {
  try {
    const res = require("/public/data.json");
    return res;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }
  }
};

export function quizList(value: string) {
  let quizzes: Quiz[] = loadQuiz()[value] || [];
  return quizzes;
}

export function testQuizList(value: string): Quiz[] {
  let quizzes: Record<string, Quiz[]> = loadQuiz() || {};
  let test: Quiz[] = [];
  for (const key in quizzes) {
    if (key !== value) test.push(...quizzes[key]);
  }
  return test;
}
