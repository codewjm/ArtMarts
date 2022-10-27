import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllShopsThunk } from '../../store/shop';
import { getAllUsersThunk } from '../../store/user';
import ShopsCard from '../ShopCard';

const UserShops = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const shops = useSelector(state => state.shops);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllShopsThunk())
    dispatch(getAllUsersThunk()).then(() => setLoaded(true))
  },[])

  if (!sessionUser) history.push('/')

  const shopsArray = Object.values(shops)
  const userShops = shopsArray.filter(shop => shop.userId === sessionUser.id)

  return loaded && (
    <>
      {
        userShops.map(shop => ( <ShopsCard shop={shop} key={shop.id} /> ))
      }
    </>
  )
}

export default UserShops;
