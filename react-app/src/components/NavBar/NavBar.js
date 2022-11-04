
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
          <div id="nav-bar-logo" title="ArtMarts Home" onClick={() => history.push('/')}>ArtMarts</div>
          {/* <div className="search-bar">future search bar</div> */}
          {!sessionUser && (
            <>
              <div className="sign-in-sign-up-container small-text">
                <div className="sign-in-button" title="Sign in" onClick={() => history.push('/login')}>Sign in</div>
                <div className="sign-up-button" title="Register" onClick={() => history.push(`/sign-up`)}>Register</div>
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
