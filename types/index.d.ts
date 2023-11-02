import { mobileCheck, idCardCheck, emailCheck, isAlpha, isAlphaSpace, isAlphanumeric, isAlphanumericSpace, isNumeric, isDecimal, isNegativeDecimal, isPositiveDecimal, isInteger, isPositiveInteger, isNegativeInteger, isNumericSpace } from './validates/index';
import { titleCase, camelCase, parseTime, uncapitalize, swapCase } from './formats/index';
import { deepClone, objToFormData, removeEmptyObj } from './tools/index';
declare const _default: {
    mobileCheck: (value: string) => boolean;
    idCardCheck: (value: string) => boolean;
    emailCheck: (value: string) => boolean;
    isAlpha: (input: string) => boolean;
    isAlphaSpace: (input: string) => boolean;
    isAlphanumeric: (input: string) => boolean;
    isAlphanumericSpace: (input: string) => boolean;
    isNumeric: (input: string) => boolean;
    isDecimal: (input: string) => boolean;
    isNegativeDecimal: (input: string) => boolean;
    isPositiveDecimal: (input: string) => boolean;
    isInteger: (input: string) => boolean;
    isPositiveInteger: (input: string) => boolean;
    isNegativeInteger: (input: string) => boolean;
    isNumericSpace: (input: string) => boolean;
    titleCase: (str: string) => string;
    camelCase: (str: string) => string;
    parseTime: (time?: string | number | Date | undefined, pattern?: string | undefined) => string | null;
    uncapitalize: (str: string) => string;
    swapCase: (str: string) => string;
    deepClone: (obj: any) => any;
    objToFormData: (obj: any) => FormData;
    removeEmptyObj: (obj: any) => any;
};
export default _default;
export { mobileCheck, idCardCheck, emailCheck, isAlpha, isAlphaSpace, isAlphanumeric, isAlphanumericSpace, isNumeric, isDecimal, isNegativeDecimal, isPositiveDecimal, isInteger, isPositiveInteger, isNegativeInteger, isNumericSpace, titleCase, camelCase, parseTime, uncapitalize, swapCase, deepClone, objToFormData, removeEmptyObj };
