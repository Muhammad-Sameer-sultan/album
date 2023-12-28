"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

// got this by console logging props
type Props = {
    searchParams: {
        publicId: string
    }
}

export default function EditPage({ searchParams }: Props) {
    const publicId = searchParams.publicId
    const [transformation, setTransformation] = useState<
        undefined
        | "generative-fill"
        | "blur"
        | "grayscale"
        | "pixelate"
        | "bg-remove"
    >();

    const [pendingPrompt, setPendingPrompt] = useState("")
    const [prompt, setPrompt] = useState("")

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Edit Image</h1>
                </div>

                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setTransformation(undefined)}>
                        Clear
                    </Button>

                    <div className="flex flex-col gap-2">
                        <Button onClick={() => {
                            setTransformation("generative-fill");
                            setPrompt(pendingPrompt)
                        }}
                        >
                            Generative Fill
                        </Button>

                        <Label>Prompt</Label>
                        <Input
                            value={pendingPrompt}
                            onChange={e => setPendingPrompt(e.currentTarget.value)}
                            placeholder="Christmas tree"
                        />
                    </div>

                    <Button onClick={() => setTransformation("blur")}>
                        Blur
                    </Button>

                    <Button onClick={() => setTransformation("grayscale")}>
                        Grayscale
                    </Button>

                    <Button onClick={() => setTransformation("pixelate")}>
                        Pixelate
                    </Button>

                    <Button onClick={() => setTransformation("bg-remove")}>
                        Remove Background
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <CldImage
                        src={publicId}
                        alt="Edit your image"
                        width={300}
                        height={200}
                    />

                    {transformation === "generative-fill" &&
                        <CldImage
                            src={publicId}
                            alt="Edit your image"
                            width={300}
                            height={200}
                            crop="pad" // Returns the given size with padding
                            // Uses AI to extend image
                            fillBackground={{
                                prompt: prompt
                            }}
                        />
                    }

                    {transformation === "blur" &&
                        <CldImage
                            src={publicId}
                            alt="Blurred image"
                            width={300}
                            height={200}
                            // @ts-ignore
                            blur="800"
                        // ignored because i got this property from cloudinary docs
                        />
                    }

                    {transformation === "grayscale" &&
                        <CldImage
                            src={publicId}
                            alt="Grayscaled image"
                            width={300}
                            height={200}
                            // @ts-ignore
                            grayscale
                        // ignored because i got this property from cloudinary docs
                        />
                    }

                    {transformation === "pixelate" &&
                        <CldImage
                            src={publicId}
                            alt="Pixelated image"
                            width={300}
                            height={200}
                            // @ts-ignore
                            pixelate
                        // ignored because i got this property from cloudinary docs
                        />
                    }

                    {transformation === "bg-remove" &&
                        <CldImage
                            src={publicId}
                            alt="Image without background"
                            width={300}
                            height={200}
                            removeBackground
                        />
                    }
                </div>
            </div>
        </section>
    )
}
