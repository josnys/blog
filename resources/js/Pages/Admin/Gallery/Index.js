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
                    <title>Galleries</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.home')}>Dashboard</InertiaLink> | <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.media.index')}>Medias</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Galleries</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         {can(auth.user, 'create-user') && (<AddButton caption={'Add Gallery'} link={'admin.gallery.create'} linkParams={''} />)}
                         <div className="float-right">
                              <BackButton link={'admin.media.index'} linkParams={''} />
                         </div>
                    </div>
                    <table className="table-fixed col-span-12 text-sm">
                         <thead className="bg-gray-300">
                              <tr>
                                   <th className="px-2 py-1">Identifier</th>
                                   <th className="px-2 py-1">User</th>
                                   <th className="px-2 py-1">Created</th>
                                   <th className="px-2 py-1">Items</th>
                                   <th className="px-2 py-1">Active ?</th>
                                   <th className="px-2 py-1"></th>
                              </tr>
                         </thead>
                         <tbody>
                              {info.galleries.data.map(({id, identifier, qty_items, created_by, created, status, status_caption}) => {
                                   return <tr key={id}>
                                        <td className="border px-2 py-1">{identifier}</td>
                                        <td className="border px-2 py-1">{created_by}</td>
                                        <td className="border px-2 py-1 text-center">{created}</td>
                                        <td className="border px-2 py-1 text-center">{qty_items}</td>
                                        <td className={`border px-2 py-1 text-center ${status?'text-green-600':'text-red-600'}`}>{status_caption}</td>
                                        <td className="border px-2 py-1">
                                             <DropdownButton caption="Actions" color="blue">
                                                  {can(auth.user, 'update-user') && (<InertiaLink href={route('admin.gallery.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'eye'} className={'fill-current w-5 h-5 mr-2'} />
                                                       View
                                                  </InertiaLink>)}
                                             </DropdownButton>
                                        </td>
                                   </tr>
                              })}
                              {!info.galleries.data.length && (<tr>
                                   <td colSpan="6" className="p-4 bg-blue-100 text-blue-500 text-center">No data found.</td>
                              </tr>)}
                         </tbody>
                    </table>
                    <Pagination links={info.galleries.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Languages'} />;

export default Index;
