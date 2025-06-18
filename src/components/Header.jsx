import React, { useState, Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Transition, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vacaturesOpen, setVacaturesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current path is active
  const isActive = (path) => location.pathname === path;

  const navigationItems = [
    { name: 'Vacatures', path: '/vacatures', hasDropdown: true },
    { name: 'Offerte Aanvragen', path: '/offerte' },
    { name: 'Onze diensten', path: '/diensten' },
    { name: 'Over Ons', path: '/over' },
    { name: 'Nieuwsbrief', path: '/nieuwsbrief' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-[#4c4191] text-white flex justify-end items-center px-5 py-3 text-sm gap-3">
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-xs">Volg ons:</span>
          <a 
            href="#" 
            className="hover:text-yellow-400 transition-colors duration-200 p-1" 
            aria-label="Facebook"
          >
            <FaFacebookF className="w-3 h-3" />
          </a>
          <a 
            href="#" 
            className="hover:text-yellow-400 transition-colors duration-200 p-1" 
            aria-label="Instagram"
          >
            <FaInstagram className="w-3 h-3" />
          </a>
        </div>
        <div className="w-px h-4 bg-white/30 mx-2"></div>
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Nederlands" className="hover:scale-110 transition-transform duration-200">
            <img src="/nl_flag.png" alt="NL" className="w-6 h-4 rounded-sm" />
          </a>
          <a href="#" aria-label="English" className="hover:scale-110 transition-transform duration-200">
            <img src="/uk_flag.png" alt="EN" className="w-6 h-4 rounded-sm" />
          </a>
          <a href="#" aria-label="Español" className="hover:scale-110 transition-transform duration-200">
            <img src="/es_flag.png" alt="ES" className="w-6 h-4 rounded-sm" />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-0.5 transition-transform duration-200 hover:scale-105">
            <span className="sr-only">Great Jobs</span>
            <img
              alt="Great Jobs Curaçao logo"
              src="/greatjobs-logo.png"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-[#4c4191] transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationItems.map((item) => (
            item.hasDropdown ? (
              <Menu as="div" className="relative inline-block text-left" key={item.name}>
                <div>
                  <MenuButton className={`inline-flex items-center gap-x-1.5 text-sm font-semibold transition-all duration-200 hover:text-[#4c4191] relative group ${
                    isActive(item.path) ? 'text-[#4c4191]' : 'text-gray-900'
                  }`}>
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4 text-gray-500 group-hover:text-[#4c4191] transition-colors duration-200" />
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4c4191] transition-all duration-300 group-hover:w-full ${
                      isActive(item.path) ? 'w-full' : ''
                    }`}></span>
                  </MenuButton>
                </div>

                <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none border border-gray-100">
                  <div className="py-2">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/vacatures"
                          className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                            active ? 'bg-[#4c4191]/5 text-[#4c4191]' : 'text-gray-700'
                          }`}
                        >
                          🇨🇼 Vacatures Curaçao
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/vacatures"
                          className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                            active ? 'bg-[#4c4191]/5 text-[#4c4191]' : 'text-gray-700'
                          }`}
                        >
                          🇳🇱 Vacatures Nederland
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-semibold transition-all duration-200 hover:text-[#4c4191] relative group ${
                  isActive(item.path) ? 'text-[#4c4191]' : 'text-gray-900'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4c4191] transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            )
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            to="/inschrijven" 
            className="rounded-full bg-[#4c4191] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#3d357a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4c4191] transition-all duration-200 transform hover:scale-105"
          >
            Online Inschrijven
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-0 z-50 bg-white">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Great Jobs</span>
                <img
                  alt="Great Jobs Curaçao logo"
                  src="/greatjobs-logo.png"
                  className="h-16 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-[#4c4191] transition-colors duration-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {/* Mobile Vacatures Submenu */}
                  <div>
                    <button
                      onClick={() => setVacaturesOpen(!vacaturesOpen)}
                      className="w-full flex justify-between items-center px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                    >
                      Vacatures
                      <ChevronDownIcon
                        className={`h-5 w-5 transform transition-transform duration-200 ${vacaturesOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {vacaturesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        <Link 
                          to="/vacatures" 
                          className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          🇨🇼 Vacatures Curaçao
                        </Link>
                        <Link 
                          to="/vacatures" 
                          className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          🇳🇱 Vacatures Nederland
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Other menu items */}
                  {navigationItems.slice(1).map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-4 text-lg font-semibold hover:bg-gray-50 rounded-xl transition-colors duration-200 ${
                        isActive(item.path) ? 'text-[#4c4191] bg-[#4c4191]/5' : 'text-gray-900'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA & Social */}
              <div className="border-t border-gray-100 p-6 space-y-6">
                <Link 
                  to="/inschrijven" 
                  className="block w-full text-center rounded-full bg-[#4c4191] px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#3d357a] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Online Inschrijven
                </Link>
                
                {/* Social Media */}
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-[#4c4191] transition-colors duration-200">
                    <FaFacebookF className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#4c4191] transition-colors duration-200">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;