import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import authConfig from "./auth.config";
import {PrismaAdapter} from "@auth/prisma-adapter";
import { db } from "./lib/db";


export const {
    handlers:{GET, POST},
    auth,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session:{ strategy: "jwt"},
    ...authConfig,
})