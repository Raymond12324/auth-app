import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

interface headerProps{
    label:string;
}

export default function Header( {label} : headerProps) {

    const font = Poppins({
        subsets: ["latin"],
        weight: ["600"],
      });

    return (
        <div className={cn("w-full flex flex-col gap-y-4 items-center justify-center", font.className)}>
            <h1 className={cn(font.className,"text-3xl font-semibold")}>Auth</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}