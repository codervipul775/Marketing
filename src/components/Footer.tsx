import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  copyright: string;
  links: { name: string; url: string; }[];
}

const Footer: React.FC<FooterProps> = ({ copyright, links }) => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/NSTSDC', name: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/company/nstsdc', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/nstsdc', name: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Dev Coins', url: '/coins' },
    { name: 'Members', url: '/members' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300 w-screen">
      {/* Main Footer Content */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto px-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-indigo-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
              Marketing
            </span>
          </Link>
          <p className="text-sm text-gray-400 mt-2">
            Empowering developers to build the future through collaboration, innovation, and continuous learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.url}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.url}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              Contact us at:{' '}
              <a 
                href="mailto:contact@devclub.com" 
                className="text-indigo-400 hover:text-indigo-300"
              >
                contact@devclub.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-4">
          <p className="text-sm text-gray-400">
            {copyright}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;