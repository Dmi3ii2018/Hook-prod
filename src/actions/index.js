const ActionType = {
    GET_CART_ITEMS: `GET_CART_ITEMS`,
    ADD_ITEM_TO_CART: `ADD_ITEM_TO_CART`,
    DELETE_ITEM_FROM_CART: `DELETE_ITEM_FROM_CART`,
  };
  
  export const ActionCreator = {
    getCartItems: () => {
      return {
        type: ActionType.GET_CART_ITEMS,
      };
    },
    addItemToCart: (id) => {
      return {
        type: ActionType.ADD_ITEM_TO_CART,
        payload: id,
      };
    },
    deleteItemFromCart: (id) => {
      return {
        type: ActionType.DELETE_ITEM_FROM_CART,
        payload: id,
      };
    },
  };