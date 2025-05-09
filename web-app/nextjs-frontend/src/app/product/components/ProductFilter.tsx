'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Search, Filter } from 'lucide-react'

const items = [
  "Brand",
  "Battery capacity",
  "Screen type",
  "Screen diagonal",
  "Protection class",
  "Built-in memory"
]

const brands = [
  "Apple", "Samsung", "Xiaomi", "Poco", "OPPO", "Honor", "Motorola", "Nokia", "Realme"
]

export default function ProductFilter() {
  return (
    <div>
      {/* Mobile: Button mở Sheet */}
      <div className="lg:hidden w-full mb-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full flex items-center justify-between gap-2">
              Filters
              <Filter className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[64%] sm:w-[300px]">
            {/* <SheetHeader >
              <SheetTitle className='text-s'>Filter</SheetTitle>
            </SheetHeader> */}
            <FilterAccordion />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: Hiển thị luôn */}
      <aside className="hidden lg:block">
        <FilterAccordion />
      </aside>
    </div>
  )
}

// 👉 Tách phần Accordion thành component để dùng cả mobile và desktop
function FilterAccordion() {
  return (
    <Accordion type="multiple" className="space-y-4 px-4 xl:px-0 overflow-y-auto my-12">
      {items.map((item, index) => (
        <AccordionItem key={item} value={`item-${index}`}>
          <AccordionTrigger className="cursor-pointer text-sm font-medium hover:no-underline">
            {item}
          </AccordionTrigger>
          <AccordionContent className="transition-all duration-300 ease-out">
            <div className="text-sm text-gray-500">
              <div className="flex items-center px-3 py-1 mb-2 bg-gray-100 rounded">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none px-3 py-1 bg-transparent"
                />
              </div>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center gap-2">
                    <input type="checkbox" id={`${item}-${brand}`} className="cursor-pointer" />
                    <label htmlFor={`${item}-${brand}`}>{brand}</label>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
