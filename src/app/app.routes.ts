import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home/index';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: 'About', resolve: { 'yourData': DataResolver }},
  { path: 'detail', component: 'Detail', canActivate: [ WebpackAsyncRoute ],
    children: [{ path: '', component: 'Index' }]
  }
];

export const asyncRoutes: AsyncRoutes = {
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
  'Index': require('es6-promise-loader!./+detail')
};

export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail']
];
