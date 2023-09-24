<template>
  <div class="test">
    <HeaderMain class="test__header container" />
    <BannerMain class="test__banner container" />
    <HelpMain class="test__help container" />
    <ClientsMain class="test__clients container" />
  </div>
</template>

<script>
import HeaderMain from '~/components/scss-test/header/index.vue';
import BannerMain from '~/components/scss-test/banner.vue';
import HelpMain from '~/components/scss-test/help.vue';
import ClientsMain from '~/components/scss-test/clients.vue';

export default {
  name: 'ScssTest',

  components: {
    HeaderMain,
    BannerMain,
    HelpMain,
    ClientsMain,
  },
};
</script>

<style scoped lang="scss">
.test {
  &__header {
    margin-top: 48px;
    margin-bottom: 20px;
  }

  &__banner {
  }

  &__help {
    margin-top: 192px;
    margin-bottom: 212px;
  }
}
</style>
