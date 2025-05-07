
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-artistic text-white hover:text-primary transition-colors"
        >
          <span className="text-gradient font-bold">MagicMoon</span> Tattoo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Início
          </Link>
          <Link 
            to="/portfolio" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Portfólio
          </Link>
          <Link 
            to="/sobre" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Sobre
          </Link>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/agendar">Agendar Sessão</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfólio
            </Link>
            <Link
              to="/sobre"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Button 
              asChild 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/agendar">Agendar Sessão</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
