import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, NavLink } from 'reactstrap';
import { logout } from '../../actions/auth';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './nav.css';
import { useStateValue } from '../../StateProvider';
import Popup from '../shop-components/popup';

const Navbar = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'logo';
  let anchor = '/';
  const { isLoggedIn } = useSelector(state => state.auth);
  const { user: currentUser } = useSelector(state => state.auth);
  console.log(isLoggedIn);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const dispatch = useDispatch();
  const [{ basket, user }, dispatchb] = useStateValue();
  console.log('eagaegag', basket);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      {isOpen && <Popup handleClose={togglePopup} />}
      <nav className="navbar navbar-area navbar-expand-lg nav-style-01" style={{ marginBottom: '20px', backgroundColor: 'white' }}>
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo-wrapper mobile-logo">
              <a href={anchor} className="logo">
                <img src={publicUrl + 'assets/img/logo.png'} alt={imgattr} />
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#Riyaqas_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </span>
            </button>
          </div>
          {!isLoggedIn ? (
            <div className="collapse navbar-collapse" id="Riyaqas_main_menu">
              <div className="logo-wrapper desktop-logo">
                <a href="/" className="logo">
                  <img src={'assets/img/logo.png'} alt={imgattr} width="150" height="40" />
                </a>
              </div>
              <ul className="navbar-nav">
                <li style={{ fontSize: '13px' }}>
                  <Link to={'/'}>Accueil</Link>
                </li>
                <li style={{ fontSize: '13px' }}>
                  <Link to="/propos">A propos de nous</Link>
                </li>

                <li style={{ fontSize: '13px' }}>
                  <Link to="/shop">shop</Link>
                </li>
                <li style={{ fontSize: '13px' }}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li style={{ fontSize: '13px' }}>
                  <Link to="/login">Connectez-vous</Link>
                </li>
                <li style={{ fontSize: '13px' }}>
                  <Link to="/register">S'inscrire</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="Riyaqas_main_menu">
              <div className="logo-wrapper desktop-logo">
                <Link to="/" className="logo">
                  <img src={'assets/img/logo.png'} alt={imgattr} width="150" height="40" />
                </Link>
              </div>
              <ul className="navbar-nav">
                <li style={{ fontSize: '13px' }}>
                  <Link to={'/'}>Accueil</Link>
                </li>
                <li style={{ fontSize: '13px' }}>
                  <Link to="/propos">A propos de nous</Link>
                </li>

                <li style={{ fontSize: '13px' }}>
                  <Link to="/shop">shop</Link>
                </li>
                <li style={{ fontSize: '13px' }}>
                  <Link to="/contact">Contact</Link>
                </li>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav onClick={e => e.preventDefault()}>
                    <div>
                      <Link>config</Link>
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    {showModeratorBoard && (
                      <NavLink>
                        <DropdownItem className="nav-item">
                          <Link to={'/mod'}>Moderator Board</Link>
                        </DropdownItem>
                      </NavLink>
                    )}
                    {showAdminBoard && (
                      <NavLink>
                        <DropdownItem style={{ height: '10px' }}>
                          <Link style={{ color: 'gray', height: '10px' }} to={'/admin'}>
                            Admin Board
                          </Link>
                        </DropdownItem>
                      </NavLink>
                    )}
                    {currentUser && (
                      <NavLink tag="li">
                        <DropdownItem style={{ height: '10px' }}>
                          <Link style={{ color: 'gray', height: '10px' }} to={'/user'}>
                            User
                          </Link>
                        </DropdownItem>
                      </NavLink>
                    )}

                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <DropdownItem onClick={logOut}>Log out</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </ul>
            </div>
          )}
          <div className="header_optionBasket">
            <ShoppingBasketIcon onClick={togglePopup} />
            <span className="header_optionLineTow header_basketCount"> {basket?.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
