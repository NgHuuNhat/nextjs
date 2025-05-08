import { ReactNode } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductBreadcrumb from "./components/ProductBreadcrumb";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className="p-6">
            <div className="p-2">
                <ProductBreadcrumb />
            </div>
            {children}
        </main>
    )
}
