const addSortItem = (products, newProduct) => {
  const newProducts = [...products, newProduct];

  return newProducts.sort((a, b) => a.name.localeCompare(b.name));
};

export default addSortItem;
