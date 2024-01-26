"use client"

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import addTodo from './addTodo';
import NewTodo from './NewTodo';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

export default function TodoForm() {

    const initialState = {
        type: "",
        message: ""
    }

    const [result, action] = useFormState(addTodo, initialState);

    useEffect(() => {
        if (result.type === "success") {
            toast.success(result.message)
        }
        else if (result.type === "error") {
            toast.error(result.message)
        }
    }, [result])

    return (
        <form action={action} className="flex flex-col items-center">
          <Label className="text-5xl mb-4">Create new Todo</Label>
          <Input name="newTodo" className="mb-4 text-2xl" placeholder="title..." required></Input>
          <Button type='submit' className="w-full text-3xl mb-4">Add Todo</Button>
        </form>
      );
      
}
