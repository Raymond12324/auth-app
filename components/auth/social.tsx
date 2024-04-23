"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export default function Social() {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button size="lg" className="w-full" variant="outline" onClick={()=> {}}>
                <FcGoogle className="h-5 w-5"/>
            </Button>
            <Button size="lg" className="w-full" variant="outline" onClick={()=> {}}>
                <GitHubLogoIcon className="h-5 w-5"/>
            </Button>
        </div>
    )
} 