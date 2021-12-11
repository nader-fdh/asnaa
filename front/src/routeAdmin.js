import Dashboard from './views/Dashboard.js';
import DemandeAchats from './views/DemandeAchats.js';
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
    path: '/product',
    name: 'Product',

    icon: 'tim-icons icon-atom',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/demandeAchat',
    name: 'Demande des achats',
    rtlName: 'خرائط',
    icon: 'tim-icons icon-pin',
    component: DemandeAchats,
    layout: '/admin',
  },

  {
    path: '/demandeDevis',
    name: 'Demande récus',
    rtlName: 'قائمة الجدول',
    icon: 'tim-icons icon-puzzle-10',
    component: TableList,
    layout: '/admin',
  },
];
export default routesAdmin;
