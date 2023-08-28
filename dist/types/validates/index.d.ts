/**
 * 手机号校验
 */
declare const mobileCheck: (value: string) => boolean;
declare const idCardCheck: (value: string) => boolean;
/**
 * 邮箱校验
 */
declare const emailCheck: (value: string) => boolean;
/**
 * 字符串是包含字符
 * @param {*} input
 * @returns
 */
declare const isAlpha: (input: string) => boolean;
/**
 * 只包含字母、空格
 * @param {*} input
 * @returns
 */
declare const isAlphaSpace: (input: string) => boolean;
/**
 * 只包含字母、数字
 */
declare const isAlphanumeric: (input: string) => boolean;
/**
 *
 * 只包含字母、数字和空格
 */
declare const isAlphanumericSpace: (input: string) => boolean;
/**
 * 数字
 * @param {*} input
 * @returns
 */
declare const isNumeric: (input: string) => boolean;
/**
 * 小数
 */
declare const isDecimal: (input: string) => boolean;
/**
 * 负小数
 */
declare const isNegativeDecimal: (input: string) => boolean;
/**
 * 正小数
 */
declare const isPositiveDecimal: (input: string) => boolean;
/**
 * 整数
 */
declare const isInteger: (input: string) => boolean;
/**
 * 正整数
 */
declare const isPositiveInteger: (input: string) => boolean;
/**
 * 负整数
 */
declare const isNegativeInteger: (input: string) => boolean;
/**
 * 只包含数字和空格
 */
declare const isNumericSpace: (input: string) => boolean;
export { mobileCheck, idCardCheck, emailCheck, isAlpha, isAlphaSpace, isAlphanumeric, isAlphanumericSpace, isNumeric, isDecimal, isNegativeDecimal, isPositiveDecimal, isInteger, isPositiveInteger, isNegativeInteger, isNumericSpace, };
