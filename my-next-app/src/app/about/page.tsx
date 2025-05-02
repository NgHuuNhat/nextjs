// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>Giới thiệu về chúng tôi</h1>
      <p>Đây là trang Giới thiệu về công ty chúng tôi.</p>
      <nav>
        <ul>
          <li><Link href="/about/tsx1">Trang 1 - Thông tin sản phẩm</Link></li>
          <li><Link href="/about/tsx2">Trang 2 - Giới thiệu đội ngũ</Link></li>
          <li><Link href="/about/tsx3">Trang 3 - Liên hệ</Link></li>
        </ul>
      </nav>
    </div>
  );
}
