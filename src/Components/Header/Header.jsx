import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../../assets/image.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT: Logo / Image */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={logoImage}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm sm:text-base"
              style={{ display: 'none' }}
            >
              R
            </div>
            <span className="text-sm sm:text-lg font-bold text-green-400 hidden sm:block">
              My React Router Blog
            </span>
            <span className="text-sm font-bold text-green-400 sm:hidden">
              Blog
            </span>
          </div>
          
          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-6">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `${isActive ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors duration-200 text-sm font-medium`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `${isActive ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors duration-200 text-sm font-medium`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/lazyLoad" 
              className={({isActive}) => 
                `${isActive ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors duration-200 text-sm font-medium`
              }
            >
              Lazy-Loading
            </NavLink>
            <NavLink 
              to="/dynamicRoutes" 
              className={({isActive}) => 
                `${isActive ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors duration-200 text-sm font-medium`
              }
            >
              Dynamic-Routes
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `${isActive ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors duration-200 text-sm font-medium`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/notFound" 
              className={({isActive}) => 
                `${isActive ? "text-green-400" : "text-white"} hover:text-green-400 transition-colors duration-200 text-sm font-medium`
              }
            >
              Error 404
            </NavLink>
          </nav>
          
          {/* RIGHT: Desktop Buttons + Search */}
          <div className="hidden md:flex items-center space-x-3">
            <input
              type="text"
              placeholder="DummySearchBox"
              className="px-3 py-1.5 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700 transition-colors duration-200 w-32 lg:w-40 placeholder-gray-300"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200">
              Signup
            </button>
          </div>

          {/* Mobile Search (visible on tablet) */}
          <div className="hidden sm:flex md:hidden items-center space-x-2">
            <input
              type="text"
              placeholder="DummySearchBox"
              className="px-2 py-1 rounded bg-gray-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-green-400 w-24 placeholder-gray-300"
            />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-400 focus:outline-none focus:text-green-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-b-lg shadow-lg">
              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                <NavLink 
                  to="/" 
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `${isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `${isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/lazyLoad" 
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `${isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                >
                  Lazy-Loading
                </NavLink>
                <NavLink 
                  to="/dynamicRoutes" 
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `${isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                >
                  Dynamic-Routes
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `${isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                >
                  Contact
                </NavLink>
                <NavLink 
                  to="/notFound" 
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `${isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                >
                  Error 404
                </NavLink>
              </div>
              
              {/* Mobile Search and Buttons */}
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="DummySearchBox"
                    className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700 transition-colors duration-200 placeholder-gray-300"
                  />
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200">
                      Login
                    </button>
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200">
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
