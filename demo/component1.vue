<template>
  <div>
    <p>{{ $jsonldInfo }}</p>
  </div>
</template>

<script>
  export default {
    jsonld: [
      {
        "@context": "http://schema.org/",
        "@type": "Person",
        "name": "Jia Chen",
        "jobTitle": "Developer",
        "telephone": "18664945494",
        "url": "http://www.btorage.com"
      },
      {
        "@context": "http://schema.org/",
        "@type": "Person",
        "name": "Jia Chen2",
        "jobTitle": "Developer",
        "telephone": "18664945494",
        "url": "http://www.btorage.com"
      }
    ],
    data() {
      return {
        a: '1'
      }
    }
  }
</script>

<style scoped>

</style>