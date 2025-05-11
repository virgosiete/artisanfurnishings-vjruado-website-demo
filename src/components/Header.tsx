import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  
  const headerClasses = clsx(
    'fixed w-full z-50 transition-all duration-300',
    {
      'bg-white shadow-md': isScrolled || !isHomePage,
      'bg-transparent': !isScrolled && isHomePage,
    }
  );

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    clsx(
      'relative inline-block px-4 py-2 transition-colors duration-200',
      {
        'text-primary-800 font-medium': isActive,
        'text-gray-700 hover:text-primary-800': !isActive && (isScrolled || !isHomePage),
        'text-white hover:text-white/80': !isActive && !isScrolled && isHomePage
      }
    );

  const logoTextClass = clsx({
    'text-white': !isScrolled && isHomePage,
    'text-primary-900': isScrolled || !isHomePage
  });

  const navLinkWithDropdown = clsx(
    'relative flex items-center gap-1 cursor-pointer px-4 py-2 transition-colors duration-200 group',
    {
      'text-gray-700 hover:text-primary-800': isScrolled || !isHomePage,
      'text-white hover:text-white/80': !isScrolled && isHomePage
    }
  );

  const dropdownMenuClasses = clsx(
    'absolute mt-1 left-0 bg-white shadow-md py-2 min-w-[200px] z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-2 group-hover:translate-y-0'
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-xl font-semibold ${logoTextClass}`}>
              Artisan Furnishings
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            
            {/* Collections dropdown */}
            <div className="group">
              <div className={navLinkWithDropdown}>
                <span>Collections</span>
                <ChevronDown size={16} />
                
                <div className={dropdownMenuClasses}>
                  <Link to="/collections/living-room" className="block px-4 py-2 hover:bg-gray-100">
                    Living Room
                  </Link>
                  <Link to="/collections/bedroom" className="block px-4 py-2 hover:bg-gray-100">
                    Bedroom
                  </Link>
                  <Link to="/collections/dining" className="block px-4 py-2 hover:bg-gray-100">
                    Dining
                  </Link>
                  <Link to="/collections/office" className="block px-4 py-2 hover:bg-gray-100">
                    Office
                  </Link>
                  <Link to="/collections/custom" className="block px-4 py-2 hover:bg-gray-100">
                    Custom Furniture
                  </Link>
                  <Link to="/collections" className="block px-4 py-2 hover:bg-gray-100 font-medium">
                    View All Collections
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink to="/process" className={navLinkClasses}>Process</NavLink>
            <NavLink to="/gallery" className={navLinkClasses}>Gallery</NavLink>
            <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            <NavLink to="/request-quote" className="btn btn-primary ml-4">Request Quote</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className={!isScrolled && isHomePage ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu size={24} className={!isScrolled && isHomePage ? 'text-white' : 'text-gray-800'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block py-2">Home</Link>
            <Link to="/about" className="block py-2">About</Link>
            <div>
              <div 
                className="flex items-center justify-between py-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Collections</span>
                <ChevronDown size={16} className={dropdownOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </div>
              {dropdownOpen && (
                <div className="pl-4 pt-2 border-l-2 border-gray-200 space-y-2">
                  <Link to="/collections/living-room" className="block py-1">Living Room</Link>
                  <Link to="/collections/bedroom" className="block py-1">Bedroom</Link>
                  <Link to="/collections/dining" className="block py-1">Dining</Link>
                  <Link to="/collections/office" className="block py-1">Office</Link>
                  <Link to="/collections/custom" className="block py-1">Custom Furniture</Link>
                  <Link to="/collections" className="block py-1 font-medium">View All Collections</Link>
                </div>
              )}
            </div>
            <Link to="/process" className="block py-2">Process</Link>
            <Link to="/gallery" className="block py-2">Gallery</Link>
            <Link to="/blog" className="block py-2">Blog</Link>
            <Link to="/contact" className="block py-2">Contact</Link>
            <Link to="/request-quote" className="btn btn-primary w-full text-center mt-6">Request Quote</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;