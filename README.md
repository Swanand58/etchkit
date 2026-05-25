<div align="center">
  <img src="./logo.svg" alt="etchkit" width="56" height="56" />
  <h1>etchkit</h1>
  <p><strong>No shadows. No softness. Just structure.</strong></p>
</div>

---

A copy-paste UI component library built on [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS v4](https://tailwindcss.com/). Square edges, hard 2px borders — no blur, no glow, no radius.

Same model as [shadcn/ui](https://ui.shadcn.com/) — you own the code.

[![npm](https://img.shields.io/npm/v/@etchkit/cli)](https://www.npmjs.com/package/@etchkit/cli) [![npm](https://img.shields.io/npm/v/@etchkit/ui)](https://www.npmjs.com/package/@etchkit/ui) [![npm](https://img.shields.io/npm/v/@etchkit/tailwind)](https://www.npmjs.com/package/@etchkit/tailwind)

---

## Quick start

```bash
npx @etchkit/cli@latest init
npx @etchkit/cli@latest add button
npx @etchkit/cli@latest add card
```

## Design philosophy

- **No `box-shadow`** — depth via hard offset borders using stacked `div` layers
- **No `border-radius`** by default — everything is square-edged
- **Hard 2px borders** — `border-2 border-foreground`, full contrast
- **Uppercase tracked labels** — `text-xs font-medium uppercase tracking-widest`
- **High-contrast focus rings** — `ring-2 ring-foreground ring-offset-2`

## Components (52)

| Component | Radix UI | Exclusive |
|-----------|----------|-----------|
| Accordion | ✓ | |
| Alert | | |
| Alert Dialog | ✓ | |
| Aspect Ratio | ✓ | |
| Avatar | ✓ | |
| Badge | | |
| Breadcrumb | | |
| Button | | |
| Calendar | ✓ | |
| Card | | |
| Carousel | | |
| Checkbox | ✓ | |
| Collapsible | ✓ | |
| Command | ✓ | |
| Context Menu | ✓ | |
| Copy Button | | ✦ |
| Dialog | ✓ | |
| Drawer | | |
| Dropdown Menu | ✓ | |
| Empty State | | ✦ |
| Form | | |
| Hover Card | ✓ | |
| Input | | |
| Input OTP | | |
| Kbd | | ✦ |
| Label | ✓ | |
| Menubar | ✓ | |
| Navigation Menu | ✓ | |
| Number Input | | ✦ |
| Pagination | | |
| Popover | ✓ | |
| Progress | ✓ | |
| Radio Group | ✓ | |
| Resizable | | |
| Scroll Area | ✓ | |
| Select | ✓ | |
| Separator | ✓ | |
| Sheet | ✓ | |
| Sidebar | | ✦ |
| Skeleton | | |
| Slider | ✓ | |
| Sonner | | |
| Stepper | | ✦ |
| Switch | ✓ | |
| Table | | |
| Tabs | ✓ | |
| Textarea | | |
| Timeline | | ✦ |
| Toggle | ✓ | |
| Toggle Group | ✓ | |
| Tooltip | ✓ | |
| Chart | | |

✦ = etchkit-exclusive (not in shadcn/ui)

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| `@etchkit/cli` | CLI to init and add components | [![npm](https://img.shields.io/npm/v/@etchkit/cli)](https://www.npmjs.com/package/@etchkit/cli) |
| `@etchkit/ui` | All components (source reference) | [![npm](https://img.shields.io/npm/v/@etchkit/ui)](https://www.npmjs.com/package/@etchkit/ui) |
| `@etchkit/tailwind` | Tailwind v4 design tokens | [![npm](https://img.shields.io/npm/v/@etchkit/tailwind)](https://www.npmjs.com/package/@etchkit/tailwind) |

## Local development

```bash
pnpm install
pnpm dev
```

Docs site runs on [localhost:3000](http://localhost:3000).

## License

MIT
