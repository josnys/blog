import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({
     color: '#D76DE3',
     showSpinner: true
});

const app = document.getElementById('app');

if('serviceWorker' in navigator){
     navigator.serviceWorker.register('/service-worker.js', {scope: '/'});
}

render(
     <InertiaApp
          initialPage={JSON.parse(app.dataset.page)}
          resolveComponent={name => import(`./Pages/Site/${name}`).then(module => module.default)}
     />,app
);
