'use client';
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as api from '@/todos/helpers/todo'; // util si es que tengo multiples llamadas
interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props ) => {
  
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map( todo => (
          <TodoItem key={todo.id} todo={ todo } toggleTodo={ api.updateTodo } />
        ))
      }
    </div>
  )
}
