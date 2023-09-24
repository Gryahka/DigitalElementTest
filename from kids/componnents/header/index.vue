<template>
  <div class="header">
    <img
      class="header__logo"
      src="@/static/img/scss-test/header/logo.jpg"
      alt="label"
    >

    <div class="header__menu" />
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;

  &__logo {
  }

  &__menu {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 26px;
      height: 3px;
      background-color: #356ead;
    }

    &::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 0;
      width: 26px;
      height: 3px;
      background-color: #356ead;
    }
  }
}
</style>
