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
                    <title>Languages</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Languages</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         {can(auth.user, 'create-user') && (<AddButton caption={'Add Language'} link={'admin.language.create'} linkParams={''} />)}
                    </div>
                    <table className="table-fixed col-span-12 text-sm">
                         <thead className="bg-gray-300">
                              <tr>
                                   <th className="px-2 py-1">Flag</th>
                                   <th className="px-2 py-1">Code</th>
                                   <th className="px-2 py-1">Name</th>
                                   <th className="px-2 py-1">Active ?</th>
                                   <th className="px-2 py-1"></th>
                              </tr>
                         </thead>
                         <tbody>
                              {info.langs.data.map(({id, code, name, flag, status, statusCaption}) => {
                                   return <tr key={id}>
                                        <td className="border px-2 py-1">
                                             {!flag && (<img src={`https://ui-avatars.com/api/?name=${code}&amp;color=7F9CF5&amp;background=EBF4FF`} alt={name} className="mx-auto h-4 w-4 rounded-full" />)}
                                             {flag && (<img src={flag} alt={name} className="mx-auto h-4 w-4 rounded-full" />)}
                                        </td>
                                        <td className="border px-2 py-1">{code}</td>
                                        <td className="border px-2 py-1">{name}</td>
                                        <td className={`border px-2 py-1 ${status?'text-green-600':'text-red-600'}`}>{statusCaption}</td>
                                        <td className="border px-2 py-1">
                                             <DropdownButton caption="Actions" color="blue">
                                                  {can(auth.user, 'update-user') && (<InertiaLink href={route('admin.language.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} />
                                                       Edit
                                                  </InertiaLink>)}
                                             </DropdownButton>
                                        </td>
                                   </tr>
                              })}
                              {!info.langs.data.length && (<tr>
                                   <td colSpan="5" className="p-4 bg-blue-100 text-blue-500 text-center">No data found.</td>
                              </tr>)}
                         </tbody>
                    </table>
                    <Pagination links={info.langs.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Languages'} />;

export default Index;
