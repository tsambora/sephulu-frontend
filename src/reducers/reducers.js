import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from '../actions/actions';

function products(
  state = {
    isFetching: false,
    items: []
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
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
