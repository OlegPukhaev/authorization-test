const initialState = {
  isAuthenticated: true,
  user: {
    id: 1,
    name: "Oleg",
    email: "oleg@gmail.com",
  },
  categories: [],
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  // const { value } = action;
  switch (action.type) {
    case "PRODUCT_CATEGORIES_LOADED":
      console.log("action payload", action.payload);
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        menu: state.menu,
        loading: true,
      };

    default:
      return state;
  }
};

export default reducer;
