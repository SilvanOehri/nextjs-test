import { Task } from '@prisma/client'
import React from 'react'

export default async function NewTodo({todo}: {todo: Task}) {
  return (
    <h1>{todo.title}</h1>
  )
}



