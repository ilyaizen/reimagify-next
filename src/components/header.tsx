import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Reimagify
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/generate"
              className="text-gray-600 hover:text-blue-600"
            >
              Generate
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-blue-600">
              Gallery
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
          </nav>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
}
