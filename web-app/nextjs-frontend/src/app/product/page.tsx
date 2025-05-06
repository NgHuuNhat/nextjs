import Link from "next/link";
import { getProducts } from "@/lib/api";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Product Page:</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.documentId}>
            <Link href={`/product/${p.slug}`}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
