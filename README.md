# Vue Lazy Image
A Vue.js component to load an image automatically when it enters the viewport.

## Usage

```
yarn add @asarfara/vue-lazy-image
```
Or
```
yarn add @asarfara/vue-lazy-image
```

**Note:** You'll need to install the w3c Intersection Observer polyfill in case you're targeting a browser which doesn't support it

You can register vue-lazy-image globally:

```
import Vue from 'vue'
import VueLazyImage from '@asarfara/vue-lazy-image'

Vue.component('vue-lazy-image', VueLazyImage);
```

Define your own src and placeholder images

```
<template>
  <vue-lazy-image
      src="example/assets/images/map.jpg"
      placeholder="example/assets/images/placeholder.gif"
  />
</template>
```
