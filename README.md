# 行った処理

```
$ npm -g install electron-prebuilt
$ mkdir reader
$ cd reader`
$ npm init -y`
```

```json:package.json
{
  ...
  "main": "main.js",
  ...
}
```

`main.js`はElectronのWindowを出したりとかそういうことだけに使う。
もりもりコード書く。

`main.js`から呼び出す`index.js`をもりもり書く。
cssは適当に。今回は__Bootstrap__落としてきて`lib/bootstrap`として使った。

`lib/fileUtil.js`をもりもり作成。モジュールは最後に呼び出し元に受け渡すこと。

```
$ npm -g install bower
$ bower init (質問が来るので，適当にGoogle先生を頼りながらやりましょう)
$ bower install angular marked --save
```

`index.js`をもりもり作成。ここではめんどくさくなったので__AngularJS__使って処理しました。

- __bower__はフロント用のパッケージ管理システム。`npm`みたいな使い方します
- __remoteオブジェクト__の扱いに要注意。ある程度理解を深めておくこと
- __BrowserProcess__あるいは__Main Process__と，__RendererProcess__の2種類のプロセスがあることに注意
- __AngularJS__のデータの__バインド__方法について理解をしておくこと。__フロントMVC__から一歩踏み出した領域までカバーしているので，実際のところ__Node.js__に任せた方がいいところまで扱えるけれど，__Backbone.js__は__underscore.js__にテンプレートの呼び出しを依存していたりと，マッハで覚えるには少し学習コストが高いような気がしたのでこいつを使用しました。ほかに考えられる手段として，__React__か__Polymer__なんだけど，Reactは__Flux__どうすんだ問題が解消されていなかったり，Polymerは正式版に上がった際にすっげー書き方が変わったり，そもそも__Shadow DOM__の概念は生きてんの？とかそんな悩みがあったので見送りました。
- あと，__bowercompornents__と__node_modules__は__.gitignore__に記述して__git__で管理しないようにしていますので悪しからず。自力で頑張れ。
- サーバサイドはどこからElectronでNode本来の部分はどこなのかを把握することを一番に考えましょう。その後は，フロント（Angular）へデータを受け渡す方法を把握すること。
- フロントはBootstrapのクラス設定とAngularの__ビルトインディレクティブ__を理解しましょう。

## 現状アップデート関連の使ってないファイルが混ざってたりするけど気にすんな♪

### あと，実際に自分でマネしながら一度は書いてみること。わからなかったら質問してください。
