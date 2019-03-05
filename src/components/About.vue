<template>
  <section>
    <p
      class="about-section"
      v-for="(aboutSection, index) in aboutInfoByNewline"
      :key="index"
    >
      {{ aboutSection }}
    </p>
  </section>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'About',
  data() {
    return {
      info: myInfo
    };
  },
  computed: {
    aboutInfoByNewline() {
      console.log(this);
      return this.info.about.split('\n');
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 10px 25px;
}

p.about-section {
  text-indent: 10px;
}
</style>
