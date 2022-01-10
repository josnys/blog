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

const Create = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          name: '',
          code: '',
          flag: null,
          selectedFlag: null,
          status: true,
     });

     function handleFileChange(file, path) {
          setData((data) => ({
               ...data,
               selectedFlag: path,
               flag: file
          }));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('language.store'));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Create Language</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">Create Language</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Create a new language to enable different translation in the website.
                                   </p>
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'language.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
                                             <label className="block font-medium text-sm text-gray-700" htmlFor="avatar">
                                                  <span>Flag</span>
                                             </label>
                                             <div className="mt-2">
                                                  {data.selectedFlag && (<img src={`${data.selectedFlag}`} className="rounded-full h-20 w-20" />)}
                                             </div>
                                             <FileInput
                                                  className="w-full lg:w-1/2"
                                                  label="Select Image"
                                                  name="flag"
                                                  accept="image/.jpg,.jpeg,.png"
                                                  errors={errors.flag}
                                                  value={data.flag}
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
                                                  label="Code"
                                                  name="code"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.code}
                                                  value={data.code}
                                                  onChange={e => setData('code', e.target.value)}
                                             />
                                             <label className="flex items-center mt-3" htmlFor="status">
                                                  <input name="status" className="form-checkbox" type="checkbox" value={data.status} checked={data.status} onChange={e => setData('status', !data.status)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Active</span>
                                             </label>
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
Create.layout = page => <Layout children={page} header={'Create Language'} />;

export default Create;
