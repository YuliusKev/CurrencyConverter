export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY";
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";

export const changeQuoteCurrency = quote => ({
  type: CHANGE_QUOTE_CURRENCY,
  quote
});

export const changeBaseCurrency = base => ({
  type: CHANGE_BASE_CURRENCY,
  base
});

export const changeVisibility = () => ({
  type: CHANGE_VISIBILITY
});
