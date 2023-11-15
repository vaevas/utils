/**
 * 深拷贝对象
 * @param {*} obj
 * @returns
 */
declare const deepClone: (obj: any) => any;
/**
 * 将普通对象转为 formData 格式
 */
declare const objToFormData: (obj: any) => FormData;
/**
 * 去除对象中的空属性
 */
declare const removeEmptyObj: (obj: any) => any;
/**
 * 根据某个key直接分组
 */
declare const groupBy: <T>(array: T[], key: keyof T) => {
    [key: string]: T[];
};
export { deepClone, objToFormData, removeEmptyObj, groupBy };
