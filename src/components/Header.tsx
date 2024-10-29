import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Birds Eye</Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
      </div>
    </header>
  );
} 