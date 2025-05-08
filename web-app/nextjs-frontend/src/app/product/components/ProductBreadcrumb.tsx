import { ChevronRight } from "lucide-react";

export default function ProductBreadcrumb() {
  return (
    <nav className="hidden md:flex items-center text-sm text-gray-600 mb-4">
      <span className="text-gray-400">Home</span>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
      <span className="text-gray-400">Products</span>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
      <span className="text-black font-medium">Mobile phones</span>
    </nav>
  );
}
