import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    let array = Array.from(
        { length: 6 },
        (_, i) => i + 1
    )
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {array.map(id => (
                <div key={id}>
                    <Skeleton className="w-auto h-[200px] rounded-md" />
                </div>
            ))}
        </div>
    )
}
