const LoginForm = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          placeholder="Value"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-900">Password</label>
        <input
          type="password"
          placeholder="Value"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="remember"
          defaultChecked
          className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer accent-black"
        />
        <label htmlFor="remember" className="text-sm text-gray-900 cursor-pointer select-none">
          Remember me
        </label>
      </div>

      <button className="w-full bg-[#2c2c2c] hover:bg-black text-white font-medium py-3 rounded-lg transition-colors mt-2">
        Login
      </button>
    </div>
  );
};

export default LoginForm;