<template>
  <section>
    <h2>Career History</h2>
    <div class="employers">
      <div
        class="employer"
        v-page-breakable
        v-for="(employer, index) in info.experience"
        :key="index"
      >
        <p class="employer-info">
          {{ employer.company }}, {{ employer.location }} -
          {{ employer.position }}
        </p>
        <p class="timeperiod">{{ employer.timeperiod }}</p>
        <p class="employer-description">{{ employer.description }}</p>
        <ul class="employer-projects">
          <li
            class="project"
            v-for="(project, index) in employer.projects"
            :key="index"
          >
            <div class="project-basic-info">
              <span class="project-name">{{ project.name }}</span>
              <i class="inline-separator"></i>
              <span class="project-timeperiod">{{ project.timeperiod }}</span>
              <i class="inline-separator"></i>
              <span class="project-position">{{ project.position }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
          </li>
        </ul>
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
@import '../styles/_base.scss';

h2 {
  @include section-underline();
}

.employers {
  padding: 10px 15px;

  p {
    margin: 0;
  }

  & > * {
    padding: 0 10px;
  }
}

.employer {
  padding-top: 15px;
}

.employer-info {
  @include subsection-underline();
  font-weight: bold;
  width: 50%;
}

.timeperiod {
  font-size: 0.85em;
  padding-left: 15px;
}

.employer-description {
  padding-top: 10px;
}

.employer-projects {
  padding-left: 20px;
  list-style: none;
}

.project {
  padding: 5px 0;
}

.project-basic-info span {
  padding: 0 5px;
  font-weight: bold;
}

.project-description {
  padding-left: 15px;
}
</style>
