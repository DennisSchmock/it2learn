import { SIZE_NAMES } from "./breakpoints";

const createScreenSizeObject = (microVal, sVal, mVal, lVal, xlVal, xxlVal) => ({
  [SIZE_NAMES.MICRO]: microVal,
  [SIZE_NAMES.SMALL]: sVal,
  [SIZE_NAMES.MEDIUM]: mVal,
  [SIZE_NAMES.LARGE]: lVal,
  [SIZE_NAMES.XL]: xlVal,
  [SIZE_NAMES.XXL]: xxlVal,
});

export default createScreenSizeObject;
