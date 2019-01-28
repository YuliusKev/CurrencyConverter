import {
  GET_BASE_CURRENCY,
  GET_BASE_CURRENCY_FAILED,
  GET_BASE_CURRENCY_SUCCESS,
  MULTIPLY_BY_ITSELF
} from "../action/baseCurrency";

const initialState = {
  loading: false,
  quoteCurrency: "GBP",
  data: null,
  value: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BASE_CURRENCY: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_BASE_CURRENCY_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: {
          ...action.result,
          rates: { ...action.result.rates }
        }
      };
    }
    case GET_BASE_CURRENCY_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.message
      };
    }
    case MULTIPLY_BY_ITSELF: {
      return {
        ...state,
        value: action.value * action.value
      };
    }
    default:
      return state;
  }
};
