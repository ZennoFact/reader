# PHP

## Hypertext Preprocessor

HTML 文書内に埋め込むスクリプト言語

またブラウザーに HTML ページを送り出す前にサーバーがそれを処理するシステム
サーバーとしては CGI を使って外部的に処理する場合とサーバーシステム内で処理する場合があり, 後者の場合には動作が軽快になる。

KCGでは2回生前期から，主にB学系とC学系で学習する。

### コードサンプル
```php
$text = '$が先頭についているものは変数として扱われます。宣言は特に必要ありません。';

function sampleFunction($text) {
  return $text . '関数は「function」と記述し,戻り値は「return」で返します。';
}

echo(sampleFunction() . "文字列連結は「.」で行います。echo内で連結するときは「,」でする方がおすすめです。");
```
