import { Bell } from "lucide-react";
import Logo from "/foodease.png"; // ✅ fixed path

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Foodease Logo" className="h-20 w-auto" />
        
      </div>

      <input
        type="text"
        placeholder="Search for groceries..."
        className="w-1/2 px-6 py-2 border rounded-md focus:outline-none"
      />

      <div className="flex items-center gap-4">
        <span className="cursor-pointer">🛒 Cart</span>
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        <button className="text-sm px-4 py-2 bg-white border rounded hover:bg-gray-100">
          Login
        </button>
        <button className="text-sm px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Sign Up
        </button>
        
      </div>
    </nav>
  );
}
