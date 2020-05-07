const productCategoriesLoaded = (categories) => {
  return {
    type: "PRODUCT_CATEGORIES_LOADED",
    payload: categories,
  };
};
const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

export { productCategoriesLoaded, menuRequested };
