import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  return (
    <div className="item-card-outer-container" onClick={() => history.push(`/items/${item?.id}`)}>
        <div className="item-card-container">
              <img src={item?.item_img} alt="Item Image"></img>
        </div>
    </div>
  );
}
