import Dashboard from './views/Dashboard.js';
import Icons from './views/Icons.js';
import Map from './views/Map.js';
import Notifications from './views/Notifications.js';

// import UserProfile from './UserProfile.js';

var routes = [
  {
    path: '/notifications',
    name: 'Demende de devis',
    rtlName: 'إخطارات',
    icon: 'tim-icons icon-bell-55',
    component: Notifications,
    layout: '/user',
  },
  // {
  //   path: '/user-profile',
  //   name: 'User Profile',
  //   rtlName: 'ملف تعريفي للمستخدم',
  //   icon: 'tim-icons icon-single-02',
  //   component: UserProfile,
  //   layout: '/user',
  // },
];
export default routes;
