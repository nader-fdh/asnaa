import Dashboard from './views/Dashboard.js';
import Icons from './views/Icons.js';
import Map from './views/Map.js';
import Notifications from './views/Notifications.js';

import TableList from './views/TableList.js';
// import UserProfile from './UserProfile.js';

var routesAdmin = [
  {
    path: '/dashboard',
    name: 'Dashboard',

    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Product',

    icon: 'tim-icons icon-atom',
    component: Icons,
    layout: '/admin',
  },
  //   {
  //     path: "/map",
  //     name: "Map",
  //     rtlName: "خرائط",
  //     icon: "tim-icons icon-pin",
  //     component: Map,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/notifications",
  //     name: "Notifications",
  //     rtlName: "إخطارات",
  //     icon: "tim-icons icon-bell-55",
  //     component: Notifications,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/user-profile",
  //     name: "User Profile",
  //     rtlName: "ملف تعريفي للمستخدم",
  //     icon: "tim-icons icon-single-02",
  //     component: UserProfile,
  //     layout: "/admin",
  //   },
  {
    path: '/tables',
    name: 'Demande récus',
    rtlName: 'قائمة الجدول',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin',
  },
];
export default routesAdmin;
