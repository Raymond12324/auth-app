"use server"

import * as bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";


export default async function register(values: z.infer<typeof RegisterSchema>) {
    const validateFields = RegisterSchema.safeParse(values);
    if(!validateFields.success) {
        return {error: "invalid fields"};
    }

    const {email, password, name} = validateFields.data;
    const hashedPassword = await bcrypt.hash(password,10);	
    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        return {error: "user already exists"};
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    })
    return {success: "email sent"};
}