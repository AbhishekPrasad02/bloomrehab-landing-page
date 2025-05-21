
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Technology', href: '#solution' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#endorsements' },
    { name: 'About Us', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center">
          <span className="font-heading text-2xl font-bold text-bloom-700">
            Bloom<span className="text-purple-600">Rehab</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-gray-700 hover:text-bloom-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-bloom-600 hover:bg-bloom-700 text-white font-medium"
          >
            Request a Demo
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.name} className="px-4 py-2">
                <a 
                  href={item.href}
                  className="text-gray-700 hover:text-bloom-600 font-medium block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="px-4 py-2 mt-2">
              <Button 
                className="bg-bloom-600 hover:bg-bloom-700 text-white font-medium w-full"
              >
                Request a Demo
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
