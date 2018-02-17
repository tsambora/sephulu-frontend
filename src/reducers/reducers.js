import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
} from '../actions/actions';

function products(
  state = {
    isFetching: false,
    items: [],
    hasNext: false,    
    error: null,    
  },
  action
) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        hasNext: action.hasNext,
      });
    case FETCH_PRODUCTS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case FETCH_PRODUCT_START:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_PRODUCT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.concat(action.product),
      });
    case FETCH_PRODUCT_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
