import Dashboard from './views/Dashboard.js';
import DashboardUser from './views/DashboardUser.js';
import Icons from './views/Icons.js';
import Map from './views/Map.js';
import Notifications from './views/Notifications.js';

// import UserProfile from './UserProfile.js';

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: 'tim-icons icon-single-02',
    component: DashboardUser,
    layout: '/user',
  },
  {
    path: '/demandeDevis',
    name: 'Demende de devis',
    rtlName: 'إخطارات',
    icon: 'tim-icons icon-bell-55',
    component: Notifications,
    layout: '/user',
  },
];
export default routes;
