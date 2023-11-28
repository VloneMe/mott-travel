"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { GoogleSignInBtn } from "../Button/GoogleSignInBtn"

interface Props {
  className?: string;
}

const FormSchema = z.object({
  email: z.string()
  .min(3, 'Email is required')
  .email('Invalid email!'),
  password: z.string()
  .min(1, 'Password is required!')
  .min(8, 'Password must have more than 8 character!'),
})


export function SignInForm(
  { className }: Props
) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white"
          >{JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}
    >
      <div className={`flex flex-col w-full 
                      bg-white shadow-2xl 
                        p-8 rounded-md space-y-5 
                        ${className}`}
      >
        <form onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6 
              bg-white shadow-2xl 
              p-8 rounded-md w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" 
                          placeholder="Password" {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit"
                  className="w-full"
          >Sign in</Button>

          <div className="mx-auto my-4 flex 
                          w-full items-center 
                          justify-evenly before:mr-4 
                          before:block before:h-px 
                          before:flex-grow 
                          before:bg-stone-400 
                          after:ml-4 after:h-px 
                          after:flex-grow 
                          after:bg-stone-400"
          >
            Or
          </div>

          <GoogleSignInBtn>
             Sign in with Google
          </GoogleSignInBtn>
        </form>
        
        <div className="text-center"
        >
          <p className="text-center text-sm text-gray-600 mt-2"
          >
            if you don&apos;t  have an account, please&nbsp;
            <Link className="text-blue-500 
                              hover:text-blue-300 
                              hover:underline"
                  href='/sign-up'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Form>
  )
}