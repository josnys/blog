import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Icon from './Icon';
import Indicator from './Indicator';
import { Offline, Online } from "react-detect-offline";

export default ({ ...props }) => {
     const { auth, app } = usePage().props;
     const [menuOpened, setMenuOpened] = useState(false);
     return (
          <div className="bg-white border-b w-full px-4 text-sm d:text-md flex justify-between items-center">
               <div className="mr-4">
                    <span className="text-md text-slate-600 leading-tight">{app.name}</span><span className="font-semibold text-md text-slate-700 leading-tight"> | { props.children }</span>
               </div>
               <div className="relative">
                    <div className="text-slate-500 flex items-center cursor-pointer select-none group" onClick={() => setMenuOpened(true)}>
                         <span className="mr-1">{auth.user.username}</span>
                         <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-slate-300 transition duration-150 ease-in-out">
                              {!auth.user.avatar && (<img src={`https://ui-avatars.com/api/?name=${auth.user.name}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={auth.user.name} className="h-6 w-6 rounded-full" />)}
                              {auth.user.avatar && (<img src={`${auth.user.avatar}`} alt={auth.user.name} className="h-8 w-8 rounded-full" />)}
                         </button>
                    </div>
                    <div className={menuOpened ? '' : 'hidden'} onClick={() => setMenuOpened(false)}>
                         <div className="whitespace-nowrap absolute z-20 mt-8 left-auto top-0 right-0 py-2 shadow-xl bg-white rounded text-sm">
                              <div className="block px-4 py-2 text-xs text-slate-500">Manage Account</div>
                              <div className="flex items-center px-3">
                                   <div className="font-semibold text-slate-700">{auth.user.name}</div>
                              </div>
                              <InertiaLink href={route('admin.profile')} className="block px-6 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-700">
                                   My Profile
                              </InertiaLink>
                              <div className="border-t border-slate-200"></div>
                              <div className="border-t border-slate-200"></div>
                              <InertiaLink href={route('logout')} className="w-full block px-6 py-2 text-slate-600 hover:bg-red-300 hover:text-red-700 hover:font-semibold" as="button" method="post">
                                   Logout
                              </InertiaLink>
                         </div>
                         <div
                              onClick={() => {
                                   setMenuOpened(false);
                              }}
                              className="bg-black opacity-25 fixed inset-0 z-10">
                         </div>
                    </div>
               </div>
          </div>
     );
};
