export default function Contact() {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-600 outline-none" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-600 outline-none" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea rows={4} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-600 outline-none" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-medium">
          Send Message
        </button>
      </form>
    </div>
  )
}
