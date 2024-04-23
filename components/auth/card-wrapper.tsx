"use client"

import {   Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import Social from "./social";

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
                <Header label="Welcome"></Header>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
            )}
           <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
           </CardFooter>
        </Card>
           
        
    )
}