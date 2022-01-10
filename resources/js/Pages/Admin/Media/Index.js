import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DataContainer from '@/Shared/DataContainer';
import DropdownButton from '@/Shared/DropdownButton';
import { BackButton } from '@/Shared/BackButton';
import { AddButton } from '@/Shared/AddButton';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';
import { can } from '@/utils';

const Index = () => {
     const { auth, info } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Helmet>
                    <title>Medias</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Medias</span>
               </div>
               <DataContainer>
                    {/* <div className="col-span-12">
                         {can(auth.user, 'create-user') && (<AddButton caption={'Add Language'} link={'language.create'} linkParams={''} />)}
                    </div> */}
                    <div className="col-span-12 grid grid-cols-6 gap-4">
                         {can(auth.user, 'create-user') && (<InertiaLink href={route('media.create')} className="border border-gray-300 rounded">
                              <Icon name="plus" className={`text-gray-400 hover:text-gray-500 fill-current`} />
                         </InertiaLink>)}
                         {info.medias.data.map(({id, url}) => {
                              return <InertiaLink key={`med${id}`} href={route('media.show', id)} className="">
                                   <img src={url} key={id} className="w-full rounded hover:shadow-lg hover:border hover:border-2 hover:border-purple-500 ease-in-out" />
                              </InertiaLink>
                         })}
                    </div>
                    <Pagination links={info.medias.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Medias'} />;

export default Index;
