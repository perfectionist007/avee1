'use client';
import { useContext } from 'react';
import { ArrowRight, ArrowDownCircle } from 'react-bootstrap-icons';

import { ThemeContext } from '@/components/ThemeProvider';

export default function Aboutus() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
     <section className={`relative min-h-[85vh] flex items-center overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            {/* Animated patterns - reduced count for better performance */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="w-full h-full bg-center bg-cover bg-no-repeat opacity-70"
                style={{ backgroundImage: "url('/img/about.webp')" }}
                >
              </div>
             </div>
    {/* START SLIDER HERE */}
            <div className="container mx-auto px-6 py-8 md:py-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-3 space-y-5">
                  <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-wider leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    ABOUT <span className="inline-block relative">US
                      <div className="absolute h-1 w-full bottom-1"></div>
                    </span>
                  </h1>
                  
    <h2 className={`text-lg md:text-xl font-light max-w-md ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    Learn about Aveenir
                  </h2>
                  
                  {/* <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      className="group flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-900 transition-all duration-300 rounded-none"
                    >
                      <span>BROWSE</span>
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                    </button>
                    
                    <button
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black border border-black font-semibold hover:bg-gray-100 transition-all duration-300 rounded-none"
                    >
                      <span>DISCOVER</span>
                      <ArrowDownCircle />
                    </button>
                  </div> */}
                </div>
                
               
              </div>
            </div>
            {/* END SLIDER HERE */}
            
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white to-transparent"></div>
          </section>
    
  );
}
