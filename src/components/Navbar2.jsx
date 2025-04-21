'use client';

import { useState, useEffect, useContext } from 'react';

import { Menus } from "../utils";
/* import Logo from "../public/logo.webp";*/
import { ThemeContext } from '@/components/ThemeProvider';
import Image from 'next/image';
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import Link from 'next/link';


export default function Navbar2() {
    const [mounted, setMounted] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

   /*  useEffect(() => {
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
      }, []); */
    
    
    return (
          <header className={`sticky top-0 z-50 border-b h-16 text-[15px] backdrop-blur supports-[backdrop-filter]:bg-background/60 inset-0 flex-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <nav className={`px-3.5 flex-center-between w-full max-w-7xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'} `}>
            <Link href="/">
              <div className="flex-center gap-x-3 z-[999] relative">
{/*                 <img src={Logo} alt="" className="size-8" />*/} 
                    <Image
                    src="/logo.svg"
                    alt="Aveenir Logo"
                    width={0}
                    height={0}
                    className="w-12 h-12 mr-3" 
                    priority
                    />
                <h3 className="text-2xl font-semibold">Aveenir</h3>
              </div>
            </Link>
    
              <ul className="gap-x-1 custom-flex-center hidden">
                {Menus.map((menu) => (
                  <DesktopMenu menu={menu} key={menu.name} />
                ))}
              </ul>
              <div className="flex-center gap-x-5">
                <button
                  aria-label="sign-in"
                  className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center text-2xl"
                >
                  Sign In
                </button>
                <button 
                        onClick={toggleTheme}
                        className="text-white hover:text-[var(--color-text-light)] transition duration-300"
                        >
                        {isDarkMode ? '🌙' : '☀️'}
                        </button>
                    
                <div className="lg:hidden">
                  <MobMenu Menus={Menus} />
                </div>
              </div>
            </nav>
          </header>
      );
}