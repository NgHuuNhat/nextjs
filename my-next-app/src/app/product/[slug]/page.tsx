import { notFound } from 'next/navigation'
import { getProductBySlug } from '../services/api'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) return notFound()

  return (
    <main className="max-w-2xl mx-auto p-6">
      <p className="text-gray-500">{product.id} - {product.name} - ${product.price} - {product.slug}</p>
    </main>
  )
}
