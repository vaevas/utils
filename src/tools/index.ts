/**
 * 深拷贝对象
 * @param {*} obj
 * @returns
 */
const deepClone = (obj: any) => {
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

/**
 * 将普通对象转为 formData 格式
 *
 */
const objToFormData = (obj: any) => {
  if (obj === null || typeof obj !== 'object') {
    throw new Error('objToFormData: obj must be an object');
  }
  const formData = new FormData();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

/**
 * 去除对象中的空属性
 */
const removeEmptyObj = (obj: any) => {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key];
    }
  }
  return obj;
}
export { deepClone, objToFormData, removeEmptyObj };
