<template lang="pug">
  footer
    .container
      .footer-hero
        .logo
          // LogoSymbol
        .tagline なんでも話せる、聞ける、AIの友達。
        // img.download( src="~/static/images/misc/download_dummy.png" alt="ダウンロード" )
      .footer-container
        .copyright
          | © A Zero Group inc.
        .nav
          ul
            li
              a( href="#" target="_blank" rel="noopener noreferrer nofollow" ) 利用規約
            li
              a( href="#" target="_blank" rel="noopener noreferrer nofollow" ) プライバシーポリシー
            li
              a( href="https://a-zero.group/" target="_blank" rel="noopener noreferrer nofollow" ) 運営会社

</template>

<style lang="stylus">
footer
  position relative
  font-size 14px
  padding-bottom: 60px
.footer-hero
  display flex
  align-items center
  justify-content center
  flex-direction: column
  position relative
  padding: 40px 0 200px
  @media (max-width: $phone)
    padding: 0 0 80px
  .logo
    width 128px
    height: 128px
    margin-bottom: 24px
    @media (max-width: $phone)
      width 80px
      height: 80px
      svg
        width 80px
        height: 80px
  .tagline
    font-size 44px
    font-weight 700
    margin-bottom: 30px
    @media (max-width: $desktop)
      font-size 32px
    @media (max-width: $tablet)
      font-size 24px
    @media (max-width: $phone-small)
      font-size 18px
  .download
    width: 200px
    height: auto
    transition opacity .2s
    cursor pointer
    &:hover
      opacity .75
.footer-container
  display flex
  justify-content: space-between
  @media (max-width: $tablet)
    flex-direction: column
    justify-content: center
    align-items: center
  .nav
    ul
      list-style none
      display: flex
      align-items: center
      margin 0
      padding 0
      @media (max-width: $tablet)
        margin-bottom 50px
    li
      margin-right 16px
    a
      color $text
      transition color .2s
      &:hover
        color $primary
  .copyright
    color $text
    text-align right
    @media (max-width: $phone-small)
      font-size 12px

</style>

<script>
// import LogoSymbol from '~/static/images/logo_symbol.svg?inline'

export default {
  components: {
    // LogoSymbol,
  },
}
</script>
