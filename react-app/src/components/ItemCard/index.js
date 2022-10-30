import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './ItemCard.css'
import defaultItem from "../Images/defaultItem.png";



const ItemsCard = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const shopId = useParams();
  const allShops = useSelector((state) => state.shops);
  const shop = allShops[shopId.shopId];
  const user = useSelector((state) => state.session.user);

  // console.log("shop", )
  // console.log("item", item)
  return (
    <div className="item-card-outer-container" onClick={() => history.push(`/items/${item?.id}`)}>
      <div className="item-card-container">
        <img
          src={item?.item_img}
          className="item-card-img"
          alt="Item Image"
          onError={(e) => {e.target.src = defaultItem}}
        />
      </div>
    </div>
  );
}

export default ItemsCard;