"use client";
import TestQuizItem from "@/app/components/TestQuizItem";
import { testQuizList } from "@/app/data/Item";

export default function Test({ params }: { params: { id: string } }) {
  const test = testQuizList(params.id);

  return <TestQuizItem quiz={test} />;
}
