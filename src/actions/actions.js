import axios from 'axios';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

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

export function fetchProducts(filter) {
  const { page, category } = filter;

  return dispatch => {
    dispatch(fetchProductsStart());

    return axios.get(`https://sephora-api-frontend-test.herokuapp.com/products?filter[sold_out_eq]=false&page[number]=${page}&page[size]=18${category ? `&filter[category_eq]=${category}` : ''}`)
      .then(res => dispatch(fetchProductsSuccess(res.data.data, res.data.links.next)))
      .catch(res => {
        console.log(res);
      });
  };
}
