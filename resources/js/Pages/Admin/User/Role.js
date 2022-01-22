import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import Icon from '@/Shared/Icon';
import classNames from 'classnames';
import TextInput from '@/Shared/TextInput';
import TextArea from '@/Shared/TextArea';
import { BackButton } from '@/Shared/BackButton';
import LoadingButton from '@/Shared/LoadingButton';
import axios from 'axios';

function Role() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          user_roles: info.user_roles || [],
          checkAll: false,
          checkAllCaption: 'Select All',
          errors: errors
     });

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-white fill-current': false,
          'text-gray-500 hover:text-white fill-current': true
     });

     function handleChange(e) {
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          const _data = parseInt(e.target.value);
          for(var i = 0; i < data.user_roles.length; i++){
               if(data.user_roles[i].id == _data){
                    data.user_roles[i].checked = value;
                    break;
               }
          }
          for(var i = 0; i < info.roles.length; i++){
               if(info.roles[i].id == _data){
                    info.roles[i].isCheck = value;
                    break;
               }
          }
          let perms = data.user_roles;
          if(perms.indexOf(_data) != -1){
               perms.splice(perms.indexOf(_data), 1);
          }else{
               perms.push(_data);
          }
          setData('user_roles', perms);
     }

     function handleAll(e){
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          let perms = [];
          let caption = (value) ? 'Unselect All' : 'Select All';
          for(var i = 0; i < info.roles.length; i++){
               if(value){
                    perms.push(info.roles[i].id);
               }
               info.roles[i].isCheck = value;
          }
          if(!value){
               perms = [];
          }
          setData('user_roles', perms);
          setData('checkAllCaption', caption);
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.user.post.role', info.user.id));
     }

     return (
          <React.Fragment key="assign-perms">
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-md font-medium text-gray-900">Assign Role to User :</h3>
                              <h3 className="text-lg font-medium text-gray-700 mt-3">{info.user.name}</h3>
                              <p className="mt-1 text-sm text-gray-600">
                                   Assigning roles to user will provide them with ability to manage different aspect of the business
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'admin.user.index'} linkParams={''} />
                                        </div>
                                        <div className="sm:col-span-4">
                                             <div className="flex mt-4">
                                                  <label className="flex items-center mr-4" htmlFor="perms">
                                                       <input name="checkAll" id="checkAll" className="form-checkbox" type="checkbox" checked={data.chekcAll} onChange={handleAll}/>
                                                       <span className="ml-2 text-sm text-gray-600">{data.checkAllCaption}</span>
                                                  </label>
                                             </div>
                                             <ul className="overflow-auto h-64 list-none pt-2 mt-2">
                                                  {info.roles.map(({id, display, description, isCheck}) => {
                                                       return <li className={`p-2 mt-2 rounded hover:bg-gray-200 hover:shadow-md ${(isCheck?'bg-blue-200':'')}`} key={id}>
                                                            <label className="flex items-center" htmlFor="perms">
                                                                 <input name="permissions[]" id="permissions[]" className="form-checkbox" type="checkbox" value={id} checked={isCheck} onChange={handleChange}/>
                                                                 <span className="ml-2 text-sm text-gray-800">{display}</span>
                                                            </label>
                                                            <p className="text-sm text-gray-500 pl-6">{description}</p>
                                                       </li>
                                                  })}
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex items-center justify-end px-4 py-3 bg-gray-100 text-right sm:px-6 rounded-b">
                                   <LoadingButton type="submit" loading={processing} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4">
                                        Assign Roles
                                   </LoadingButton>
                              </div>
                         </form>
                    </DataCard>
               </ProfileCard>
          </React.Fragment>
     );
}

// Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Role.layout = page => <Layout children={page} header={'Assign Role'} />;

export default Role;
