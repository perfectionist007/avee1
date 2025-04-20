'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useContext  } from 'react';
import { JournalBookmark, People, Laptop, ArrowRight, Stack, ArrowDownCircle } from 'react-bootstrap-icons';
import { ThemeContext } from '@/components/ThemeProvider';


export default function Home() {
  const router = useRouter();
  const {isDarkMode } = useContext(ThemeContext);

  const BACKEND = process.env.NEXT_PUBLIC_BACKEND;

  // Categories to display
  const categories = [
    'Fiction',
    'Non-Fiction',
    'Science Fiction',
    'Mystery',
    'Romance'
  ];
  
    useEffect(() => {
      
    // Helper function to initialize categories after fetching data
    const initializeCategories = (booksData) => {
      // Get only categories that have books
      const availableCategories = categories.filter(cat => booksData[cat]?.length > 0);
      
      if (availableCategories.length > 0) {
        // Set active category to the first one that has books
        const firstCategoryWithBooks = availableCategories[0];
        setActiveCategory(firstCategoryWithBooks);
        // Also set category index to match
        setCategoryIndex(categories.indexOf(firstCategoryWithBooks));
      } else {
        // If no categories have books, set noBooks to true
        setNoBooks(true);
      }
    };
      }, []);
  
  return (
<main className={`${isDarkMode ? 'bg-black' : 'bg-white'}`}>
{/* Hero Section - Minimalist Book Aesthetic */}
      <section className={`relative min-h-[75vh] flex items-center overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        {/* Animated patterns - reduced count for better performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full h-full bg-center bg-cover bg-no-repeat opacity-70"
            style={{ backgroundImage: "url('/img/rig.gif')" }}
            >
          </div>
         </div>
{/* START SLIDER HERE */}
        <div className="container mx-auto px-6 py-8 md:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3 space-y-5">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-wider leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
                AVEE<span className="inline-block relative">NIR
                  <div className="h-1 w-full bottom-1"></div>
                </span>
              </h1>
              
<h2 className={`text-lg md:text-xl font-light max-w-md ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Your home to all the technical solutions
              </h2>
              
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push('/catalog')}
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-900 transition-all duration-300 rounded-none"
                >
                  <span>BROWSE</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>
                
                <button
                  onClick={() => {
                    const section = document.getElementById('featured-books');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black border border-black font-semibold hover:bg-gray-100 transition-all duration-300 rounded-none"
                >
                  <span>DISCOVER</span>
                  <ArrowDownCircle />
                </button>
              </div>
            </div>
            
           
          </div>
        </div>
        {/* END SLIDER HERE */}
        
        <div className="bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white to-transparent"></div>
      </section>

      {/* Features Section - Aesthetic Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-tight text-center">
            The Aveenir Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {[
              {
                icon: <Stack className="text-3xl" />,
                title: "Curated Collection",
                desc: "Carefully selected titles across genres for quality reading experiences."
              },
              {
                icon: <People className="text-3xl" />,
                title: "Reader Community",
                desc: "Connect with fellow book enthusiasts and share recommendations."
              },
              {
                icon: <Laptop className="text-3xl" />,
                title: "Digital First",
                desc: "Read anywhere with our responsive platform optimized for all devices."
              },
              {
                icon: <JournalBookmark className="text-3xl" />,
                title: "Personal Library",
                desc: "Build your own collection of favorites with custom reading lists."
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 md:p-12 bg-white flex flex-col group hover:bg-black hover:text-white transition-colors duration-500">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-light max-w-2xl mx-auto mb-6">
            Redefining the digital reading experience, one page at a time.
          </p>
          <div className="inline-flex items-center bg-white text-black px-6 py-3 font-medium">
            <span>© Aveenir {new Date().getFullYear()}</span>
          </div>
        </div>
      </section>
    </main>
  );
}