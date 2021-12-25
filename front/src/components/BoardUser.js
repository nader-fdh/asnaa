import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// core components
import AdminNavbar from './Navbars/AdminNavbar.js';
import Footer from './Footer/Footer.js';
import Sidebar from './Sidebar/Sidebar.js';
import FixedPlugin from './FixedPlugin/FixedPlugin.js';

import routes from '../routes.js';

import logo from '../assets/img/react-logo.png';
import { BackgroundColorContext } from '../contexts/BackgroundColorContext';
import UserService from '../services/user.service';
import Errorpage from './section-components/error';

var ps;

function BoardUser(props) {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getUserBoard().then(
      response => {
        setContent(response.data);
      },
      error => {
        const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        setContent(_content);
      }
    );
  }, []);

  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(document.documentElement.className.indexOf('nav-open') !== -1);

  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    setsidebarOpened(!sidebarOpened);
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/user') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  return (
    <div>
      {content === 'No token provided!' ? (
        <Errorpage />
      ) : (
        <div>
          <BackgroundColorContext.Consumer>
            {({ color, changeColor }) => (
              <React.Fragment>
                <div className="wrapper">
                  <Sidebar
                    routes={routes}
                    logo={{
                      outterLink: 'https://www.creative-tim.com/',
                      text: 'ASSNAA',
                      imgSrc: logo,
                    }}
                    toggleSidebar={toggleSidebar}
                  />
                  <div className="main-panel" ref={mainPanelRef} data={color}>
                    <AdminNavbar brandText={getBrandText(location.pathname)} toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
                    <Switch>
                      {getRoutes(routes)}
                      <Redirect from="*" to="/user/dashboard" />
                    </Switch>
                    {/* {
                // we don't want the Footer to be rendered on map page
                location.pathname === "/admin/maps" ? null : <Footer fluid />
              } */}
                  </div>
                </div>
                <FixedPlugin bgColor={color} handleBgClick={changeColor} />
              </React.Fragment>
            )}
          </BackgroundColorContext.Consumer>
        </div>
      )}
    </div>
  );
}

export default BoardUser;
