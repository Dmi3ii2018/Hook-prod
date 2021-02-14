export const ActionType = {
    GET_CART_ITEMS: "GET_CART_ITEMS",
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
    CHOOSE_PRODUCT: "CHOOSE_PRODUCT",
    HANDLE_FAVORITE: "HANDLE_FAVORITE",
    ADD_RELATED_TO_FAVORITE: "ADD_RELATED_TO_FAVORITE",
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM"
  };
  
  export const ActionCreator = {
    addItem: (id) => {
      return {
        type: ActionType.GET_CART_ITEMS,
        payload: id,
      };
    },
    removeItem: (id) => {
      return {
        type: ActionType.GET_CART_ITEMS,
        payload: id,
      };
    },
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
    handleFavorite: (id) => {
      return {
        type: ActionType.HANDLE_FAVORITE,
        payload: id,
      }
    },
    addRelatedToFavorite: (id ) => {
      return {
        type: ActionType.ADD_RELATED_TO_FAVORITE,
        payload: id,
      }
    },
  };