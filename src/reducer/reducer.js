import { cartItems } from "data/cart-items";

const initialState = {
  cartItems,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case `GET_CART_ITEMS`:
      return state.cartItems;

    case `ADD_ITEM_TO_CART`:
        state.cartItems[action.payload].inCartAmmount = state.cartItems[action.payload].inCartAmmount + 1;
      return Object.assign({}, state, {
        cartItems: [...state.cartItems],
      });

    case `DELETE_ITEM_FROM_CART`:
      return Object.assign({}, state, {
        cartItems: [],
      });
    default:
      return state;
  }
};
