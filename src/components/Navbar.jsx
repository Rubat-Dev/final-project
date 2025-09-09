import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthForm from "./AuthForm";
import { Menu, X, User, Search } from "lucide-react";
import { useMovies } from "../context/MovieContext";

const Navbar = () => {
  const { fetchMovies } = useMovies();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const links = [
    { name: "Home", path: "/" },
    { name: "Trending", path: "/trending" },
    { name: "Genres", path: "/genres" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Movie <span className="text-yellow-300">Explorer</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white font-semibold">
            {links.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 underline"
                      : "text-white hover:text-yellow-300 transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div
              className="relative hidden md:flex items-center"
              onMouseEnter={() => setSearchOpen(true)}
              onMouseLeave={() => setSearchOpen(false)}
            >
              <Search className="w-5 h-5 text-white cursor-pointer" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchMovies();
                  }
                }}
                className={`absolute right-0 py-1 px-3 rounded-full bg-white border-2 border-gray-300 outline-none transition-all duration-300 ${
                  searchOpen
                    ? "w-48 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
              />
            </div>

            {/* Login Icon */}
            <div
              className="relative cursor-pointer"
              onClick={() => {
                setLoginOpen(true);
                setShowLoginForm(true);
              }}
            >
              <User className="w-6 h-6 text-white hover:scale-105 transition" />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg md:hidden px-6 py-6 w-full z-40 transition-transform duration-500 ${
          mobileMenu ? "translate-y-[64px]" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {links.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className="text-white hover:scale-105 transition"
              onClick={() => setMobileMenu(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Login/Signup Modal */}
      {loginOpen && (
        <AuthForm
          setLoginOpen={setLoginOpen}
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
        />
      )}
    </div>
  );
};

export default Navbar;
