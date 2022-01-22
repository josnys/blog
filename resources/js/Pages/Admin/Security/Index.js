import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DataContainer from '@/Shared/DataContainer';
import DropdownButton from '@/Shared/DropdownButton';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';
import { BackButton } from '@/Shared/BackButton';
import { AddButton } from '@/Shared/AddButton';
import { can } from '@/utils';

const Index = () => {
     const { auth, errors, data } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Helmet>
                    <title>Roles & Permission</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-600 hover:text-gray-700 leading-tight" href={route('admin.home')}>Dashboard</InertiaLink> |
                    <InertiaLink className="font-semibold text-md text-gray-600 hover:text-gray-700 leading-tight" href={route('admin.user.index')}> Users</InertiaLink> |
                    <span className="text-md text-gray-600 leading-tight"> Roles & Permissions</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         {can(auth.user, 'create-role') && <AddButton caption={'Add Role'} link={'admin.role.create'} linkParams={''} />}
                         <div className="float-right">
                              <BackButton link={'admin.user.index'} linkParams={''} />
                         </div>
                         {(auth.user.id == 1) && <div className="float-right">
                              {can(auth.user, 'create-role') && <AddButton caption={'Permissions'} link={'admin.permission.create'} linkParams={''} />}
                         </div>}
                    </div>
                    <table className="table-fixed col-span-12 text-sm">
                         <thead className="bg-gray-100">
                              <tr>
                                   <th className="px-4 py-2">Display Name</th>
                                   <th className="px-4 py-2">Name</th>
                                   <th className="px-4 py-2">Description</th>
                                   <th className="px-4 py-2"></th>
                              </tr>
                         </thead>
                         <tbody>
                              {data.data.map(({id, name, display, description}) => {
                                   return <tr key={id}>
                                        <td className="border px-4 py-2">{display}</td>
                                        <td className="border px-4 py-2">{name}</td>
                                        <td className="border px-4 py-2">{description}</td>
                                        <td className="border px-4 py-2">
                                             <DropdownButton caption="Actions" color="blue">
                                                  {can(auth.user, 'update-role')?<InertiaLink href={route('admin.role.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} /> Edit
                                                  </InertiaLink>:null}
                                                  {can(auth.user, 'assign-permission')?<InertiaLink href={route('admin.role.get.assign', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} /> Assign Permission
                                                  </InertiaLink>:null}
                                             </DropdownButton>
                                        </td>
                                   </tr>
                              })}
                              {!data.data.length && (<tr>
                                   <td colSpan="4" className="p-4 bg-blue-100 text-blue-500 text-center">No data found.</td>
                              </tr>)}
                         </tbody>
                    </table>
                    <Pagination links={data.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Roles & Permissions'} />;

export default Index;
