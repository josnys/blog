import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenuItem from './MainMenuItem';
import { can } from '../utils';

export default ({ className }) => {
     const { auth } = usePage().props;
     return (
          <div className={className}>
               <MainMenuItem text="Dashboard" link="admin.home" icon="dashboard" />
               {can(auth.user, 'read-user')?<MainMenuItem text="Users" link="admin.user.index" icon="user-group" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Languages" link="admin.language.index" icon="lang" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Medias" link="admin.media.index" icon="camera" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Categories" link="admin.category.index" icon="category" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Posts" link="admin.post.index" icon="book" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Settings" link="admin.setting.create" icon="cog" />:null}
          </div>
     );
};
