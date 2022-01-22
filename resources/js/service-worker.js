import { clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

clientsClaim();

registerRoute(
     new RegExp('.*'),
     new NetworkFirst({
          cacheName: 'jscms-v1',
     })
)
