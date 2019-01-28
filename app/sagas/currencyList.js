import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_CURRENCY_LIST,
  GET_CURRENCY_LIST_FAILED,
  GET_CURRENCY_LIST_SUCCESS
} from "../action/currenciesList";

const fetchCurrencyUrl = () => {
  return axios.get(`https://frankfurter.app/currencies`);
};

function* fetchCurrencyList() {
  try {
    const response = yield call(fetchCurrencyUrl);
    const result = yield response.data;

    yield put({
      type: GET_CURRENCY_LIST_SUCCESS,
      result
    });
  } catch (err) {
    yield put({
      type: GET_CURRENCY_LIST_FAILED,
      error: err.message
    });
  }
}
export default [takeEvery(GET_CURRENCY_LIST, fetchCurrencyList)];
