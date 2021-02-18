import * as actionTypes from './actionTypes';

export const setBasketItems = (items) => {
  return {
    type: actionTypes.RESTORE_BASKET,
    items,
  };
};

export const emptyBasket = () => {
  return {
    type: actionTypes.EMPTY_BASKET,
  };
};

export const addItem = (priceId, productId, name, size, measurement, price) => {
  return {
    type: actionTypes.ADD_BASKET_ITEM,
    priceId,
    productId,
    name,
    size,
    measurement,
    price,
  };
};

export const removeItem = (priceId, price) => {
  return {
    type: actionTypes.REMOVE_BASKET_ITEM,
    priceId,
    price,
  };
};
