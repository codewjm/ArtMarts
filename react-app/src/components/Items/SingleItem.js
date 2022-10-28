import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { getAllItemsThunk } from "../../store/item";
import { getAllShopsThunk } from "../../store/shop";
import { deleteItemThunk } from "../../store/item";
import { getAllUsersThunk } from "../../store/user";
import UpdateItemForm from "./UpdateItemForm";


const SingleItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemId = useParams();
  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  // const allShops = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getAllItemsThunk()).then(dispatch(getAllUsersThunk()))
    .then(dispatch(getAllShopsThunk()))
  }, [dispatch]);


  const allItems = useSelector((state) => state.items);
  const item = allItems[itemId.itemId];
  const itemShop = item?.shop_id;


  // if(!item) history.push("/user-shops");
  // const shop = Object.values(allShops).filter((shop) => shop?.id === itemShop);
  // const shopOwnerId = shop[0]?.owner_id;
  // const shopId = shop[0]?.id;

  // console.log("allShops", allShops)
  // console.log("all items", allItems)
  // console.log("item", item);
  // console.log("items shop_id", itemShop);
  // console.log("shop", shop);
  // console.log("shop owner id", shopOwnerId);
  // console.log("user id", user?.id);
  // console.log("shop id", shopId);

  useEffect(() => {
    (async () => {
      dispatch(getAllItemsThunk())
      .then(() => getAllShopsThunk)
      .then(() => setLoaded(true))
    })()
  }, [dispatch])


  const removeItem = (itemId) => async (e) => {
    e.preventDefault();
    dispatch(deleteItemThunk(itemId))
    history.push(`/shops/${itemShop}`)
  }


  return loaded && (
    <div>
      <h1>Single Item</h1>
      <div>{item?.item_name}</div>
      <div><img className="item-page-img" src={item?.item_img} alt="Item Image"></img></div>
      <div>${item?.item_price}</div>
      <div>{item?.item_description}</div>
      <div>
        {(user?.id === item?.owner_id) && (
          <div onClick={removeItem(item?.id)} >Remove Item</div>
        )}
      </div>
    </div>
  )

}
export default SingleItem;
