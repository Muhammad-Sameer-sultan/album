import cloudinary from "cloudinary"
import { SearchResult } from "@/app/page";
import ForceRefresh from "@/components/force-refresh";
import FavoritesList from "@/app/favorites/favorites-list";


export default async function FavoritesPage() {

    const result = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute() as { resources: SearchResult[] }

    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>

                <FavoritesList initialResources={result.resources} />
            </div>
        </section>
    )
}
