import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from './actions';

const initialState = {
  cart: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
        
        case ADD_TO_CART:
        return { ...state, cart: [...state.cart, action.product] };

        case REMOVE_FROM_CART:
        return { ...state, cart: state.cart.filter(product => product.id !== action.productId) };

        case UPDATE_CART:
        return {
                ...state,
                cart: state.cart.map(product => 
                        product.id === action.productId ? { ...product, quantity: action.quantity } : product
                ),
        };

        default:
        return state;
  }
}