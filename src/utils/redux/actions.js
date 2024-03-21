export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

export function addToCart(product) {
  return { type: ADD_TO_CART, product };
}

export function removeFromCart(productId) {
  return { type: REMOVE_FROM_CART, productId };
}

export function updateCart(productId, quantity) {
  return { type: UPDATE_CART, productId, quantity };
}