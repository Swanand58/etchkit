# @etchkit/cli

CLI for [etchkit](https://github.com/Swanand58/etchkit) — add brutalist UI components directly into your project.

Same model as shadcn/ui: components are copied into your codebase, you own the code.

## Usage

### Init

Sets up Tailwind CSS v4 config and installs `@etchkit/tailwind`:

```bash
npx @etchkit/cli@latest init
```

### Add a component

```bash
npx @etchkit/cli@latest add button
npx @etchkit/cli@latest add card
npx @etchkit/cli@latest add input
```

Components are written to `src/components/ui/` by default.

## Available components (52)

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button` `calendar` `card` `carousel` `chart` `checkbox` `collapsible` `command` `context-menu` `copy-button` `dialog` `drawer` `dropdown-menu` `empty-state` `form` `hover-card` `input` `input-otp` `kbd` `label` `menubar` `navigation-menu` `number-input` `pagination` `popover` `progress` `radio-group` `resizable` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `slider` `sonner` `stepper` `switch` `table` `tabs` `textarea` `timeline` `toggle` `toggle-group` `tooltip`

**etchkit-exclusive** (not in shadcn/ui): `copy-button` `empty-state` `kbd` `number-input` `sidebar` `stepper` `timeline`

## Requirements

- React 19+
- Tailwind CSS v4
- TypeScript (recommended)

## Part of etchkit

- [`@etchkit/ui`](https://www.npmjs.com/package/@etchkit/ui) — component source reference
- [`@etchkit/tailwind`](https://www.npmjs.com/package/@etchkit/tailwind) — design tokens
- [Docs & Playground](https://github.com/Swanand58/etchkit)

## License

MIT
