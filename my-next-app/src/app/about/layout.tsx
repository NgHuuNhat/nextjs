// app/about/layout.tsx
export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <h1>About</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
