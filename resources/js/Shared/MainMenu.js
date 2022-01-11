import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import MainMenuItem from './MainMenuItem';
import { can } from '../utils';

export default ({ className }) => {
     const { auth } = usePage().props;
     return (
          <div className={className}>
               <MainMenuItem text="Dashboard" link="home" icon="dashboard" />
               {can(auth.user, 'read-user')?<MainMenuItem text="Users" link="user.index" icon="user-group" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Languages" link="language.index" icon="lang" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Medias" link="media.index" icon="camera" />:null}
               {can(auth.user, 'read-user')?<MainMenuItem text="Categories" link="category.index" icon="category" />:null}
          </div>
     );
};
