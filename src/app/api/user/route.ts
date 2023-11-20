import { NextRequest, NextResponse } from 'next/server'
 
const data = [
    {
        id: 1,  name: 'john Doe', age: 32
    },
    {
        id: 2,  name: 'john Doe', age: 32
    },
    {
        id: 3,  name: 'john Doe', age: 32
    },
    {
        id: 4,  name: 'john Doe', age: 32
    },
]
 
export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  return NextResponse.json({ data: data })
}
