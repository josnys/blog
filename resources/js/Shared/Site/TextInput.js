import React, {useEffect, useRef} from 'react';

export default ({ label, name, className, errors = [], disable, readonly, must, focus, autocomplete, ...props }) => {
     const _input = useRef();
     useEffect(() => {
          if(focus){
               _input.current.focus();
          }
     }, []);
     return (
          <div className={className}>
               {label && (
                    <label className="block font-medium text-sm text-slate-600 dark:text-slate-200" htmlFor={name}>
                         {label} {(must == true) && (<span className="text-red-700">*</span>)}
                    </label>
               )}
               <input
                    ref={_input}
                    id={name}
                    name={name}
                    {...props}
                    className={`shadow-none appearance-none border rounded w-full py-2 px-2 text-red-500 dark:text-slate-100 bg-slate-100 dark:bg-slate-500 leading-tight focus:outline-none focus:border-gray-300 ${errors.length ? 'border border-red-500' : ''}`}
                    disabled={disable}
                    readOnly={readonly}
                    autoComplete={autocomplete?'on':'off'}
               />
               {errors && <div className="text-red-500 text-xs italic">{errors[0]}</div>}
          </div>
     );
};
