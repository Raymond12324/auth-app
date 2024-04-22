"use client";

import CardWrapper from "./card-wrapper";

export default function LoginForm() {
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Create an account"
            backButtonHref="/register"
            showSocial={true}
        >
            <h1>LoginForm</h1>
        </CardWrapper>
    )
}