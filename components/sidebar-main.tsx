"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarSeparator,
    useSidebar
} from "@/components/ui/sidebar"
import { BadgeInfo, Bell, ChartBarStacked, FilePenLine, Folder, FoldHorizontal, Home, LibraryBig, MessageCircleQuestionMark, PenIcon, Search, Settings, Shuffle, SidebarClose, SidebarIcon } from "lucide-react"
import { Separator } from "radix-ui"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"



const toolbarItems = [
    { name: "home", icon: <Home /> },
    { name: "write", icon: <PenIcon /> },
    { name: "edit", icon: <FilePenLine /> },
    { name: "discover", icon: <Search /> }
]

export function MainSidebar() {

    const SidebarItems = [
        { name: "My Feed", icon: <Home /> },
        { name: "Notification", icon: <Bell /> },
        { name: "Category", icon: <ChartBarStacked /> },
        { name: "Shuffle", icon: <Shuffle /> }
    ]

    const ReadingListItems = [
        { name: "Read Later List" },
        { name: "Technology: College proj.." }
    ]

    const AdminListItems = [
        { name: "Setting", icon: <Settings /> },
        { name: "Help", icon: <MessageCircleQuestionMark /> },
        { name: "FAQ", icon: <BadgeInfo /> }
    ]


    const headerVariants = {
        hidden: { opacity: 0, x: -5 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -10 },
        transition: { duration: 0.01, ease: "easeInOut" }
    }

    const { open, setOpen } = useSidebar()

    return (
        <Sidebar className="relative group border-black" collapsible="icon">
            <SidebarContent className=" bg-neutral-900 text-white">
                <SidebarGroup>
                    <div className={cn("flex flex-col justify-center items-start gap-4 transition-translate duration-300 ease-in-out", open && "p-4")}>
                        <Button variant={"ghost"} className={cn("flex items-center w-full  gap-4", open ? "justify-start" : "justify-center")}>
                            <a className="p-2 bg-neutral-600 rounded-md"><LibraryBig className="size-4" /></a>
                            <AnimatePresence>
                                {open && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0, overflow: "hidden" }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className="whitespace-nowrap text-2xl"
                                    >
                                        Blognest.io
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Button>

                    </div>
                </SidebarGroup>


                <SidebarGroup>
                    <div className={cn("flex flex-col justify-center  gap-4 transition-translate duration-300 ease-in-out", open ? "items-start p-4" : "items-center")}>

                        {open && (

                            <motion.a
                                variants={headerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"

                                className="text-sm px-2 text-neutral-500" >Platform</motion.a>)}

                        {SidebarItems.map((item, idx) => (
                            <Tooltip key={idx}>
                                <TooltipTrigger>
                                    <Button variant={"ghost"} className={cn("flex items-center w-full gap-4", open ? "justify-start" : "justify-center")}>
                                        {item.icon}
                                        <AnimatePresence>
                                            {open && (
                                                <motion.span
                                                    initial={{ opacity: 0, width: 0, overflow: "hidden" }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, ease: "linear" }}
                                                    className="whitespace-nowrap"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                </TooltipTrigger>
                                {!open &&
                                    <TooltipContent side="right" className="z-100">
                                        <a>{item.name}</a>
                                    </TooltipContent>}
                            </Tooltip>
                        ))}
                    </div>
                </SidebarGroup>
                <SidebarGroup>
                    <div className={cn("flex flex-col justify-center  gap-4 transition-translate duration-300 ease-in-out", open ? "items-start p-4" : "items-center")}>
                        {open && (

                            <motion.a
                                variants={headerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"

                                className="text-sm px-2 text-neutral-500" >Admin</motion.a>)}
                        {AdminListItems.map((item, idx) => (
                            <Tooltip key={idx}>
                                <TooltipTrigger>
                                    <Button variant={"ghost"} className="flex justify-start items-center w-full  gap-4">
                                        {item.icon}
                                        <AnimatePresence>
                                            {open && (
                                                <motion.span
                                                    initial={{ opacity: 0, width: 0, overflow: "hidden" }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.2, ease: "linear" }}
                                                    className="whitespace-nowrap"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                </TooltipTrigger>
                                {!open &&
                                    <TooltipContent side="right" className="z-100">
                                        <a>{item.name}</a>
                                    </TooltipContent>}
                            </Tooltip>
                        ))}
                    </div>
                </SidebarGroup>
                <SidebarGroup>
                    <div className={cn("flex flex-col justify-center items-start gap-4 transition-translate duration-300 ease-in-out", open && "p-4")}>

                        {open && (

                            <motion.a
                                variants={headerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"

                                className="text-sm px-2 text-neutral-500" >Command</motion.a>)}
                        <Tooltip >
                            <TooltipTrigger>
                                <Button variant={"ghost"} onClick={() => { setOpen(prev => !prev) }} className="flex justify-start items-center w-full  gap-4">
                                    <SidebarIcon />
                                    <AnimatePresence>
                                        {open && (
                                            <motion.span
                                                initial={{ opacity: 0, width: 0, overflow: "hidden" }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, ease: "linear" }}
                                                className="whitespace-nowrap"
                                            >
                                                Toggle Sidebar
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </TooltipTrigger>
                            {!open &&
                                <TooltipContent side="right" className="z-100">
                                    <a>Toggle Sidebar</a>
                                </TooltipContent>}
                        </Tooltip>
                    </div>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}