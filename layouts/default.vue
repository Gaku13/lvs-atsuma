<template lang="pug">
  .page
    Header
    .nuxt-container
      Loading
      .nuxt-body
        nuxt
      Footer
</template>

<style lang="stylus">
.nuxt-container
  position relative
  z-index 3
.nuxt-body
  position relative
  min-height 100vh
  z-index 1
</style>

<script>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';
import Loading from '~/components/common/Loading.vue';

export default {
  components: {
      Header,
      Footer,
      Loading,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }  
}
 </script>
