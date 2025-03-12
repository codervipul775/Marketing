import React, { useState } from 'react';
import { Code2, Users, Trophy, Home, UserPlus, FolderGit2, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text, active }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        active ? 'bg-indigo-500/10 text-indigo-400' : 'text-gray-300 hover:bg-indigo-500/5'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', text: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/events', text: 'Events', icon: <FolderGit2 className="w-4 h-4" /> },
    { path: '/about', text: 'About', icon: <Code2 className="w-4 h-4" /> },
    { path: '/contact', text: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
              Influenz
            </span>
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
            <Link to="/brands" className={`text-sm font-semibold leading-6 ${isActive('/brands') ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}>
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
              to="/brands"
              onClick={() => setIsMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 ${
                isActive('/brands') ? 'bg-indigo-500/10 text-indigo-400' : ''
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