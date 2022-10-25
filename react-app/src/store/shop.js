// SHOP ACTIONS:
const GET_ALL_SHOPS = 'shop/GET_ALL_SHOPS';
const GET_ONE_SHOP = 'shop/GET_ONE_SHOP';
const CREATE_SHOP = 'shop/CREATE_SHOP';
const UPDATE_SHOP = 'shop/UPDATE_SHOP';
const DELETE_SHOP = 'shop/DELETE_SHOP';


//**************************************************************************************************
// SHOP ACTION CREATORS:
export const getAllShopsAC = (shops) => ({
  type: GET_ALL_SHOPS,
  payload: shops,
});



//**************************************************************************************************
// SHOP THUNKS:
export const getAllShopsThunk = () => async (dispatch) => {
  const res = await fetch('/api/shops');
  if (res.ok) {
    const shops = await res.json();
    dispatch(getAllShopsAC(shops));
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
    default:
      return state;
  }
};

export default shopReducer;
