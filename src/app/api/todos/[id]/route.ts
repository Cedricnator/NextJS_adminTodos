import prisma from '@/lib/prisma';
import { NextResponse, NextRequest} from 'next/server';

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
    
    if(!oneTodo) return NextResponse.json({ message: `No todo found with the id ${ params.id }`}, { status: 404 })

    return NextResponse.json( oneTodo )
} 


