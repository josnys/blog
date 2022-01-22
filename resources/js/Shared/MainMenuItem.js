import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Icon from './Icon';

export default ({ icon, link, text }) => {
     const { url } = usePage();
     const isActive = url.startsWith('/admin/'+link.split('.')[1]);

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'text-gray-600 fill-current': isActive,
          'text-gray-500 hover:text-gray-600 fill-current': !isActive
     });

     const textClasses = classNames({
          'text-gray-600 font-semibold': isActive,
          'text-gray-500 hover:text-gray-600 hover:font-semibold': !isActive
     });

     return (
          <div className="mb-1">
               <InertiaLink href={route(link)} className={`flex items-center group py-1 px-2 ${isActive?'bg-gray-200 rounded':''}`}>
                    <Icon name={icon} className={iconClasses} />
                    <div className={textClasses}>{text}</div>
               </InertiaLink>
          </div>
     );
};
