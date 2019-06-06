import {RowData} from "../typing";
import {flatten} from "./flatten";
import {isArray} from "./is";

export function getTags(list: RowData[]) {
  const tags = flatten(list.map(item => {
    if (isArray(item.data)) {
      return item.data.map(sub => ({
        id: item.id,
        data: sub
      })) as RowData[]
    }
    return item as RowData
  }))
  return tags;
}