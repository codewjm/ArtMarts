import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';

const DropNav = () => {

  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state?.session?.user)
  const history = useHistory()
  const [showDropNav, setShowDropNav] = useState(false);

  const openDropNav = () => {
    if (showDropNav) return
    setShowDropNav(true)
  };


  useEffect(() => {
    if (!showDropNav) return;

    const closeDropNav = () => {
      setShowDropNav(false)
    };

    document.addEventListener('click', closeDropNav);

    return () => document.removeEventListener("click", closeDropNav);
  }, [showDropNav]);



  return (
    <div className="drop-nav" title="Account Options" onClick={openDropNav}>
      <div className="drop-nav-button">
        <i className="fa-solid fa-user-circle fa-bold" />
        <i className="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      {showDropNav && (
        <div className="drop-nav-open">

          {/* <div className="drop-nav-name"><i className="fas fa-user-circle" />{sessionUser?.first_name}</div> */}
          {/* <div className="drop-nav-option"><LogoutButton /></div> */}
          <div ><LogoutButton /></div>
        </div>
      )}
    </div>
  );
}

export default DropNav;
