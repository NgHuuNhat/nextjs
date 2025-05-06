import Link from "next/link"
import { getProducts } from "./services/api"
import { notFound } from "next/navigation"
import { Product } from "./types"

export default async function ProductListPage() {
    const products: Product[] = await getProducts()
    if (!products || products.length === 0) return notFound()

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Product List</h1>
            <ul>
                {products.map((p) => (
                    <li key={p.slug}>
                        <Link href={`/product/${p.slug}`}>
                            {p.name} - ${p.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
