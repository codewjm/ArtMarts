import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";
import { getAllUsersThunk } from '../../store/user';
import { getAllShopsThunk } from '../../store/shop';
// import CreateShopForm from '../Shops/CreateShopForm';
import ShopsCard from '../ShopCard';
import MonetizeYourPassion from '../Images/MonetizeYourPassion.png'

const UserShops = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const first_name = useSelector(state => state.session.user.first_name);
  const shops = useSelector(state => state.shops);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllShopsThunk()).then(() => dispatch(getAllUsersThunk())).then(() => setLoaded(true))
  }, [])

  if (!loaded) return null
  if (!sessionUser) return <Redirect to="/" />

  const shopsArray = Object.values(shops)
  const userShops = shopsArray.filter(shop => shop.owner_id === sessionUser.id)
  console.log('userShops***********', userShops)
  console.log('shopsArray***********', shopsArray)
  // console.log('sessionUser.id***********', sessionUser.id)
  console.log('shop.owner_id***********', shops.owner_id)


  return loaded && (
    <>
      <div className="orange-banner">
        <div className="your-shops-title">{first_name}'s ArtMarts</div>
      </div>
      <div className="white-banner"></div>
      <div className="user-shops-page-outer-container">
        <div className="user-shops-page-inner-container">
          <div className="shop-cards-container">
            {
              userShops.map(shop => (<ShopsCard shop={shop} key={shop.id} />))
            }
          </div>
          <div className="vl"></div>
          <div className="MYP-container">
            <div
              className="create-shop-button"
              // className="form-button"
              onClick={() => history.push('/create-shop-form')}
            >
              Create an ArtMart
            </div>
            <img
              src={MonetizeYourPassion}
              alt="Monetize Your Passion"
              className="shop-img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserShops;
