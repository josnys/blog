import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import FileInput from '@/Shared/FileInput';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import LoadingButton from '@/Shared/LoadingButton';
import { BackButton } from '@/Shared/BackButton';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';

const Edit = () => {
     const { auth, info } = usePage().props;
     const { data, setData, put, processing, errors } = useForm({
          fname: info.fname || '',
          lname: info.lname || '',
          code: info.code || '',
          dob: info.dob || '',
          sex: info.sex || '',
          identification: info.identification || '',
          identificationType: info.identificationType || '',
          address: info.address || '',
          phone: info.phone || '',
          username: info.username || '',
          email: info.email || '',
          avatar: info.avatar
     });

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-white fill-current': false,
          'text-gray-500 hover:text-white fill-current': true
     });

     function handleSubmit(e) {
          e.preventDefault();
          put(route('admin.user.update', info.id));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Edit</title>
               </Helmet>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Edit User</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Edit user's personal informations
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
                                        <div className="col-span-12">
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="First Name"
                                                  name="fname"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.fname}
                                                  value={data.fname}
                                                  onChange={e => setData('fname', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Last Name"
                                                  name="lname"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.lname}
                                                  value={data.lname}
                                                  onChange={e => setData('lname', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Date of Birth"
                                                  name="dob"
                                                  type="date"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.dob}
                                                  value={data.dob}
                                                  onChange={e => setData('dob', e.target.value)}
                                             />
                                             <SelectInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Sex"
                                                  name="sex"
                                                  must={true}
                                                  errors={errors.sex}
                                                  value={data.sex}
                                                  onChange={e => setData('sex', e.target.value)}
                                                  >
                                                  <option value={''}>Choose Sex</option>
                                                  {info.sexes.map(({code, name}, i) => {
                                                       return <option key={code} value={code}>{name}</option>
                                                  })}
                                             </SelectInput>
                                             <SelectInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Identity Type"
                                                  name="identificationType"
                                                  must={true}
                                                  errors={errors.identificationType}
                                                  value={data.identificationType}
                                                  onChange={e => setData('identificationType', e.target.value)}
                                                  >
                                                  <option value={''}>Choose Identity Type</option>
                                                  {info.identityType.map(({code, name}, i) => {
                                                       return <option key={code} value={code}>{name}</option>
                                                  })}
                                             </SelectInput>
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Identity Number"
                                                  name="identification"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.identification}
                                                  value={data.identification}
                                                  onChange={e => setData('identification', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Userame"
                                                  name="username"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  errors={errors.username}
                                                  value={data.username}
                                                  onChange={e => setData('username', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Email"
                                                  name="email"
                                                  type="email"
                                                  disable={false}
                                                  readonly={false}
                                                  errors={errors.email}
                                                  value={data.email}
                                                  onChange={e => setData('email', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Phone Number"
                                                  name="phone"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.phone}
                                                  value={data.phone}
                                                  onChange={e => setData('phone', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Address"
                                                  name="address"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.address}
                                                  value={data.address}
                                                  onChange={e => setData('address', e.target.value)}
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
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Edit.layout = page => <Layout children={page} header={'Edit User'} />;

export default Edit;
