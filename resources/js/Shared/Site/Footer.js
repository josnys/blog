import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

function Footer() {
     const { app } = usePage().props;

     const iconSun = classNames('w-8 h-8', {
          'text-slate-300 fill-current': false,
          'text-slate-300 hover:text-red-700 focus:text-red-700 fill-current': true
     });

     return (<footer className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-8 mx-auto">
               <div className="text-center">
                    <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">{app.name}</a>
                    <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                         {app.twitter && (<a className="mx-2" href={`https://twitter.com/${app.twitter}`} aria-label="Twitter">
                              <Icon name="twitter" className={iconSun} />
                         </a>)}
                         {app.facebook && (<a className="mx-2" href={`https://facebook.com/${app.facebook}`} aria-label="Facebook">
                              <Icon name="facebook" className={iconSun} />
                         </a>)}
                         {app.instagram && (<a className="mx-2" href={`https://instagram.com/${app.instagram}`} aria-label="Instagram">
                              <Icon name="instagram" className={iconSun} />
                         </a>)}
                    </div>
               </div>
               <hr className="my-10 border-gray-200 dark:border-gray-700" />
               <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-400">© Copyright {app.year}. All Rights Reserved.</p>
                    <div className="flex mt-3 -mx-2 sm:mt-0">
                         <a href="https://twitter.com/josnys" target="_blank" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">Developped by Josny Severe</a>
                    </div>
               </div>
          </div>
     </footer>);
}

export default Footer;
