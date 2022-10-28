import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { getAllItemsThunk } from "../../store/item";
import { getAllShopsThunk } from "../../store/shop";


const SingleItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemId = useParams();
  const [loaded, setLoaded] = useState(false);


  const allItems = useSelector((state) => state.items);
  const item = allItems[itemId.itemId];

  console.log("all items", allItems)
  console.log("item", item);

  useEffect(() => {
    (async () => {
      dispatch(getAllItemsThunk())
      .then(() => setLoaded(true))
      .then(() => getAllShopsThunk)
    })()
  }, [])



  return loaded && (
    <div>
      <h1>Single Item</h1>
      <div>{item?.item_name}</div>
      <div><img className="item-page-img" src={item?.item_img} alt="Item Image"></img></div>
      <div>${item?.item_price}</div>
      <div>{item?.item_description}</div>
    </div>
  )

}
export default SingleItem;
