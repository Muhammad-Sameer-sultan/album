import { SearchResult } from "@/app/page"
import { ReactNode } from "react"

const maxColumns = 4

type Prop = {
    images: SearchResult[]
    getImage: (imageData: SearchResult) => ReactNode
}

export default function ImageGrid({ images, getImage }: Prop) {

    function getColumns(colIndex: number) {
        return images.filter((resource, index) => {
            return index % maxColumns === colIndex
        })
    }
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
                (column, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        {column.map(getImage)}
                    </div>
                ))
            }
        </div>
    )
}
