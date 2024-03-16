import React, { useState } from 'react';
import ThatLogo from '../images/thar-logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    // Get the target section using its id
    const section = document.getElementById(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav className="p-5 px-4">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="https://github.com/" aria-label="Homepage">
            <img src={ThatLogo} className="h-8" alt="thar-trek" />
          </a>

          <div className={`lg:flex lg:items-center ${isMobileMenuOpen ? 'block' : 'hidden'} header-menu-item right-0 `} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="py-2 text-white relative"><a href="#" className="nav-item py-1.5 mx-3.5 font-bold" onClick={()=>(scrollToSection("homepage"))}>Home</a></li>
              <li className="py-2 text-white relative"><a href="#" className="nav-item py-1.5 mx-3.5 font-bold" onClick={()=>(scrollToSection("explore"))}>Explore Thar</a></li>
              <li className="py-2 text-white relative"><a href="#" className="nav-item py-1.5 mx-3.5 font-bold" onClick={()=>(scrollToSection("features"))}>Features</a></li>
              <li className="py-2 text-white relative"><a href="#" className="nav-item py-1.5 mx-3.5 font-bold" onClick={()=>(scrollToSection("gallery"))}>Gallery</a></li>
            </ul>
          </div>

          <div className="flex items-center">
            <a href="#" className="text-white">Already have an account? </a>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-controls="mobile-menu-2"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
