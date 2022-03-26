import React from 'react';

export default ({
     label,
     name,
     className,
     disable,
     readonly,
     must,
     focus,
     autocomplete,
     children,
     errors = [],
     ...props
}) => {
     return (
          <div className={className}>
               {label && (
                    <label className="block font-medium text-sm text-gray-600" htmlFor={name}>
                         {label} {must && (<span className="text-red-700">*</span>)}
                    </label>
               )}
               <select
                    id={name}
                    name={name}
                    disabled={disable}
                    readOnly={readonly}
                    autoComplete={autocomplete?'on':'off'}
                    {...props}
                    className={`shadow-none appearance-none border rounded w-full py-2 px-2 text-gray-500 leading-tight focus:outline-none focus:shadow ${errors.length ? 'border border-red-500' : ''}`}
               >
                    {children}
               </select>
               {errors && <div className="text-red-500 text-xs italic">{errors[0]}</div>}
          </div>
     );
};
