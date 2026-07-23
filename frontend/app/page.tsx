import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col font-sans text-slate-900">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 min-h-[80vh]">
        <div className="max-w-3xl mx-auto text-center">
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
    </div>
  );
}
