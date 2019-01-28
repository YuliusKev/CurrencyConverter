import { combineReducers } from "redux";

import baseCurrency from "./baseCurrency";
import currencyList from "./currencyList";

export default combineReducers({
  baseCurrency: baseCurrency,
  currencyList: currencyList
});
