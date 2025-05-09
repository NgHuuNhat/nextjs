import { Product } from "../types"

//ISR
export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`http://localhost:3000/api/product`, {
        // cache: "no-store",  // đảm bảo fetch mới nhất mỗi lần load (không cache)
        next: { revalidate: 600 }, // SEO: ISR sau mỗi 600s
    })

    if (!res.ok) return []
    return res.json()
}

//SSR
export async function getProductBySlug(slug: string): Promise<Product | null> {
    const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: "no-store",  // đảm bảo fetch mới nhất mỗi lần load (không cache)
        // next: { revalidate: 60 }, // SEO: ISR sau mỗi 60s
    })

    if (!res.ok) return null
    return res.json()
}
