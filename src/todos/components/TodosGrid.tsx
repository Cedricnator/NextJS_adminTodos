'use client';
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as api from '@/todos/helpers/todo'; // util si es que tengo multiples llamadas
import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props ) => {
  
  const router = useRouter();

  // ejecuta la funcion y ademas recarga la pagina para ver los cambios
  // const toggleTodo = async( id: string, complete: boolean ) => {
  //   const updatedTodo = await api.updateTodo( id, complete );
  //   console.log({updatedTodo})
    
  //   // recargar la pagina actual
  //   router.refresh();
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map( todo => (
          <TodoItem key={todo.id} todo={ todo } toggleTodo={ toggleTodo } />
        ))
      }
    </div>
  )
}
