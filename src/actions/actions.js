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
const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

export { productCategoriesLoaded, productListLoaded, menuRequested };
