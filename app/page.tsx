import UploadButton from "@/components/upload-button";
import cloudinary from "cloudinary"
import CloudinaryImage from "@/components/cloudinary-image";
import ImageGrid from "@/components/image-grid";
import SearchBar from "@/components/searchbar";


export type SearchResult = {
  public_id: string
  tags: string[]
}

type SearchProps = {
  searchParams: {
    search: string
  }
}

export default async function Home({ searchParams: { search } }: SearchProps) {
  const result = await cloudinary.v2.search
    .expression(search ? `resource_type:image AND tags=${search}` : "resource_type:image")
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(20)
    .execute() as { resources: SearchResult[] }

  // @ts-ignore
  // console.log(result.rate_limit_remaining)
  // console.log(result.resources.length)

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        {/* provided key so it re-renders */}
        <SearchBar key={search} searchValue={search} />

        <ImageGrid images={result.resources}
          getImage={(imageData: SearchResult) => {
            return <CloudinaryImage
              key={imageData.public_id}
              public_id={imageData.public_id}
              tags={imageData.tags}
            />
          }}
        />

      </div>
    </section>
  )
}