import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import DataContainer from '@/Shared/DataContainer';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';
import TextInput from '@/Shared/TextInput';
import TextArea from '@/Shared/TextArea';
import LoadingButton from '@/Shared/LoadingButton';
import DropdownButton from '@/Shared/DropdownButton';
import Pagination from '@/Shared/Pagination';
import { BackButton } from '@/Shared/BackButton';
import { createSlug } from '@/utils';

function CreateRole() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, reset, errors } = useForm({
          id: null,
          name: '',
          display: '',
          description: ''
     });


     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-white fill-current': false,
          'text-gray-500 hover:text-white fill-current': true
     });

     function handleFocusOut(e){
          const value = e.target.value;
          setData('name', createSlug(value));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.role.store'), {
               onSuccess: () => reset()
          });
     }

     return (
          <React.Fragment key="permission-c">
               <Helmet>
                    <title>Create Role</title>
               </Helmet>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Add Role</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Use the form to add roles to the system. These role will be used to defined the level of access of each users
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3 gap-3">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'admin.security.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                             <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Display Name"
                                                   name="display"
                                                   type="text"
                                                   disable={false}
                                                   readonly={false}
                                                   must={true}
                                                   errors={errors.display}
                                                   value={data.display}
                                                   onChange={e => setData('display', e.target.value)}
                                                   onBlur={handleFocusOut}
                                              />
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Name"
                                                   name="name"
                                                   type="text"
                                                   disable={false}
                                                   readonly={true}
                                                   must={false}
                                                   errors={errors.name}
                                                   value={data.name}
                                                   onChange={e => setData('name', e.target.value)}
                                              />
                                              <TextArea
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Description"
                                                   name="description"
                                                   errors={errors.description}
                                                   value={data.description}
                                                   onChange={e => setData('description', e.target.value)}
                                              />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Save
                                   </LoadingButton>
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
               <div className="hidden sm:block">
                    <div className="py-8">
                         <div className="border-t border-gray-400"></div>
                    </div>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         <h3 className="text-lg font-medium text-gray-900">Roles's List</h3>
                    </div>
                    <table className="table-fixed col-span-12 text-sm">
                         <thead className="bg-gray-300">
                              <tr>
                                   <th className="px-4 py-2">Display Name</th>
                                   <th className="px-4 py-2">Name</th>
                                   <th className="px-4 py-2">Description</th>
                                   <th className="px-4 py-2"></th>
                              </tr>
                         </thead>
                         <tbody>
                              {info.data.map(({id, name, display, description}, i) => {
                                   return <tr key={i}>
                                        <td className="border px-4 py-2">{display}</td>
                                        <td className="border px-4 py-2">{name}</td>
                                        <td className="border px-4 py-2">{description}</td>
                                        <td className="border px-4 py-2">
                                             <DropdownButton caption="Actions" color="blue">
                                                  <InertiaLink href={route('admin.role.edit', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'edit'} className={'fill-current w-5 h-5 mr-2'} />
                                                       Edit
                                                  </InertiaLink>
                                                  <InertiaLink href={route('admin.role.get.assign', id)} className="flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                                                       <Icon name={'cheveron-right'} className={'fill-current w-5 h-5 mr-2'} />
                                                       Assign Permission
                                                  </InertiaLink>
                                             </DropdownButton>
                                        </td>
                                   </tr>
                              })}
                              {!info.data.length && (<tr>
                                   <td colSpan="4" className="p-4 bg-blue-100 text-blue-500 text-center">No data found.</td>
                              </tr>)}
                         </tbody>
                    </table>
                    <Pagination links={info.links} />
               </DataContainer>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
CreateRole.layout = page => <Layout children={page} header={'Create Role'} />;

export default CreateRole;
