import Menu from "@/components/icons/menu"
import { FolderPlus } from "@/components/icons/folder-plus"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { addImageToAlbum } from "@/components/actions"
import Link from "next/link"
import { Pencil } from "lucide-react"

type Prop = {
    imageId: string
}

export default function AddToAlbumDialog({ imageId }: Prop) {
    const [albumName, setAlbumName] = useState("")
    const [open, setOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <DropdownMenu open={dialogOpen} onOpenChange={setDialogOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-8 h-8 p-0">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent >
                <Dialog
                    open={open}
                    onOpenChange={(newOpenState) => {
                        setOpen(newOpenState);
                        if (!newOpenState) {
                            setDialogOpen(false)
                        }
                    }}
                >
                    <DialogTrigger asChild>
                        <div>
                            <Button variant="ghost" className="flex gap-2 border-b px-1">
                                <FolderPlus />
                                <h1> Add To Album</h1>
                            </Button>
                            <Link href={`/edit?publicId=${encodeURIComponent(imageId)}`}>
                                <Button variant="ghost" className="w-full flex gap-2 justify-start px-1">
                                    <Pencil size={22} />
                                    <h1>Edit</h1>
                                </Button>
                            </Link>
                        </div>
                    </DialogTrigger>

                    {/* Dialog that asks for album name */}
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add to Album</DialogTitle>
                            <DialogDescription>
                                Type an album you want to move this image into
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Album
                                </Label>
                                <Input
                                    onChange={e => setAlbumName(e.currentTarget.value)}
                                    id="album-name" value={albumName} className="col-span-3"
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button
                                onClick={async () => {
                                    setOpen(false)
                                    await addImageToAlbum(imageId, albumName)
                                }}
                                type="submit">Add to Album</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}