import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ scrollToSection, activeSection, isDarkMode, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = ['about', 'timeline', 'projects', 'publications', 'contact'];

  return (
    <nav className="nav">
      <div className="nav-container">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <ul className="nav-links">
          {sections.map((item) => (
            <li key={item}>
              <span
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </li>
          ))}
        </ul>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="mobile-menu open">
            <ul className="mobile-nav-links">
              {sections.map((item) => (
                <li key={item}>
                  <span
                    className="nav-link"
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;