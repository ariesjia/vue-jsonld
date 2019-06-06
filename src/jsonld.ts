import { buildHtml } from "./server";
import { Option } from "./typing";

export default function(_ : Option) {
  return function $meta() {

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
