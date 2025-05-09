import { getProducts } from "@/lib/api";
import ProductCard from "./components/ProductCard";
import ProductSort from "./components/ProductSort";
import ProductFilter from "./components/ProductFilter";
import ProductPagination from "./components/ProductPagination";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    // <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] md:gap-6">

      {/* mobile */}
      <div className="lg:hidden my-10">
        <div className="flex justify-between items-start gap-4">
          <div className="w-1/2"><ProductFilter /></div>
          <div className="w-1/2"><ProductSort /></div>
        </div>
      </div>
      <div className="lg:hidden text-sm mb-5">
        <span className="text-gray-400">Selected Products: </span>
        <span className="font-bold">{products.length}</span>
      </div>

      {/* laptop */}
      <div className="hidden lg:block mb-5">
        <ProductFilter />
      </div>

      <div className="">
        <div className="hidden lg:flex justify-between mb-5">
          <div className="text-sm">
            <span className="text-gray-400">Selected Products: </span>
            <span className="font-bold">{products.length}</span>
          </div>
          <ProductSort />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {products.map((p: any) => (
            // <Link href={`/product/${p.slug}`} key={p.documentId}>
            <ProductCard key={p.documentId} {...p} />
            // </Link>
          ))}
        </div>

        <div className="flex items-center justify-center my-10">
          <div>
            <ProductPagination currentPage={2} totalPages={3} />
          </div>
        </div>
      </div>

    </div>
    // </div>
  );
}
