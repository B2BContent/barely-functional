import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barely Functional',
  description: 'Tools for people doing their best—and occasionally succeeding.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-zinc-900">
        <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
      </body>
    </html>
  );
}
