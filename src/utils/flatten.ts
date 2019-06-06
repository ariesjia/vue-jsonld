import {isArray} from "./is";

export const flatten = arr => {
  return arr.reduce((a, b) => a.concat(isArray(b) ? flatten(b) : b), [])
}