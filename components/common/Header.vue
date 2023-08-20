<template lang="pug">
// headroom
header
  nuxt-link.logo( to="/" )
    Logo
  nav
    // a.nav-button( href="#" @click="click" )
      | menu
    .nav-container
      // a.nav-close( href="#" @click="close" )
        X
      ul
        li
          nuxt-link( v-scroll-to="feature" to ) LVSについて
        li
          nuxt-link( v-scroll-to="faq" to ) 協力隊制度について
        li
          nuxt-link( v-scroll-to="faq" to ) スケジュール・エントリー要項
    a.download-button( href="#" target="_blank" rel="noopener noreferrer nofollow" ) エントリーする
</template>

<script>
import Logo from '~/static/images/logo.svg?inline'
import X from '~/static/images/icon/x.svg?inline'

import { headroom } from 'vue-headroom'

export default {
  components: {
    Logo,
    X,
    headroom,
  },
  data() {
    return {
      feature: {
        el: '#feature',
        offset: -80,
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      },
      faq: {
        el: '#faq',
        offset: -80,
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      }
    };
  },
  methods: {
    click: function() {
      var nav;
      nav = document.querySelector('.nav-container');
      return nav.classList.add('show');
    },
    close: function() {
      var nav;
      nav = document.querySelector('.nav-container');
      return nav.classList.remove('show');
    }
  }
}
</script>

<style lang="stylus">
  header
    display flex
    align-items center
    width: 100%
    height 64px
    padding 0 24px
    background $white
    z-index $zindex-header
    @media (max-width: $phone)
      justify-content: space-between
      height 50px
      padding 0 16px
  .logo
    svg
      width 255px
      height auto
      vertical-align bottom
  nav
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    @media (max-width: $phone)
      width: auto
    .nav-button
      display none
      line-height 18px
      visibility hidden
      font-weight 700
      letter-spacing .1rem
      @media (max-width: $phone)
        display block
        visibility visible
    .nav-container
      position relative
      margin-left: 24px
      visibility visible
    ul
      display flex
      align-items center
      justify-content center
      list-style none
      margin 0
      padding 0
      li
        padding 0 20px
        a
          color $text
          font-size 14px
          letter-spacing .025rem
          text-decoration none
          transition color .3s
          &:hover
            color $primary
      @media (max-width: $phone)
        display none
</style>

