import axios from 'axios';

import { getApiUrl } from '../utils/urlHelper';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

function fetchProductsStart() {
  return {
    type: FETCH_PRODUCTS_START,
  };
}

function fetchProductsSuccess(items, next) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    items,
    hasNext: !!next,
  };
}

function fetchProductsFailed(err) {
  return {
    type: FETCH_PRODUCTS_FAILED,
    error: err.message,
  };
}

export function fetchProducts(filter) {
  return dispatch => {
    dispatch(fetchProductsStart());

    return axios.get(getApiUrl('products', filter))
      .then(res => dispatch(fetchProductsSuccess(res.data.data, res.data.links.next)))
      .catch(err => dispatch(fetchProductsFailed(err)));
  };
}
