import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import ProfileCard from '@/Shared/ProfileCard';
import DataCard from '@/Shared/DataCard';
import TextInput from '@/Shared/TextInput';
import TextArea from '@/Shared/TextArea';
import LoadingButton from '@/Shared/LoadingButton';
import { BackButton } from '@/Shared/BackButton';

function AssignPermission() {
     const { auth, info } = usePage().props;
     const { data, setData, post, processing, errors } = useForm({
          role_permissions: info.role_permissions || [],
          checkAll: false,
          checkAllCaption: 'Select All',
     });

     function handleChange(e) {
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          const _data = parseInt(e.target.value);
          for(var i = 0; i < data.role_permissions.length; i++){
               if(data.role_permissions[i].id == _data){
                    data.role_permissions[i].checked = value;
                    break;
               }
          }
          for(var i = 0; i < info.permissions.length; i++){
               if(info.permissions[i].id == _data){
                    info.permissions[i].isCheck = value;
                    break;
               }
          }
          let perms = data.role_permissions;
          if(perms.indexOf(_data) != -1){
               perms.splice(perms.indexOf(_data), 1);
          }else{
               perms.push(_data);
          }
          setData('role_permissions', perms);
     }

     function handleAll(e){
          const key = e.target.name;
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
          let perms = [];
          let caption = (value) ? 'Unselect All' : 'Select All';
          for(var i = 0; i < info.permissions.length; i++){
               info.permissions[i].isCheck = value;
               perms = [...perms, info.permissions[i].id];
          }
          if(!value){
               perms = [];
          }
          setData('role_permissions', perms);
          setData('checkAllCaption', caption);
     }

     function handleSubmit(e) {
          e.preventDefault();
          post(route('admin.role.post.assign', info.role.id));
     }

     return (
          <React.Fragment key="assign-perms">
               <Helmet>
                    <title>Assign Permissions</title>
               </Helmet>
               <ProfileCard>
                    <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                              <h3 className="text-md font-medium text-gray-700">Assign Permissions to Role :</h3>
                              <h3 className="text-lg font-medium text-gray-600 mt-3">{info.role.display}</h3>
                              <p className="mt-1 text-sm text-gray-500">
                                   {info.role.description}
                              </p>
                         </div>
                    </div>
                    <DataCard>
                         <form onSubmit={handleSubmit}>
                              <div className="px-4 py-5 sm:p-6">
                                   <div className="grid grid-cols-3">
                                        <div className="col-span-12 text-right">
                                             <BackButton link={'admin.security.index'} linkParams={''} />
                                        </div>
                                        <div className="sm:col-span-4">
                                             <div className="flex mt-4">
                                                  <label className="flex items-center mr-4" htmlFor="perms">
                                                       <input name="checkAll" id="checkAll" className="form-checkbox" type="checkbox" checked={data.chekcAll} onChange={handleAll}/>
                                                       <span className="ml-2 text-sm text-gray-600">{data.checkAllCaption}</span>
                                                  </label>
                                             </div>
                                             <ul className="overflow-auto h-64 list-none pt-2 mt-2">
                                                  {info.permissions.map(({id, display, description, isCheck}) => {
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
                                        Assign Permissions
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
AssignPermission.layout = page => <Layout children={page} header={'Assign Permissions'} />;

export default AssignPermission;
