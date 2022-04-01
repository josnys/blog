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
import { can, currencyFormat } from '@/utils';

const Index = () => {
     const { auth, info } = usePage().props;
     return (
          <React.Fragment key="security-index">
               <Helmet>
                    <title>Products</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">Products</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         {can(auth.user, 'create-user') && (<AddButton caption={'Add Product'} link={'admin.product.create'} linkParams={null} />)}
                    </div>
                    <table className="table-fixed col-span-12 text-sm">
                         <thead className="bg-gray-100">
                              <tr>
                                   <th className="px-2 py-1">Photo</th>
                                   <th className="px-2 py-1">Name</th>
                                   <th className="px-2 py-1">Category & Sub</th>
                                   <th className="px-2 py-1">Price</th>
                                   <th className="px-2 py-1">Active ?</th>
                                   <th className="px-2 py-1">Published ?</th>
                                   <th className="px-2 py-1"></th>
                              </tr>
                         </thead>
                         <tbody>
                              {info.products.data.map(({id, name, category, subcategory, cover, currency, price, status, status_caption, published, published_caption}) => {
                                   return <tr key={id}>
                                        <td className="border px-2 py-1">{cover && (<img src={cover} className="img w-6 m-auto" />)}</td>
                                        <td className="border px-2 py-1">{name}</td>
                                        <td className="border px-2 py-1">{category} / {subcategory}</td>
                                        <td className="border px-2 py-1 text-right">{currencyFormat(price, currency)}</td>
                                        <td className={`border px-2 py-1 text-center ${status?'text-green-600':'text-red-600'}`}>{status_caption}</td>
                                        <td className={`border px-2 py-1 text-center ${published?'text-green-600':'text-red-600'}`}>{published_caption}</td>
                                        <td className="border px-2 py-1">
                                             <DropdownButton caption="Actions" color="blue">
                                                  {can(auth.user, 'update-user') && (<InertiaLink href={route('admin.product.show', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'eye'} className={'fill-current w-5 h-5 mr-2'} />
                                                       View
                                                  </InertiaLink>)}
                                             </DropdownButton>
                                        </td>
                                   </tr>
                              })}
                              {!info.products.data.length && (<tr>
                                   <td colSpan="7" className="p-4 bg-blue-100 text-blue-500 text-center">No data found.</td>
                              </tr>)}
                         </tbody>
                    </table>
                    <Pagination links={info.products.links} />
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <Layout children={page} header={'Products'} />;

export default Index;
