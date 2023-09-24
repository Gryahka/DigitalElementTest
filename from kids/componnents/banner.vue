<template>
  <div class="banner">
    <div class="banner__inner" />
    <div class="banner__inform">
      <h1 class="banner__title">
        New Automation Tool for Your Home
      </h1>

      <p class="banner__tx">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Faucibus tristique vulputate ultrices ut mauris tellus at.
        Posuere sollicitudin odio tellus elit.
      </p>

      <button class="banner__btn">
        See Our Project
      </button>
    </div>

    <div class="banner__image" />
  </div>
</template>

<script>
export default {
  name: 'BannerMain',
};
</script>

<style scoped lang="scss">
.banner {
  /* opacity: 0.2;
  background: linear-gradient(0deg, #98c3e8 8.84%, rgba(152, 195, 232, 0) 31.12%); */

  &__inform {
  }

  &__title {
    max-width: 510px;

    margin-bottom: 32px;
  }

  &__tx {
    margin-bottom: 71px;
  }

  &__btn {
    border-radius: 10px;
    background: var(--blue_04, #5a98d0);
    box-shadow: 5px 10px 20px 0px rgba(53, 110, 173, 0.2);

    padding: 15px 48px;

    transition: 0.3s;

    &:hover {
      box-shadow: 5px 5px 5px 0px rgba(53, 109, 173, 0.33);
    }
  }

  &__image {
    background-image: url('@/static/img/scss-test/banner/banner.jpg');
  }
}
</style>
