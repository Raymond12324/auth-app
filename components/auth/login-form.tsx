
"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import CardWrapper from "./card-wrapper";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import login from "@/actions/login";
import { useState, useTransition } from "react";

export default function LoginForm() {

        const [error, setError] = useState<string>("");
        const [success, setSuccess] = useState<string>("");
        const [isPeding,startTransition] = useTransition();    

        const form = useForm<z.infer<typeof loginSchema>>({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                email: "",
                password: "",
            }
        });

        const onSubmit = (values: z.infer<typeof loginSchema>) => {
            setError("");
            setSuccess("");

            startTransition(() => {
                login(values).then((response) => {
                    setError(response.error || "");
                    setSuccess(response.success || "");
                });
            });
           
            // console.log(values);
        }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Create an account"
            backButtonHref="/register"
            showSocial={true}
        >
            <Form {...form}>
               <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                <FormField 
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                disabled={isPeding}
                                    {...field}
                                    type="email"
                                    placeholder="Email"
                                />
                            </FormControl>
                            {/* <FormMessage/> */}
                        </FormItem>
                    )}
                />
                      <FormField 
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                disabled={isPeding}
                                    {...field}
                                    type="password"
                                    placeholder="********"
                                />
                            </FormControl>
                            {/* <FormMessage/> */}
                        </FormItem>
                    )}
                    />
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button disabled={isPeding} className="w-full" type="submit" >Sign In</Button>
                </form> 
            </Form>
        </CardWrapper>
    )
   
}

