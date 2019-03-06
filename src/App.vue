<template>
  <div id="resume">
    <Page v-for="(page, index) in pages" :key="index">
      <component v-bind:is="page"></component>
    </Page>
  </div>
</template>

<script>
import Page from './Page.vue';

import pages from './pages';

export default {
  name: 'app',
  components: {
    Page
  },
  data() {
    return {
      pages
    };
  }
};
</script>

<style lang="scss">
@import 'styles/_variables.scss';

body {
  background-color: #333;
  margin: 0;
  padding: 0;
}

#resume {
  font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
