"use server"

import { prisma } from '../../lib/db';
import { revalidatePath } from "next/cache";

export default async function removeTodo(todo: number) {
  try {
    console.log('Removing Todo with ID:', todo);

    const deletedTodo = await prisma.task.delete({
      where: {
        id: todo,
      },
    });

    console.log(deletedTodo)

    revalidatePath("/todo")
    
  } catch (error) {
    
  }
}