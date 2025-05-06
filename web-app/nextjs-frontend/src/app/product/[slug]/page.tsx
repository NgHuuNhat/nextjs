import { API_URL, getProductBySlug } from "@/lib/api";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) return <p>Product not found</p>;

    const { name, price, description, image } = product;

    const _description = description?.[0]?.children?.[0].text
    const _imageUrl = image?.url
    const _image = `${API_URL}${_imageUrl}`

    console.log('_description',_description)
    console.log('_image',_image)

    return (
        <main style={{ padding: "2rem" }}>
            <h1>{name}</h1>
            <img src={_image} alt={name} width={400} height={400} />
            <p>{_description}</p>
            <p>${price}</p>
        </main>
    );
}
