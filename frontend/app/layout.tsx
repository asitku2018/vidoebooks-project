import './globals.css'
import Link from 'next/link'
import { BookOpen, Menu } from 'lucide-react'

export const metadata = {
  title: 'VidoeBooks | Indian Ebook Store',
  description: 'Read and listen to ebooks in multiple Indian languages.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
              <BookOpen size={24} /> VidoeBooks
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <Link href="/about" className="hover:text-indigo-600">About Us</Link>
              <Link href="/ebooks" className="hover:text-indigo-600">Ebooks</Link>
              <Link href="/contact" className="hover:text-indigo-600">Contact Us</Link>
            </nav>
            <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Login
            </Link>
          </div>
        </header>
        <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} VidoeBooks. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
