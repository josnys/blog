import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

export default ({ link, text, params }) => {
     const { url } = usePage();
     let _href = params ? route(link, params) : route(link);
     let currentRoute = params ? route().current(link, {url: params}) : route().current(link);
     const isActive = (route().params.url == params && currentRoute);

     return (
          <div className="mb-1">
               <InertiaLink
                    href={_href}
                    className={`block mx-4 mt-2 text-sm text-red-700 transition ease-in-out delay-75 hover:text-gray-900 hover:underline hover:underline-offset-8 hover:decoration-slate-800 capitalize font-semibold lg:mt-0 dark:text-gray-200 dark:hover:text-red-700 dark:hover:decoration-red-700${isActive?' text-gray-900 underline underline-offset-8 decoration-slate-800 dark:text-red-700 dark:decoration-red-700':''}`}>
                    {text}
               </InertiaLink>
          </div>
     );
};
