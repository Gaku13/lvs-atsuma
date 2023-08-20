<template lang="pug">
  section#hero
    .container
      .hero-container
        h1
          span
            | なんでも
            br
            | 話せる、
            br
            | 聞ける、
            br
            | AIの友達。
        .img-container
          .img
            // img( src="~/static/images/misc/hero.jpg" alt="いつでもおしゃべり" )
          .iphone
            // img( src="~/static/images/misc/iphone-mu.png" alt="AIの友達" )
        .text-container
          .text
            | おしゃべりができて、
            br
            | なんでも知ってるAIの友達を
            br
            | 今すぐ作れます。
          a.button( href="#" target="_blank" rel="noopener noreferrer nofollow" )
            | ダウンロード

</template>

<style lang="stylus" scoped>
.hero-container
  display: flex
  align-items: center
  margin-bottom: 140px
  @media (max-width: $desktop)
    flex-wrap: wrap
    margin-left: -40px
    margin-right: -40px
    margin-bottom: 100px
  @media (max-width: $tablet)
    margin-left: -20px
    margin-right: -20px
    margin-bottom: 80px
  @media (max-width: $phone)
    margin-bottom: 60px

  h1
    width: 33.33%
    line-height: 1.1
    font-size: 64px
    font-weight: bold
    @media (max-width: $desktop-large)
      font-size 52px
    @media (max-width: $desktop)
      width: 50%
      order: 2
      text-align: center
    @media (max-width: $tablet)
      font-size 44px
    @media (max-width: $phone)
      font-size 7vw
    span
      display: inline-block
      text-align: left
  .img-container
    position relative
    width: 33.33%
    @media (max-width: $desktop)
      width: 50%
      order: 1
    .img
      max-width: 380px
      @media (max-width: $desktop)
        max-width none
      img
        width: 100%
        height: auto
    .iphone
      position: absolute
      right: -20px
      bottom: -40px
      width: 180px
      @media (max-width: $desktop-large)
        width: 140px
      @media (max-width: $desktop)
        width: 40%
      @media (max-width: $phone)
        right: -10px
        bottom: -20px
        width: 50%
      img
        width: 100%
        height: auto
  .text-container
    position relative
    width: 33.33%
    padding-left: 60px
    @media (max-width: $desktop)
      width: 100%
      order: 3
      padding: 0
      text-align: center
      margin-top: 50px
    @media (max-width: $phone)
      margin-top: 35px
    .text
      margin-bottom: 24px
      font-size: 24px
      line-height: 36px
      @media (max-width: $desktop-large)
        font-size 18px
      @media (max-width: $phone)
        line-height: 32px
    a.button
      display: block
      max-width 146px
      line-height: 20px
      padding: 12px
      color: $white
      font-size: 16px
      font-weight: bold
      text-align: center
      background-color: $primary
      transition: background-color .2s
      border-radius: 4px
      &:hover
        background-color: $secondary
      @media (max-width: $desktop)
        margin: 0 auto
</style>

<script>
</script>
