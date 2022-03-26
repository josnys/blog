import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';

const Home = () => {
     const { auth } = usePage().props;
     return (
          <div>
               <Helmet>
                    <title>Dashboard</title>
               </Helmet>

          </div>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Home.layout = page => <Layout children={page} header={'Dashboard'} />;

export default Home;
