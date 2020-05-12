const initialState = {
  menu: {
    categories: [],
    finMenu: [],
  },
  loading: false,
};

const reducer = (state = initialState, action) => {
  // const { value } = action;
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: { ...state.menu, ...action.payload },

        loading: false,
      };
    case "PRODUCT_LIST_LOADED":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "PRODUCT_REQUESTED":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducer;
