import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { MULTIPLY_BY_ITSELF } from "../action/baseCurrency";

function* multiply() {
  let value = multiplyByItself.value;

  yield put({
    type: MULTIPLY_BY_ITSELF,
    result: value * value
  });
}

export default [takeEvery(MULTIPLY_BY_ITSELF, multiply)];
