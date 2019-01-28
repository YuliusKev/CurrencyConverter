import { all } from "redux-saga/effects";
import baseCurrency from "./baseCurrency";
import currencyList from "./currencyList";

export default function*() {
  yield all([...baseCurrency, ...currencyList]);
}
