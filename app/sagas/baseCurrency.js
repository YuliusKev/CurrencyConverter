import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_BASE_CURRENCY,
  GET_BASE_CURRENCY_FAILED,
  GET_BASE_CURRENCY_SUCCESS
} from "../action/baseCurrency";

const host = "https://frankfurter.app/latest";

const fetchCurrencyExchangeValueUrl = (amount, base, quote) => {
  return axios.get(`${host}?amount=${amount}&from=${base}&to=${quote}`);
};

function* fetchCurrencyExchangeValue(getBaseCurrency) {
  try {
    let { amount, baseCurrency, quoteCurrency } = getBaseCurrency;
    const response = yield call(
      fetchCurrencyExchangeValueUrl,
      amount,
      baseCurrency,
      quoteCurrency
    );
    const result = yield response.data;
    yield put({
      type: GET_BASE_CURRENCY_SUCCESS,
      result
    });
  } catch (error) {
    yield put({
      type: GET_BASE_CURRENCY_FAILED,
      error: error.message
    });
  }
}

export default [takeEvery(GET_BASE_CURRENCY, fetchCurrencyExchangeValue)];
