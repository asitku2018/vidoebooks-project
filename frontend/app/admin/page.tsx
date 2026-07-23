"use client";
import { useState } from 'react';

export default function AdminUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setStatus('Uploading...');
    
    // Crucial: Must use FormData for files!
    const formData = new FormData();
    formData.append('title', title);
    formData.append('bookFile', file); 

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/upload`, {
        method: 'POST',
        body: formData, // Do NOT JSON.stringify this
        // Do NOT manually set Content-Type header; the browser needs to set the form boundary automatically
      });

      if (response.ok) {
        setStatus('Book uploaded successfully!');
      } else {
        setStatus('Upload failed. Check backend logs.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Network error occurred.');
    }
  };

  return (
    <form onSubmit={handleUpload} className="max-w-md mx-auto mt-10 space-y-4 p-6 bg-white shadow rounded">
      <input 
        type="text" 
        placeholder="Book Title" 
        required 
        className="w-full border p-2 rounded"
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="file" 
        accept=".pdf,.epub" 
        required 
        className="w-full border p-2 rounded"
        onChange={(e) => setFile(e.target.files?.[0] || null)} 
      />
      <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
        Upload Book
      </button>
      <p>{status}</p>
    </form>
  );
}
