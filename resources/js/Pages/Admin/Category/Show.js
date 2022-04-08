import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import FileInput from '@/Shared/FileInput';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { BackButton } from '@/Shared/BackButton';
import LoadingButton from '@/Shared/LoadingButton';
import Icon from '@/Shared/Icon';

const Show = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          name: '',
          lang: '',
          cover: null,
          selectedCover: null,
          menu: info.menu || false,
          status: info.status || true,
          feature: info.feature || false,
          edit: false,
          index: -1,
          id: null
     });

     function handleFileChange(file, path) {
          setData((data) => ({
               ...data,
               selectedCover: path,
               cover: file
          }));
     }

     function activateEdit(e, i) {
          e.preventDefault();
          setData((data) => ({
               ...data,
               lang: info.texts[i].lang,
               name: info.texts[i].name,
               menu: info.menu,
               status: info.status,
               feature: info.feature,
               edit: true,
               index: i,
               id: info.texts[i].id,
          }));
     }

     function handleCancel(e) {
          e.preventDefault();
          setData((data) => ({
               ...data,
               lang: '',
               name: '',
               menu: info.menu || false,
               status: info.status || true,
               feature: info.feature || false,
               edit: false,
               index: -1,
               id: null
          }));
     }

     function handleSubmit(e) {
          e.preventDefault();
          if(data.edit){
               post(route('admin.category.text.update', [info.id, data.id]), {preserveState:false});
          }else{
               post(route('admin.category.text.store', info.id), {preserveState:false});
          }
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>View Category</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">View Category</h3>
                                   {info.photo && (<img src={info.photo} className="w-20 mx-auto" />)}
                                   <p className="text-gray-500 mt-4">Url: <span className="float-right font-semibold">{info.url}</span></p>
                                   <p className="text-gray-500">Show In Menu: <span className="float-right font-semibold">{info.menu_caption}</span></p>
                                   <p className="text-gray-500">Status: <span className="float-right font-semibold">{info.status_caption}</span></p>
                                   <p className="text-gray-500">Feature in Home Page: <span className="float-right font-semibold">{info.feature_caption}</span></p>
                                   <div className="mt-4 border border-t"></div>
                                   <h3 className="text-md font-medium text-gray-800">Sub-Categories <InertiaLink href={route('admin.subcategory.create', info.id)} className="float-right text-sm underline text-gray-600 hover:text-blue-600">Add Sub-Categories</InertiaLink></h3>
                                   {(info.subcategories.length > 0) && (<ul  className="list-inside bg-gray-100 rounded p-2">
                                        {info.subcategories.map(({id, name}, i) => {
                                             return <li className="mt-2" key={`sub${i}`}><InertiaLink className="text-sm text-gray-600 hover:text-blue-700" href={route('admin.subcategory.show', [info.id, id])}>{name} <span className="float-right underline">View</span></InertiaLink></li>
                                        })}
                                   </ul>)}
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'admin.category.index'} linkParams={''} />
                                        </div>
                                        <div className="col-span-12">
                                             <SelectInput
                                                  className={`flex-shrink w-full inline-block relative mt-4 mr-2 ${data.edit?'hidden':''}`}
                                                  label="Language"
                                                  name="lang"
                                                  disable={+false}
                                                  readOnly={+false}
                                                  must={+true}
                                                  focus={+false}
                                                  errors={errors.lang}
                                                  value={data.lang}
                                                  onChange={e => setData('lang', e.target.value)}
                                             >
                                                  <option value="" className="text-gray-600 italic">Select Language</option>
                                                  {info.languages.map(({id, name}) => {
                                                       return <option key={`ln${id}`} value={id}>{name}</option>
                                                  })}
                                             </SelectInput>
                                             <div className={`${!data.edit?'hidden':''}`}>
                                                  <label className="block font-medium text-sm text-gray-700" htmlFor="avatar">
                                                       <span>Photo</span>
                                                  </label>
                                                  <div className="mt-2">
                                                       {data.selectedCover && (<img src={`${data.selectedCover}`} className="rounded-full h-20 w-20" />)}
                                                  </div>
                                                  <FileInput
                                                       className="w-full lg:w-1/2"
                                                       label="Select Image"
                                                       name="cover"
                                                       accept="image/.jpg,.jpeg,.png"
                                                       errors={errors.cover}
                                                       value={data.cover}
                                                       onChange={handleFileChange}
                                                   />
                                             </div>
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Name"
                                                  name="name"
                                                  type="text"
                                                  disable={+false}
                                                  readOnly={+false}
                                                  must={+true}
                                                  focus={+true}
                                                  errors={errors.name}
                                                  value={data.name}
                                                  onChange={e => setData('name', e.target.value)}
                                             />
                                             <label className={`flex items-center mt-3 ${!data.edit?'hidden':''}`} htmlFor="status">
                                                  <input name="status" className="form-checkbox" type="checkbox" value={data.status} checked={data.status} onChange={e => setData('status', !data.status)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Active</span>
                                             </label>
                                             <label className={`flex items-center mt-3 ${!data.edit?'hidden':''}`} htmlFor="menu">
                                                  <input name="menu" className="form-checkbox" type="checkbox" value={data.menu} checked={data.menu} onChange={e => setData('menu', !data.menu)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Show In Menu</span>
                                             </label>
                                             <label className={`flex items-center mt-3 ${!data.edit?'hidden':''}`} htmlFor="feature">
                                                  <input name="feature" className="form-checkbox" type="checkbox" value={data.feature} checked={data.feature} onChange={e => setData('feature', !data.feature)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Feature in Home Page</span>
                                             </label>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   {data.edit && (<a href="#" onClick={handleCancel}>Cancel</a>)}
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        {!data.edit && ('Save')}
                                        {data.edit && ('Update')}
                                   </LoadingButton>
                              </div>
                              <div className="mt-4 border border-t"></div>
                              <div className="col-span-12 mt-4 p-2">
                                   {info.texts.map(({id, name, lang, lang_caption}, i) => {
                                        return <div onClick={e=>activateEdit(e,i)} key={`cat${id}`} className="w-full mt-2 p-2 bg-gray-100 rounded hover:bg-blue-100">
                                             <h2 className="text-md text-gray-700">{name} <span className="float-right text-sm text-blue-500">{lang_caption} (Edit)</span></h2>
                                        </div>
                                   })}
                              </div>
                         </DataCard>
                    </ProfileCard>
               </form>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Show.layout = page => <Layout children={page} header={'View Category'} />;

export default Show;
