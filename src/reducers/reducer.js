const initialState = {
  isAuthenticated: true,
  user: {
    id: 1,
    name: "Oleg",
    email: "oleg@gmail.com",
  },
  categories: [],
  products: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  // const { value } = action;
  switch (action.type) {
    case "PRODUCT_CATEGORIES_LOADED":
      return {
        ...state,
        categories: action.payload,
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
