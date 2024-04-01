import { Todo } from '@prisma/client';
import React from 'react'
import { IoCheckboxOutline } from 'react-icons/io5';
import styles from './TodoItem.module.css'


interface Props {
    todo: Todo;
    // Todo: acciones que quiero llamar
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div className={ todo.complete ? styles.todoDone : styles.todoPending}>
        <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
            <div className={`
             flex p-2 rounded-md cursor-pointer
             hover:bg-opacity-60
             bg-blue-100   
            `}>
                <IoCheckboxOutline size={30} />
            </div>
            <div className='text-center sm:text-left'>
                { todo.description }
            </div>
        </div>
        { todo.description }

    </div>
  )
}
