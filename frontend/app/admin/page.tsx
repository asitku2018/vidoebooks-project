export default function AdminDashboard() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Panel: Upload Ebook</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language (Code)</label>
          <select className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-600">
            <option value="en-US">English</option>
            <option value="hi-IN">Hindi (hi-IN)</option>
            <option value="ta-IN">Tamil (ta-IN)</option>
            <option value="te-IN">Telugu (te-IN)</option>
            <option value="bn-IN">Bengali (bn-IN)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Book Content</label>
          <textarea rows={10} className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Paste ebook text here..."></textarea>
        </div>
        <button type="button" className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition font-medium">
          Save & Publish to Store
        </button>
      </form>
    </div>
  )
}
