<template>
  <section>
    <h2>References</h2>
    <div
      class="reference"
      v-for="(reference, index) in info.references"
      :key="index"
      v-page-breakable
    >
      <p class="reference-name">{{ reference.name }}</p>
      <div class="reference-details">
        <p class="reference-position">{{ reference.position }}</p>
        <p class="reference-email">{{ reference.email }}</p>
        <p class="reference-phone">{{ reference.phone }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'References',
  data() {
    return {
      info: myInfo,
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/_base.scss';
@import '../styles/_mixins.scss';

h2 {
  @include section-underline();
}

p {
  margin: 0;
}

.reference {
  padding-top: 15px;
  padding-left: 20px;
}

.reference-name {
  @include subsection-underline();

  width: 25%;
  font-weight: bold;
}

.reference-details {
  padding-left: 15px;
}
</style>
