/**
 * 首字母大写
 * @param {*} str
 * @returns
 */
const titleCase = (str: string): string => {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};
/**
 *首大写字母转小写
 */
const uncapitalize = (str: string): string => {
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
const swapCase = (str: string): string => {
  return str.replace(/[a-z]/gi, (matchStr: any) => {
    if (matchStr >= 'A' && matchStr <= 'Z') {
      return matchStr.toLocaleLowerCase();
    } else if (matchStr >= 'a' && matchStr <= 'z') {
      return matchStr.toLocaleUpperCase();
    }
  });
};
/**
 * 下划转驼峰
 * @param {*} str
 * @returns
 */
const camelCase = (str: string) => {
  return str.replace(/_[a-z]/g, (str1) => str1.substr(-1).toUpperCase());
};
/**
 *格式化时间
 * @param {*} str
 * @returns
 */
const parseTime = (time?: Date | string | number, pattern?: string) => {
  if (!time) {
    return null;
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
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
  type Key = keyof typeof formatObj;
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key: Key) => {
    let value = formatObj[key] as any;
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
 * 千位分隔
 */
 const formatNumber = (value: number|string) => {
  if (!value) return value
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export { titleCase, camelCase, parseTime, uncapitalize, swapCase, formatNumber };
