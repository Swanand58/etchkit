# @etchkit/tailwind

Tailwind CSS v4 design tokens for [etchkit](https://github.com/Swanand58/etchkit) — the brutalist copy-paste component library.

**No shadows. No softness. Just structure.**

## Install

```bash
npm install @etchkit/tailwind
```

## Usage

In your global CSS file:

```css
@import "tailwindcss";
@import "@etchkit/tailwind";
```

That's it. All design tokens are available as CSS custom properties.

## Design tokens

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `#F8FAFC` (slate-50) | `#1e2130` (steel blue-gray) |
| `--foreground` | `#0F172A` (slate-900) | `#F5F7FA` (blue-tinted white) |
| `--muted` | `#F0F4F8` | `#252836` |
| `--muted-foreground` | `#64748B` | `#94A3B8` |
| `--border` | `#0F172A` | `#FAFAFA` |
| `--destructive` | `#EF4444` | `#EF4444` |
| `--surface-dark` | `#1e2130` | `#1e2130` |
| `--radius` | `0px` | `0px` |

`--surface-dark` is a fixed dark token for inverted sections — same value in both light and dark mode.

Dark mode via `.dark` class on `<html>`.

## Customization

Override any token in your own CSS after the import:

```css
@import "tailwindcss";
@import "@etchkit/tailwind";

:root {
  --background: oklch(0.97 0.01 214);
  --foreground: oklch(0.15 0.05 214);
  --radius: 4px;
}
```

## Part of etchkit

- [`@etchkit/cli`](https://www.npmjs.com/package/@etchkit/cli) — add components to your project
- [`@etchkit/ui`](https://www.npmjs.com/package/@etchkit/ui) — component source reference
- [Docs & Playground](https://github.com/Swanand58/etchkit)

## License

MIT
