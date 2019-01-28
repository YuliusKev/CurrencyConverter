export const GET_BASE_CURRENCY = "GET_BASE_CURRENCY";
export const GET_QUOTE_CURRENCY = "GET_QUOTE_CURRENCY";
export const GET_BASE_CURRENCY_SUCCESS = "GET_BASE_CURRENCY_SUCCESS";
export const GET_BASE_CURRENCY_FAILED = "GET_BASE_CURRENCY_FAILED";
export const MULTIPLY_BY_ITSELF = "MULTIPLY_BY_ITSELF";

export const getBaseCurrency = (amount, baseCurrency, quoteCurrency) => ({
  type: GET_BASE_CURRENCY,
  amount,
  baseCurrency,
  quoteCurrency
});

export const getQuoteCurrency = quoteCurrency => ({
  type: GET_QUOTE_CURRENCY,
  quoteCurrency
});

export const multiplyByItself = value => ({
  type: MULTIPLY_BY_ITSELF,
  value
});
