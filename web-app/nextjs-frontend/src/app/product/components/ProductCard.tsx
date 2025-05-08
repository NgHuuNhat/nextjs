'use client';

import { API_URL } from '@/lib/api';
import Image from 'next/image';
import { Heart } from 'lucide-react';

export default function ProductCard({ name, price, image }: any) {
  const _imageUrl = image?.url;
  const _image = `${API_URL}${_imageUrl}`;

  return (
    <div className="rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-lg transition relative">
      {/* Icon Tim */}
      <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100">
        <Heart size={18} />
      </button>

      {/* Hình ảnh sản phẩm */}
      <Image
        src={_image}
        alt={name}
        width={200}
        height={200}
        className="rounded object-contain"
      />

      {/* Tên + Giá */}
      <p className="text-center font-medium">{name}</p>
      <p className="text-lg font-semibold text-black">${price}</p>

      {/* Nút Buy */}
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
        Buy Now
      </button>
    </div>
  );
}
