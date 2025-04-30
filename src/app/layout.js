// ./src/app/layout.js (server component)

import './globals.css';
import { AuthProvider } from '../components/context/AuthContext';
/* import Navbar from '@/components/Navbar'; */
import Navbar2 from '@/components/Navbar2';
import { TransitionProvider } from '@/components/PageTransitionProvider';
import ClientWrapper from "@/components/ClientWrapper";


/* import PageTransitionWrapper from '@/components/PageTransitionWrapper';
 */

import ThemeProvider from '@/components/ThemeProvider'; // we'll create this

export const metadata = {
  title: 'Aveenir | Best IT Development and Service Provider',
  description:
    'Aveenir is the best platform to get all your IT needs under one roof',
  keywords:
    'web development, digital marketing, mobile app development, cyber security',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--font-torcao)' }}>
       <ThemeProvider>
         <AuthProvider>
            <Navbar2/>
{/*             <TransitionProvider>
 */}            <ClientWrapper /> {/* Place ProgressBar here */}
                  <main className="pt-0">{children}</main>
{/*               </TransitionProvider>
 */}          </AuthProvider>
        </ThemeProvider>

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
      </body>
    </html>
  );
}
