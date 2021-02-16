import axios from './axios-client';

export const getCategories = async () => {
  const response = await axios.get('/category');
  return response.data.data.categories;
};

export const getProducts = async () => {
  const response = await axios.get('/product');
  return response.data.data.products;
};
