# Learning Vite

> The purpose of this repo is to check out how vite works in comparison to other bundlers / dev servers...

## Setup

```bash
npm install
npm run dev
```

## Environment

Refer to [.env.example](./.env.example) for configuring environment.

* Variables prefixed with `APP_` will be exposed to front-end build, avoid placing sensitive information in these.
* Variables not prefixed can't be exposed.

### `import.meta` workaround for `jest`

Vite exposes environment variables via `import.meta.env.VAR_NAME`. However, `jest` tests will fail with an error when 
this syntax is used. This is a known issue with `jest`, and while there are workarounds using `babel`, the simplest 
solution is to define `process.env` variables and reference these instead.

**Refer to:**

* [`vite.config.ts`](./vite.config.ts#L14)
* [`@src/App.tsx`](./src/App.tsx#L35)
