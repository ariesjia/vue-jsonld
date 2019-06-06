import {ATTRIBUTE, FEATURE_ATTRIBUTE, ID_ATTRIBUTE, TAG} from "../constant";
import {RowData} from "../typing";
import {getTags} from "../utils/tags";

export const buildHtml = (list: RowData[]) => {
  const tags = getTags(list)
  return tags.reduce((prev, item) => {
    return prev + `<${TAG} ${FEATURE_ATTRIBUTE} ${ATTRIBUTE.key}="${ATTRIBUTE.value}" ${ID_ATTRIBUTE}="${item.id}">${JSON.stringify(item.data)}</${TAG}>`
  }, '')
}