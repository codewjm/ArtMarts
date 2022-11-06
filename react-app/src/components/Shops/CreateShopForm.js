import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createShopThunk } from "../../store/shop";
import { getAllShopsThunk } from "../../store/shop";
import { getAllUsersThunk } from "../../store/user";

const CreateShopForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const [shop_name, setShop_Name] = useState("");
  const [shop_description, setShop_Description] = useState("");
  const [shop_img, setShop_Img] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const imageRegX = /\.(jpeg|jpg|png|svg)$/


  useEffect(() => {
    let errors = [];

    if (!user) {
      errors.push("You must be logged in to create an ArtMart");
      setErrors(errors);
    }
    else {

      if (shop_name.length < 2 || shop_name.length > 35) {
        errors.push("ArtMart name must be between 2 and 35 characters")
      }
      if (shop_description.length < 2 || shop_description.length > 120) {
        errors.push("ArtMart description must be between 2 and 120 characters")
      }
      if (shop_img.length > 0 && !shop_img.split('?')[0].match(imageRegX)) {
        errors.push("Image must be a valid type: jpg, jpeg, png, svg")
      }

      setErrors(errors);
    }
  }, [shop_name, shop_description, shop_img, user]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (errors.length) return

    const shopData = {
      owner_id: user.id,
      shop_name: shop_name,
      shop_description: shop_description,
      shop_img: shop_img,
    };
    return await dispatch(createShopThunk(shopData))
      .then((res) => history.push(`/shops/${res.id}`))
    // if (createdShop) {
    //   history.push(`/shops/${createdShop.id}`);
    // }
  }

  return (
    <div className="form-outer-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">Please Fill Out The Following Fields:</div>
        <div className="required-field">(Fields labeled with&nbsp;<div className="asterisk">*</div>&nbsp;are required)</div>
        <div className="form-container">
          <div className="create_errors">
            {submitted && (errors).map((error, i) => (
              <div className="errorMessageContainer" key={i}>
                <div className="errorMessage">{error}</div>
              </div>
            ))}
          </div>
          <div>
            <label htmlFor='Shop Name' className='form-field-label'>ArtMart Name&nbsp;<div className="asterisk">*</div></label>
            <input
              className="form-field"
              name="Shop Name"
              type="text"
              value={shop_name}
              placeholder="ArtMart Name"
              onChange={(e) => setShop_Name(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='Shop Description' className='form-field-label'>ArtMart Description&nbsp;<div className="asterisk">*</div></label>
            <input
              className="form-field"
              name="Shop Description"
              type="text"
              value={shop_description}
              placeholder="ArtMart Description"
              onChange={(e) => setShop_Description(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='Shop Image' className='form-field-label'>ArtMart Image</label>
            <input
              className="form-field"
              name="Shop Image"
              type="text"
              value={shop_img}
              placeholder="ArtMart Image"
              onChange={(e) => setShop_Img(e.target.value)}
            />
          </div>
          <div>
            <button name="submit" type="submit" className="form-button">
              Create ArtMart
            </button>
          </div>
        </div>
      </form>
    </div>
  );

}

export default CreateShopForm;
