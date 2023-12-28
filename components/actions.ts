"use server"

import cloudinary from "cloudinary"

export async function addImageToAlbum(imageId: string, album: string) {
    await cloudinary.v2.api.create_folder(album);

    // to remove any folder in the path and add image to folder at the root
    let parts = imageId.split("/")
    if (parts.length > 1) {
        parts = parts.slice(1)
    }
    const imagePublicId = parts.join("/")

    await cloudinary.v2.uploader.rename(
        imageId,
        `${album}/${imagePublicId}`
    )

}


export async function setAsFavorite(
    publicId: string,
    isFavorite: boolean,
) {

    if (isFavorite) {
        await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    } else {
        await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
    }

}