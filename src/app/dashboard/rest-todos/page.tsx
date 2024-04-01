// 'use client';
// import { useEffect } from "react";
import prisma from "@/lib/prisma"
import { TodosGrid } from "@/todos";


export const metadata = {
  title: 'Listado de todos',
  description: 'Listado de todos los todos',
}

export default async function RestTodosPage() {
  
  //* Server Action
  const todos = await prisma.todo.findMany({orderBy: { description: 'asc' }});
  
  //* Forma tradicional de hacerlo
  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then( resp => resp.json() )
  //     .then( console.log )  
  
  // }, [])
  
  
  return (
    <div>
      <TodosGrid todos={ todos } />
    </div>
  )
}
