// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
