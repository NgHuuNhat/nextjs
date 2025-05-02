// 'use client';

// src/app/about/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h1>Giới thiệu</h1>
        <p>Tôi là một lập trình viên Next.js đang học!</p>
      </main>
      <Footer />
    </>
  );
}
