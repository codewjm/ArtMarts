
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DropNav from './DropNav';
import './NavBar.css';

const NavBar = () => {

  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const history = useHistory()




  return (
    <>
      <div className="master-nav-container">
        <div className="nav-container">
          <div id="nav-bar-logo" onClick={() => history.push('/')}>ArtMarts</div>
          {!sessionUser && (
            <>
              <div className="sign-in-sign-up-container small-text">
                <div className="sign-in-button" onClick={() => history.push('/login')}>Sign in</div>
                <div className="sign-up-button" onClick={() => history.push(`/sign-up`)}>Register</div>
              </div>
            </>
          )}
          {sessionUser && (
            <div className="shop-manager-drop-nav-container" >
                <div className="shop-manager" title="ArtMart Manager" onClick={() => history.push('/user-shops')}>
                  <i className="fa-sharp fa-solid fa-store " />
              </div>
              <div>
                <DropNav />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="border-nav"></div> */}
    </>
  );
}

export default NavBar;
