<template>
  <section>
    <h2>Career History</h2>
    <div class="employers">
      <div v-for="(employer, index) in info.experience" :key="index">
        <p class="employer-info">
          {{ employer.company }}, {{ employer.location }} -
          {{ employer.position }}
        </p>
        <p class="timeperiod">{{ employer.timeperiod }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'CareerHistory',
  data() {
    return {
      info: myInfo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

h2 {
  @include section-underline();
}

.employers {
  padding: 10px 15px;
  width: 50%;

  p {
    margin: 0;
  }

  & > * {
    padding: 0 10px;
  }
}

.employer-info {
  @include subsection-underline();
}

.timeperiod {
  font-size: 0.85em;
  padding-left: 15px;
}
</style>
