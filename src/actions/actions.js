import axios from 'axios';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

function fetchProductsStart() {
  return {
    type: FETCH_PRODUCTS_START,
  };
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  };
}

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsStart());

    return axios.get('https://sephora-api-frontend-test.herokuapp.com/products')
      .then(res => dispatch(fetchProductsSuccess(res.data.data)))
      .catch(res => {
        console.log(res);
      });
  };
}
