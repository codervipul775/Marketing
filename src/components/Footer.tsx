import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  copyright: string;
  links: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/influenz-896756356/",
      name: "LinkedIn"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/home",
      name: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "About Us", url: "/about" },
    { name: "Events", url: "/events" },
    { name: "Contact Us", url: "/contact" }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://media-hosting.imagekit.io//ec84fa2887bd4175/Influenz%20Logo.png?Expires=1837012577&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Dn8rXLG2n2uHvuyVmag7cC4Po70RgnDStbMu2oweeJCahLVMIwgiBbNUvBPhaN3lIhZdDsOUX5jkqFUmB2hXyn6RzayHX7F~PP6QXJJHla5il831PLLQup1bm6WqQeEw6hazbwPvmZW~9oUWn-lVvZqfcFFH1eWTF5Y7BLhVSfD5aLTwrmQZ-ENgyy9c1g2T2UbsbMwEDNinRPgFTWJMxfKKp12OPB2cOZBUIM9JaRvNfhy6ZVp1eZVxVTI-DC9wXg099XpnqTC~im4j0EJXMfYABsCY74bkenoKQvwj3cCcgkvVSjyM6zVI~3twAuncMcUDoSSd4bG7bHOfz2HI0Q__"
                alt="Influenz Logo"
                className="h-8" // Adjust size as needed
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
                Influenz
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Elevate your influence with INFLUENZ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
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

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-4">
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
                Contact us at:{" "}
                <a
                  href={`mailto:partnerships@influenz.co.in`}
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  partnerships@influenz.co.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Influenz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
