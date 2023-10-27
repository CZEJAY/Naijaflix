"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSession } from "next-auth/react"
import { useState } from "react"
import UploadBtn from "./UploadBtn"

export function EditBtn() {
    const { data: session } = useSession()
    const [name, setName] = useState(session?.user?.name)
    if (!session) return null
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(name);

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-gray-900">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-inherit">
                <form onSubmit={(e) => handleSubmit(e)} action="">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="picture" className="text-right">
                                Picture
                            </Label>
                            <Input
                                id="picture"
                                className="col-span-3 bg-inherit" //@ts-ignore
                                onChange={(e) => setPicture(e.target.files[0] as File)}
                                type="file"
                            />
                        </div> */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                name="name"
                                id="name"
                                defaultValue={name as string}
                                onChange={(e) => setName(e.target.value)}
                                className="col-span-3 bg-inherit"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <UploadBtn />
                        <Button type="submit" className="text-white">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
