import {isArray, isObject} from "./is";

export function ensureIsObject(object: any, key?: string) {
  if (!key || !isObject(object)) {
    return isObject(object) ? object : {}
  }

  if (!isObject(object[key])) {
    object[key] = {}
  }
  return object
}

export function ensureIsArray(object, key?: string) {
  if (!key || !isObject(object)) {
    return isArray(object) ? object : []
  }

  if (!isArray(object[key])) {
    object[key] = []
  }
  return object
}

export function ensuredPush(object: {}, key: string, el: any) {
  ensureIsArray(object, key)

  object[key].push(el)
}
