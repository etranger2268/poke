---
project: "poke"
version: "1.0.0"
tech_stack:
  language: "TypeScript"
  frontend: "Next.js (App Router)"
  backend: "Next.js"
  database: "PostgreSQL (Drizzle ORM)"
  auth: "Better Auth"
  ui: "Tailwind CSS"
  linter_formatter: "Biome"
coding_style:
  naming: "camelCase"
  strict_type: true
---

# Project Context

## 🎯 プロジェクトの目的

ポケモンの情報を閲覧できる、認証機能（Better Auth）を備えたWebアプリケーション。

## 🛠 開発ルール (Rules)

フロントマターで定義した技術スタックに基づき、以下のルールを遵守してください。

- **型安全性の確保**:
  - `any` は原則禁止。Zod を使用したランタイムバリデーションを推奨。
- **コンポーネント設計**:
  - Server Components と Client Components を明確に分離する。
  - 基本的に `src/components` 配下に機能単位（またはドメイン単位）で配置。
- **Linter / Formatter**:
  - Biomeを使用し、既存の `biome.json` の設定に従う。
- **Git コミットメッセージ**:
  - [Conventional Commits](https://www.conventionalcommits.org/) に準拠。

## 🤖 Gemini への指示 (Custom Instructions)

- 回答は**簡潔かつ技術的**に行うこと。
- コードを提案する際は、アクセシビリティ（WAI-ARIA）を考慮すること。
- リファクタリング案を出すときは、必ず「なぜその方が良いのか」の理由を添えること。
- エラー解決の際は、根本原因の特定から順を追って説明すること。

## 📂 重要なディレクトリ

- `src/app`: ルーティングとページ
- `src/components`: 共通UIや、ドメイン別のコンポーネント
- `src/lib`: ビジネスロジック、外部APIとの通信、認証設定など
- `src/db`: スキーマ定義とマイグレーション
- `src/types`: プロジェクト共通の型定義
