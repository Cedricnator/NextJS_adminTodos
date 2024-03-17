import prisma from '@/lib/prisma';
import { NextResponse, NextRequest} from 'next/server';
import * as yup from 'yup';
import { Todo } from '@prisma/client';

// URL
interface Segments {
    params: {
        id: string;
    }
}

const getOneTodo = async( id:string ): Promise<Todo | null> => {
    return await prisma.todo.findFirst({ where: { id }});
}

// Con segmentos podremos ver los parametros de la peticion
export async function GET(request: Request, { params }: Segments ) {

    const oneTodo = getOneTodo(params.id)

    // sino hay todo, retorna error
    if(!oneTodo){ 
        return NextResponse.json({ 
            message: `No todo found with the id ${ params.id }`
        },{ 
            status: 404 
        })
    }

    return NextResponse.json( oneTodo )
} 

//* Validacion *// 
const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
})


export async function PUT( request: Request, { params }: Segments ){
    // busca todo
    const { id } = params;
    const todo = getOneTodo( id );

    // sino hay todo, retorna error
    if( !todo ){
        return NextResponse.json({ message: `No todo found with the id ${ id }`}, { status: 404 }) 
    }

    try {
        const { complete, description } = await putSchema.validate(request.json());

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete, description }
        })

        return NextResponse.json( updatedTodo )
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }

   
}