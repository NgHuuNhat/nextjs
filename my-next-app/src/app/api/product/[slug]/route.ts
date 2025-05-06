import { NextRequest, NextResponse } from 'next/server'

const products = [
  { id: 1, name: 'Product 1', price: 1000, slug: 'iphone-1' },
  { id: 2, name: 'Product 2', price: 1000, slug: 'iphone-2' },
  { id: 3, name: 'Product 3', price: 1000, slug: 'iphone-3' },
]

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 })
  return NextResponse.json(product)
}