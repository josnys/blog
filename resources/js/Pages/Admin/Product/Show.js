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
import { can, currencyFormat } from '@/utils';

const Show = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          publish: info.publish || '',
     });
     const [values, setValues] = useState({
          language: info.language_index[0].id || '',
          activeIndex: 0,
     });

     function handleViewLanguage(e) {
          e.preventDefault();
          e.persist();
          let index = info.language_index.findIndex((lang) => {
               return lang.id == e.target.value;
          });
          if(index != -1){
               setValues((values) => ({
                    ...values,
                    language: e.target.value,
                    activeIndex: index,
               }));
          }
          return;
     }

     return (
          <React.Fragment key="security-index">
               <Helmet>
                    <title>View Product</title>
               </Helmet>
               <div className="max-w-7xl mx-auto p-2">
                    <InertiaLink className="font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight" href={route('admin.home')}>Dashboard</InertiaLink> | <span className="text-md text-gray-700 leading-tight">View Product</span>
               </div>
               <DataContainer>
                    <div className="col-span-12">
                         <div className="float-right">
                              <BackButton link={'admin.product.index'} linkParams={null} />
                         </div>
                    </div>
                    <div className="col-span-12 border-t border-gray-400"></div>
                    <div className="flex col-span-12">
                         <div className="w-2/3 p-2">
                              <h1 className="text-lg text-gray-700 font-medium">{info.details[values.activeIndex]?.name}</h1>
                              <div className="text-sm text-gray-500">{info.category && (<span>{info.category}</span>)}{info.subcategory && (<span> / {info.subcategory}</span>)}</div>
                              <div className="text-sm text-gray-600 italic">{info.details[values.activeIndex]?.language} version</div>
                              {info.cover && (<img src={info.cover} className="w-full" />)}
                              <p>{currencyFormat(info.price, info.currency)}</p>
                              <article className="mt-4 prose prose-slate prose-h1:text-blue-700 text-justify italic text-gray-500" dangerouslySetInnerHTML={{ __html: info.details[values.activeIndex]?.short_des }}></article>
                              <article className="mt-4 prose prose-slate prose-h1:text-blue-700 text-justify" dangerouslySetInnerHTML={{ __html: info.details[values.activeIndex]?.description }}></article>
                         </div>
                         <div className="w-1/3 p-2 border-l border-gray-300">
                              <h1 className="text-blue-600 font-medium">Actions</h1>
                              <SelectInput
                                   className={`flex-shrink w-full inline-block relative mt-4 mr-2`}
                                   label="View Post in"
                                   name="language"
                                   disable={+false}
                                   readOnly={+false}
                                   must={false}
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
                                                  <InertiaLink className="text-gray-600 hover:text-blue-600" href={route('admin.product.translate.create', [info.id, id])}>{name}</InertiaLink>
                                             </li>
                                        })}
                                   </ul>
                              </div>)}
                              {(info.languages_edit.length > 0) && (<div className="w-full bg-gray-100 rounded p-2 mt-4">
                                   <h2>Edit :</h2>
                                   <ul className="list-none list-inside">
                                        {info.languages_edit.map(({id, name}, i) => {
                                             return <li key={`ed${i}`} className="text-sm">
                                                  <InertiaLink className="text-gray-600 hover:text-blue-600" href={route('admin.product.edit', [info.id, id])}>{`${name} Version`}</InertiaLink>
                                             </li>
                                        })}
                                   </ul>
                              </div>)}
                         </div>
                    </div>
               </DataContainer>
          </React.Fragment>
     );
};

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Show.layout = page => <Layout children={page} header={'View Product'} />;

export default Show;
