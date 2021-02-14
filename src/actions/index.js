export const ActionType = {
    GET_CART_ITEMS: `GET_CART_ITEMS`,
    ADD_ITEM_TO_CART: `ADD_ITEM_TO_CART`,
    DELETE_ITEM_FROM_CART: `DELETE_ITEM_FROM_CART`,
    CHOOSE_PRODUCT: `CHOOSE_PRODUCT`
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
    chooseProduct: (id) => {
      return {
        type: ActionType.CHOOSE_PRODUCT,
        payload: id,
      };
    },
  };