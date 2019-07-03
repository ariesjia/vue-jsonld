import { VueConstructor } from "vue";
import createMixin from "./mixin"
import createInstance from "./jsonld"
import { Option } from "./typing"

interface Install {
  (vue: VueConstructor, options: Option): void
  installed?: boolean
}

export const install: Install = (vue: VueConstructor, options: Option = {}) => {
  if (!install.installed) {
    vue.prototype.$jsonld = createInstance(options)
    vue.mixin(createMixin(vue, options))
    install.installed = true
  }
}

export default  {
  install
}
