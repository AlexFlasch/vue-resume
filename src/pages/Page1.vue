<template>
  <div>
    <Header />
    <About />
    <Skills />
    <CareerHistory />
  </div>
</template>

<script>
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import CareerHistory from '../components/CareerHistory';

export default {
  name: 'Page1',
  components: {
    Header,
    About,
    Skills,
    CareerHistory
  }
};
</script>

<style lang="scss" scoped></style>
