/**
 * 首字母大写
 * @param {*} str
 * @returns
 */
declare const titleCase: (str: string) => string;
/**
 *首大写字母转小写
 */
declare const uncapitalize: (str: string) => string;
/**
 *大写转小写，小写转大写
 */
declare const swapCase: (str: string) => string;
/**
 * 下划转驼峰
 * @param {*} str
 * @returns
 */
declare const camelCase: (str: string) => string;
/**
 *格式化时间
 * @param {*} str
 * @returns
 */
declare const parseTime: (time?: Date | string | number, pattern?: string) => string | null;
export { titleCase, camelCase, parseTime, uncapitalize, swapCase };
