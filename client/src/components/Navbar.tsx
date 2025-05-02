import { useState } from "react";
import logoDark from "/assets/logo/logo_dark.svg";
import logo from "/assets/logo/logo.svg";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav
      className={`fixed w-full backdrop-blur-sm z-50 shadow-sm ${
        theme === "light" ? "bg-white/80" : "bg-dark-surface"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-bold text-gray-900 dark:text-dark-text">
              {theme === "light" ? (
                <img src={logoDark} alt="logo" className="w-10 h-10" />
              ) : (
                <img src={logo} alt="logo" className="w-10 h-10" />
              )}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="nav-link dark:text-gray-300 dark:hover:text-white"
            >
              ABOUT ME
            </a>
            <a
              href="#projects"
              className="nav-link dark:text-gray-300 dark:hover:text-white"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="nav-link dark:text-gray-300 dark:hover:text-white"
            >
              CONTACT
            </a>
            <a
              href="#blog"
              className="nav-link dark:text-gray-300 dark:hover:text-white"
            >
              BLOG
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-surface">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="nav-link block px-3 py-2 dark:text-gray-300 dark:hover:text-white"
            >
              ABOUT ME
            </a>
            <a
              href="#projects"
              className="nav-link block px-3 py-2 dark:text-gray-300 dark:hover:text-white"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="nav-link block px-3 py-2 dark:text-gray-300 dark:hover:text-white"
            >
              CONTACT
            </a>
            <a
              href="#blog"
              className="nav-link block px-3 py-2 dark:text-gray-300 dark:hover:text-white"
            >
              BLOG
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
