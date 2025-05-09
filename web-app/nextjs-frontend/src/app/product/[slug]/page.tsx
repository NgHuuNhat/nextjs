import { API_URL, getProductBySlug } from "@/lib/api";
import { Heart, ShoppingCart } from "lucide-react";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) return <p>Product not found</p>;

    const { name, price, description, image } = product;

    const _description = description?.[0]?.children?.[0].text
    const _imageUrl = image?.url
    const _image = `${API_URL}${_imageUrl}`

    console.log('_description', _description)
    console.log('_image', _image)

    return (
        // <main style={{ padding: "2rem" }}>
        //     <h1>{name}</h1>
        //     <img src={_image} alt={name} width={400} height={400} />
        //     <p>{_description}</p>
        //     <p>${price}</p>
        // </main>
        <div className="p-0 pb-10 pt-5 lg:pt-0 max-w-7xl mx-auto space-y-16">
            {/* Product Header Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Product Images */}
                <div className="space-y-4">
                    <img src={_image} alt="iPhone" className="w-100 mx-auto rounded-xl" />
                    <div className="flex space-x-3 items-center justify-center">
                        {['1', '2', '3', '4', '5'].map((i) => (
                            // <img key={i} src={`/thumb-${i}.png`} className="w-16 h-16 rounded-lg border" />
                            <img key={i} src={_image} className="w-16 h-16 rounded-lg border" />
                        ))}
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Apple iPhone 14 Pro Max</h1>
                    <div className="flex items-center">
                        <span className="text-2xl font-semibold text-black">$1399</span>
                        <span className="text-sm line-through text-gray-400 ml-2">$1499</span></div>
                    <div>
                        <p className="font-semibold">Select color:</p>
                        <div className="flex space-x-2 mt-1">
                            {['#000', '#800080', '#FF0000', '#FFFF00', '#FFFFFF'].map((color, index) => (
                                <div key={index} className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: color }} />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {['128GB', '256GB', '512GB', '1TB'].map((size) => (
                            <button key={size} className={`px-3 py-2 border rounded ${size === '1TB' ? 'border-black font-bold' : 'text-gray-500'}`}>{size}</button>
                        ))}
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm text-gray-600">
                        <p>📱 Screen size: <strong>6.7”</strong></p>
                        <p>⚙️ CPU: <strong>Apple A16 Bionic</strong></p>
                        <p>📸 Main camera: <strong>48–12–12 MP</strong></p>
                        <p>🤳 Front camera: <strong>12 MP</strong></p>
                        <p>🔋 Battery: <strong>4323 mAh</strong></p>
                    </div>

                    <p className="text-sm text-gray-600">
                        Enhanced capabilities thanks to an enlarged display of 6.7 inches... <span className="text-blue-500 cursor-pointer">more...</span>
                    </p>

                    {/* Actions */}
                    <div className="flex space-x-4">
                        <button className="cursor-pointer w-1/2 px-0 py-4 rounded border flex items-center justify-center">
                            <Heart className="w-5 h-5 mx-2 my-0" />
                            <span>Add to Wishlist</span>
                        </button>
                        <button className="cursor-pointer w-1/2 px-0 py-4 rounded bg-black text-white flex items-center justify-center">
                            <ShoppingCart className="w-5 h-5 mx-2 my-0" />
                            <span>Add to Cart</span>
                        </button>
                    </div>

                    {/* Delivery Info */}
                    <div className="flex flex-col lg:flex-row space-x-8 text-sm mt-4 gap-2">
                        <span>🚚 Free Delivery: 1-2 day</span>
                        <span>📦 In Stock: Today</span>
                        <span>✅ Guaranteed: 1 year</span>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Details</h2>
                <p className="text-sm text-gray-600">Just as a book is judged by its cover...</p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-sm">
                    <div>
                        <h3 className="font-bold mb-2">Screen</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li>Diagonal: 6.7”</li>
                            <li>Resolution: 2796×1290</li>
                            <li>Refresh rate: 120 Hz</li>
                            <li>Pixel density: 460 ppi</li>
                            <li>Type: OLED</li>
                            <li>Extra: Dynamic Island, HDR, True Tone, P3</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">CPU</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li>Chip: A16 Bionic</li>
                            <li>Cores: 6</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="space-y-6 lg:w-1/2">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <div className="flex space-x-6">
                    <div className="text-center">
                        <p className="text-4xl font-bold">4.8</p>
                        <p className="text-sm text-gray-500">of 125 reviews</p>
                        <div className="text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
                    </div>
                    <div className="flex-1 space-y-1 text-sm text-gray-600">
                        {[
                            { label: '5⭐', count: 100 },
                            { label: '4⭐', count: 11 },
                            { label: '3⭐', count: 3 },
                            { label: '2⭐', count: 8 },
                            { label: '1⭐', count: 1 }
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between">
                                <span className="w-10 flex justify-center">{item.label}</span>
                                <div className="w-full bg-gray-200 h-2 mx-2"><div className="bg-yellow-500 h-2" style={{ width: `${item.count}%` }} /></div>
                                <span className="w-10 flex items-center justify-center">{item.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comments */}
                {['Grace Carey', 'Ronald Richards', 'Darcy King'].map((name, i) => (
                    <div key={i} className="border-t pt-4 space-y-2">
                        <p className="font-semibold">{name}</p>
                        <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        <span className="text-xs text-gray-400">24 January, 2023</span>
                    </div>
                ))}
            </section>

            {/* Related Products */}
            <section>
                <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'iPhone 14 Pro 512GB', price: '$1437' },
                        { name: 'AirPods Max Silver', price: '$549' },
                        { name: 'Apple Watch Series 9', price: '$399' },
                        { name: 'iPhone 14 Pro 1TB Gold', price: '$1499' },
                    ].map((item, i) => (
                        <div key={i} className="border p-4 rounded-xl text-center space-y-2">
                            <img src="/related-product.png" alt={item.name} className="mx-auto h-32 object-contain" />
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="font-bold">{item.price}</p>
                            <button className="bg-black text-white px-4 py-1 rounded">Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
