"use client"

import CloudinaryImage from "@/components/cloudinary-image";
import { SearchResult } from "@/app/page";
import { useEffect, useState } from "react";
import ImageGrid from "@/components/image-grid";

type Prop = {
    initialResources: SearchResult[]
}

export default function FavoritesList({ initialResources }: Prop) {
    const [resources, setResources] = useState(initialResources)

    useEffect(() => {
        setResources(initialResources)
    }, [initialResources])

    return (
        <div>
            <ImageGrid images={resources}
                getImage={(imageData: SearchResult) => {
                    return (
                        <CloudinaryImage
                            key={imageData.public_id}
                            public_id={imageData.public_id}
                            tags={imageData.tags}
                            onUnheart={(unheartedResource) => {
                                setResources((currentResources) =>
                                    currentResources.filter(
                                        (resource) => resource.public_id !== unheartedResource.public_id
                                    )
                                )
                            }}
                        />
                    )
                }}
            />
        </div>
    )
}
