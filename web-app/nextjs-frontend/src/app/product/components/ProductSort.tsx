import { ChevronDown } from "lucide-react";

export default function ProductSort() {
  return (
    <div className="relative border border-gray-200 rounded">
      <select className="px-3 py-2 appearance-none rounded cursor-pointer outline-none md:py-1 text-sm">
        <option>By rating</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}