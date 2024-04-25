
"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import CardWrapper from "./card-wrapper";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { useState, useTransition } from "react";
import register from "@/actions/register";

export default function RegisterForm() {

        const [error, setError] = useState<string>("");
        const [success, setSuccess] = useState<string>("");
        const [isPeding,startTransition] = useTransition();    

        const form = useForm<z.infer<typeof RegisterSchema>>({
            resolver: zodResolver(RegisterSchema),
            defaultValues: {
                email: "",
                password: "",
                name: "",
            }
        });

        const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
            setError("");
            setSuccess("");

            startTransition(() => {
                register(values).then((response) => {
                    setError(response.error || "");
                    setSuccess(response.success || "");
                });
            });
           
            // console.log(values);
        }

    return (
        <CardWrapper
            headerLabel="Create an account"
            backButtonLabel="Do you have an account? Sign In"
            backButtonHref="/auth/login"
            showSocial={true}
        >
            <Form {...form}>
               <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                disabled={isPeding}
                                    {...field}
                                    placeholder="Name"
                                />
                            </FormControl>
                            {/* <FormMessage/> */}
                        </FormItem>
                    )}
                />
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

