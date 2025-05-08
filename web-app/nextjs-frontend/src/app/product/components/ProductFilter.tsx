'use client'
import { Button } from 'antd';
import { ChevronRight, Search, Filter } from 'lucide-react';
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

  const [openStates, setOpenStates] = useState<boolean[]>(
    items.map((_, i) => i === 0)
  );

  const [showMobileFilter, setShowMobileFilter] = useState(false); // 👈 thêm state để toggle mobile

  const handleToggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div>
      {/* Nút mở filter chỉ hiện trên mobile */}
      <div className='md:hidden'>
        <Button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          type="default"
          style={{ width: '100%' }}
        >
          Filters
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Phần bộ lọc - hiện trên desktop hoặc khi mở ở mobile */}
      <aside className={`space-y-4 ${showMobileFilter ? '' : 'hidden'} md:block`}>
        {items.map((item, index) => (
          <div key={item} className="mt-5 md:mt-0">

            <button
              onClick={() => handleToggle(index)}
              className="pb-2 text-sm border-b border-gray-100 w-full text-left font-bold text-lg cursor-pointer list-none flex justify-between items-center"
            >
              {item}
              <span
                className={`transition-transform duration-300 ${openStates[index] ? 'rotate-90' : 'rotate-0'}`}
              >
                <ChevronRight className="w-4 h-4 mx-2 text-black" />
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-out overflow-hidden
                ${openStates[index]
                  ? 'max-h-[500px] opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 -translate-y-2'}
              `}
            >
              <div className="my-5 text-sm text-gray-500">
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
    </div>
  );
}
