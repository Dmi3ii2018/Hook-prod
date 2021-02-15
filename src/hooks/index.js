import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { createSelector } from "reselect";
import { ActionCreator } from "actions";

export const useTemplateStore = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cartItems);

  const cartItems = useSelector(
    createSelector(
      (state) => state.cartItems,
      (cartItems) =>
        cartItems.filter((item) => item.description.inCartAmmount > 0)
    )
  );

  const choosenProduct = useSelector(
    createSelector(
      (state) => state.choosenProductId,
      (choosenProductId) => items.find((item) => item.id === choosenProductId)
    )
  );

  const relatedItems = useSelector(
    createSelector(
      (state) => state.choosenProductId,
      (choosenProductId) => items.filter((item) => item.id !== choosenProductId)
    )
  );

  const _chooseProduct = useCallback(
    (id) => dispatch(ActionCreator.chooseProduct(id)),
    [dispatch]
  );

  const _addToCart = useCallback(
    (id) => dispatch(ActionCreator.addItemToCart(id)),
    [dispatch]
  );

  const _deleteProduct = useCallback(
    (id) => dispatch(ActionCreator.deleteItemFromCart(id)),
    [dispatch]
  );

  const _handleFavorite = useCallback(
    (id) => dispatch(ActionCreator.handleFavorite(id)),
    [dispatch]
  );

  return {
    cartItems,
    choosenProduct,
    relatedItems,
    chooseProduct: _chooseProduct,
    addToCart: _addToCart,
    deleteProduct: _deleteProduct,
    handleFavorite: _handleFavorite,
  };
};
