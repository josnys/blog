import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';
import TextInput from '@/Shared/TextInput';
import TextArea from '@/Shared/TextArea';
import LoadingButton from '@/Shared/LoadingButton';
import { BackButton } from '@/Shared/BackButton';

function EditPermission() {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, reset, errors } = useForm({
          id: info.id || null,
          name: info.name || '',
          display: info.display || '',
          description: info.description || '',
     });

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-white fill-current': false,
          'text-gray-500 hover:text-white fill-current': true
     });

     function handleSubmit(e) {
          e.preventDefault();
          put(route('admin.permission.update', info.id));
     }

     return (
          <React.Fragment key="permission-c">
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Edit Permission</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Use the form to edit permissions to the system. These role will be used to defined the level of access of each users
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
                                        Update
                                   </LoadingButton>
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
EditPermission.layout = page => <Layout children={page} header={'Edit Permission'} />;

export default EditPermission;
