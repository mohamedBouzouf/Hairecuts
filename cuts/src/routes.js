import HomePage from './componenten/login/HomePage';
import AboutPage from './componenten/pages/AboutPage';
// import DynamicRoutePage from './componenten/pages/DynamicRoutePage';
import NotFoundPage from './componenten/pages/NotFoundPage';
import PanelLeftPage from './componenten/pages/PanelLeftPage';
import PanelRightPage from './componenten/pages/PanelRightPage';
import MessageBarberShop from './componenten/user/Message/message';
import UserBarberPage from './componenten/user/UserBarberPage';
import UserPage from './componenten/user/userPage';
import Setting from './componenten/user/Setting/setting'
import firebase from './componenten/login/firebaseConfig'


export default [
  {
    path: '/',
    component: HomePage,
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
    path: '/userbarberpage/',
    component: UserBarberPage,
  },
  {
    path: '/userbarberpage/setting/',
    component: Setting,
  },
  {
    path: '/userbarberpage/userpage/',
    component: UserPage,
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
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

