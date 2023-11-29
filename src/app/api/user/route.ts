import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';


const userSchema = z.object({
    username: z.string(),
    email: z.string()
    .min(3, 'Email is required')
    .email('Invalid email!'),
    password: z.string()
    .min(1, 'Password is required!')
    .min(8, 'Password must have more than 8 character!'),
})


export async function POST(req: Request){
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);

        console.log(body)

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


        // resrict sending or returning password
        // security is a major concern.
        const { password: newUserPassword, ...rest } = newUser;
        

        return NextResponse.json({
            user: rest, message: "User created succesful"
        }, {status: 201});
    } catch(err){
        return NextResponse.json({
            message: err,
        }, {status: 500});
    }
}