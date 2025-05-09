'use client'

import Link from 'next/link'
import { Heart, Home, Info, Menu, Newspaper, Package, Phone, Search, ShoppingBag, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className='container mx-auto px-4'>
        <div className="flex items-center justify-between py-4 md:gap-10">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-4 hidden md:block">
            <div className="flex items-center px-3 py-2 bg-gray-100 rounded">
              <Search className="w-4 h-4 text-gray-500" />
              <input type="text" placeholder="Search" className="ml-2 w-full outline-none text-sm" autoFocus={false} />
            </div>
          </div>

          {/* NavItems desktop */}
          <nav className="hidden xl:flex md:flex-1 justify-between w-full gap-10 text-sm text-gray-700">
            <div className='md:flex md:gap-2 lg:gap-4 xl:gap-8 2xl:gap-10'>
              <Link href="/" className="flex items-center gap-1 text-gray-400">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/product" className="flex items-center gap-1 font-bold ">
                <ShoppingBag className="w-4 h-4" />
                Shopping
              </Link>
              <Link href="#" className="flex items-center gap-1 text-gray-400">
                <Info className="w-4 h-4" />
                About
              </Link>
              <Link href="#" className="flex items-center gap-1 text-gray-400">
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4 md:gap-0 lg:gap-6 2xl:gap-10">
              {/* <Link href="#"><Heart className="w-5 h-5 cursor-pointer" /></Link> */}
              <div className="relative">
                <Link href="#">
                  <Heart className="w-5 h-5 cursor-pointer" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  5
                </span>
              </div>
              <div className="relative">
                <Link href="#">
                  <ShoppingCart className="w-5 h-5 cursor-pointer" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  10
                </span>
              </div>
              <Link href="#"><User className="w-5 h-5 cursor-pointer" /></Link>
            </div>
          </nav>

          {/* Mobile Icons + Trigger */}
          <Sheet>
            <div className="xl:hidden flex gap-6 items-center">
              <div className="flex items-center gap-6">
                {/* <Link href="#"><Heart className="w-5 h-5 cursor-pointer" /></Link> */}
                <div className="relative">
                  <Link href="#">
                    <Heart className="w-5 h-5 mx-0 my-0" />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    5
                  </span>
                </div>
                <div className="relative">
                  <Link href="#">
                    <ShoppingCart className="w-5 h-5 mx-0 my-0" />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    10
                  </span>
                </div>
                <Link href="#"><User className="w-5 h-5 cursor-pointer" /></Link>
              </div>
              <SheetTrigger asChild>
                <button className="xl:hidden outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none" tabIndex={-1}>
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
            </div>

            <SheetContent side="right" className="w-64 px-2">
              <div className="space-y-4 mt-4">
                {/* Search */}
                <div className="block xl:hidden my-10">
                  <div className="flex items-center bg-gray-100 rounded px-3 py-3">
                    <Search className="w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Search" className="ml-2 w-full outline-none" autoFocus={false} tabIndex={-1} />
                  </div>
                </div>

                {/* NavItems */}
                <nav className="flex flex-col gap-2 text-sm text-gray-700">
                  <Link href="/" className="flex items-center gap-2 bg-gray-100 px-3 py-4 rounded">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <Link href="/product" className="flex items-center gap-2 bg-gray-100 px-3 py-4 rounded">
                    <ShoppingBag className="w-4 h-4" />
                    Shopping
                  </Link>
                  <Link href="#" className="flex items-center gap-2 bg-gray-100 px-3 py-4 rounded">
                    <Info className="w-4 h-4" />
                    About
                  </Link>
                  <Link href="#" className="flex items-center gap-2 bg-gray-100 px-3 py-4 rounded">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  )
}
