"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { Task } from '@prisma/client'
import { Trash } from 'lucide-react'
import removeTodo from './removeTodo'
import toast from 'react-hot-toast'

export default function NewTodo({ todo }: { todo: Task }) {
  const handleRemoveTodo = async () => {
    try {
      await removeTodo(todo.id);

      toast.success('Todo removed successfully')
    } catch (error) {
      
      toast.error('Error removing todo')
    }
  };

  return (
    <div className='bg-grey-500 flex justify-between w-1/3 p-4 bg-gray-100 mt-5 rounded-md'>
      <h1 className='text-2xl'>{todo.title}</h1>
      <Button onClick={handleRemoveTodo}><Trash /></Button>
    </div>
  );
}