'use client';

import { API_URL } from '@/lib/api';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard(p: any) {
  const { slug, image, name, price } = p;
  const _imageUrl = image?.url;
  const _image = `${API_URL}${_imageUrl}`;

  return (
    <div className="rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-lg transition relative">
      {/* Icon Tim */}
      <button className="cursor-pointer absolute top-2 right-2 p-0 md:p-1 rounded-full hover:bg-gray-100">
        <Heart size={18} />
      </button>

      {/* Hình ảnh sản phẩm */}
      <Link href={`/product/${slug}`}>
        {/* <ProductCard {...p} /> */}
        <Image
          src={_image}
          alt={name}
          width={200}
          height={200}
          className="rounded object-contain"
        />
      </Link>
      {/* <Image
        src={_image}
        alt={name}
        width={200}
        height={200}
        className="rounded object-contain"
      /> */}

      {/* Tên + Giá */}
      <p className="text-center font-medium">{name}</p>
      <p className="text-lg font-semibold text-black">${price}</p>

      {/* Nút Buy */}
      <button className="cursor-pointer bg-black text-white px-5 md:px-5 xl:px-20 py-2 rounded hover:bg-gray-800 transition">
        Buy Now
      </button>
    </div>
  );
}
