import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Artisan Furnishings</h3>
            <p className="text-gray-300 mb-6">
              Crafting exceptional furniture with precision and passion since 1985. Each piece tells a story of craftsmanship and dedication.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Collections</h4>
            <ul className="space-y-3">
              <li><Link to="/collections/living-room" className="text-gray-300 hover:text-white transition-colors">Living Room</Link></li>
              <li><Link to="/collections/bedroom" className="text-gray-300 hover:text-white transition-colors">Bedroom</Link></li>
              <li><Link to="/collections/dining" className="text-gray-300 hover:text-white transition-colors">Dining</Link></li>
              <li><Link to="/collections/office" className="text-gray-300 hover:text-white transition-colors">Office</Link></li>
              <li><Link to="/collections/custom" className="text-gray-300 hover:text-white transition-colors">Custom Furniture</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Craftsman Way, Artisan Valley, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:info@artisanfurnishings.com" className="text-gray-300 hover:text-white transition-colors">
                  info@artisanfurnishings.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8 px-4 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">&copy; {currentYear} Artisan Furnishings. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white mx-3 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white mx-3 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;