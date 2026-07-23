import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation Bar */}
     
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600 tracking-tight">VidoeBooks</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About Us</Link>
              <Link href="/ebooks" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Ebooks</Link>
              <Link href="/contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Contact Us</Link>
            </nav>

            {/* Login Button */}
            <div className="flex items-center">
              <Link href="/login" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            Read & Listen in <span className="text-indigo-600">Your Language</span>
          </h1>
          <p className="mt-6 text-base text-slate-500 sm:text-lg md:text-xl md:max-w-2xl mx-auto">
            Discover thousands of ebooks. Read them beautifully on any device, or sit back and listen to them in Hindi, Tamil, Bengali, and more with our built-in audio player.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/ebooks" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl">
              Start Reading Now
            </Link>
            <Link href="/about" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            © 2026 VidoeBooks. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
