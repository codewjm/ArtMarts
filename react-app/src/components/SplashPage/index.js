import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllShopsThunk } from '../../store/shop';
import { getAllItemsThunk } from '../../store/item';
import ShopsCard from '../ShopCard';
import defaultArtMart3 from '../Images/defaultArtMart3.png'
import "./SplashPage.css";

const SplashPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const shops = useSelector((state) => state.shops);
  const items = useSelector((state) => state.items);

  const shopsArray = Object.values(shops);

  useEffect(() => {
    dispatch(getAllShopsThunk()).then(() => dispatch(getAllItemsThunk()))
  }, [dispatch]);

  return (
    <div>
      <div className="splash-page-container">
        <div className="SP-orange-banner">

          <div className="SP-shops-outer-container">

            {shopsArray.map((shop) => (
              <div className="SP-shop-card-container" >
                <div className="SP-shop-img-container" >
                  <img
                    src={shop?.shop_img}
                    onClick={() => history.push(`/shops/${shop?.id}`)}
                    className="SP-shop-card-img"
                    alt="Shop Image"
                    onError={(e) => { e.target.src = defaultArtMart3 }}
                  />
                </div>
                <div
                  className="SP-shop-name-container"
                  onClick={() => history.push(`/shops/${shop?.id}`)}
                >
                  {shop?.shop_name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SplashPage;
