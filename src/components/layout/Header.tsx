import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary-500" />
            <span className="text-xl font-bold text-gray-900">SESToolbox</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Home
            </Link>
            <Link
              to="/modeling"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              SES Modeling
            </Link>
            <Link
              to="/visualization"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              Visualization
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/modeling"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                SES Modeling
              </Link>
              <Link
                to="/visualization"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Visualization
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
