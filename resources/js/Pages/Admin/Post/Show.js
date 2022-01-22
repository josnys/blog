import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DataContainer from '@/Shared/DataContainer';
import DropdownButton from '@/Shared/DropdownButton';
import { BackButton } from '@/Shared/BackButton';
import { AddButton } from '@/Shared/AddButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import LoadingButton from '@/Shared/LoadingButton';
import Icon from '@/Shared/Icon';
import Pagination from '@/Shared/Pagination';
import { can } from '@/utils';

const Show = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          publish: info.publish || '',
          archive: info.archive || '',
     });
     const [values, setValues] = useState({
          language: '',
          activeIndex: 0,
     });

     function handleViewLanguage(e) {
          e.preventDefault();
          let index = info.language_index.findIndex((lang) => {
               return lang.id == e.target.value;
          });
          if(index != -1){
               setValues((values) => ({
                    ...values,
                    activeIndex: index,
               }));
          }
          return;
     }

     function handlePublish(e) {
          e.preventDefault();
          post(route('admin.post.publish', info.id), {preserveState:false});
     }

     function handleArchive(e) {
          e.preventDefault();
          post(route('admin.post.archive', info.id), {preserveState:false});
     }

     return (
          <React.Fragment key="security-index">
               <Helmet>
                    <title>View Post</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">View Post</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         <div className="float-right">
                              <BackButton link={'admin.post.index'} linkParams={''} />
                         </div>
                    </div>
                    <div className="col-span-12 border-t border-gray-400"></div>
                    <div className="flex col-span-12">
                         <div className="w-2/3 p-2">
                              <h1 className="text-lg text-gray-700 font-medium">{info.details[values.activeIndex]?.title}</h1>
                              <div className="text-sm text-gray-500">{info.category && (<span>{info.category} / </span>)}{info.subcategory && (<span>{info.subcategory}</span>)}</div>
                              <div className="text-sm text-gray-600 italic">{`${info.details[values.activeIndex]?.language} version`}</div>
                              {info.cover && (<img src={info.cover} className="w-full" />)}
                              <article className="mt-4 prose prose-slate prose-h1:text-blue-700 text-justify italic text-gray-500" dangerouslySetInnerHTML={{ __html: info.details[values.activeIndex]?.intro }}></article>
                              <article className="mt-4 prose prose-slate prose-h1:text-blue-700 text-justify" dangerouslySetInnerHTML={{ __html: info.details[values.activeIndex]?.body }}></article>
                         </div>
                         <div className="w-1/3 p-2 border-l border-gray-300">
                              <h1 className="text-blue-600 font-medium">Actions</h1>
                              <SelectInput
                                   className={`flex-shrink w-full inline-block relative mt-4 mr-2`}
                                   label="View Post in"
                                   name="language"
                                   disable={+false}
                                   readOnly={+false}
                                   must={+false}
                                   focus={+false}
                                   errors={[]}
                                   value={values.language}
                                   onChange={handleViewLanguage}
                              >
                                   <option value="" className="text-gray-600 italic">Select Language</option>
                                   {info.language_index.map(({id, name}) => {
                                        return <option key={`ln${id}`} value={id}>{name}</option>
                                   })}
                              </SelectInput>
                              {(info.languages_create.length > 0) && (<div className="w-full bg-gray-100 rounded p-2">
                                   <h2>Translate to :</h2>
                                   <ul className="list-none list-inside">
                                        {info.languages_create.map(({id, name}, i) => {
                                             return <li key={`tr${i}`} className="text-sm">
                                                  <InertiaLink className="text-gray-600 hover:text-blue-600" href={route('admin.post.translate.create', [info.id, id])}>{name}</InertiaLink>
                                             </li>
                                        })}
                                   </ul>
                              </div>)}
                              {(info.languages_edit.length > 0) && (<div className="w-full bg-gray-100 rounded p-2 mt-4">
                                   <h2>Edit :</h2>
                                   <ul className="list-none list-inside">
                                        {info.languages_edit.map(({id, name}, i) => {
                                             return <li key={`ed${i}`} className="text-sm">
                                                  <InertiaLink className="text-gray-600 hover:text-blue-600" href={route('admin.post.edit', [info.id, id])}>{`${name} Version`}</InertiaLink>
                                             </li>
                                        })}
                                   </ul>
                              </div>)}
                              <div className="w-full bg-gray-100 rounded p-2 mt-2">
                                   <TextInput
                                        className="form-input rounded-md shadow-sm block w-full"
                                        label="Publish On"
                                        name="publish"
                                        type="datetime-local"
                                        disable={+false}
                                        readonly={+false}
                                        must={+true}
                                        errors={errors.publish}
                                        value={data.publish}
                                        onChange={e => setData('publish', e.target.value)}
                                   />
                                   <LoadingButton type="button" onClick={handlePublish} className="w-full mt-3 items-center items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150">
                                        {info.published?'Unschedule':'Schedule'}
                                   </LoadingButton>
                              </div>
                              <div className="w-full bg-gray-100 rounded p-2 mt-2">
                                   <LoadingButton type="button" onClick={handleArchive} className="w-full items-center items-center justify-center px-4 py-2 bg-yellow-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 active:bg-yellow-900 focus:outline-none focus:border-yellow-900 focus:ring-yellow disabled:opacity-25 transition ease-in-out duration-150">
                                        {data.archive?'Unarchive':'Archive'}
                                   </LoadingButton>
                              </div>
                         </div>
                    </div>
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Show.layout = page => <Layout children={page} header={'View Post'} />;

export default Show;
