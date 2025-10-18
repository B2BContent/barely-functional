import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold">The Barely Functional Toolkit</h1>
      <p className="mt-3 text-zinc-600">
        We curate and test real tools that make adulting, freelancing, and creativity slightly less painful.
      </p>
      <ul className="mt-6 space-y-2 list-disc pl-6">
        <li><Link href="/pillars/productivity">Productivity & Growth</Link></li>
        <li><Link href="/pillars/biztech">Business & Tech</Link></li>
        <li><Link href="/pillars/knowledge">Knowledge & Education</Link></li>
        <li><Link href="/pillars/ai-video">AI & Video Tools</Link></li>
        <li><Link href="/pillars/fintech">Fintech & Freelance</Link></li>
      </ul>
      <p className="mt-6 text-sm text-zinc-500">© 2025 Barely Functional</p>
    </section>
  );
}
