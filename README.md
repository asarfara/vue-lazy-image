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

Vue.use(VueLazyImage);
```

Or use it in one of your components

```
import VueLazyImage from '@asarfara/vue-lazy-image'

export default {
  components: {
    VueLazyImage
  }
};
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

## Example Project

To run example project, run below commands

```
yarn install
yarn dev
```

This will open a browser window or if it doesn't, please open http://localhost:8081 in your browser

You will see a page with containers, please scroll and once the placeholder 1x1 image is in the viewport, it will instantly load the actual image to replace it.




