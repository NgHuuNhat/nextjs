'use client'
import { ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function ProductFilter() {
  const items = [
    "Brand",
    "Battery capacity",
    "Screen type",
    "Screen diagonal",
    "Protection class",
    "Built-in memory"
  ];

  const brands = [
    "Apple", "Samsung", "Xiaomi", "Poco", "OPPO", "Honor", "Motorola", "Nokia", "Realme"
  ];

  // Khởi tạo mảng trạng thái mở (true/false) cho từng mục
  const [openStates, setOpenStates] = useState<boolean[]>(
    items.map((_, i) => i === 0) // mở mặc định mục đầu tiên
  );

  const handleToggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <aside className="space-y-4">
      {items.map((item, index) => (
        <div key={item} className="px-2 py-1">
          <button
            onClick={() => handleToggle(index)}
            className="text-sm border-b border-gray-100 w-full text-left font-bold text-lg cursor-pointer list-none flex justify-between items-center"
          >
            {item}
            <span
              className={`transition-transform duration-300 ${openStates[index] ? 'rotate-90' : 'rotate-0'}`}
            >
              {/* ▶ */}
              <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
            </span>
          </button>

          <div
            className={`transition-all duration-300 ease-out overflow-hidden
              ${openStates[index]
                ? 'max-h-[500px] opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-2'}
            `}
          >
            <div className="p-2 text-sm text-gray-500">
              <div className="flex items-center px-3 py-1 mb-2 bg-gray-100 rounded">
                <Search className="w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search" className="w-full outline-none px-3 py-1" />
              </div>
              <div className="space-y-2 text-sm">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center gap-2">
                    <input type="checkbox" id={`${item}-${brand}`} className="cursor-pointer" />
                    <label htmlFor={`${item}-${brand}`}>{brand}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
