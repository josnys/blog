import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenuItem from './MainMenuItem';
import { can } from '../utils';
import Indicator from './Indicator';
import { Offline, Online } from "react-detect-offline";

export default ({ className }) => {
     const { auth, app } = usePage().props;
     return (
          <div className={className}>
               <div className="p-4">
                    <MainMenuItem text="Dashboard" link="admin.home" icon="dashboard" />
                    {can(auth.user, 'read-user')?<MainMenuItem text="Users" link="admin.user.index" icon="user-group" />:null}
                    {can(auth.user, 'read-user')?<MainMenuItem text="Languages" link="admin.language.index" icon="lang" />:null}
                    {can(auth.user, 'read-user')?<MainMenuItem text="Medias" link="admin.media.index" icon="camera" />:null}
                    {can(auth.user, 'read-user')?<MainMenuItem text="Categories" link="admin.category.index" icon="category" />:null}
                    {can(auth.user, 'read-user')?<MainMenuItem text="Posts" link="admin.post.index" icon="book" />:null}
                    {can(auth.user, 'read-user')?<MainMenuItem text="Products" link="admin.product.index" icon="folder-open" />:null}
                    {can(auth.user, 'read-user')?<MainMenuItem text="Settings" link="admin.setting.create" icon="cog" />:null}
               </div>
               <div className="absolute flex w-56 pr-4 mt-2 justify-content-center bottom-0 space-x-1 bg-slate-50">
                    <div className="flex mx-auto items-center">
                         <h1 className="text-lg text-slate-400 font-medium">{app.system.name} <span className="text-sm text-slate-600">{app.system.version}</span></h1>
                         <span>
                              <Online>
                                   <Indicator color="green" size="2" />
                              </Online>
                              <Offline>
                                   <Indicator color="red" size="2" />
                              </Offline>
                         </span>
                    </div>
               </div>
          </div>
     );
};
