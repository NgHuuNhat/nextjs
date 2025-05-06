import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const res = await fetch(`http://localhost:3000/api/products/${params.slug}`)
    if (!res.ok) return {}

    const product = await res.json()

    return {
        title: `${product.name} | My Shop`,
        // description: product.description,
        openGraph: {
            title: product.name,
            // description: product.description,
            // images: [{ url: product.image }],
        },
        alternates: {
            canonical: `http://localhost:3000/api/product/${params.slug}`,
        },
    }
}
