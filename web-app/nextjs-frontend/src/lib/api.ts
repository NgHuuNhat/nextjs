export const API_URL = 'http://localhost:1337'

export async function getProducts() {
    const res = await fetch(`${API_URL}/api/products?populate=image`, {
        next: { revalidate: 60 }, // ISR
    });
    const json = await res.json();
    return json.data;
}

export async function getProductBySlug(slug: string) {
    const res = await fetch(`${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=image`, {
        next: { revalidate: 60 },
    });
    const json = await res.json();
    return json.data?.[0] || null;
}
