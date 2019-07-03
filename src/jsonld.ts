import { buildHtml } from "./server";
import { Option } from "./typing";

export default function(_: Option) {
  return function $jsonld() {

    const get = () => {
      return this.$root._jsonld.data
    }

    return {
      get html() {
        return buildHtml(get())
      },
      get,
    }
  }
}
