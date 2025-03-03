import React from 'react';
import { Code2, Users, Trophy, Home, UserPlus, FolderGit2 } from 'lucide-react';
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
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', text: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/events', text: 'Events', icon: <FolderGit2 className="w-4 h-4" /> },
    { path: '/coins', text: 'Dev Coins', icon: <Code2 className="w-4 h-4" /> },
    { path: '/members', text: 'Members', icon: <Users className="w-4 h-4" /> },
    { path: '/leaderboard', text: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
    { path: 'https://recruitment.nstsdc.org/', text: 'Recruitment', icon: <UserPlus className="w-4 h-4" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-indigo-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
              Marketing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  icon={link.icon}
                  text={link.text}
                  active={isActive(link.path)}
                />
              ))}
            </ul>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500/10 focus:outline-none"
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-indigo-500/10 text-indigo-400'
                    : 'text-gray-300 hover:bg-indigo-500/5'
                }`}
              >
                {link.icon}
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;