"use client"

import { cn } from "@/lib/utils";
import { ChartSpline, ChevronLeft, ChevronRight, Home, Settings, ToggleRight, User } from "lucide-react";
import { useState } from "react";






export default function Lession3() {


    const MenuItems = [
        {
            name: "Home",
            icon: <Home />
        },
        {
            name: "Analytics",
            icon: <ChartSpline />
        },
        {
            name: "Users",
            icon: <User />
        },
        {
            name: "Settings",
            icon: <Settings />
        }
    ]


    const [open, setOpen] = useState(true)


    return (
        <div className="relative w-screen h-screen bg-white">
            <div className={cn("absolute inset-0 flex flex-col justify-start items-start gap-16 h-screen p-4 border-r  border-neutral-200", open ? "w-[200px]" : "w-[50px]")}>
                <div className="flex justify-between items-center gap-4">
                    <a className={cn("text-2xl", !open && "hidden")}>Dashboard</a>
                    <button onClick={() => setOpen(prev => !prev)}>
                        {open ? <ChevronLeft className="mt-[0.5px] bg-neutral-200 rounded-full shadow-lg" />
                            : <ChevronRight className="mt-[0.5px] bg-neutral-200 rounded-full shadow-lg" />}

                    </button>

                </div>
                <ul className="flex flex-col justify-center items-start gap-8">
                    {MenuItems.map((item) => (

                        <li className="flex justify-center item-center gap-4">
                            <a> {item.icon}</a>
                            <a className={cn(!open && "hidden")}>{item.name}</a>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}