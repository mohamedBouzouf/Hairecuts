import HomePage from './componenten/pages/HomePage';
import Authentication from './componenten/login/Authentication'
import AboutPage from './componenten/pages/AboutPage';
import FormPage from './componenten/pages/FormPage';
import DynamicRoutePage from './componenten/pages/DynamicRoutePage';
import NotFoundPage from './componenten/pages/NotFoundPage';
import PanelLeftPage from './componenten/pages/PanelLeftPage';
import PanelRightPage from './componenten/pages/PanelRightPage';
import Register from './componenten/login/register/register';
import MessageBarberShop from './componenten/user/Message/message';
import UserBarberPage from './componenten/user/UserBarberPage';

import firebase from '../src/componenten/login/firebaseConfig';

export default [
  {
    path: '/',
    component: Authentication,
  },
  {
    path: '/home/',
    component: HomePage,
    beforeEnter: function (routeTo, routeFrom, resolve, reject) {
      if (firebase.auth().currentUser !== null) {
        resolve();
      } else {
        console.log("don't allow to visit this page for unauthenticated users");
        reject();
      }
    }

  },
  {
    path: '/register/',
    component: Register,
  },
  {
    path: '/userbarberpage/',
    component: UserBarberPage,
  },
  {
    path: '/messenger/',
    component: MessageBarberShop,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
