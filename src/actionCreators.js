export const loadProducts = () => {
  return async dispatch => {
    const response = await fetch('http://localhost:3001/products');
    const products = await response.json();
    return dispatch({
      type: "REPLACE_PRODUCTS",
      products
    });
  }
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    productId: productId
  };
};