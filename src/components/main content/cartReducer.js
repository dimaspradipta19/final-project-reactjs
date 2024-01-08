const initialState = [];


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingCartItemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingCartItemIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        const updatedCarts = state.map((item, index) =>
          index === existingCartItemIndex
            ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
            : item
        );

        return updatedCarts;
      } else {
        // If the product is not in the cart, add a new entry
        return [...state, { ...action.payload, quantity: 1, totalPrice: action.payload.price }];
      }
    }

    case "INCREASE_QUANTITY":
      {
        const updatedCarts = state.map((cart) =>
          cart.id === action.payload.id
            ? {
              ...cart,
              quantity: cart.quantity + 1,
              totalPrice: cart.price * (cart.quantity + 1),
            }
            : cart
        )
        return updatedCarts;
      }


    case "DECREASE_QUANTITY":
      {
        const updatedCarts = state.map((cart) =>
        cart.id === action.payload.id
            ? {
              ...cart,
              quantity: cart.quantity - 1,
              totalPrice: cart.price * (cart.quantity - 1),
            }
            : cart
        )
        return updatedCarts;
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;


