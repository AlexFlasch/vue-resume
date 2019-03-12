<template>
  <header>
    <div class="main-details">
      <h1 class="name">{{ info.name.first }} {{ info.name.last }}</h1>
      <h2 class="position">
        {{ info.position }}
      </h2>
      <span class="address">
        {{ info.contact.address }}
      </span>
    </div>
    <div class="contact-details">
      <a class="website" :href="info.contact.website">
        {{ info.contact.website }}
      </a>
      <a class="email" :href="`mailto:${info.contact.email}`">
        {{ info.contact.email }}
      </a>
      <a class="github" :href="`https://github.com/${info.contact.github}`">
        <i class="la la-github"></i>
        {{ info.contact.github }}
      </a>
      <a class="phone" :href="`tel:${info.contact.phone}`">
        {{ info.contact.phone }}
      </a>
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
@import '../styles/_base.scss';
@import '../styles/_mixins.scss';
@import '../assets/css/line-awesome.css';

header {
  padding-top: 10px;
  max-width: 95%;
}

.main-details {
  position: relative;
}

.name {
  display: inline;
  font-size: 2.5em;
  margin: 0;
  text-align: left;
  padding-left: 15px;
}

.position {
  display: inline;
  font-weight: bold;
  font-size: 1.25em;
}

.address {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
}

.contact-details {
  $font-size: 0.95em;
  @include section-underline($font-size);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px 2px 10px;
  font-size: $font-size;
}
</style>
