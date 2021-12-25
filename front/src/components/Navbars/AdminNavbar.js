/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import './AdminNavbar.css';
function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState('navbar-transparent');
  const { user: currentUser } = useSelector(state => state.auth);
  console.log(currentUser);
  React.useEffect(() => {
    window.addEventListener('resize', updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('resize', updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor('bg-white');
    } else {
      setcolor('navbar-transparent');
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor('navbar-transparent');
    } else {
      setcolor('bg-white');
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
      {currentUser ? (
        <>
          <Navbar className={classNames('navbar-absolute', color)} expand="lg">
            <Container fluid>
              <div className="navbar-wrapper">
                <div
                  className={classNames('navbar-toggle d-inline', {
                    toggled: props.sidebarOpened,
                  })}
                >
                  <NavbarToggler onClick={props.toggleSidebar}>
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </NavbarToggler>
                </div>
              </div>
              <NavbarToggler onClick={toggleCollapse}>
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
              </NavbarToggler>
              <Collapse navbar isOpen={collapseOpen}>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle caret color="default" nav onClick={e => e.preventDefault()}>
                      <div className="photo">{/* <img alt="..." src="../../assets/img/profilImage.jpg" /> */}</div>
                      <b className="caret d-none d-lg-block d-xl-block" />
                      <p className="UserNameDrop">{currentUser.username}</p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          <Link to={'/profile'} className="nav-link">
                            Profile
                          </Link>
                        </DropdownItem>
                      </NavLink>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          <Link to={'/'} className="nav-link">
                            Acceuil
                          </Link>
                        </DropdownItem>
                      </NavLink>
                      <DropdownItem divider tag="li" />
                      <NavLink tag="li">
                        <DropdownItem className="nav-item">
                          <Link to={'/'} className="nav-link" onClick={logOut}>
                            LogOut
                          </Link>
                        </DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <li className="separator d-lg-none" />
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Modal modalClassName="modal-search" isOpen={modalSearch} toggle={toggleModalSearch}>
            <ModalHeader>
              <Input placeholder="SEARCH" type="text" />
              <button aria-label="Close" className="close" onClick={toggleModalSearch}>
                <i className="tim-icons icon-simple-remove" />
              </button>
            </ModalHeader>
          </Modal>
        </>
      ) : (
        true
      )}
    </>
  );
}

export default AdminNavbar;
