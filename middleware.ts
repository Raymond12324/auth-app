import { auth } from "./auth"
import authConfig from "./auth.config"
// import NextAuth from "next-auth"
// export const { auth: middleware } = NextAuth(authConfig)


export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("IS LOGGED IN:", isLoggedIn)
    console.log("ROUTE:", req.nextUrl.pathname)
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}