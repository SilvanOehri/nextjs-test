"use server"

import { revalidatePath } from 'next/cache';
import { prisma } from '../../lib/db';
import { z } from 'zod';

const addTodoSchema = z.object({
  newTodo: z.string().min(2, 'min 2 characters').max(30, 'max 30 characters'),
});

export default async function addTodo(prevState: any | undefined, formData: FormData) {
    try {
        const form = Object.fromEntries(formData.entries());
        console.log(form)
        const result = addTodoSchema.safeParse(form);
        console.log(result)
        if (!result.success) {
          console.error(result.error.errors);
          let errorMessage = ""
          result.error.errors.map((error) => (
            errorMessage +=`${error.message}\n`
          ))
          return {type: "error", message: errorMessage}; 
        }

        const todo = await prisma.task.create({
          data: {
            title: result.data.newTodo
          },
        });

        console.log('New Todo:', todo);
        revalidatePath("/todo")
        return {type: "success", message: "Todo created"}
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return {type: "error", message: "Something went wrong"}
    }
}
