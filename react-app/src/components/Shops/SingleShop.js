import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getAllShopsThunk, deleteShopThunk, updateShopThunk } from "../../store/shop";
import ItemCard from "../../ItemCard";
import { getAllItemsThunk } from "../../store/item";
import CreateItemForm from "../Items/CreateItemForm";

const SingleShop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const shopId = useParams();

  const [loaded, setLoaded] = useState(false);
  // (below) Need to use later for pulling only the shops
  // that belong to that logged in user (below)
  const user = useSelector((state) => state.session.user);
  const allShops = useSelector((state) => state.shops);
  const shop = allShops[shopId.shopId];

  //items
  const allItems = useSelector((state) => state.items);
  const itemsArray = Object.values(allItems).filter((item) => item?.shop_id === shop?.id);

  console.log("allitems", allItems);
  console.log("itemsArray", itemsArray);


  useEffect(() => {

    (async () => {
      dispatch(getAllShopsThunk())
      dispatch(getAllItemsThunk())
      setLoaded(true);
    })();
  }, []);


  const removeShop = (shopId) => async (e) => {
    e.preventDefault();
    dispatch(deleteShopThunk(shopId));
    history.push("/user-shops");
  };

  const updateShop = (shopId) => async (e) => {
    e.preventDefault();
    history.push(`/shops/${shopId}/update`);
  };

  const addItem = (shopId) => async (e) => {
    e.preventDefault();
    history.push(`/shops/${shopId}/create-item-form`);
  };

  // console.log("allitems", allItems);
  // console.log("itemsArray", itemsArray);
  // console.log("shop", shop);
  // console.log("allshops", allShops);
  // console.log("shopId", shopId);
  // console.log("shop.id", shop?.id);

  if(!shop) <Redirect to="/user-shops" />

  return loaded && (
    <div>
      <div onClick={() => history.push(`/shops/${shop?.id}`)}>
        <h1>SingleShop</h1>
        <div><img className="shop-page-img"  src={shop?.shop_img} alt="Shop Image"></img></div>
        <div>{shop?.shop_name}</div>
        <div>{shop?.shop_description}</div>
      </div>
      <div>
      {(user?.id === shop?.owner_id) && (
        <div onClick={updateShop(shop?.id)}>Update Shop</div>
      )}
      </div>
      <div>
      {(user?.id === shop?.owner_id) && (
        <div onClick={removeShop(shop?.id)}>Remove Shop</div>
      )}
      </div>
      <div>
        {(user?.id === shop?.owner_id) && (
          <div onClick={addItem(shop?.id)}>Add Item</div>
       )}
      </div>
      <div>
        {itemsArray.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SingleShop;
