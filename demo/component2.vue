<template>
  <div>
    <p>{{ $jsonldInfo }}</p>
  </div>
</template>

<script>
  export default {
    jsonld: [{
      "@context": "http://schema.org/",
      "@type": "Person",
      "name": "Developer1",
      "jobTitle": "Developer",
      "telephone": "18664945494",
      "url": "http://www.btorage.com"
    }],
    data() {
      return {
        a: '2'
      }
    }
  }
</script>

<style scoped>

</style>