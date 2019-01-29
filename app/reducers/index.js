import { combineReducers } from "redux";

import baseCurrency from "./baseCurrency";
import currencyList from "./currencyList";
import modalView from "./modalView";

export default combineReducers({
  baseCurrency: baseCurrency,
  currencyList: currencyList,
  modalView: modalView
});
