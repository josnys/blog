import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import Logo from '@/Shared/Site/Logo';

function Welcome() {
     const { app, auth } = usePage().props;
     return (
          <React.Fragment key="app">
               <Helmet title={app.name} />
               <div className="p-6 min-h-screen flex justify-center items-center">
                    <div className="bg-white p-4 rounded text-center text-lg text-slate-500 shadow-xl w-full max-w-xl leading-loose">
                         <div className="w-1/3 mx-auto">
                              <Logo />
                         </div>
                         Welcome to the <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-500">JS CMS Site</h1>
                    {!auth.user && (<InertiaLink className="mr-2 text-xs hover:underline hover:text-blue-500" href={route('login')}>Login</InertiaLink>)}
                         {!auth.user && (<InertiaLink className="text-xs hover:underline hover:text-blue-500" href={route('register')}>Register</InertiaLink>)}
                         {auth.user && (<InertiaLink className="text-xs hover:underline hover:text-blue-500" href={route('admin.home')}>Dashboard</InertiaLink>)}
                    </div>
               </div>
          </React.Fragment>
     );
}

export default Welcome;
