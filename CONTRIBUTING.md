# Contributing to etchkit

## Branching rules

**Never push directly to `main`.** All changes go through a PR.

```
main          ← protected, no direct push
 └── feat/button-variant     ← your branch
 └── fix/calendar-hover
 └── chore/bump-deps
```

Branch naming:
- `feat/<name>` — new component or feature
- `fix/<name>` — bug fix
- `chore/<name>` — deps, config, tooling
- `docs/<name>` — documentation only

PR must have CI green (type-check + build + test) before merging.

---

## CI requirements

Every PR must pass all three checks before merging:

| Check | Command | What it catches |
|-------|---------|-----------------|
| Type check | `pnpm type-check` | TypeScript errors across all packages |
| Build | `pnpm build` | Broken exports, missing files, bundler errors |
| Tests | `pnpm test` | Component render failures, missing registry files |

CI runs automatically on every PR. Do not merge if any check is red.

---

## Design rules

etchkit has one visual law. Every component must follow it without exception.

**Required:**
- `border-2 border-foreground` — 2px full-contrast border on all interactive surfaces
- No `border-radius` — use `rounded-sm` only for pill badge variant
- No `box-shadow` — depth is created with offset `div` layers only
- High-contrast focus rings — `focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2`
- Uppercase labels — `text-xs font-medium uppercase tracking-widest`
- Use `cn()` from `../lib/utils` for all className merging
- Always use `React.forwardRef` and spread `React.ComponentPropsWithoutRef`

**Forbidden:**
- `shadow-*` (any box shadow utility)
- `rounded-*` except `rounded-sm` on pill badge
- `blur-*` / `backdrop-blur-*`
- Decorative gradients
- Inline styles

**Offset depth effect** (for card-like surfaces):
```tsx
<div className="relative border-2 border-foreground">
  <div className="absolute top-[4px] left-[4px] right-0 bottom-0 border-2 border-foreground -z-10" />
  {/* content */}
</div>
```

---

## Adding a new component

1. **Build the component** in `packages/ui/src/components/<name>.tsx`

2. **Export from index** — add to `packages/ui/src/index.ts`:
   ```ts
   export * from './components/component-name'
   ```

3. **Add to the registry** — create `registry/components/<name>.json`:
   ```json
   {
     "name": "component-name",
     "files": ["packages/ui/src/components/component-name.tsx"]
   }
   ```

4. **Register CLI dependencies** in `packages/cli/src/commands/add.ts` — add to `RADIX_DEPS`:
   ```ts
   'component-name': ['@radix-ui/react-something'],
   ```

5. **Add a preview** in `apps/www/components/component-preview.tsx`

6. **Add usage snippet** in `apps/www/lib/component-usage.ts`

7. **Add to sidebar** in `apps/www/components/sidebar-nav.tsx` (alphabetical order)

8. **Add component meta** in `apps/www/app/docs/components/[slug]/page.tsx`

9. **Write a smoke test** in `packages/ui/src/test/smoke.test.tsx`:
   ```tsx
   it('ComponentName renders', () => {
     render(<ComponentName />)
   })
   ```

10. **Add to component list** in `packages/cli/src/test/registry.test.ts`

---

## Naming conventions

- File names: `kebab-case.tsx`
- Exports: `PascalCase`
- Sub-components: `ParentNameSubPart` (e.g. `CardHeader`, `TabsTrigger`)
- Props: follow Radix UI conventions where applicable

## Running locally

```bash
pnpm install
pnpm dev        # docs site on localhost:3000
pnpm test       # run all tests
pnpm type-check # type check all packages
```

## Commit style

```
feat: add timeline component
fix: calendar hover text invisible in dark mode
chore: bump dependency versions
```

## PR checklist

- [ ] CI passes (type-check, build, tests)
- [ ] No `box-shadow`, no `border-radius` (except pill badge), 2px borders everywhere
- [ ] Component exported from `packages/ui/src/index.ts`
- [ ] Registry JSON file created
- [ ] CLI `RADIX_DEPS` entry added
- [ ] Smoke test added
- [ ] Sidebar + preview + usage updated (for new components)
