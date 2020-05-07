const productCategoriesLoaded = (categories) => {
  return {
    type: "PRODUCT_CATEGORIES_LOADED",
    payload: categories,
  };
};
const productListLoaded = (products) => {
  return {
    type: "PRODUCT_LIST_LOADED",
    payload: products,
  };
};
const productRequested = () => {
  return {
    type: "PRODUCT_REQUESTED",
  };
};

export { productCategoriesLoaded, productListLoaded, productRequested };
