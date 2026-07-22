'use client'
import { useState } from 'react'
import { Play, Square } from 'lucide-react'

// Mock Database of Books
const BOOKS = [
  {
    id: 1,
    title: "The Silent Forest",
    content: "The forest was unusually quiet today. The wind did not howl, and the birds were entirely silent. It felt as if nature itself was holding its breath.",
    lang: "en-US",
    langName: "English"
  },
  {
    id: 2,
    title: "शांत जंगल (Hindi)",
    content: "आज जंगल असामान्य रूप से शांत था। हवा नहीं चल रही थी, और पक्षी पूरी तरह से चुप थे। ऐसा लग रहा था मानो प्रकृति ने ही अपनी सांस रोक ली हो।",
    lang: "hi-IN",
    langName: "Hindi"
  }
]

export default function Ebooks() {
  const [selectedBook, setSelectedBook] = useState(BOOKS[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    if (!window.speechSynthesis) {
      alert("Your browser does not support text-to-speech.")
      return
    }
    
    // Stop any current audio
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(selectedBook.content)
    utterance.lang = selectedBook.lang
    
    utterance.onend = () => setIsPlaying(false)
    
    window.speechSynthesis.speak(utterance)
    setIsPlaying(true)
  }

  const stopAudio = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Sidebar: Book List */}
      <div className="md:col-span-1 bg-white p-4 rounded-xl shadow-sm border h-fit">
        <h2 className="font-bold text-lg mb-4 text-gray-900 border-b pb-2">Available Books</h2>
        <ul className="space-y-2">
          {BOOKS.map(book => (
            <li key={book.id}>
              <button 
                onClick={() => { setSelectedBook(book); stopAudio(); }}
                className={`w-full text-left p-3 rounded-md transition ${selectedBook.id === book.id ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'hover:bg-gray-50 text-gray-700'}`}
              >
                {book.title}
                <span className="block text-xs text-gray-400 mt-1">Language: {book.langName}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content: Reader & Player */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border min-h-[60vh] flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-900">{selectedBook.title}</h1>
          <div className="flex gap-2">
            {!isPlaying ? (
              <button onClick={playAudio} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium transition">
                <Play size={16} /> Listen
              </button>
            ) : (
              <button onClick={stopAudio} className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm font-medium transition">
                <Square size={16} /> Stop
              </button>
            )}
          </div>
        </div>
        
        <div className="flex-grow bg-yellow-50/50 p-6 rounded-lg text-lg text-gray-800 leading-relaxed font-serif whitespace-pre-wrap shadow-inner">
          {selectedBook.content}
        </div>
      </div>
    </div>
  )
}
