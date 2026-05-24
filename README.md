# etchkit

**No shadows. No softness. Just structure.**

A copy-paste UI component library built on [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). Square edges, hard 2px borders, and a signature offset depth effect — no blur, no glow, no radius.

Same model as [shadcn/ui](https://ui.shadcn.com/) — you own the code.

---

## Quick start

```bash
npx @etchkit/cli@latest init
npx @etchkit/cli@latest add button
npx @etchkit/cli@latest add card
```

## Design philosophy

- **No `box-shadow`** — depth is created through hard offset borders using stacked `div` layers
- **No `border-radius`** by default — components are square-edged (`rounded-sm` only for pill badge)
- **Hard 2px borders** — `border-2 border-foreground`, full contrast
- **Offset depth** — sibling `div` at `top: 4px; left: 4px` gives the illusion of depth without shadow
- **Uppercase tracked labels** — `text-xs font-medium uppercase tracking-widest`
- **High-contrast focus rings** — `ring-2 ring-foreground ring-offset-2`

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

## Packages

| Package | Description |
|---------|-------------|
| `@etchkit/cli` | CLI to init and add components |
| `@etchkit/ui` | All components (reference, don't import directly) |
| `@etchkit/tailwind` | Tailwind preset with all design tokens |

## Local development

```bash
pnpm install
pnpm dev
```

Docs site runs on [localhost:3000](http://localhost:3000).

## License

MIT
