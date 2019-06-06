import {isFunction} from "./utils/is";
import {ensuredPush, ensureIsObject} from "./utils/ensure";
import uid from "./utils/uuid";
import { triggerHeadUpdate } from "./client";
import { OPTION_NAME, COMPUTED_NAME } from "./constant";
import { RowData } from "./typing";

const optionName = OPTION_NAME
const computedName = COMPUTED_NAME

const buildRow = (id, data) => ({
 id,
 data
})

const updateType = (list: RowData[], id: string, data, isServer: boolean) => {
  console.log('updateType');
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
    triggerHeadUpdate(list)
  }
}

const removeType = (list: RowData[], id: string, isServer: boolean) => {
  const index = list.findIndex(item => item.id === id)
  if (index>=0) {
    list.splice(
      index,
      1,
    )
  }
  if (!isServer) {
    triggerHeadUpdate(list)
  }
}

export default function createMixin(Vue, options) {
  return {
    beforeCreate() {
      const $root = this.$root
      const options = this.$options
      const isServer = this.$isServer
      const jsonldValue = options[optionName]
      const jsonldId = uid(10)

      if (!$root._jsonld) {
        $root._jsonld = {
          data: []
        }
      }

      if(!!options[optionName]) {
        if (isFunction(jsonldValue) ) {
          ensureIsObject(this.$options, 'computed')
          this.$options.computed[computedName] = jsonldValue
          ensuredPush(this.$options, 'created', () => {
            updateType(
              $root._jsonld.data,
              jsonldId,
              this[computedName],
              isServer
            )
            this.$watch(computedName, function (value) {
              updateType(
                $root._jsonld.data,
                jsonldId,
                value,
                isServer
              )
            })
          })
        } else {
          this[computedName] = jsonldValue
          ensuredPush(this.$options, 'created', () => {
            updateType(
              $root._jsonld.data,
              jsonldId,
              jsonldValue,
              isServer
            )
          })
        }

        ensuredPush(this.$options, 'destroyed', () => {
          removeType(
            $root._jsonld.data,
            jsonldId,
            isServer
          )
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