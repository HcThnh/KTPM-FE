const RegisterForm = () => {
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

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-900">Confirm password</label>
        <input
          type="password"
          placeholder="Value"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400"
        />
      </div>

      <button className="w-full bg-[#2c2c2c] hover:bg-black text-white font-medium py-3 rounded-lg transition-colors mt-2">
        Register
      </button>
    </div>
  );
};

export default RegisterForm;