import React from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Helmet from 'react-helmet';

function Welcome() {
     const { app } = usePage().props;
     return (
          <React.Fragment key="app">
               <Helmet title={app.name} />
               <div className="p-6 min-h-screen flex justify-center items-center">
                    <div className="bg-white p-4 rounded text-center text-lg text-slate-500 shadow-xl w-full max-w-xl leading-loose">
                         Welcome to the <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-500">JS CMS</h1>
                    <InertiaLink className="mr-2 text-xs hover:underline hover:text-blue-500" href={route('login')}>Login</InertiaLink>
                         <InertiaLink className="text-xs hover:underline hover:text-blue-500" href={route('register')}>Register</InertiaLink>
                    </div>
               </div>
          </React.Fragment>
     );
}

export default Welcome;
