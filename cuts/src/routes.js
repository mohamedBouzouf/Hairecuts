import HomePage from './componenten/pages/HomePage';
import AboutPage from './componenten/pages/AboutPage';
import FormPage from './componenten/pages/FormPage';
import DynamicRoutePage from './componenten/pages/DynamicRoutePage';
import NotFoundPage from './componenten/pages/NotFoundPage';
import PanelLeftPage from './componenten/pages/PanelLeftPage';
import PanelRightPage from './componenten/pages/PanelRightPage';
import Register from './componenten/login/register/register'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/register/',
    component: Register,
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
