<template>
  <div>
    page2
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page2'
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