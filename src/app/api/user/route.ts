import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';


export async function POST(req: Request){
    try {
        const body = await req.json();
        const { email, username, password } = body;

        // Check if user already exists by Email
        const emailExixts = await db.user.findUnique({
            where: { email: email }
        });

        if(emailExixts){
            return NextResponse.json({
                user: null, message: "Email already Exists with another User"
            }, {status: 409})
        }

        // Check if user name already exists
        const usernameExixts = await db.user.findUnique({
            where: { username: username }
        });

        if(usernameExixts){
            return NextResponse.json({
                user: null, message: "Username already Exists with another User"
            }, {status: 409})
        }

        // Encrypt password
        const hashPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        })
        

        return NextResponse.json({
            user: newUser, message: "User created succesful"
        }, {status: 201});
    } catch(err){
        // console.log(err)
    }
}