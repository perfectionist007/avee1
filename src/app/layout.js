// ./src/app/layout.js (server component)

import './globals.css';
import { AuthProvider } from '../components/context/AuthContext';
/* import Navbar from '@/components/Navbar'; */
import Navbar2 from '@/components/Navbar2';
import { TransitionProvider } from '@/components/PageTransitionProvider';

/* import PageTransitionWrapper from '@/components/PageTransitionWrapper';
 */

import ThemeProvider from '@/components/ThemeProvider'; // we'll create this

export const metadata = {
  title: 'Aveenir | Your Digital Educational Library',
  description:
    'Aveenir is an educational platform for students and teachers to discover, read, and learn with our extensive collection of digital books.',
  keywords:
    'books, education, digital library, learning, reading, students, teachers',
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
            <TransitionProvider>
            <main className="pt-0">{children}</main>
            </TransitionProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
