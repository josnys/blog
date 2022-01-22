import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import { CKEditor } from 'ckeditor4-react';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import { BackButton } from '@/Shared/BackButton';
import LoadingButton from '@/Shared/LoadingButton';
import Icon from '@/Shared/Icon';

const Translate = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          language: info.language.id,
          category: info.category,
          subcategory: info.subcategory,
          cover: '',
          selectedCover: info.cover,
          title: '',
          intro: '',
          body: '',
          gallery: info.gallery,
          status: info.status,
          show_home: info.show_home,
          show_menu: info.show_menu,
          publish: info.publish,
     });

     const [values, setValues] = useState({
          intro: '',
          body: '',
     });

     function handleChangeCover(e, i) {
          e.preventDefault();
          let cover = info.medias[i];
          setData((data)=>({
               ...data,
               cover: cover.id,
               selectedCover: cover.url
          }));
     }

     function handleRemove(e) {
          e.preventDefault();
          setData((data)=>({
               ...data,
               cover: '',
               selectedCover: ''
          }));
     }

     function handleSelectUrl(e, url) {
          return navigator.clipboard.writeText(url);
     }

     function handleSubmit(e) {
          e.preventDefault();
          transform((data) => ({
               ...data,
               intro: values.intro,
               body: values.body,
          }));
          post(route('admin.post.translate.store', [info.id, info.language.id]));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Translate Post</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">Translate Post</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Translate existing post.
                                   </p>
                                   <h4 className="mt-4 text-md text-gray-600">Selected Cover for post</h4>
                                   {data.selectedCover && (<img className="w-full" onClick={handleRemove} src={data.selectedCover} />)}
                                   {(info.medias.length > 0) && (<div className="col-span-12 border-t border-gray-300 mt-4 pt-4">
                                        <div className="w-full grid grid-cols-3 gap-3 overflow-auto h-64">
                                             {info.medias.map((img, i) => {
                                                  return <div key={`med${i}`} className="border border-gray-300 p-1 rounded">
                                                       <div onClick={e=>handleSelectUrl(e, img.url)} className="w-full mb-1 rounded bg-blue-300 hover:bg-blue-400 text-center text-sm text-blue-600 hover:text-blue-100 transition ease-in-out duration-150">
                                                            Copy Link
                                                       </div>
                                                       <img className="w-full" onClick={e=>handleChangeCover(e,i)} key={i} src={img.url} />
                                                  </div>
                                             })}
                                        </div>
                                   </div>)}
                              </div>
                         </div>
                         <DataCard>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'admin.post.show'} linkParams={info.id} />
                                        </div>
                                        <div className="col-span-12">
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label={`Title in ${info.language.name}`}
                                                  name="title"
                                                  type="text"
                                                  disable={+false}
                                                  readonly={+false}
                                                  must={+true}
                                                  errors={errors.title}
                                                  value={data.title}
                                                  onChange={e => setData('title', e.target.value)}
                                             />
                                             <div className="form-input rounded-md shadow-sm mt-4 block w-full">
                                                  <label className="block font-medium text-sm text-gray-700" htmlFor="intro">{`Intro in ${info.language.name}`}</label>
                                                  <CKEditor
                                                       initData={values.intro}
                                                       name="intro"
                                                       config={{toolbar: [
                                                            ['Cut', 'Copy', 'Paste', 'Undo', 'Redo'],
                                                            ['Bold', 'Italic', 'Strike'],
                                                            ['NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                                                            ['Link','Anchor'],
                                                            ['Image','Table'],
                                                            ['Styles','Format', 'Font', 'FontSize']
                                                       ]}}
                                                       onChange={(e) => {
                                                            setValues(values => ({
                                                                 ...values,
                                                                 intro: e.editor.getData(),
                                                            }));
                                                       }}
                                                  />
                                             </div>
                                             <div className="form-input rounded-md shadow-sm mt-4 block w-full">
                                                  <label className="block font-medium text-sm text-gray-700" htmlFor="intro">{`Content in ${info.language.name}`}</label>
                                                  <CKEditor
                                                       initData={values.body}
                                                       name="body"
                                                       config={{toolbar: [
                                                            ['Cut', 'Copy', 'Paste', 'Undo', 'Redo'],
                                                            ['Bold', 'Italic', 'Strike'],
                                                            ['NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                                                            ['Link','Anchor'],
                                                            ['Image','Table'],
                                                            ['Styles','Format', 'Font', 'FontSize']
                                                       ]}}
                                                       onChange={(e) => {
                                                            setValues(values => ({
                                                                 ...values,
                                                                 body: e.editor.getData(),
                                                            }));
                                                       }}
                                                  />
                                             </div>
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
Translate.layout = page => <Layout children={page} header={'Translate Post'} />;

export default Translate;