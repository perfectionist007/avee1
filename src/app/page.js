'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useContext  } from 'react';
import { JournalBookmark, People, Laptop, ArrowRight, Stack, ArrowDownCircle } from 'react-bootstrap-icons';
import { ThemeContext } from '@/components/ThemeProvider';
import ImageCarousel from "@/components/image-carousel"
import ProductSlider from "@/components/product-slider"
import { Card, CardContent } from "@/components/ui/card"
/* import ClientSlider from "@/components/client-slider" */
import ClientFluidGrid from "@/components/client-fluid-grid"


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
        <ImageCarousel />

{/* Hero Section - Minimalist Book Aesthetic */}
      {/* <section className={`relative min-h-[75vh] flex items-center overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full h-full bg-center bg-cover bg-no-repeat opacity-70"
            style={{ backgroundImage: "url('/img/rig.gif')" }}
            >
          </div>
         </div>
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
        
        <div className="bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white to-transparent"></div>
      </section> */}

      {/* Features Section - Aesthetic Grid */}
      <section className={`py-24 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-16 uppercase tracking-tight text-center">
            The Aveenir Experience
          </h2>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {[
              {
                icon: <Stack className="text-3xl" />,
                title: "Website Development",
                desc: "We provide an affordable, fast-loading, compatible, and highly secure website service"
              },
              {
                icon: <People className="text-3xl" />,
                title: "ERP Development",
                desc: "We offer fully customized, user-friendly, efficient, and secure custom software to"
              },
              ,
              {
                icon: <People className="text-3xl" />,
                title: "Database Management",
                desc: "We offer Development and maintainence of ERP and Database"
              },
              {
                icon: <Laptop className="text-3xl" />,
                title: "Graphical Solution",
                desc: "We offer high-quality, visually-appealing, and professional graphics design services."
              },
              {
                icon: <JournalBookmark className="text-3xl" />,
                title: "Digital Marketing",
                desc: "We provide comprehensive digital marketing services to help you achieve your business goals."
              },
              {
                icon: <Laptop className="text-3xl" />,
                title: "Digital Marketing Solution",
                desc: "We offer a variety of mobile digital marketing solutions, across all platform, and hybrid options,"
              },
              {
                icon: <JournalBookmark className="text-3xl" />,
                title: "Videography & Photography Support",
                desc: "We provide expert photography and videography services that capture stunning"
              },
              {
                icon: <JournalBookmark className="text-3xl" />,
                title: "VFX & Animation",
                desc: "We offer state-of-the-art visual effects and animation services to bring your ideas to life."
              }
            ].map((feature, i) => (
              <div key={i} className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}p-10 md:p-12 flex flex-col group hover:bg-black hover:text-white transition-colors duration-500`}>
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl sm:text-sm md:text-xl lg:text-2xl font-bold mb-4 ">{feature.title}</h3>
                <p className={`text-xl sm:text-xs md:text-sm lg:text-xl transition-colors duration-500`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <ProductSlider/>
      </section>

      <section>
        <ClientFluidGrid/>
      </section>

      {/* Stats Section */}
      <section className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} container mx-auto px-4 py-34`}>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { label: "Active Users", value: "10,000+", icon: "👥" },
            { label: "Transactions", value: "$2M+", icon: "💰" },
            { label: "Success Rate", value: "99.8%", icon: "📈" },
            { label: "Verified Sellers", value: "2,500+", icon: "✅" },
          ].map((stat, index) => (
            <Card key={index} className="hover-card-effect overflow-hidden border-none text-center">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">{stat.icon}</div>
                <h3 className="mb-1 text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}