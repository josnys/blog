import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import Logo from './Logo';
import DarkToggle from './DarkToggle';
import SiteMenuItem from './SiteMenuItem';

function TopMenu() {
     const { app } = usePage().props;

     return (<nav className="w-full bg-slate-100 shadow dark:bg-slate-800">
          <div className="container px-6 py-4 mx-auto">
               <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                         <div className="w-20 text-xl font-semibold text-gray-700">
                              <a className="" href="/">
                                   <Logo />
                              </a>
                         </div>

                         <div className="flex lg:hidden">
                              <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                   </svg>
                              </button>
                         </div>
                    </div>

                    <div className="hidden -mx-4 lg:flex lg:items-center">
                         <SiteMenuItem link={'site'} text={`Home`} params={null} />
                         {app.menu.length && (<React.Fragment>
                              {app.menu.map(({caption, url}, i) => {
                                   return <SiteMenuItem key={`main-menu-${i}`} link={'site.menu'} text={caption} params={url} />
                              })}
                         </React.Fragment>)}
                         <SiteMenuItem link={'site.about'} text={`About Us`} params={null} />
                         <SiteMenuItem link={'site.contact'} text={`Contact`} params={null} />
                         <DarkToggle />
                    </div>
               </div>
          </div>
     </nav>);
}

export default TopMenu;
