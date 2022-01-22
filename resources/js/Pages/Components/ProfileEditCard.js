import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import FileInput from '@/Shared/FileInput';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import LoadingButton from '@/Shared/LoadingButton';
import {toFormData} from '@/utils';

const ProfileEditCard = () => {
     const { auth, user, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          fname: user.fname || '',
          lname: user.lname || '',
          dob: user.dob || '',
          sex: user.sex || '',
          identification: user.identification || '',
          identificationType: user.identificationType || '',
          phone: user.phone || '',
          address: user.address || '',
          username: user.username || '',
          current_username: user.username || '',
          email: user.email || '',
          avatar: null,
          selectedAvatar: null,
          currentAvatar: user.avatar,
          current_email: user.email || '',
     });

     function handleFileChange(file, path) {
          setData('selectedAvatar', path);
          setData('avatar', file);
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.profile.save', user.id));
     }
     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Profile</title>
               </Helmet>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Update your account's profile information and email address.
                              </p>
                              <div className="w-full mt-3">
                                   <h3 className="text-md text-center text-gray-700">Current Photo</h3>
                                   {!user.currentAvatar && (<img src={`https://ui-avatars.com/api/?name=${auth.user.name}&amp;color=7F9CF5&amp;background=EBF4FF`} className="mx-auto rounded-full h-20 w-20" />)}
                                   {user.currentAvatar && (<img src={`${user.currentAvatar}`} className="mx-auto rounded-full h-20 w-20" />)}
                              </div>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-4">
                                             <label className="block font-medium text-sm text-gray-700" htmlFor="avatar">
                                                  <span>Avatar {data.selectedAvatar}</span>
                                             </label>
                                             <div className="mt-2">
                                                  {data.selectedAvatar && (<img src={`${data.selectedAvatar}`} className="rounded-full h-20 w-20" />)}
                                             </div>
                                             <FileInput
                                                  className="w-full lg:w-1/2"
                                                  label="Select Image"
                                                  name="avatar"
                                                  accept="image/.jpg,.jpeg,.png"
                                                  errors={errors.avatar}
                                                  value={data.avatar}
                                                  onChange={handleFileChange}
                                              />
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
                                                   className="flex-shrink w-5/6 inline-block relative mt-4 mr-2"
                                                   label="Sex"
                                                   name="sex"
                                                   must={false}
                                                   errors={errors.sex}
                                                   value={data.sex}
                                                   onChange={e => setData('sex', e.target.value)}
                                              >
                                                   <option value="">Select Sex</option>
                                                   {info.sexes.map((sex,i)=>{
                                                        return <option key={`s${i}`} value={sex.code}>{sex.name}</option>
                                                   })}
                                              </SelectInput>
                                              <SelectInput
                                                   className="flex-shrink w-5/6 inline-block relative mt-4 mr-2"
                                                   label="Identification Type"
                                                   name="identificationType"
                                                   must={false}
                                                   errors={errors.identificationType}
                                                   value={data.identificationType}
                                                   onChange={e => setData('identityType', e.target.value)}
                                              >
                                                   <option value="">Select Identification Type</option>
                                                   {info.identityType.map((ident,i)=>{
                                                        return <option key={`it${i}`} value={ident.code}>{ident.name}</option>
                                                   })}
                                              </SelectInput>
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Identification No"
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
                                                   label="Phone"
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
                                              <TextInput
                                                   className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                   label="Username"
                                                   name="username"
                                                   type="text"
                                                   disable={false}
                                                   readonly={false}
                                                   must={true}
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
                                                   must={true}
                                                   errors={errors.email}
                                                   value={data.email}
                                                   onChange={e => setData('email', e.target.value)}
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
          </React.Fragment>
     );
};

export default ProfileEditCard;
