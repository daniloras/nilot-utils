"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/Transforms/renameKeysObjectToCamelCase/index.ts
var renameKeysObjectToCamelCase_exports = {};
__export(renameKeysObjectToCamelCase_exports, {
  default: () => renameKeysObjectToCamelCase_default
});
module.exports = __toCommonJS(renameKeysObjectToCamelCase_exports);
var renameObjectToCamelCase = (data) => {
  return JSON.parse(
    JSON.stringify(data.obj).trim().replace(/("\w+":)/g, function(keys) {
      return keys.replace(/(.(\_|-|\s)+.)/g, function(subStr) {
        return subStr[0] + subStr[subStr.length - 1].toUpperCase();
      });
    })
  );
};
var renameKeysObjectToCamelCase_default = renameObjectToCamelCase;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
