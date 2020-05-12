const menuLoaded = (value) => {
  return {
    type: "MENU_LOADED",
    payload: value,
  };
};
const productListLoaded = (value) => {
  return {
    type: "PRODUCT_LIST_LOADED",
    payload: value,
  };
};
const productRequested = () => {
  return {
    type: "PRODUCT_REQUESTED",
  };
};

export { menuLoaded, productListLoaded, productRequested };
