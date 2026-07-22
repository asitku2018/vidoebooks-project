import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 mt-12 md:mt-24">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        Read & Listen in <span className="text-indigo-600">Your Language</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
        Discover thousands of ebooks. Read them beautifully on any device, or sit back and listen to them in Hindi, Tamil, Bengali, and more with our built-in audio player.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link href="/ebooks" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg w-full sm:w-auto">
          Start Reading Now
        </Link>
        <Link href="/about" className="bg-white text-gray-800 border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition w-full sm:w-auto">
          Learn More
        </Link>
      </div>
    </div>
  )
}
