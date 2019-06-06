import { FEATURE_ATTRIBUTE, TAG, ID_ATTRIBUTE, ATTRIBUTE } from "../constant";
import { getTags } from "../utils/tags";
import { RowData } from "../typing";

function getTag(tag) {
  return document.getElementsByTagName(tag)[0]
}

function createScriptTag({id, data}) {
  const newElement = document.createElement(TAG);
  newElement.setAttribute(FEATURE_ATTRIBUTE, 'true')
  newElement.setAttribute(ID_ATTRIBUTE, id);
  newElement.setAttribute(ATTRIBUTE.key, ATTRIBUTE.value)
  newElement.innerHTML = JSON.stringify(data, null, 4)
  return newElement;
}

const selector = `${TAG}[${ATTRIBUTE.key}="${ATTRIBUTE.value}"][${FEATURE_ATTRIBUTE}]`

function clearTags(headTag: HTMLHeadElement) {
  const oldHeadTags: Element[] = Array.from(headTag.querySelectorAll(selector))
  oldHeadTags.forEach(tag => tag.parentNode.removeChild(tag))
}

export const triggerHeadUpdate = (list: RowData[]) => {
  const headTag = getTag('head')
  clearTags(headTag)
  const newTags = getTags(list).map(createScriptTag)
  newTags.forEach(tag => headTag.appendChild(tag))
}
