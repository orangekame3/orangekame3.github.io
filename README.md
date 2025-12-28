# orangekame3.github.io

Personal portfolio site built with Astro + Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Blog Workflow

### Overview

ブログ記事はObsidian vault (`~/vault/blog/`) で作成し、インポートスクリプトでAstroに同期する。

### 記事の作成

1. Obsidianで Templater の `tp-blog` テンプレートを使用
2. ファイル名、タイトル(JA/EN)、説明(JA/EN)を入力
3. `blog/` フォルダに記事が作成される

### 記事フォーマット

```markdown
---
title_ja: 日本語タイトル
title_en: English Title
desc_ja: 日本語の説明
desc_en: English description
date: YYYY-MM-DD
publish: false
---

::ja

[日本語コンテンツ]

::en

<!-- draft:
[英語の下書き]
-->

<!-- review:
[レビューメモ]
-->

[最終版の英語コンテンツ]
```

### 英語レビューワークフロー

1. `::ja` セクションに日本語を書く
2. `<!-- draft: -->` に英語の下書きを書く
3. Claude Code で `/review-en ファイル名` を実行
4. `<!-- review: -->` に修正内容が記録される
5. 最終版がコメント外に生成される
6. 確認後 `publish: true` に変更

### 記事の公開

```sh
# vaultから記事をインポート
npm run import:vault

# ビルド
npm run build

# または一括実行 (Taskfile)
task publish
```

### Obsidian設定

- 通常の改行がそのまま反映される (`remark-breaks` 導入済み)
- 段落分けは空行を使用

### ディレクトリ構成

```
vault/
├── blog/                    # ブログ記事のソース
└── templates/
    └── template_plugin/
        └── tp-blog.md       # Templaterテンプレート

orangekame3.github.io/
├── src/content/blog/        # インポートされた記事
├── scripts/
│   └── import-from-vault.ts # インポートスクリプト
└── .claude/
    ├── skills/
    │   └── blog-en-review/  # 英語レビュースキル
    └── commands/
        └── review-en.md     # レビューコマンド
```
