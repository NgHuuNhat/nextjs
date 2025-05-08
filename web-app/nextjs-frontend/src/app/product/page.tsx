import Link from "next/link";
import { getProducts } from "@/lib/api";
import ProductCard from "./components/ProductCard";
import ProductBreadcrumb from "./components/ProductBreadcrumb";
import ProductSort from "./components/ProductSort";
import ProductFilter from "./components/ProductFilter";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">

      <div className="mb-5">
        <ProductFilter />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm">
            <span className="text-gray-400">Selected Products: </span>
            <span className="font-bold">{products.length}</span>
          </div>
          <ProductSort />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <Link href={`/product/${p.slug}`} key={p.documentId}>
              <ProductCard {...p} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
