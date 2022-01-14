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

const Show = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          identifier: info.identifier || '',
          status: info.status || false,
          media: info.media || [],
     });

     function handleAdd(e, i) {
          let media = data.media;
          info.medias[i].selected = true;
          let index = media.findIndex((img) => {
               return img.id == info.medias[i].id;
          });
          if(index == -1){
               media.push(info.medias[i]);
          }else{
               let element = media[index];
               element.rm = false;
               media[index] = element;
          }
          setData('media', media);
     }

     function handleRemove(e, i) {
          let media = data.media;
          let element = media[i];
          let index = info.medias.findIndex((img) => {
               return img.id == element.id;
          });
          info.medias[index].selected = false;
          if(element.new){
               media.splice(i,1);
          }else{
               element.rm = true;
               media[i] = element;
          }

          setData((data) => ({
               ...data,
               media: media
          }));
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('gallery.update', info.id));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>View & Edit Gallery</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">View & Edit Gallery</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Use this form to view & edit a gallery that can be used in any type of publication.
                                   </p>
                                   <h4 className="mt-4 text-md text-gray-600">Gallery's Media <span className="font-medium">{data.identifier}</span></h4>
                                   {(data.media.length > 0) && (<div className="col-span-12 mt-4">
                                        <div className="w-full grid grid-cols-3 gap-3">
                                             {data.media.map((img, i) => {
                                                  return <img className={`aspect-w-1 aspect-h-1 ${img.rm?'hidden':''}`} onClick={e=>handleRemove(e,i)} key={i} src={img.url} />
                                             })}
                                        </div>
                                   </div>)}
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'gallery.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Name"
                                                  name="identifier"
                                                  type="text"
                                                  disable={false}
                                                  readonly={false}
                                                  must={true}
                                                  errors={errors.identifier}
                                                  value={data.identifier}
                                                  onChange={e => setData('identifier', e.target.value)}
                                             />
                                             <label className="flex items-center mt-3" htmlFor="status">
                                                  <input name="status" className="form-checkbox" type="checkbox" value={data.status} checked={data.status} onChange={e => setData('status', !data.status)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Active</span>
                                             </label>
                                        </div>
                                   </div>
                                   {(info.medias.length > 0) && (<div className="col-span-12 mt-4">
                                        <h3 className="text-md font-medium text-gray-600">Chose Media</h3>
                                        <div className="w-full grid grid-cols-3 gap-3">
                                             {info.medias.map((img, i) => {
                                                  return <img className={`w-full rounded ${img.selected?'border border-2 border-purple-500':''}`} onClick={e=>handleAdd(e,i)} key={i} src={img.url} />
                                             })}
                                        </div>
                                   </div>)}
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Update
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
Show.layout = page => <Layout children={page} header={'View & Edit Gallery'} />;

export default Show;
