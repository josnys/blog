import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

function Logo() {
     const { app } = usePage().props;

     return (<div className="text-center text-lg text-gray-500 w-full max-w-xl leading-loose">
          {!app.logo && (<h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-500">JS CMS</h1>)}
          {app.logo && (<img className="w-full" src={app.logo} />)}
     </div>)
}

export default Logo;
