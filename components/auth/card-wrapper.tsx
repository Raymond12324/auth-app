"use client"

import {   Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "../ui/card";
import Header from "./header";

interface LoginFormProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export default function CardWrapper({children,headerLabel,backButtonLabel,backButtonHref,showSocial} : LoginFormProps) {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label="{headerLabel}"></Header>
            </CardHeader>
             {children}
        </Card>
           
        
    )
}