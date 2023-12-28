import cloudinary from "cloudinary"
import { Folder } from "@/app/albums/page"
import Link from "next/link"

export default async function FolderList() {
    const foldersResult = await cloudinary.v2.api.root_folders()

    const folders: Folder[] = foldersResult.folders

    return (
        <div className="hidden md:flex flex-col gap-1 ml-12">
            {
                folders.map((folder) => (
                    <Link key={folder.name} href={`/albums/${folder.name}`}>
                        <h1 key={folder.name} className="text-white/90 hover:text-white hover:bg-slate-800 p-1 rounded">
                            {folder.name}
                        </h1>
                    </Link>
                ))
            }
        </div >
    )
}
