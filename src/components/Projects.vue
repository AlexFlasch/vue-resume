<template>
  <section>
    <h2>Projects</h2>
    <div class="projects">
      <div
        class="project"
        v-for="(project, index) in info.projects"
        :key="index"
        v-page-breakable
      >
        <p class="project-name">{{ project.name }}</p>
        <p class="project-description">{{ project.description }}</p>
        <p class="project-stack">
          <span class="bold">Tech Stack:</span>
          {{ project.stack }}
        </p>
        <p class="project-status">
          <span class="bold">Project Status:</span>
          {{ project.status }}
        </p>
        <p class="bold">
          Project Repository:
          <a class="project-link" :href="project.url">{{ project.url }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'Projects',
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
}

p {
  margin: 0;
  padding: 2px 0 0 10px;
}

.projects {
  padding: 10px 15px;
}

.project {
  padding-top: 15px;
  padding-left: 20px;
}

p.project-name {
  @include subsection-underline();

  font-weight: bold;
  width: 25%;
  padding: 0;
}

.project-stack {
  padding-top: 5px;
}

a.project-link {
  font-weight: normal;
}

.bold {
  font-weight: bold;
}
</style>
