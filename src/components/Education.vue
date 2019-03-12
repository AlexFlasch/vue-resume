<template>
  <section>
    <h2>Education</h2>
    <div
      class="education"
      v-for="(entry, index) in info.education"
      :key="index"
      v-page-breakable
    >
      <p class="education-school">{{ entry.school }}</p>
      <div class="education-details">
        <p class="education-degree">{{ entry.degree }}</p>
        <p class="education-description">{{ entry.description }}</p>
        <p class="education-timeperiod">{{ entry.timeperiod }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'Education',
  data() {
    return {
      info: myInfo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/_base.scss';
@import '../styles/_mixins.scss';

h2 {
  @include section-underline();

  padding-top: 5px;
}

p {
  margin: 0;
}

.education {
  padding-left: 20px;
}

.education-school {
  @include subsection-underline();

  width: 50%;
  padding: 15px 0 5px 0;
  font-weight: bold;
}

.education-details {
  padding-left: 15px;
}
</style>
