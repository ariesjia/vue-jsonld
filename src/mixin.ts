import {isFunction} from "./utils/is";
import {ensuredPush, ensureIsObject} from "./utils/ensure";
import uid from "./utils/uuid";
import {triggerHeadUpdate} from "./client";
import {COMPUTED_NAME, OPTION_NAME} from "./constant";
import {Option, RowData} from "./typing";
import {VueConstructor} from "vue";

const computedName = COMPUTED_NAME

const buildRow = (id, data) => ({
 id,
 data
})

const updateType = (list: RowData[], id: string, data, isServer: boolean, batchTime?: number) => {
  const index = list.findIndex(item => item.id === id)
  if (index>=0) {
    list.splice(
      index,
      1,
      buildRow(id, data)
    )
  } else {
    list.push(buildRow(id, data))
  }
  if (!isServer) {
    triggerHeadUpdate(batchTime)(list)
  }
}

const removeType = (list: RowData[], id: string, isServer: boolean, batchTime?: number) => {
  const index = list.findIndex(item => item.id === id)
  if (index>=0) {
    list.splice(
      index,
      1,
    )
  }
  if (!isServer) {
    triggerHeadUpdate(batchTime)(list)
  }
}

export default function createMixin(Vue: VueConstructor, option?: Option) {
  return {
    beforeCreate() {
      const $root = this.$root
      const options = this.$options
      const isServer = this.$isServer
      const jsonldValue = options[OPTION_NAME]
      const jsonldId = uid(10)

      if (!$root._jsonld) {
        $root._jsonld = {
          data: []
        }
      }

      const update = (value) => updateType(
        $root._jsonld.data,
        jsonldId,
        value,
        isServer,
        option.batchTime,
      )

      const remove = () => removeType(
        $root._jsonld.data,
        jsonldId,
        isServer,
        option.batchTime,
      )

      if(!!options[OPTION_NAME]) {
        if (isFunction(jsonldValue) ) {
          ensureIsObject(this.$options, 'computed')
          this.$options.computed[computedName] = jsonldValue
          ensuredPush(this.$options, 'created', () => {
            update(this[computedName])
            this.$watch(computedName, function (value) {
              update(value)
            })
          })
        } else {
          this[computedName] = jsonldValue
          ensuredPush(this.$options, 'created', () => {
            update(jsonldValue)
          })
        }
        ensuredPush(this.$options, 'destroyed', () => {
          remove()
        })
      }

      const $router = this.$root.$router

      if (this.$isServer && $router && !$root._jsonld.initialized) {
        $root._jsonld.initialized = true
        $router.beforeEach((to, from, next) => {
          this.$root._jsonld.data = []
          next()
        })
      }
    },
  }
}