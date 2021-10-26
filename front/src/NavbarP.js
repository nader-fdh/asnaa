import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { logout } from './actions/auth';
import { clearMessage } from './actions/message';
import './App.css';
import { history } from './helpers/history';

const NavbarP = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(location => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

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
      <nav className="navbarp">
        <div>
          {showModeratorBoard && (
            <li>
              <Link to={'/mod'} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li>
              <Link to={'/admin'} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li>
              <Link to={'/user'} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div>
            <li>
              <Link to={'/profile'} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li>
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to={'/login'} className="nav-link">
                Login
              </Link>
            </li>

            <li>
              <Link to={'/register'} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarP;
