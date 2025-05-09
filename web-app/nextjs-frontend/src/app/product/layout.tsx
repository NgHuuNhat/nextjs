import { ReactNode } from "react";
import ProductFilter from "./components/ProductFilter";
import ProductBreadcrumb from "./components/ProductBreadcrumb";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className="px-4 xl:container xl:mx-auto">
            <div><ProductBreadcrumb /></div>
            {children}
        </main>
    )
}
