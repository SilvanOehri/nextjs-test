import React from 'react'
import NewTodo from '../components/NewTodo'
import TodoForm from '../components/TodoForm'
import { prisma } from '@/lib/db'

export default async function page() {
  const todos = await prisma?.task.findMany()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <TodoForm />
    {todos?.map((todo) => (
      <NewTodo todo={todo} />
    ))}
    </div>
  )
}
