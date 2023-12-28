"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchBar({ searchValue }: { searchValue: string }) {

    const [tagName, setTagName] = useState(searchValue ?? "")
    const router = useRouter()

    useEffect(() => {
        setTagName(searchValue)

        return () => {
            setTagName("");
        }
    }, [searchValue])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.push(`/gallery?search=${encodeURIComponent(tagName)}`);
                router.refresh()
            }}
        >
            <Label htmlFor="tag-name">
                Search by Tag
            </Label>
            <div className="flex gap-2 mt-1">
                <Input
                    onChange={e => setTagName(e.currentTarget.value)}
                    id="tag-name" value={tagName} className="col-span-3"
                />
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}
