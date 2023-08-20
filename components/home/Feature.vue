<template lang="pug">
  section#feature
    .container
      h2
        | おしゃべりAIができること
        span あなたの毎日をいろいろな形でお手伝いできます。
      .card-container
        .card
          .tagline
            | 気軽に気楽に、
            br
            | なんでもおしゃべり。
          .text
            | まずはなんでもないおしゃべりから。
            br
            | 世間話でも、恋愛の相談でも、グチでも。
            br
            | あなただけのAIの友人に話しかけてみてください。
        .card
          .tagline
            | 検索するより簡単。楽しい。
          .text
            | ちょっと気になった事、ググるより楽しく簡単に教えてくれます。
        .card
          .tagline
            | 勉強も。
          .text
            | 勉強のお手伝いもお任せ！
            br
            | 先生より頼りになるかも？
        .card
          .tagline
            | 仕事も。
          .text
            | 使い方次第で、
            br
            | 仕事の頼れるパートナーに！
        .card
          .tagline
            | iPadでも、iPhoneでも、
            br
            | いつでもそこに。
          .text
            | いつでもあなたのそばにいるAIの友達。
            br
            | 外出時はチャットで、家では話しかけて、
            br
            | あなたと一緒に成長する、新しいAIの友人ともっともっと
            br
            | 親しくなってください。
</template>

<style lang="stylus" scoped>
#feature
  margin-bottom: 120px
  @media (max-width: $desktop)
    margin-bottom: 100px
  @media (max-width: $tablet)
    margin-bottom: 80px
  @media (max-width: $phone)
    margin-bottom: 60px

h2
  line-height: 1.8
  font-size: 36px
  font-weight: 700
  text-align: center
  @media (max-width: $desktop)
    font-size 32px
  @media (max-width: $tablet)
    font-size 28px
  @media (max-width: $phone)
    font-size 22px
  span
    display: block
    font-size: 16px
    font-weight: 400
    @media (max-width: $tablet)
      font-size 14px
.card-container
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(5, 1fr)
  grid-column-gap: 20px
  grid-row-gap: 20px
  @media (max-width: $tablet)
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(4, 1fr)
    grid-column-gap: 16px
    grid-row-gap: 16px
  .card
    color: $white
    background-size cover
    background-position center center
    padding: 40px
    border-radius: 16px
    @media (max-width: $desktop-large)
      padding: 30px
    &:first-child
      min-height: 420px
      grid-area: 1 / 1 / 4 / 3
      @media (max-width: $tablet)
        grid-area: 1 / 1 / 2 / 3
        min-height: 360px
      @media (max-width: $phone)
        min-height: 280px
      @media (max-width: $phone-small)
        min-height: 240px
    &:nth-child(2)
      grid-area: 1 / 3 / 3 / 5
      @media (max-width: $tablet)
        grid-area: 2 / 1 / 3 / 3
    &:nth-child(3)
      grid-area: 4 / 1 / 6 / 2
      @media (max-width: $tablet)
        grid-area: 3 / 1 / 4 / 2
    &:nth-child(4)
      grid-area: 4 / 2 / 6 / 3
      @media (max-width: $tablet)
        grid-area: 3 / 2 / 4 / 3
    &:last-child
      grid-area: 3 / 3 / 6 / 5
      @media (max-width: $tablet)
        grid-area: 4 / 1 / 5 / 3
    .tagline
      font-size: 32px
      font-weight: 700
      line-height: 48px
      margin-bottom: 24px
      @media (max-width: $desktop-large)
        font-size 30px
      @media (max-width: $desktop)
        font-size 24px
      @media (max-width: $tablet)
        font-size 5vw
        line-height: 1.6
    .text
      font-size: 16px
      font-weight: 600
      line-height: 28px
      @media (max-width: $desktop-large)
        font-size 15px
      @media (max-width: $tablet)
        line-height: 1.6
        font-size 2.667vw
      @media (max-width: $phone)
        font-size 3.733vw
</style>

<script>
</script>
