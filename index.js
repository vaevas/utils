// 校验函数
import {
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
} from './validates/index.js';

// 格式化函数
import {
  titleCase,
  camelCase,
  parseTime,
  uncapitalize,
  swapCase,
} from './formats/index.js';

// 工具函数
import { deepClone } from './tools/index.js';

export default {
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
  titleCase,
  camelCase,
  parseTime,
  uncapitalize,
  swapCase,
  deepClone,
};
