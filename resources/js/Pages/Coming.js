import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';
import Logo from '@/Shared/Site/Logo';

function Coming() {
     const { app, auth } = usePage().props;
     return (
          <React.Fragment key="app">
               <Helmet title={app.name} />
               <div className="p-6 min-h-screen flex justify-center items-center">
                    <div className="bg-white p-6 rounded text-center text-lg text-slate-500 shadow-xl w-full max-w-xl leading-loose">
                         <div className="w-1/3 mx-auto">
                              <Logo />
                         </div>
                         <h1 className="text-5xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-blue-500">Coming Soon</h1>
                         <p>Come back later 😊</p>
                    </div>
               </div>
          </React.Fragment>
     );
}

export default Coming;
