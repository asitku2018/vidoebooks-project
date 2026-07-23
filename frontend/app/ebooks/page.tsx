"use client";
import { useState, useEffect } from 'react';

interface Book {
  id: string;
  title: string;
  language: string;
  content: string;
}

export default function EbooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Mock or fetch your books from backend
  useEffect(() => {
    // Example data matching your screenshot
    const fetchedBooks = [
      { id: '1', title: 'The Silent Forest', language: 'English', content: 'The forest was unusually quiet today. The wind did not howl, and the birds were entirely silent. It felt as if nature itself was holding its breath.' },
      { id: '2', title: 'शांत जंगल (Hindi)', language: 'Hindi', content: 'आज जंगल असामान्य रूप से शांत था। हवा नहीं चली, और पक्षी पूरी तरह चुप थे।' }
    ];
    setBooks(fetchedBooks);
    setSelectedBook(fetchedBooks[0]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b pb-4">
        Available Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Books List Sidebar */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-700">Library</h2>
          <div className="flex flex-col space-y-2">
            {books.map((book) => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  selectedBook?.id === book.id
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-slate-800'
                }`}
              >
                <div className="font-bold">{book.title}</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Language: {book.language}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Book Reader View */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
          {selectedBook ? (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{selectedBook.title}</h2>
              
              <div className="mb-6 flex items-center">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm text-sm font-medium">
                  <span>▶ Listen</span>
                </button>
              </div>

              <div className="prose max-w-none text-slate-700 leading-relaxed text-lg border-t pt-4">
                {selectedBook.content}
              </div>
            </div>
          ) : (
            <p className="text-slate-500">Select a book to start reading.</p>
          )}
        </div>
      </div>
    </div>
  );
}
