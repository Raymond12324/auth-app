
import NextAuth from "next-auth";
import authConfig from "./auth.config"

const {auth} = NextAuth(authConfig);

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("IS LOGGED IN:", isLoggedIn)
    console.log("ROUTE:", req.nextUrl.pathname)
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}