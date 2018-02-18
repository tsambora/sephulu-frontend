import axios from 'axios';

import { getProductsUrl, getProductUrl } from '../utils/urlHelper';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED';

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

    return axios.get(getProductsUrl(filter))
      .then(res => dispatch(fetchProductsSuccess(res.data.data, res.data.links.next)))
      .catch(err => dispatch(fetchProductsFailed(err)));
  };
}

function fetchProductStart() {
  return {
    type: FETCH_PRODUCT_START,
  };
}

function fetchProductSuccess(product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    product,
  };
}

function fetchProductFailed(err) {
  return {
    type: FETCH_PRODUCT_FAILED,
    error: err.message,
  };
}

export function fetchProduct(productId) {
  return dispatch => {
    dispatch(fetchProductStart());

    return axios.get(getProductUrl(productId))
      .then(res => dispatch(fetchProductSuccess(res.data.data)))
      .catch(err => dispatch(fetchProductFailed(err)));
  };
}
