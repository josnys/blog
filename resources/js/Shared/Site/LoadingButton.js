import React from 'react';
import { Offline, Online } from "react-detect-offline";
import Indicator from '../Indicator';

export default ({ loading, className, children, ...props }) => {
     return (
          <React.Fragment>
               <Online>
                    <button
                         disabled={loading}
                         className={`focus:outline-none flex items-center ${className} ${!loading?'block':'hidden'}`}
                         {...props}
                         >
                         {children}
                    </button>
                    <div className={`focus:outline-none flex items-center ${className} ${loading?'block':'hidden'}`}>
                         <Indicator color="gray" size="3" />
                         Wait a minute..
                    </div>
               </Online>
               <Offline>
                    <div className={`inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest animate-pulse`}>
                         Please, connect to the internet to continue
                    </div>
               </Offline>
          </React.Fragment>
     );
};
