<template lang="pug">
// headroom
header
  .container
    nuxt-link.logo( to="/" )
      Logo
    nav
      // a.nav-button( href="#" @click="click" )
        | menu
      .nav-container
        a.nav-close( href="#" @click="close" )
          X
        ul
          li
            nuxt-link( v-scroll-to="feature" to ) LVSについて
          li
            nuxt-link( v-scroll-to="faq" to ) 協力隊制度について
          li
            nuxt-link( v-scroll-to="faq" to ) スケジュール・エントリー要項
  .fixed-nav
    a.entry-button( href="#" target="_blank" rel="noopener noreferrer nofollow" )
      | エントリーする
      Login.icon( aria-hidden="true" role="presentation" )
    button( type="button" )
      Menu.icon( aria-hidden="true" role="presentation" )
</template>

<script>
import Logo from '~/static/images/logo.svg?inline'
import X from '~/static/images/icon/x.svg?inline'
import Login from '~/static/images/icon/login.svg?inline'
import Menu from '~/static/images/icon/menu.svg?inline'

import { headroom } from 'vue-headroom'

export default {
  components: {
    Logo,
    X,
    Login,
    Menu,
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
    position relative
    display flex
    align-items center
    width: 100%
    height 64px
    padding 0 80px
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
  .fixed-nav
    position fixed
    top 0
    right 0
    display flex
    align-items center
    padding 16px
    background-color $black
    z-index $zindex-fixed
    a,
    button
      display flex
      align-items center
      height 32px
      color $textContrast
      font-weight 600
    .icon
      color $textContrast
    button
      position relative
      &:before
        content ''
        position absolute
        top 0
        bottom 0
        left -16px
        border-left 1px solid $whiteTransparent
    a
      .icon
        margin-left 8px
</style>

