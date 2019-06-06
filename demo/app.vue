<template>
  <div>
    {{$root._jsonld}}
    <p>
      hello {{title}}
    </p>
    <button @click="changeTitle">chang title</button>
    <button @click="test">test</button>
    <p>{{$jsonldInfo}}</p>
    <component1 />
    <hr/>
    <button @click="toggleComponent">toggle component2</button>
    <component2 v-if="shouldShowComponent2" />
  </div>
</template>

<script>
  import component1 from './component1.vue'
  import component2 from './component2.vue'

  export default {
    data() {
      return {
        title: 'demo website',
        shouldShowComponent2: true
      }
    },
    components: {
      component1,
      component2
    },
    methods: {
      changeTitle() {
        this.title = 'test'
      },
      toggleComponent() {
        this.shouldShowComponent2 = !this.shouldShowComponent2
      },
      test() {
        console.log(this.$jsonld().html)
      }
    },
    jsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": this.title,
        "url": "https://www.demo.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.demo.com/search?key={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
  }
</script>

<style scoped>

</style>