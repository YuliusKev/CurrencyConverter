import {
  GET_CURRENCY_LIST_SUCCESS,
  GET_CURRENCY_LIST_FAILED
} from "../action/currenciesList";

const initialState = {
  loading: true,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.result
      };

    case GET_CURRENCY_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
};
