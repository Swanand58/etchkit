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
| `--background` | `oklch(1 0 0)` | `oklch(0.145 0 0)` |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--muted` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` |
| `--muted-foreground` | `oklch(0.556 0 0)` | `oklch(0.708 0 0)` |
| `--border` | `oklch(0.922 0 0)` | `oklch(0.269 0 0)` |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` |
| `--radius` | `0px` | `0px` |

Dark mode is supported via the `.dark` class on `<html>`.

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
