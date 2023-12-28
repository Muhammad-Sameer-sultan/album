import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Folder } from "@/app/albums/page"
import Link from "next/link"

type Prop = {
    folder: Folder
}

export function AlbumCard({ folder }: Prop) {
    return (
        <Card >
            <CardHeader>
                <CardTitle>{folder.name}</CardTitle>
                <CardDescription>All your {folder.name} images</CardDescription>
            </CardHeader>
            <CardContent>

                <Link href={`/albums/${folder.name}`}>
                    <Button>View Album</Button>
                </Link>
            </CardContent>

            {/* <CardFooter className="flex justify-between">
                <Link href={`/albums/${folder.name}`}>
                    <Button>View Album</Button>
                </Link>
            </CardFooter> */}
        </Card>
    )
}
