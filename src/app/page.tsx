'use client'

import { QuizApp } from '@/components/QuizApp'

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="container mx-auto">
        <QuizApp />
      </div>
    </main>
  )
}
