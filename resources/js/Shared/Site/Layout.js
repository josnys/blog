import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import FlashMessages from '@/Shared/FlashMessages';
import TopMenu from '@/Shared/Site/TopMenu';
import Hero from '@/Shared/Site/Hero';
import { ThemeProvider } from './ThemeContext';
import Footer from './Footer';

export default function Layout({ children, header, showHero }) {
     const { app } = usePage().props;

     return (
          <React.Fragment key="layout">
               <Helmet titleTemplate={`%s | ${app.name}`} />
               <ThemeProvider>
                    <div className="flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
                         <div className="flex flex-col">
                              <div className="md:flex">
                                   <header className="w-full">
                                        <TopMenu />
                                        {showHero && (<Hero />)}
                                   </header>
                              </div>
                              <div className="flex flex-grow">
                                   <div className="w-full">
                                        <FlashMessages />
                                        {children}
                                   </div>
                              </div>
                              <Footer />
                         </div>
                    </div>
               </ThemeProvider>
          </React.Fragment>
     );
}
