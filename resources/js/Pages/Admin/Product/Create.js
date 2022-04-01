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

const Create = () => {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors, transform } = useForm({
          detail: null,
          language: '',
          category: '',
          subcategory: '',
          cover: '',
          selectedCover: '',
          subs: [],
          name: '',
          short_des: '',
          description: '',
          currency: '',
          price: 0,
          gallery: '',
          active: true,
          publish: false,
     });

     const [values, setValues] = useState({
          short_des: '',
          description: '',
     });

     function handleChangeCategory(e) {
          e.preventDefault();
          if(e.target.value != ''){
               let category = {};
               let index = info.categories.findIndex((cat) => {
                    return cat.id == e.target.value;
               });
               if(index != -1){
                    category = info.categories[index];
                    setData((data) => ({
                         ...data,
                         category: category.id,
                         subs: category.subs
                    }));
               }else{
                    return;
               }
          }else{
               return;
          }
     }

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
               short_des: values.short_des,
               description: values.description,
          }));
          post(route('admin.product.store'));
     }

     return (
          <React.Fragment key="uprofile">
               <Helmet>
                    <title>Create Product</title>
               </Helmet>
               <form onSubmit={handleSubmit}>
                    <ProfileCard>
                         <div className="md:col-span-1">
                              <div className="px-4 sm:px-0">
                                   <h3 className="text-lg font-medium text-gray-900">Create Product</h3>
                                   <p className="mt-1 text-sm text-gray-600">
                                        Create a new product.
                                   </p>
                                   <h4 className="mt-4 text-md text-gray-600">Selected main image for product</h4>
                                   {data.selectedCover && (<img className="w-full" onClick={handleRemove} src={data.selectedCover} />)}
                                   {(info.medias.length > 0) && (<div className="col-span-12 border-t border-gray-300 mt-4 pt-4">
                                        <div className="w-full grid grid-cols-3 gap-3">
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
                                             <BackButton link={'admin.product.index'} linkParams={null} />
                                        </div>
                                        <div className="col-span-12">
                                             <SelectInput
                                                  className={`flex-shrink w-full inline-block relative mt-4 mr-2 ${data.edit?'hidden':''}`}
                                                  label="Language"
                                                  name="language"
                                                  disable={false}
                                                  readOnly={false}
                                                  must={true}
                                                  focus={false}
                                                  errors={errors.language}
                                                  value={data.language}
                                                  onChange={e => setData('language', e.target.value)}
                                             >
                                                  <option value="" className="text-gray-600 italic">Select Language</option>
                                                  {info.languages.map(({id, name}) => {
                                                       return <option key={`ln${id}`} value={id}>{name}</option>
                                                  })}
                                             </SelectInput>
                                             <SelectInput
                                                  className={`flex-shrink w-full inline-block relative mt-4 mr-2 ${data.edit?'hidden':''}`}
                                                  label="Category"
                                                  name="category"
                                                  disable={false}
                                                  readOnly={false}
                                                  must={false}
                                                  focus={true}
                                                  errors={errors.category}
                                                  value={data.category}
                                                  onChange={handleChangeCategory}
                                             >
                                                  <option value="" className="text-gray-600 italic">Select Category</option>
                                                  {info.categories.map(({id, name}) => {
                                                       return <option key={`cat${id}`} value={id}>{name}</option>
                                                  })}
                                             </SelectInput>
                                             <SelectInput
                                                  className={`flex-shrink w-full inline-block relative mt-4 mr-2 ${data.edit?'hidden':''}`}
                                                  label="Sub-Category"
                                                  name="subcategory"
                                                  disable={false}
                                                  readOnly={false}
                                                  must={false}
                                                  focus={true}
                                                  errors={errors.subcategory}
                                                  value={data.subcategory}
                                                  onChange={e => setData('subcategory', e.target.value)}
                                             >
                                                  <option value="" className="text-gray-600 italic">Select Category</option>
                                                  {data.subs.map(({id, name}) => {
                                                       return <option key={`scat${id}`} value={id}>{name}</option>
                                                  })}
                                             </SelectInput>
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Name"
                                                  name="name"
                                                  type="text"
                                                  disable={+false}
                                                  readonly={+false}
                                                  must={+true}
                                                  errors={errors.name}
                                                  value={data.name}
                                                  onChange={e => setData('name', e.target.value)}
                                             />
                                             <div className="form-input rounded-md shadow-sm mt-4 block w-full">
                                                  <label className="block font-medium text-sm text-gray-700" htmlFor="intro">Short Description</label>
                                                  <CKEditor
                                                       initData={data.short_des}
                                                       name="short_des"
                                                       config={{toolbar: [
                                                            ['Cut', 'Copy', 'Paste', 'Undo', 'Redo'],
                                                            ['Bold', 'Italic', 'Strike'],
                                                            ['NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                                                            ['Link','Anchor'],
                                                            ['Image','Table'],
                                                            ['Styles','Format', 'Font', 'FontSize']
                                                       ]}}
                                                       onChange={(e) => {
                                                            setData(data => ({
                                                                 ...data,
                                                                 short_des: e.editor.getData(),
                                                            }));
                                                       }}
                                                  />
                                             </div>
                                             <div className="form-input rounded-md shadow-sm mt-4 block w-full">
                                                  <label className="block font-medium text-sm text-gray-700" htmlFor="intro">Description</label>
                                                  <CKEditor
                                                       initData={data.description}
                                                       name="description"
                                                       config={{toolbar: [
                                                            ['Cut', 'Copy', 'Paste', 'Undo', 'Redo'],
                                                            ['Bold', 'Italic', 'Strike'],
                                                            ['NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                                                            ['Link','Anchor'],
                                                            ['Image','Table'],
                                                            ['Styles','Format', 'Font', 'FontSize']
                                                       ]}}
                                                       onChange={(e) => {
                                                            setData(data => ({
                                                                 ...data,
                                                                 description: e.editor.getData(),
                                                            }));
                                                       }}
                                                  />
                                             </div>
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Currency"
                                                  name="currency"
                                                  type="text"
                                                  disable={+false}
                                                  readonly={+false}
                                                  must={+false}
                                                  errors={errors.currency}
                                                  value={data.currency}
                                                  onChange={e => setData('currency', e.target.value)}
                                             />
                                             <TextInput
                                                  className="form-input rounded-md shadow-sm mt-4 block w-full"
                                                  label="Price"
                                                  name="price"
                                                  type="number"
                                                  disable={+false}
                                                  readonly={+false}
                                                  must={+false}
                                                  errors={errors.price}
                                                  value={data.price}
                                                  onChange={e => setData('price', e.target.value)}
                                             />
                                             <SelectInput
                                                  className={`flex-shrink w-full inline-block relative mt-4 mr-2 ${data.edit?'hidden':''}`}
                                                  label="Gallery"
                                                  name="gallery"
                                                  disable={false}
                                                  readOnly={false}
                                                  must={false}
                                                  focus={false}
                                                  errors={errors.gallery}
                                                  value={data.gallery}
                                                  onChange={e => setData('gallery', e.target.value)}
                                             >
                                                  <option value="" className="text-gray-600 italic">Select a Gallery</option>
                                                  {info.galleries.map(({id, url}) => {
                                                       return <option key={`ln${id}`} value={id}>{url}</option>
                                                  })}
                                             </SelectInput>
                                             <label className="flex items-center mt-3" htmlFor="status">
                                                  <input name="active" className="form-checkbox" type="checkbox" value={data.active} checked={data.active} onChange={e => setData('active', !data.status)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Active</span>
                                             </label>
                                             <label className="flex items-center mt-3" htmlFor="publish">
                                                  <input name="publish" className="form-checkbox" type="checkbox" value={data.publish} checked={data.publish} onChange={e => setData('publish', !data.publish)}/>
                                                  <span className="ml-2 text-sm text-gray-800">Publish Inmediately</span>
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
Create.layout = page => <Layout children={page} header={'Create Product'} />;

export default Create;
