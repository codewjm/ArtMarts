// SHOP ACTIONS:
const GET_ALL_SHOPS = 'shop/GET_ALL_SHOPS';
const CREATE_SHOP = 'shop/CREATE_SHOP';
const UPDATE_SHOP = 'shop/UPDATE_SHOP';
const DELETE_SHOP = 'shop/DELETE_SHOP';


//**************************************************************************************************
// SHOP ACTION CREATORS:
export const getAllShopsAC = (shops) => ({
  type: GET_ALL_SHOPS,
  payload: shops,
});

export const createShopAc = (shop) => ({
  type: CREATE_SHOP,
  payload: shop,
});

export const updateShopAc = (shop) => ({
  type: UPDATE_SHOP,
  payload: shop,
});

//**************************************************************************************************
// SHOP THUNKS:
export const getAllShopsThunk = () => async (dispatch) => {
  const res = await fetch('/api/shops/');
  if (res.ok) {
    const shops = await res.json();
    dispatch(getAllShopsAC(shops));
    return shops;
  }
};

export const createShopThunk = (shop) => async (dispatch) => {
  const res = await fetch('/api/shops/create_shop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(shop),
  });
  if (res.ok) {
    const shop = await res.json();
    dispatch(createShopAc(shop));
    return shop;
  }
};

//**************************************************************************************************
// SHOP REDUCER:
const initialState = {};
const shopReducer = (state = initialState, action) => {
  let newstate;
  switch (action.type) {
    case GET_ALL_SHOPS:
      newstate = {}
      action.payload.shops.forEach(shop => {
        newstate[shop.id] = shop;
      })
      return newstate;
    case CREATE_SHOP:
      newstate = { ...state };
      newstate[action.payload.id] = action.payload;
      return newstate;
    default:
      return state;
  }
};

export default shopReducer;
