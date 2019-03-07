<template>
  <section>
    <h2>
      Skills
    </h2>
    <div class="skills">
      <div v-for="(skill, index) in info.skills" :key="index">
        <span class="skill-name">{{ skill.name }}</span>
        <ul>
          <li v-for="(point, index) in skill.points" :key="index">
            {{ point }}
          </li>
        </ul>
      </div>
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
  $number-of-subsections: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 25px;

  div {
    width: calc(100% / #{$number-of-subsections});
  }

  .skill-name {
    @include subsection-underline(10px);
    padding: 0 10px;
    font-weight: bold;
  }

  ul {
    margin-left: 10px;
  }

  li {
    padding-left: 15px;
  }
}
</style>
