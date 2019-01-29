import {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_VISIBILITY
} from "../action/popUpActions";

const initialState = {
  visible: false,
  baseCurrency: "USD",
  quoteCurrency: "GBP"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BASE_CURRENCY: {
      return {
        ...state,
        baseCurrency: action.base,
        visible: false
      };
    }
    case CHANGE_QUOTE_CURRENCY: {
      return {
        ...state,
        quoteCurrency: action.quote,
        visible: false
      };
    }
    case CHANGE_VISIBILITY: {
      return {
        ...state,
        visible: true
      };
    }
    default:
      return {
        ...state
      };
  }
};
