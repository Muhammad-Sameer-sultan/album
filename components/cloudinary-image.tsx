"use client"
import Heart from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { setAsFavorite } from "@/components/actions"
import { useState, useTransition } from "react"
import { SearchResult } from "@/app/page"
import FullHeart from "@/components/icons/full-heart"
import { DropdownMenuCheckboxes } from "@/components/image-menu"


type Prop = {
    public_id: string,
    tags: string[]
    onUnheart?: (unheartedResource: SearchResult) => void
}

export default function CloudinaryImage({ public_id, tags, onUnheart }: Prop) {
    const [transition, startTransition] = useTransition()
    const [isFavorited, setIsFavorited] = useState(tags.includes("favorite"))

    return (
        <div className="relative">
            <CldImage
                width="400"
                height="300"
                src={public_id}
                sizes="100vw"
                alt="Description of my image"
            />
            {isFavorited
                ? <FullHeart
                    onClick={() => {
                        onUnheart?.({ public_id, tags })
                        setIsFavorited(false)
                        startTransition(() => {
                            setAsFavorite(public_id, false)
                        })
                    }}
                    className="absolute top-2 left-2 text-red-500 hover:text-white cursor-pointer " />
                : <Heart
                    onClick={() => {
                        setIsFavorited(true)
                        startTransition(() => {
                            setAsFavorite(public_id, true)
                        })
                    }}
                    className="absolute top-2 left-2 hover:text-red-500 cursor-pointer " />
            }
            <DropdownMenuCheckboxes imageId={public_id} />
        </div>
    )
}
