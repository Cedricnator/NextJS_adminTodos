import prisma from '@/lib/prisma';
import { NextResponse, NextRequest} from 'next/server';

// URL
interface Segments {
    params: {
        id: string;
    }
}

// Con segmentos podremos ver los parametros de la peticion
export async function GET(request: Request, { params }: Segments ) {

    const oneTodo = await prisma.todo.findUnique({
        where: {
            id: params.id
        }
    })
    // sino hay todo, retorna error
    if(!oneTodo) 
        return NextResponse.json({ message: `No todo found with the id ${ params.id }`}, { status: 404 })

    return NextResponse.json( oneTodo )
} 


export async function PUT( request: Request, { params }: Segments ){
    // busca todo
    const { id } = params;
    const todo = await prisma.todo.findFirst({ where: { id }})

    // sino hay todo, retorna error
    if( !todo ){
        return NextResponse.json({ message: `No todo found with the id ${ id }`}, { status: 404 }) 
    }

    const body = await request.json();

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: body
    })

    return NextResponse.json( updatedTodo )
}