import React from 'react';

function Hero() {
     return (<div className="flex w-full bg-center bg-cover h-[32rem]" style={{backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`}}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
             <div className="text-center">
                 <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Eveything to be <span className="text-red-400 underline">Productive</span></h1>
                 <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-red-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
             </div>
        </div>
     </div>);
}
export default Hero;
