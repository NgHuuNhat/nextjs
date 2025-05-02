'use client';
// src/app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function HomePage() {
  const handleClick = () => {
    alert("Bạn đã nhấn nút!");
  };

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Trang chủ</h1>
        <Button label="Nhấn tôi" onClick={handleClick} />
      </main>
      <Footer />
    </>
  );
}
