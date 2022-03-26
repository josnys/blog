import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileEditCard from '@/Pages/Components/ProfileEditCard';
import PasswordEditCard from '@/Pages/Components/PasswordEditCard';

const Profile = () => {
     const { auth, errors } = usePage().props;
     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Profile</title>
               </Helmet>
               <ProfileEditCard />
               <div className="hidden sm:block">
                    <div className="py-8">
                         <div className="border-t border-gray-400"></div>
                    </div>
               </div>
               <PasswordEditCard />
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Profile.layout = page => <Layout children={page} header={'Profile'} />;

export default Profile;
