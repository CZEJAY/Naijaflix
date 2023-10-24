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
import Link from "next/link"


const SideBarDModal = () => {
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
                    </CommandGroup>
                </CommandList>
            </Command>

        </div>
    )
}

export default SideBarDModal