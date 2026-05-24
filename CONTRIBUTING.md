# Contributing to etchkit

## Adding a new component

### 1. Build the component

Create `packages/ui/src/components/[name].tsx`. Rules:
- `React.forwardRef` — always
- Spread native HTML props via `React.ComponentPropsWithoutRef`
- Use `cn()` from `../lib/utils` for className merging
- No imports from other components (only `../lib/utils`)
- No `box-shadow`, no `border-radius` (unless pill variant), no inline styles

### 2. Export from index

Add to `packages/ui/src/index.ts`:
```ts
export * from './components/[name]'
```

### 3. Add to registry

Create `registry/components/[name].json`:
```json
{
  "name": "component-name",
  "source": "<full component source as a string>"
}
```

### 4. Declare Radix deps

Add to `packages/cli/src/commands/add.ts` in `RADIX_DEPS`:
```ts
'component-name': ['@radix-ui/react-package'],
```

### 5. Add docs page

Add to the `componentMeta` map in `apps/www/app/docs/components/[slug]/page.tsx`.

Add a live preview to `apps/www/components/component-preview.tsx`.

### 6. Check the philosophy

Before submitting:
- [ ] No `box-shadow` anywhere
- [ ] No `border-radius` except `rounded-sm` for pill variants
- [ ] 2px borders: `border-2 border-foreground`
- [ ] Focus: `ring-2 ring-ring ring-offset-2`
- [ ] Labels: `text-xs font-medium uppercase tracking-widest`
- [ ] Depth effect uses sibling `div`, not CSS shadows

## Running locally

```bash
pnpm install
pnpm dev
```

## Commit style

```
feat(ui): add popover component
fix(cli): resolve path on windows
docs(www): add tooltip examples
```
