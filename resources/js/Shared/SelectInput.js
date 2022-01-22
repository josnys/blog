import React from 'react';

export default ({
     label,
     name,
     className,
     must,
     children,
     errors = [],
     ...props
}) => {
     return (
          <div className={className}>
               {label && (
                    <label className="block font-medium text-sm text-gray-700" htmlFor={name}>
                         {label} {(must == 1) && (<span className="text-red-700">*</span>)}
                    </label>
               )}
               <select
                    id={name}
                    name={name}
                    {...props}
                    className={`shadow-none appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow ${errors.length ? 'border border-red-500' : ''}`}
               >
                    {children}
               </select>
               {errors && <div className="form-error">{errors[0]}</div>}
          </div>
     );
};
