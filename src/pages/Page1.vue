<template>
  <div>
    <Header />
    <About />
  </div>
</template>

<script>
import Header from '../components/Header';
import About from '../components/About';

export default {
  name: 'Page1',
  components: {
    Header,
    About
  }
};
</script>

<style lang="scss" scoped></style>
