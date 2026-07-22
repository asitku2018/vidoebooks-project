export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm border mt-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h1>
      <p className="text-gray-500 text-center mb-6 text-sm">Sign in to read and listen to books.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" required className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" required className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-medium">
          Log In
        </button>
      </form>
      <div className="mt-4 text-center">
        <a href="/admin" className="text-sm text-indigo-600 hover:underline">Admin Portal Login</a>
      </div>
    </div>
  )
}
