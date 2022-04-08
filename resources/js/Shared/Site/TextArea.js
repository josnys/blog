import React from 'react';

export default ({ label, name, disable, readonly, must, focus, autocomplete, className, errors = [], ...props }) => {
     return (
          <div className={className}>
               {label && (
                    <label className="block font-medium text-sm text-slate-600 dark:text-slate-200" htmlFor={name}>
                         {label}:
                    </label>
               )}
               <textarea
                    id={name}
                    name={name}
                    disabled={disable}
                    readOnly={readonly}
                    autoComplete={autocomplete?'on':'off'}
                    {...props}
                    className={`shadow-none appearance-none border rounded w-full p-2 text-red-500 dark:text-slate-100 bg-slate-100 dark:bg-slate-500 leading-tight focus:outline-none focus:shadow ${errors.length ? 'border border-red-500' : ''}`}
               ></textarea>
               {errors && <div className="text-red-500 text-xs italic">{errors[0]}</div>}
          </div>
     );
};
