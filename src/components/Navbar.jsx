'use client';

import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/components/ThemeProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PersonFill, JournalBookmark, PlusCircle, List, X } from 'react-bootstrap-icons';
import { AuthContext } from '@/components/context/AuthContext';
import Image from 'next/image';


export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* START: Mega Menu */

  const [servicesOpen, setServicesOpen] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setServicesOpen(false), 200);
  };


  /* END: Mega Menu */

  useEffect(() => {
    setMounted(true);
    
    const checkAuth = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        setIsLoggedIn(true);
        setUserRole(user.role);
        setUserName(user);
      } else {
        setIsLoggedIn(false);
        setUserRole(null);
      }
    };

    checkAuth();

    window.addEventListener('storage', checkAuth);
    window.addEventListener('loginStateChange', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('loginStateChange', checkAuth);
    };
  }, []);

  const handleLogout = async () => {
    logout();
    
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('loginStateChange'));

    router.refresh();
    setTimeout(() => router.push('/login'), 50);
    setMobileMenuOpen(false);
  };
  if (!mounted) return null; // or a loader/spinner

  return (
/*     <nav className="bg-[var(--color-primary)] shadow-md py-4 sticky top-0 z-50">*/    
<nav className={`shadow-md py-4 sticky top-0 z-50 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
  <div className="container mx-auto px-4 flex justify-between items-center">
    {/* LEFT SIDE NAVIGATION */}
    <div className="flex items-center space-x-6">
      <Link href="/" className="text-2xl font-bold text-black dark:text-white flex items-center">
        <Image
        src="/logo.svg"
        alt="Aveenir Logo"
        width={0}
        height={0}
        className="w-12 h-12 mr-3" 
        priority
        />
<span className={isDarkMode ? 'text-white' : 'text-black'}>Avee</span>
<span className={isDarkMode ? 'text-white' : 'text-black'}>nir</span>
      </Link>
      <button onClick={() => router.push('/about')} className={isDarkMode ? 'text-white' : 'text-black'}>
       About Us
    </button>
     <div 
        className="relative hidden md:inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
    <button className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
      Services
        </button>

        {servicesOpen && (
          <div className="absolute left-0 mt-2 bg-white text-black p-6 rounded-lg shadow-lg z-50 w-[500px] flex justify-between">
            {/* Left section */}
            <div className="flex flex-col space-y-2">
              <Link href="/service" className="hover:text-[var(--color-primary)]">Submenu 1</Link>
              <Link href="/service" className="hover:text-[var(--color-primary)]">Submenu 2</Link>
              <Link href="/service" className="hover:text-[var(--color-primary)]">Submenu 3</Link>
            </div>
            {/* Right section */}
            <div className="flex flex-col space-y-2">
              <Link href="/service" className="hover:text-[var(--color-primary)]">Submenu 4</Link>
              <Link href="/service" className="hover:text-[var(--color-primary)]">Submenu 5</Link>
              <Link href="/service" className="hover:text-[var(--color-primary)]">Submenu 6</Link>
            </div>
          </div>
        )}
      </div>
      </div>

        {/* Mobile menu button - only visible on small screens */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Desktop menu - unchanged from original */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              {userName && (
                <Link href="/my-library" className="text-white hover:text-[var(--color-text-light)] flex items-center">
                  <PersonFill className="mr-1" /> {userName.firstname}'s Library
                </Link>
              )}
              {userRole === 'teacher' && (
                <Link href="/add-book" className="bg-[var(--color-text-secondary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-text-light)] hover:text-white flex items-center transition duration-300">
                  <PlusCircle className="mr-1" /> Add Content
                </Link>
              )}
              <button 
                onClick={handleLogout} 
                className="text-white hover:text-[red] focus:outline-none transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                Login
              </Link>
              
              </>
          )}
          {mounted && (
            <button 
              onClick={toggleTheme}
              className="text-white hover:text-[var(--color-text-light)] transition duration-300"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu - only visible when toggled on small screens */}
      {mobileMenuOpen && (
  <div className="md:hidden bg-[var(--color-primary)] border-t border-[rgba(255,255,255,0.1)] mt-4 py-4 fixed top-[60px] w-full left-0 shadow-md z-40">
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-4">

        {/* Home, About, Services for mobile */}
        <Link 
          href="/" 
          className="text-white hover:text-[var(--color-text-light)] transition duration-300 block py-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-white hover:text-[var(--color-text-light)] transition duration-300 block py-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/service" 
          className="text-white hover:text-[var(--color-text-light)] transition duration-300 block py-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          Services
        </Link>

        {/* Auth-based links (already present) */}
        {isLoggedIn ? (
          <>
            {userName && (
              <Link 
                href="/my-library" 
                className="text-white hover:text-[var(--color-text-light)] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PersonFill className="mr-2" /> {userName.firstname}'s Library
              </Link>
            )}
            {userRole === 'teacher' && (
              <Link 
                href="/add-book" 
                className="bg-[var(--color-text-secondary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-text-light)] hover:text-white flex items-center transition duration-300 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PlusCircle className="mr-2" /> Add Content
              </Link>
            )}
            <button 
              onClick={handleLogout} 
              className="text-white hover:text-[red] focus:outline-none transition duration-300 text-left"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              href="/login" 
              className="text-white hover:text-[var(--color-text-light)] transition duration-300 block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-[var(--color-text-secondary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-text-light)] hover:text-white transition duration-300 inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  </div>
)}

    </nav>
  );
}