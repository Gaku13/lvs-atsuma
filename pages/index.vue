<template lang="pug">
  main.home
    Hero
    Feature
    FAQ
    // Mission
    // Value
    // Service
    // Flow
    // About
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Feature from '~/components/home/Feature.vue'
import FAQ from '~/components/home/FAQ.vue'

// import IconArrow from '~/static/images/icon/arrow.svg?inline'

export default {
  components: {
    Hero,
    Feature,
    FAQ,
    // About,
    // IconArrow,
  }
};
</script>

<style lang="stylus" scoped>
.home
  padding-top: 64px
  @media (max-width: $phone)
    padding-top: 50px
  .page.is-loaded &
    .typo, .content
      transform translateY(0)
      opacity 1

</style>