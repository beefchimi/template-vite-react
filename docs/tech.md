# Tech Stack

This document outlines some future expectations for the frontend team.

## Context

We want to enable fast iteration and reduced friction, while still encouraging strong conventions and consistency. While there is an upfront cost to establishing a solid foundation from which to build, that investment will pay dividends over time.

### Basic philosophy

- Curate the best set of tools and conventions.
- Set everything up and ensure that it is working correctly.
- Allow the tooling to automate conventions _(linting, formatting, etc)_.

Tooling can’t account for everything. Encouraging a healthy code review process will help mitigate what gets missed.

## Principals

> Section in progress…

- Minimal dependencies
- Co-location
- Composable UI
- Informative commit history
  - We could enforce this with a tool like [`conventional-changelog`](https://github.com/conventional-changelog/conventional-changelog).
- Code review

## Tooling overview

Here is a quick list of tools that we intend to use. Further elaboration for each tool will be documented overtime.

Depending on if we want to make a more drastic turn towards SSR / Server components, we may revise our tool choices in favour of `Next` or `Remix`. Until we can have stronger opinions about that, we will move forward without them.

### Build tooling

- [Node / NPM](https://docs.npmjs.com/about-npm)
  - Willing to consider an alternative, such as `pnpm`.
- [Vite](https://vitejs.dev/)
  - Will need to clarify our bundle expectations.
- [TypeScript](https://www.typescriptlang.org/)
  - Exact config will need to be clarified.
  - Refer to this repo for some early expectations for configuration.
- [Eslint](https://eslint.org/)
  - A list of specific plugins can be curated in the future.
  - Refer to this repo for some early expectations for linting.
- [Prettier](https://prettier.io/)
  - Config will be minimal.
  - Refer to this repo for some early expectations for formatting.
- [GitHub Actions](https://docs.github.com/en/actions)
  - A list of specific actions can be curated in the future.
  - Refer to this repo for some early expectations for actions.

### Application tech

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Storybook](https://storybook.js.org/)
- [i18next](https://react.i18next.com/)
  - A better candidate is probably `LingUI` via `Vite + SWC`:
    - [`lingui`](https://lingui.dev/)
  - Open to considering alternate libraries, such as:
    - [`typesafe-i18n`](https://github.com/ivanhofer/typesafe-i18n)
    - [`i18nifty`](https://github.com/garronej/i18nifty)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query](https://tanstack.com/query/latest/)
- [useHooks](https://usehooks.com/)
- [Type Fest](https://github.com/sindresorhus/type-fest)
- [Radix](https://www.radix-ui.com/primitives) _(TBD what headless UI we use)_
- Style solution TBD… _(at the moment, [`vanilla-extract`](https://vanilla-extract.style/) and [`panda-css`](https://panda-css.com/) are the top candidates)_
- `WebGL` solutions TBD… _(this will be difficult to form opinions on, as none of our current developer’s are specialists in this space)_
- `WASM` solution TBD _(our needs may be as simple as a `.wasm` Vite loader)_

### Supplementary dependencies

- [`floating-ui`](https://floating-ui.com)
- [`framer-motion`](https://www.framer.com/motion)
- [`react-virtual`](https://tanstack.com/virtual/v3)

### Editor tooling

Developers are free to use any IDE they want, but we will officially support `VsCode` with opinionated `settings` and `extensions`.

- [i18n-ally](https://github.com/lokalise/i18n-ally)
- [streetsidesoftware.code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- And more… _(see this repo’s `extensions.json` for more)_

### Other considerations

- [Husky](https://typicode.github.io/husky/)
  - Do we actually care about pre-commit hooks?
- [Vitest](https://vitest.dev/)
  - If we want to write unit tests, and are going ot be using `vite`, then this is the best `jest` alternative.
  - Additionally, we would want to use the relevant “React Testing Library” packages.
- [Cypress](https://www.cypress.io/) _(we use this today but I want to learn more about our needs)_
- Mock Service Worker?
- GraphQL?
- Assets? _(Media Masher)_
- ORM? _(Such as `Prisma`)_
- Error tracking? _(Such as `Sentry`)_
- Icons?
  - Do we want to go all-in on an existing solution?
    - [`ionic`](https://ionic.io/ionicons)
    - [`iconic`](https://iconic.app/)

## Codebase organization

Documentation for how to organize the codebase can be found locally within this repo.
