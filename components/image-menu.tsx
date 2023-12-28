import AddToAlbumDialog from "@/components/add-to-album-dialog"

type Prop = {
    imageId: string
}
export function DropdownMenuCheckboxes({ imageId }: Prop) {
    // todo rename this function
    return (
        <div className="absolute top-2 right-2">
            <AddToAlbumDialog imageId={imageId} />
        </div>
    )
}