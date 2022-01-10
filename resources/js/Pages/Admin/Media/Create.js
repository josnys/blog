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
          media: [],
          selectedMedia: [],
     });

     function handleFileChange(file, path) {
          let media = data.media;
          let selectedMedia = data.selectedMedia;
          if(file){
               media.push(file);
               selectedMedia.push(path);
          }
          setData((data) => ({
               ...data,
               selectedMedia: selectedMedia,
               media: media
          }));
     }

     function handleRemove(e, i) {
          let media = data.media;
          let selectedMedia = data.selectedMedia;
          media.splice(i,1);
          selectedMedia.splice(i,1);
          setData((data) => ({
               ...data,
               selectedMedia: selectedMedia,
               media: media
          }));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('media.store'));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Upload Media</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">Upload Media</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Upload mmedia to be used throughout the website.
                                   </p>
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'media.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
                                             <FileInput
                                                  className="w-full lg:w-1/2"
                                                  label="Select Image"
                                                  name="media"
                                                  accept="image/.jpg,.jpeg,.png,.gif,.svg"
                                                  errors={errors.media}
                                                  value={data.media}
                                                  onChange={handleFileChange}
                                              />
                                        </div>
                                   </div>
                                   {(data.selectedMedia.length > 0) && (<div className="col-span-12 mt-4">
                                        <h3 className="text-md font-medium text-gray-600">Selected Medias to upload</h3>
                                        <div className="w-full grid grid-cols-3 gap-3">
                                             {data.selectedMedia.map((img, i) => {
                                                  return <img onClick={e=>handleRemove(e,i)} key={i} src={img} />
                                             })}
                                        </div>
                                   </div>)}
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Upload
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
Create.layout = page => <Layout children={page} header={'Upload Media'} />;

export default Create;
