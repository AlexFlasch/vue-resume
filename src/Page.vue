<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  width: 9.5in;
  height: 11in;
  background-color: white;
  box-sizing: border-box;
}
</style>
