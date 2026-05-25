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

## Available components

`alert` `avatar` `badge` `button` `card` `checkbox` `dialog` `input` `label` `select` `separator` `switch` `tabs` `tooltip`

## Requirements

- React 18+
- Tailwind CSS v4
- TypeScript (recommended)

## Part of etchkit

- [`@etchkit/ui`](https://www.npmjs.com/package/@etchkit/ui) — component source reference
- [`@etchkit/tailwind`](https://www.npmjs.com/package/@etchkit/tailwind) — design tokens
- [Docs & Playground](https://github.com/Swanand58/etchkit)

## License

MIT
