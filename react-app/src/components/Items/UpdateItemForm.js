import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getAllItemsThunk, createItemThunk, updateItemThunk } from "../../store/item";
import { getAllUsersThunk } from "../../store/user";

const UpdateItemForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const { itemId }= useParams();
  const item = useSelector((state) => state.items[itemId]);

  const [item_name, setItem_Name] = useState("");
  const [item_price, setItem_Price] = useState("");
  const [item_description, setItem_Description] = useState("");
  const [item_img, setItem_Img] = useState("");
  const [shop_id, setShop_Id] = useState("");
  const [errors, setErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllItemsThunk()).then(dispatch(getAllUsersThunk()))
  }, [dispatch]);


  useEffect(() => {
    if(item) {
      setLoaded(true)
      setItem_Name(item.item_name)
      setItem_Price(item.item_price)
      setItem_Description(item.item_description)
      setItem_Img(item.item_img)
      setShop_Id(item.shop_id)
    }
  }, [item]);

  const imageRegX = /\.(jpeg|jpg|png|svg)$/

  useEffect(() => {
    let errors = [];

    if (!user) {
      errors.push("You must be logged in to update an item");
      setErrors(errors);
    }
    else {

      if (item_name.length < 2 || item_name.length > 50) {
        errors.push("Item name must be between 2 and 50 characters.")
      }
      if (item_description.length < 2 || item_description.length > 255) {
        errors.push("Item description must be between 2 and 255 characters.")
      }
      if (item_img.length < 2 || !item_img.split('?')[0].match(imageRegX)) {
        errors.push("image: must be a valid type: jpg, jpeg, png, svg.")
      }

      setErrors(errors);
    }
  }, [item_name, item_description, item_img, user]);

  if(!item) return <Redirect to="/user-shops" />

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (errors.length) return

    const itemData = {
      owner_id: user.id,
      item_name: item_name,
      item_price: item_price,
      item_description: item_description,
      item_img: item_img,
      shop_id: shop_id
    };
    return await dispatch(updateItemThunk(itemData, itemId))
    .then(history.push(`/items/${itemId}`))
  }



  return loaded && (
    <div className="form-outer-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">Please Fill Out The Following Fields:</div>
        <div className="form-container">
          <div className="create_errors">
            {submitted && (errors).map((error, i) => (
              <div className="errorMessageContainer" key={i}>
                <div className="errorMessage">{error}</div>
              </div>
            ))}
          </div>
          <div>
            <label htmlFor='Item Name' className='form-field-label'>Item Name</label>
            <input
              className="form-field"
              name="Item Name"
              type="text"
              value={item_name}
              placeholder="Item Name"
              onChange={(e) => setItem_Name(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='Item Price' className='form-field-label'>Item Price</label>
            <input
              className="form-field"
              name="Item Price"
              type="text"
              value={item_price}
              placeholder="Item Price"
              onChange={(e) => setItem_Price(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='Item Description' className='form-field-label'>Item Description</label>
            <input
              className="form-field"
              name="Item Description"
              type="text"
              value={item_description}
              placeholder="Item Description"
              onChange={(e) => setItem_Description(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='Item Image' className='form-field-label'>Item Image</label>
            <input
              className="form-field"
              name="Item Image"
              type="text"
              value={item_img}
              placeholder="Item Image"
              onChange={(e) => setItem_Img(e.target.value)}
              required
            />
          </div>
          <div>
            <button name="submit" type="submit" className="form-button">
              Update Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );

}

export default UpdateItemForm;
