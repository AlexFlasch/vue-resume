<template>
  <div id="resume">
    <Page />
  </div>
</template>

<script>
import Page from './Page.vue';

// import custom directives
// ignore no-unused-vars as directives are automatically consumed by Vue
/* eslint-disable no-unused-vars */
import PageBreakable from './directives/page-breakable';
/* eslint-enable no-unused-vars */

export default {
  name: 'app',
  components: {
    Page
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
