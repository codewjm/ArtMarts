import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './ShopCard.css'
import defaultArtMart3 from '../Images/defaultArtMart3.png'

const ShopsCard = ({ shop }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);


  return (
    <div className="shop-card-outer-container" onClick={() => history.push(`/shops/${shop?.id}`)}>
      {/* <div className="" onClick={() => history.push(`/shops/${shop?.id}`)}> */}
      <div className="shop-card-container">

        <div className="shop-card-inner-container">

          {/* <div className="shop-card-left"> */}
          <img
            src={shop?.shop_img}
            className="shop-card-img"
            alt="Shop Image"
            onError={(e) => { e.target.src = defaultArtMart3 }}
          />
          {/* </div> */}
          <div className="shop-card-right">
            <div className="shop-card-name">{shop?.shop_name}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ShopsCard;
