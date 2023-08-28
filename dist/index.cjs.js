(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["vaevas-utils"] = factory());
})(this, (function () { 'use strict';

  /**
   * 手机号校验
   */
  const mobileCheck = (value) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
  /*
   * 身份证号码校验
   */
  const idCardCheck = (value) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
  /**
   * 邮箱校验
   */
  const emailCheck = (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
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

  /**
   * 首字母大写
   * @param {*} str
   * @returns
   */
  const titleCase = (str) => {
      return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
  };
  /**
   *首大写字母转小写
   */
  const uncapitalize = (str) => {
      if (str == null || str.length === 0) {
          return str;
      }
      return str.replace(/^[A-Z]/, function (matchStr) {
          return matchStr.toLocaleLowerCase();
      });
  };
  /**
   *大写转小写，小写转大写
   */
  const swapCase = (str) => {
      return str.replace(/[a-z]/gi, (matchStr) => {
          if (matchStr >= 'A' && matchStr <= 'Z') {
              return matchStr.toLocaleLowerCase();
          }
          else if (matchStr >= 'a' && matchStr <= 'z') {
              return matchStr.toLocaleUpperCase();
          }
      });
  };
  /**
   * 下划转驼峰
   * @param {*} str
   * @returns
   */
  const camelCase = (str) => {
      return str.replace(/_[a-z]/g, (str1) => str1.substr(-1).toUpperCase());
  };
  /**
   *格式化时间
   * @param {*} str
   * @returns
   */
  const parseTime = (time, pattern) => {
      if (!time) {
          return null;
      }
      const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
      let date;
      if (typeof time === 'object') {
          date = time;
      }
      else {
          if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
              time = parseInt(time);
          }
          else if (typeof time === 'string') {
              time = time
                  .replace(new RegExp(/-/gm), '/')
                  .replace('T', ' ')
                  .replace(new RegExp(/\.[\d]{3}/gm), '');
          }
          if (typeof time === 'number' && time.toString().length === 10) {
              time = time * 1000;
          }
          date = new Date(time);
      }
      const formatObj = {
          y: date.getFullYear(),
          m: date.getMonth() + 1,
          d: date.getDate(),
          h: date.getHours(),
          i: date.getMinutes(),
          s: date.getSeconds(),
          a: date.getDay(),
      };
      const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
          let value = formatObj[key];
          // Note: getDay() returns 0 on Sunday
          if (key === 'a') {
              return ['日', '一', '二', '三', '四', '五', '六'][value];
          }
          if (result.length > 0 && value < 10) {
              value = '0' + value;
          }
          return value || 0;
      });
      return time_str;
  };

  /**
   * 深拷贝对象
   * @param {*} obj
   * @returns
   */
  const deepClone = (obj) => {
      const _toString = Object.prototype.toString;
      // null, undefined, non-object, function
      if (!obj || typeof obj !== 'object') {
          return obj;
      }
      // DOM Node
      if (obj.nodeType && 'cloneNode' in obj) {
          return obj.cloneNode(true);
      }
      // Date
      if (_toString.call(obj) === '[object Date]') {
          return new Date(obj.getTime());
      }
      // RegExp
      if (_toString.call(obj) === '[object RegExp]') {
          const flags = [];
          if (obj.global) {
              flags.push('g');
          }
          if (obj.multiline) {
              flags.push('m');
          }
          if (obj.ignoreCase) {
              flags.push('i');
          }
          return new RegExp(obj.source, flags.join(''));
      }
      const result = Array.isArray(obj)
          ? []
          : obj.constructor
              ? new obj.constructor()
              : {};
      for (const key in obj) {
          result[key] = deepClone(obj[key]);
      }
      return result;
  };

  // 校验函数
  var index = {
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

  return index;

}));
