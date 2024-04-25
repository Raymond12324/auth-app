"use server"

import { loginSchema } from "@/schemas";
import * as z from "zod";


export default async function login(values: z.infer<typeof loginSchema>) {
    const validateFields = loginSchema.safeParse(values);
    if(!validateFields.success) {
        return {error: "invalid fields"};
    }
    return {success: "email sent"};
}