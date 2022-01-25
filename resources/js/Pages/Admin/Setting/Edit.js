import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput';
import FileInput from '@/Shared/FileInput';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { BackButton } from '@/Shared/BackButton';
import LoadingButton from '@/Shared/LoadingButton';
import Icon from '@/Shared/Icon';

const Edit = () => {
     const { auth, info } = usePage().props;
     console.log(info);
     const { data, setData, post, processing, errors } = useForm({
          name: info.name || '',
          slogan: info.slogan || '',
          logo: null,
          selectedLogo: '',
          twitter: info.twitter || '',
          facebook: info.facebook || '',
          instagram: info.instagram || '',
          whatsapp: info.whatsapp || '',
     });

     function handleFileChange(file, path) {
          setData((data) => ({
               ...data,
               selectedLogo: path,
               logo: file
          }));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.setting.store'));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Manage Setting</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">Manage Setting</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Manage Setting to display website's information.
                                   </p>
                                   <p className="mt-1 text-md text-gray-800 text-center">Current Logo</p>
                                   {info.logoUrl && (<img src={`${info.logoUrl}`} className="mx-auto h-20 w-20" />)}
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12">
                                             <label className="block font-medium text-sm text-gray-700" htmlFor="avatar">
                                                  <span>Logo</span>
                                             </label>
                                             <div className="mt-2">
                                                  {data.selectedLogo && (<img src={`${data.selectedLogo}`} className="rounded-full h-20 w-20" />)}
                                             </div>
                                             <FileInput
                                                  className="w-full lg:w-1/2"
                                                  label="Select Image"
                                                  name="logo"
                                                  accept="image/.jpg,.jpeg,.png,.gif,.svg"
                                                  errors={errors.logo}
                                                  value={data.logo}
                                                  onChange={handleFileChange}
                                              />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Name"
                                                  name="name"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.name}
                                                  value={data.name}
                                                  onChange={e => setData('name', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Slogan"
                                                  name="slogan"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={false}
                                                  errors={errors.slogan}
                                                  value={data.slogan}
                                                  onChange={e => setData('slogan', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Twitter Handle"
                                                  name="twitter"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={false}
                                                  errors={errors.twitter}
                                                  value={data.twitter}
                                                  onChange={e => setData('twitter', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Facebook Handle"
                                                  name="facebook"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={false}
                                                  errors={errors.facebook}
                                                  value={data.facebook}
                                                  onChange={e => setData('facebook', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Instagram Handle"
                                                  name="instagram"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={false}
                                                  errors={errors.instagram}
                                                  value={data.instagram}
                                                  onChange={e => setData('instagram', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="WhatsApp"
                                                  name="whatsapp"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={false}
                                                  errors={errors.whatsapp}
                                                  value={data.whatsapp}
                                                  onChange={e => setData('whatsapp', e.target.value)}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Save
                                   </LoadingButton>
                              </div>
                         </DataCard>
                    </ProfileCard>
               </form>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Edit.layout = page => <Layout children={page} header={'Create Category'} />;

export default Edit;
