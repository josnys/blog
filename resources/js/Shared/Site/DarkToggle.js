import React from 'react';
import { ThemeContext } from './ThemeContext';
import Icon from '../Icon';
import classNames from 'classnames';

const iconSun = classNames('w-4 h-4', {
     'text-yellow-300 fill-current': false,
     'text-yellow-300 hover:text-yellow-100 fill-current': true
});

const iconMoon = classNames('w-4 h-4', {
     'text-white fill-current': false,
     'text-gray-100 hover:text-white fill-current': true
});

const Toggle = () => {
     const { theme, setTheme } = React.useContext(ThemeContext);

     return (
          <div className="transition delay-150 duration-500 ease-in-out rounded-full p-2 bg-red-700 dark:bg-gray-600">
               {theme === 'dark' ? (
                    <div className="cursor-pointer" onClick={() => setTheme('light')}>
                         <Icon name="sun" className={iconSun} />
                    </div>
               ) : (
                    <div className="cursor-pointer" onClick={() => setTheme('dark')}>
                         <Icon name="moon" className={iconMoon} />
                    </div>
               )}
          </div>
     );
};

export default Toggle;
