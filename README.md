# vue-jsonld
> Declarative JSON-LD Structured Data for Vue App. SSR supported

[![NPM](https://img.shields.io/npm/v/vue-jsonld.svg)](https://www.npmjs.com/package/vue-jsonld)
[![Build Status](https://travis-ci.org/ariesjia/vue-jsonld.svg?branch=master)](https://travis-ci.org/ariesjia/vue-jsonld)
[![minified](https://badgen.net/bundlephobia/minzip/vue-jsonld)](https://bundlephobia.com/result?p=vue-jsonld)
[![coverage](https://badgen.net/codecov/c/github/ariesjia/vue-jsonld)](https://codecov.io/gh/ariesjia/vue-jsonld)

## Install
```bash
yarn add vue-jsonld
```

## Usage

```javascript
import VueJsonLD from 'vue-jsonld'

Vue.use(VueJsonLD)
```
#### json
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
#### function
```html
<template>
  ...
</template>

<script>
  export default {
    data() {
      return {
        name: 'vue-jsonld' 
      },
    }
    jsonld() {
      return {
         "@context": "http://schema.org/",
         "@type": "Code",
         "name": this.name,
         "description": "Declarative JSON-LD Structured Data for Vue App",
         "discussionUrl": "https://github.com/ariesjia/vue-jsonld"
      }
    },
  }
</script>
```


## SSR

server-entry.js
```js
import app from './app'

const router = app.$router
const jsonld = app.$jsonld()

export default (context) => {
  router.push(context.url)
  context.jsonld = jsonld
  return app
}
```
index.template.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>demo</title>
  {{{ jsonld.html }}}
</head>
<body>
  <!--vue-ssr-outlet-->
</body>
</html>
```
