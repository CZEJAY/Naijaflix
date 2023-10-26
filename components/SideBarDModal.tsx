"use client"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"


const SideBarDModal = () => {
    const { data: session } = useSession()
    return (
        <div
            className='relative p-1 h-auto gap-2 w-full bg-slate-700 flex flex-col rounded-lg'
        >
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <Link href={'/profile'} className="!cursor-pointer">
                            <CommandItem>Profile</CommandItem>
                        </Link>
                        <CommandItem>Billing</CommandItem>
                        <CommandItem>Settings</CommandItem>
                        {
                            session?.user ? (
                                <Link href={"/"} onClick={() => signOut()}>
                                    <CommandItem>Logout
                                        <CommandShortcut>Ctrl+L</CommandShortcut>
                                    </CommandItem>
                                </Link>
                            ) : (
                                <Link href={"/signin"}>
                                    <CommandItem>
                                        Login
                                        <CommandShortcut>Ctrl+L</CommandShortcut>
                                    </CommandItem>
                                </Link>
                            )
                        }
                    </CommandGroup>
                </CommandList>
            </Command>

        </div>
    )
}

export default SideBarDModal