import { ChevronRight } from "lucide-react";

export default function ProductBreadcrumb() {
  return (
    <nav className="hidden lg:flex items-center text-sm text-gray-600 my-6 px-2">
      <span className="text-gray-400">Home</span>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
      <span className="text-gray-400">Catalog</span>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
      <span className="text-black font-medium">Smartphones</span>
    </nav>
  );
}
