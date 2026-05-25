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

That's it. All design tokens are available as CSS custom properties:

| Token | Default |
|-------|---------|
| `--background` | `0 0% 100%` |
| `--foreground` | `0 0% 3.9%` |
| `--border` | `0 0% 3.9%` |
| `--muted` | `0 0% 96%` |
| `--destructive` | `0 84% 60%` |
| `--radius` | `0px` |

Dark mode is supported via the `.dark` class.

## Customization

Override any token in your own CSS after the import:

```css
@import "tailwindcss";
@import "@etchkit/tailwind";

:root {
  --background: 214 60% 97%;
  --foreground: 214 80% 10%;
}
```

## Part of etchkit

- [`@etchkit/cli`](https://www.npmjs.com/package/@etchkit/cli) — add components to your project
- [`@etchkit/ui`](https://www.npmjs.com/package/@etchkit/ui) — component source reference
- [Docs & Playground](https://github.com/Swanand58/etchkit)

## License

MIT
