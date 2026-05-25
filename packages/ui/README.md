# @etchkit/ui

Component source for [etchkit](https://github.com/Swanand58/etchkit) — a brutalist copy-paste UI library built on Radix UI + Tailwind CSS v4.

**No shadows. No softness. Just structure.**

> This package exists as a source reference and for the docs site. The intended usage is via `@etchkit/cli` — components are copied directly into your project so you own the code.

## Add components to your project

```bash
npx @etchkit/cli@latest init
npx @etchkit/cli@latest add button
npx @etchkit/cli@latest add card
```

## Components

| Component | Description |
|-----------|-------------|
| Alert | Status message with left-border accent |
| Avatar | Square by default, 2px border, initials fallback |
| Badge | Inline status indicator, square or pill |
| Button | Filled, outline, ghost, destructive variants |
| Card | Signature offset depth effect |
| Checkbox | Square, checked = bg-foreground |
| Dialog | Modal with offset depth, bg-black/60 overlay |
| Input | 2px border, h-10, no radius |
| Label | Uppercase tracked, Radix Label |
| Select | Radix Select, left-border item highlight |
| Separator | 2px full-contrast divider |
| Switch | Square thumb and track |
| Tabs | Active tab = filled bg-foreground |
| Tooltip | bg-foreground text-background, 2px border |

## Design philosophy

- **No `box-shadow`** — depth via hard offset borders (stacked `div` layers)
- **No `border-radius`** by default — square edges everywhere
- **Hard 2px borders** — `border-2 border-foreground`, full contrast
- **Offset depth** — sibling `div` at `top: 4px; left: 4px`
- **High-contrast focus rings** — `ring-2 ring-foreground ring-offset-2`

## Part of etchkit

- [`@etchkit/cli`](https://www.npmjs.com/package/@etchkit/cli) — add components to your project
- [`@etchkit/tailwind`](https://www.npmjs.com/package/@etchkit/tailwind) — design tokens
- [Docs & Playground](https://github.com/Swanand58/etchkit)

## License

MIT
