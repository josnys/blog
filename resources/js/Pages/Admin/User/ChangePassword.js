import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput';
import FileInput from '@/Shared/FileInput';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import LoadingButton from '@/Shared/LoadingButton';
import { BackButton } from '@/Shared/BackButton';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';
import axios from 'axios';

const ChangePassword = () => {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, errors } = useForm({
          current_password: '',
          password: '',
          password_confirmation: '',
          pin: ''
     });

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-white fill-current': false,
          'text-gray-500 hover:text-white fill-current': true
     });

     function handleSubmit(e) {
          e.preventDefault();
          setSending(true);
          put(route('admin.user.post.resetpassword', info.id));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Change User Password</title>
               </Helmet>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Change User Password</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   You are about to change <span className="font-semibold">{info.name}</span> password. Please make sure to communicate the new one to the user to be able to log back in the system.
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'admin.user.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="New Password"
                                                  name="password"
                                                  type="password"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.password}
                                                  value={data.password}
                                                  onChange={e => setData('password', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Confirm Password"
                                                  name="password_confirmation"
                                                  type="password"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.password_confirmation}
                                                  value={data.password_confirmation}
                                                  onChange={e => setData('password_confirmation', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="PIN"
                                                  name="pin"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  errors={errors.pin}
                                                  value={data.pin}
                                                  onChange={e => setData('pin', e.target.value)}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Change Password
                                   </LoadingButton>
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
ChangePassword.layout = page => <Layout children={page} header={'Change User Password'} />;

export default ChangePassword;
