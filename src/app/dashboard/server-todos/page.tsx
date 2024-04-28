// 'use client';
// import { useEffect } from "react";
import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
  title: 'Listado de todos',
  description: 'Listado de todos los todos',
}

export default async function ServerTodosPage() {
  
  //* Server Action
  const todos = await prisma.todo.findMany({orderBy: { description: 'asc' }});
 
  
  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <NewTodo />
      <TodosGrid todos={ todos } />
    </>
  )
}
