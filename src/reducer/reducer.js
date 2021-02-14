import { cartList } from "data/cart-items";
import { ActionType } from "actions";
import { set, update } from "lodash/fp";

const initialState = {
  choosenProductId: -1,
  cartItems: cartList,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_PRODUCT:
      return { ...state, choosenProductId: action.payload };

    case ActionType.GET_CART_ITEMS:
      return state.cartItems;

    case ActionType.ADD_ITEM_TO_CART:
      return update(
        `cartItems[${action.payload}].description.inCartAmmount`,
        (i) => i + 1,
        state
      );

    case ActionType.DELETE_ITEM_FROM_CART:
      return set(
        `cartItems[${action.payload}].description.inCartAmmount`,
        0,
        state
      );

    case ActionType.HANDLE_FAVORITE:
      return update(
        `cartItems[${action.payload}].isFavorite`,
        (i) => !i,
        state
      );
    default:
      return state;
  }
};
