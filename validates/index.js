/**
 * 手机号校验
 */
const mobileCheck = (value) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
/*
 * 身份证号码校验
 */
const idCardCheck = (value) =>
  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);

/**
 * 邮箱校验
 */
const emailCheck = (value) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

/**
 * 字符串是包含字符
 * @param {*} input
 * @returns
 */
const isAlpha = (input) => {
  return /^[a-z]+$/i.test(input);
};

/**
 * 只包含字母、空格
 * @param {*} input
 * @returns
 */
const isAlphaSpace = (input) => {
  return /^[a-z\s]*$/i.test(input);
};

/**
 * 只包含字母、数字
 */
const isAlphanumeric = (input) => {
  return /^[a-z0-9]+$/i.test(input);
};

/**
 *
 * 只包含字母、数字和空格
 */
const isAlphanumericSpace = (input) => {
  return /^[a-z0-9\s]*$/i.test(input);
};

/**
 * 数字
 * @param {*} input
 * @returns
 */
const isNumeric = (input) => {
  return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
};

/**
 * 小数
 */
const isDecimal = (input) => {
  return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
};

/**
 * 负小数
 */
const isNegativeDecimal = (input) => {
  return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
};

/**
 * 正小数
 */
const isPositiveDecimal = (input) => {
  return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
};

/**
 * 整数
 */
const isInteger = (input) => {
  return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
};

/**
 * 正整数
 */
const isPositiveInteger = (input) => {
  return /^\+?(?:0|[1-9]\d*)$/.test(input);
};

/**
 * 负整数
 */
const isNegativeInteger = (input) => {
  return /^\-?(?:0|[1-9]\d*)$/.test(input);
};

/**
 * 只包含数字和空格
 */
const isNumericSpace = (input) => {
  return /^[\d\s]*$/.test(input);
};
export {
  mobileCheck,
  idCardCheck,
  emailCheck,
  isAlpha,
  isAlphaSpace,
  isAlphanumeric,
  isAlphanumericSpace,
  isNumeric,
  isDecimal,
  isNegativeDecimal,
  isPositiveDecimal,
  isInteger,
  isPositiveInteger,
  isNegativeInteger,
  isNumericSpace,
};
