<template>
  <header>
    <h1 class="name">{{ info.name.first }} {{ info.name.last }}</h1>
    <span class="position">
      {{ info.position }}
    </span>
    <div class="contact-details">
      <span class="website">
        {{ info.contact.website }}
      </span>
      <span class="email">
        {{ info.contact.email }}
      </span>
      <span class="github">
        <i class="la la-github"></i>
        {{ info.contact.github }}
      </span>
    </div>
  </header>
</template>

<script>
import myInfo from '../my-info';

export default {
  name: 'Header',
  data() {
    return {
      info: myInfo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../assets/css/line-awesome.css';

header {
  padding-top: 10px;
  width: 50%;
}

.name {
  display: inline;
  font-size: 2.5em;
  margin: 0;
  text-align: left;
  padding-left: 15px;
}

.position {
  font-weight: bold;
  font-size: 1.25em;
}

.contact-details {
  $font-size: 0.95em;
  @include title-underline($font-size);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px 2px 10px;
  font-size: $font-size;
}
</style>
