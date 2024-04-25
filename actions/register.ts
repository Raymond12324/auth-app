"use server"

import { RegisterSchema } from "@/schemas";
import * as z from "zod";


export default async function register(values: z.infer<typeof RegisterSchema>) {
    const validateFields = RegisterSchema.safeParse(values);
    if(!validateFields.success) {
        return {error: "invalid fields"};
    }
    return {success: "email sent"};
}