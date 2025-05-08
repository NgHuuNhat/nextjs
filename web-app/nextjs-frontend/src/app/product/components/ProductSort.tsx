export default function ProductSort() {
  return (
    <select className="border border-gray-100 rounded cursor-pointer outline-none px-1 py-1 text-sm">
      <option>By rating</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
  );
}