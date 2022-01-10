import React, { useState, useRef } from 'react';
import { filesize } from '../utils';

const Button = ({ text, onClick }) => (
     <button
          type="button"
          className="focus:outline-none px-4 py-1 bg-gray-600 hover:bg-gray-700 rounded-sm text-xs font-medium text-white"
          onClick={onClick}
          >
          {text}
     </button>
);

export default ({ className, name, label, accept, errors = [], onChange }) => {
     const fileInput = useRef();
     const [file, setFile] = useState(null);
     const [path, setPath] = useState(null);

     function browse() {
          fileInput.current.click();
     }

     function remove() {
          setFile(null);
          setPath(null);
          onChange(null, null);
          fileInput.current.value = null;
     }

     function handleFileChange(e) {
          let file = e.target.files[0];
          let path = URL.createObjectURL(event.target.files[0]);
          setFile(file);
          setPath(path);
          onChange(file, path);
     }

     return (
          <div className={className}>
               {/*label && (
                    <label className="form-label" htmlFor={name}>
                         {label}:
                    </label>
               )*/}
               <div className={`form-input p-0 ${errors.length && 'error'}`}>
                    <input
                         id={name}
                         ref={fileInput}
                         accept={accept}
                         type="file"
                         className="hidden"
                         onChange={handleFileChange}
                    />
                    {!file && (
                         <div className="py-2">
                              <Button text={label} onClick={browse} />
                         </div>
                    )}
                    {file && (
                         <div className="flex items-center justify-between p-2">
                              <div className="flex-1 pr-1">
                                   {file.name}
                                   <span className="text-gray-600 text-xs ml-1">
                                        ({filesize(file.size)})
                                   </span>
                              </div>
                              <Button text="Clear" onClick={remove} />
                         </div>
                    )}
               </div>
               {errors.length > 0 && <div className="text-red-500 text-xs italic">{errors[0]}</div>}
          </div>
     );
};
