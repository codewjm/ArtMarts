import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllShopsThunk } from '../../store/shop';

const UserShops = () => {
  const dispatch = useDispatch();
  const shops = useSelector(state => state.shops);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
    </>
  )
}

export default UserShops;
