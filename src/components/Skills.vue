<template>
  <section>
    <h2>
      Skills
    </h2>
    <div class="skills">
      <!-- <div class="skill-type" v-for="(skill, index) in info.skills" :key="index"> -->
        <!-- <span class="skill-name">{{ skill.name }}</span> -->
      <span v-for="(skill, index) in info.skills" :key="index">
        {{ skill.concat(index < Object.keys(info.skills).length - 1 ? ',' : '')}}
      </span>
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'Skills',
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
  @include section-underline(15px);
}

.skills {
  padding: 10px 25px;

  .skill-type {
    display: inline;
  }

  .skill {
    padding: 0 5px;
  }

  .skill-name {
    @include subsection-underline(10px);
    padding: 0 10px;
    font-weight: bold;
  }
}
</style>
