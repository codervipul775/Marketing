import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <img
              src="/logo.png"
              alt="Influenz"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-x-12">
            <Link to="/" className={`text-sm font-semibold leading-6 ${isActive('/') ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-semibold leading-6 ${isActive('/about') ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}>
              About
            </Link>
            <Link to="/events" className={`text-sm font-semibold leading-6 ${isActive('/events') ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}>
              Events
            </Link>
            <Link to="/brand" className={`text-sm font-semibold leading-6 ${isActive('/brand') ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}>
              Brands
            </Link>
            <Link to="/contact" className={`text-sm font-semibold leading-6 ${isActive('/contact') ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500/10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 ${
                isActive('/') ? 'bg-indigo-500/10 text-indigo-400' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 ${
                isActive('/about') ? 'bg-indigo-500/10 text-indigo-400' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 ${
                isActive('/events') ? 'bg-indigo-500/10 text-indigo-400' : ''
              }`}
            >
              Events
            </Link>
            <Link
              to="/brand"
              onClick={() => setIsMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 ${
                isActive('/brand') ? 'bg-indigo-500/10 text-indigo-400' : ''
              }`}
            >
              Brands
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 ${
                isActive('/contact') ? 'bg-indigo-500/10 text-indigo-400' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
