'use client'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle } from './ui/card'
import { ReloadIcon } from "@radix-ui/react-icons";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

const formSchema = z.object({
    username: z.string().trim().min(2, { message: "Required" }),
    password: z.string().trim().min(2, { message: "Required" })
})

function LoginForm() {
    const [disabled, setDisabled] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: 'sahabatgolkar',
            password: 'kotabogor',
        }
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setDisabled(true)
        try {
            const hasil = await signIn('credentials', {
                username: values.username,
                password: values.password,
                redirect: false
            })
            if (hasil.error) {
                setErrMessage('Wrong username or password')
                setDisabled(false)
            } else {
                router.push('/cms/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="p-8 rounded w-full md:w-[500px]">
                <Card className="p-6 backdrop-blur-xl bg-white/30">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Login Kobo</CardTitle>
                    </CardHeader>
                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} disabled={disabled} />
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
                                            <Input placeholder="Password" {...field} type="password" disabled={disabled} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            >
                            </FormField>
                            <Button type="submit" disabled={disabled}>{disabled ? (
                                <><ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Please wait ...</>
                            ) : (
                                <span>Sign In</span>
                            )}    </Button>
                        </form>
                    </FormProvider>
                    {errMessage && (
                        <div className="text-red-600">{errMessage}</div>
                    )}
                </Card>
            </div>
        </div>
    )
}

export default LoginForm