# vue-jsonld
> Declarative JSON-LD Structured Data for Vue App

[![NPM](https://img.shields.io/npm/v/vue-jsonld.svg)](https://www.npmjs.com/package/vue-jsonld)

## Install
```bash
yarn add vue-jsonld
```

## Usage

```javascript
import VueJsonLD from 'vue-jsonld'

Vue.use(VueJsonLD)
```

```html
<template>
  ...
</template>

<script>
  export default {
    jsonld: {
      "@context": "http://schema.org/",
      "@type": "Code",
      "name": "vue-jsonld",
      "description": "Declarative JSON-LD Structured Data for Vue App",
      "discussionUrl": "https://github.com/ariesjia/vue-jsonld"
    },
  }
</script>
```
