import * as actionTypes from '../actions/actionTypes';

const restoreBasket = (state, action) => {
  return {
    ...state,
    items: action.items,
  };
};

const addItem = (state, action) => {
  const item = state.items.find((i) => i.priceId === action.priceId);
  const items = state.items.filter((i) => i.priceId !== action.priceId);

  const newItem = {
    priceId: action.priceId,
    produceId: action.productId,
    name: action.name,
    size: action.size,
    measurement: action.measurement,
    price: items === null ? action.price : (item.price += action.price),
    count: item === null ? 1 : (item.count += 1),
  };

  return {
    items: [...items, newItem],
  };
};

const removeItem = (state, action) => {
  const item = state.items.find((i) => i.priceId === action.priceId);
  const items = state.items.filter((i) => i.priceId !== action.priceId);

  if (item.count === 1) {
    return {
      items: [...items],
    };
  }

  const newItem = {
    priceId: action.priceId,
    produceId: action.productId,
    name: action.name,
    size: action.size,
    measurement: action.measurement,
    price: items === null ? action.price : (item.price -= action.price),
    count: (item.count -= 1),
  };

  return {
    items: [...items, newItem],
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.RESTORE_BASKET:
      return restoreBasket(state, action);
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
