import { mount } from '@vue/test-utils'
import localVue, { flushTimeout } from "test/localVue"

let wrapper

describe("use-form test", () => {
  afterEach(() => {
    wrapper.destroy()
  })

  it('should render jsonld tag when jsonld option setted', async () => {
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "test"
    };
    wrapper = mount({
      template: '<div/>',
      jsonld
    }, {
      localVue
    })
    await flushTimeout()
    expect(document.querySelector("script").innerHTML).toEqual(JSON.stringify(jsonld, null, 4))
  })

  it('should render jsonld tag when jsonld option is function', async () => {
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "test"
    };
    wrapper = mount({
      template: '<div/>',
      jsonld() {
        return jsonld
      }
    }, {
      localVue
    })
    await flushTimeout()
    expect(document.querySelector("script").innerHTML).toEqual(JSON.stringify(jsonld, null, 4))
  })

  it('should jsonld option function can get this field', async () => {
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "test"
    };
    wrapper = mount({
      template: '<div/>',
      jsonld() {
        return {
          ...jsonld,
          name: this.name
        }
      },
      computed: {
        name() {
          return 'xxxx'
        }
      }
    }, {
      localVue
    })
    await flushTimeout()
    expect(document.querySelector("script").innerHTML).toEqual(
      JSON.stringify({
        ...jsonld,
        name: 'xxxx'
      }, null, 4)
    )
  })



})
