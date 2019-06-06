import Vue from "vue";
import createMixin from "./mixin"
import createInstance from "./jsonld"
import { Option } from "./typing"

interface Install {
  (vue: Vue, options: Option): void
  installed?: boolean
}

export const install: Install = (vue: Vue, options) => {
  if (!install.installed) {
    // @ts-ignore
    vue.prototype.$jsonld = createInstance(options)
    // @ts-ignore
    vue.mixin(createMixin(vue, options))
    install.installed = true
  }
}

export default  {
  install
}
