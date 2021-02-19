import * as actionTypes from '../actions/actionTypes';
import addSortItem from '../../utility/basket';

const addItem = (state, action) => {
  const item = state.find((i) => i.priceId === action.priceId) || null;
  const items = state.filter((i) => i.priceId !== action.priceId);

  const newItem = {
    priceId: action.priceId,
    productId: action.productId,
    name: action.name,
    size: action.size,
    measurement: action.measurement,
    price: action.price,
    total: item === null ? action.price : (item.total += action.price),
    count: item === null ? 1 : (item.count += 1),
  };

  return addSortItem(items, newItem);
};

const removeItem = (state, action) => {
  const item = state.find((i) => i.priceId === action.priceId) || null;
  const items = state.filter((i) => i.priceId !== action.priceId);

  if (item === null || item.count === 1) {
    return [...items];
  }

  const newItem = {
    ...item,
    total: (item.total -= item.price),
    count: (item.count -= 1),
  };

  return addSortItem(items, newItem);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.EMPTY_BASKET:
      return { items: [] };
    case actionTypes.ADD_BASKET_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_BASKET_ITEM:
      return removeItem(state, action);
    default:
      return state;
  }
};

export default reducer;
