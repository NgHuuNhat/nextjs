'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-100">
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    {/* <span className="text-black">7</span>
                    <span className="text-gray-500">cyber</span> */}
                    <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
                </Link>

                {/* Search */}
                <div className="flex-1 max-w-lg mx-4 hidden md:block">
                    <div className="flex items-center px-3 py-2 bg-gray-100 rounded">
                        <Search className="w-4 h-4 text-gray-500" />
                        <input type="text" placeholder="Search" className="ml-2 w-full outline-none text-sm" />
                    </div>
                </div>

                {/* NavItems */}
                <nav className="hidden lg:flex gap-6 text-sm text-gray-700">
                    <Link href="/product">Shop</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>
                    <div className="flex items-center gap-4">
                        <Link href="#"><Heart className="w-5 h-5 cursor-pointer" /></Link>
                        <Link href="#"><ShoppingCart className="w-5 h-5 cursor-pointer" /></Link>
                        <Link href="#"><User className="w-5 h-5 cursor-pointer" /></Link>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button className="lg:hidden" onClick={() => setOpen(!open)}>
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Subnav */}
            <div className="hidden bg-gray-100 text-sm text-gray-800 px-4 md:px-8 py-2 flex flex-wrap gap-4 justify-center">
                {['Phones', 'Laptops', 'Headphones', 'Cameras', 'Watches'].map(item => (
                    <Link href="#" key={item} className="hover:underline">
                        {item}
                    </Link>
                ))}
            </div>

            {/* Header mobile */}
            <div
                className={`lg:hidden transition-all duration-300 ease-out overflow-hidden
                ${open ? 'max-h-[1000px] opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}
              `}
            >
                <div className="lg:hidden px-4 py-4 space-y-4 grid gap-5">
                    {/* Search (reused) */}
                    <div className="block md:hidden">
                        <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                            <Search className="w-4 h-4 text-gray-500" />
                            <input type="text" placeholder="Search" className="ml-2 w-full outline-none" />
                        </div>
                    </div>

                    {/* NavItems (reused) */}
                    <nav className="flex flex-col gap-8 text-sm text-gray-700">
                        <Link href="/product">Shop</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Contact</Link>
                        <div className="grid items-center gap-8">
                            <Link href="#"><Heart className="w-5 h-5 cursor-pointer" /></Link>
                            <Link href="#"><ShoppingCart className="w-5 h-5 cursor-pointer" /></Link>
                            <Link href="#"><User className="w-5 h-5 cursor-pointer" /></Link>
                        </div>
                    </nav>

                    {/* Subnav (reused) */}
                    <div className="hidden bg-gray-100 text-sm text-gray-800 px-4 md:px-8 py-2 flex flex-wrap gap-4 justify-center">
                        {['Phones', 'Laptops', 'Headphones', 'Cameras', 'Watches'].map(item => (
                            <Link href="#" key={item} className="hover:underline">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}
