<template>
  <div class="page">
    <Header />
    <About />
    <Skills />
    <CareerHistory />
    <Projects />
    <Education />
    <References />
  </div>
</template>

<script>
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import CareerHistory from './components/CareerHistory';
import Projects from './components/Projects';
import Education from './components/Education';
import References from './components/References';

export default {
  name: 'Page1',
  components: {
    Header,
    About,
    Skills,
    CareerHistory,
    Projects,
    Education,
    References
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 9.5in;
  background-color: white;
}
</style>
