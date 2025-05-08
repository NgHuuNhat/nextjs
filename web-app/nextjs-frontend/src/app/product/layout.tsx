import { ReactNode } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductBreadcrumb from "./components/ProductBreadcrumb";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className="px-4">
            <div className="">
                <ProductBreadcrumb />
            </div>
            {children}
        </main>
    )
}
