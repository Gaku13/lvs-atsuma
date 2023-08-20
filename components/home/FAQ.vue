<template lang="pug">
  section#faq
    .container
      h2
        | よくある質問など
      .card-container
        .card
          .question このアプリはどのように機能しますか？
          .answer
            | このアプリは、ChatGPT技術を使用してユーザーの音声をテキストに変換し、迅速かつ正確に回答を提供します。回答は音声として出力され、ユーザーとの対話が可能です。
        .card
          .question このアプリを使用できるデバイスは？
          .answer
            | このアプリはiOSデバイスで利用できます。対応している最低バージョンや特定のデバイスモデルについては、アプリの詳細情報を確認してください。
        .card
          .question 利用できる言語は？
          .answer
            | 当アプリは現在、日本のユーザーを対象にしており、日本語での音声認識と回答が可能です。将来的に他の言語に対応する予定もあります。
        .card
          .question 無料ですか？
          .answer
            | アプリの価格と利用可能な機能については、アプリストアの情報ページをご確認ください。無料版と有料版がある場合や、サブスクリプションモデルが採用されている場合があります。
        .card
          .question プライバシーポリシーは？
          .answer
            | ユーザーのプライバシーを尊重し、適切なデータ保護措置を講じています。詳細なプライバシーポリシーについては、アプリ内もしくはウェブサイト上でご確認いただけます。
        .card
          .question 音声データは保存されますか？
          .answer
            | 音声データの取り扱いについては、アプリのプライバシーポリシーと利用規約を参照してください。一部の機能では音声データを一時的に保存することがありますが、適切なセキュリティ対策が施されています。
        .card
          .question オフラインでも使用できますか？
          .answer
            | ChatGPT音声チャットアプリはインターネット接続が必要です。これは、AIがリアルタイムで音声を処理し、回答を生成するためにクラウドサーバーへのアクセスが必要だからです。
        .card
          .question 音声認識の精度を上げたい
          .answer
            | まず以下の方法をお試しください。
            br
            | - 騒音の少ない環境で使用する
            br
            | - 明瞭に話す
            br
            | - マイクに近づけて話す
            br
            | 今後もアップデートにより認識精度も向上していきます。
        .card
          .question 対応できる質問やトピックの範囲は？
          .answer
            | 当アプリは、一般的な質問や情報検索、日常会話、エンターテイメント、教育、テクノロジーなど、さまざまなトピックに対応しています。ただし、アプリは常に改善されており、対応範囲は今後も拡大していく予定です。
</template>

<style lang="stylus" scoped>
#faq
  margin-bottom: 120px
  @media (max-width: $phone)
    margin-bottom: 80px
h2
  line-height: 54px
  font-size: 36px
  font-weight: 700
  text-align: center
  @media (max-width: $desktop)
    font-size 32px
  @media (max-width: $tablet)
    font-size 28px
  @media (max-width: $phone)
    font-size 22px  
.card-container
  display: flex
  flex-wrap: wrap
  margin-left: -10px
  margin-right: -10px
  .card
    width: calc(33.33% - 20px)
    min-height: 280px
    padding: 24px
    margin: 10px
    background-color: $bg
    border-radius: 16px
    @media (max-width: $desktop)
      width: calc(50% - 20px)
    @media (max-width: $phone-small)
      width: 100%
      min-height: 0
    .question
      line-height: 1.55
      font-size: 18px
      font-weight: 600
      margin-bottom: 16px
      @media (max-width: $tablet)
        font-size: 16px
    .answer
      line-height: 1.85
      font-size: 16px
      @media (max-width: $tablet)
        font-size: 14px

</style>

<script>
</script>
