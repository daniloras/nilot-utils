import { IRenameKeysObjectToCamelCase } from './index.interface';

/**
 * @name renameObjectToCamelCase
 * @category Transforms
 * @summary The new object renamed keys to camelCase.
 *
 * @description
 * The new object renamed keys to camelCase.
 *
 * @param obj - the object to be changed
 * @returns - the new object renamed keys to camelCase
 *
 * @example
 * const result = renameObjectToCamelCase({full_name: 'John Smith'})
 * ==> { fullName: 'John Smith' }
 */
const renameObjectToCamelCase = (data: IRenameKeysObjectToCamelCase) => {
  return JSON.parse(
    JSON.stringify(data.obj)
      .trim()
      .replace(/("\w+":)/g, function (keys) {
        return keys.replace(/(.(\_|-|\s)+.)/g, function (subStr) {
          return subStr[0] + subStr[subStr.length - 1].toUpperCase();
        });
      })
  );
};

export default renameObjectToCamelCase;
