# @etchkit/ui

Component source for [etchkit](https://github.com/Swanand58/etchkit) — a brutalist copy-paste UI library. 52 components built on Radix UI + Tailwind CSS v4.

**No shadows. No softness. Just structure.**

> This package is the source reference used by the docs site and CLI. The intended usage is via `@etchkit/cli` — components are copied directly into your project so you own the code.

## Add components to your project

```bash
npx @etchkit/cli@latest init
npx @etchkit/cli@latest add button
npx @etchkit/cli@latest add card
```

## Components (52)

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button` `calendar` `card` `carousel` `checkbox` `chart` `collapsible` `command` `context-menu` `copy-button` `dialog` `drawer` `dropdown-menu` `empty-state` `form` `hover-card` `input` `input-otp` `kbd` `label` `menubar` `navigation-menu` `number-input` `pagination` `popover` `progress` `radio-group` `resizable` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `slider` `sonner` `stepper` `switch` `table` `tabs` `textarea` `timeline` `toggle` `toggle-group` `tooltip`

**etchkit-exclusive** (not in shadcn/ui): `copy-button` `empty-state` `kbd` `number-input` `sidebar` `stepper` `timeline`

## Design philosophy

- **No `box-shadow`** — depth via hard offset borders (stacked `div` layers)
- **No `border-radius`** by default — square edges everywhere
- **Hard 2px borders** — `border-2 border-foreground`, full contrast
- **Uppercase tracked labels** — `text-xs font-medium uppercase tracking-widest`
- **High-contrast focus rings** — `ring-2 ring-foreground ring-offset-2`

## Part of etchkit

- [`@etchkit/cli`](https://www.npmjs.com/package/@etchkit/cli) — add components to your project
- [`@etchkit/tailwind`](https://www.npmjs.com/package/@etchkit/tailwind) — design tokens
- [Docs & Playground](https://github.com/Swanand58/etchkit)

## License

MIT
