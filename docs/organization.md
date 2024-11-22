# Codebase Organization

> TODO: This document needs to be updated to reflect the latest organization expectations _(no barrel-files, nested `/components`, etc)_.

The purpose of this document is to help contributors understand how to organize their work within this repo, as well as how to contribute to tech debt by helping usher in a more organized file structure.

## Folder structure

A very common structure for a `React` codebase looks like this:

```log
├── 📁 .github/
    ├── ℹ️ Actions, workflows, templates, etc.
    └── 👥 CODEOWNERS
├── 📁 .storybook/
    ├── ℹ️ Storybook configuration files.
    └── 💾 main.ts
├── 📁 .vscode/
    ├── ℹ️ Editor configuration.
    ├── 📄 extensions.json
    └── 📄 settings.json
├── 📁 definitions/
    ├── ℹ️ TypeScript .d.ts definition files.
    └── 📔 audio.d.ts
├── 📁 docs/
    ├── ℹ️ Documentation for the codebase, company, projects, etc.
    ├── 📚 getting-started.md
    ├── 📚 overview.md
    ├── 📚 contributing.md
    ├── 📚 deploying.md
    └── 📚 resources.md
├── 📁 public/
    ├── ℹ️ Static publicly hosted files.
    └── 📄 robots.txt
├── 📁 src/
    ├── 📁 assets/
    │   ├── ℹ️ All image, sound, and video files that cannot be hosted by MediaMasher.
    │   ├── 📁 audio/
    │   │   ├── 🔈 sound.webm
    │   │   └── 🛢️ index.ts
    │   ├── 📁 image/
    │   │   ├── 🖼️ picture.webp
    │   │   └── 🛢️ index.ts
    │   ├── 📁 video/
    │   │   ├── 🎬 movie.webm
    │   │   └── 🛢️ index.ts
    │   └── 🛢️ index.ts
    ├── 📁 components/
    │   ├── ℹ️ General purpose design system components (dumb and stateless).
    │   ├── ℹ️ See `Nesting depth` section for `components` sub-group expectations.
    │   ├── 📁 Card/
    │   │   ├── 📁 parts/
    │   │   │   ├── 🧩 Header.tsx
    │   │   │   ├── 🧩 Footer.tsx
    │   │   │   └── 🛢️ index.ts
    │   │   ├── 🧩 Card.tsx
    │   │   ├── 💫 Card.motion.ts
    │   │   ├── 📕 Card.stories.ts
    │   │   ├── 💄 Card.style.ts
    │   │   ├── 🧪 Card.test.tsx
    │   │   ├── 🏷️ Card.types.ts
    │   │   ├── 🔧 Card.utilities.ts
    │   │   └── 🛢️ index.ts
    │   └── 🛢️ index.ts
    ├── 📁 features/
    │   ├── ℹ️ Complex components that are not tied to a specific page (smart and stateful).
    │   ├── 📁 WalletConnectSheet/
    │   │   ├── 📁 hooks/
    │   │   │   └── 🛢️ index.ts
    │   │   ├── 📁 locales/
    │   │   │   ├── 🌐 en.json
    │   │   │   └── 🌐 fr.json
    │   │   ├── 🧩 WalletConnectSheet.tsx
    │   │   ├── 💫 WalletConnectSheet.motion.ts
    │   │   ├── 📕 WalletConnectSheet.stories.ts
    │   │   ├── 💄 WalletConnectSheet.style.ts
    │   │   ├── 🧪 WalletConnectSheet.test.tsx
    │   │   └── 🛢️ index.ts
    │   └── 🛢️ index.ts
    ├── 📁 hooks/
    │   ├── ℹ️ All global and local hooks (Zustand store files go here as well).
    │   ├── ℹ️ We may decide to distinguish between `query` and `store` folders.
    │   ├── ℹ️ Most common “local state” hooks will come from a dependency.
    │   ├── 📁 useExchangeRatesQuery/
    │   │   ├── 🪝 useExchangeRatesQuery.ts
    │   │   ├── 🧐 useExchangeRatesQuery.request.ts
    │   │   ├── 🧪 useExchangeRatesQuery.test.ts
    │   │   └── 🛢️ index.ts
    │   ├── 📁 useExchangeRatesStore/
    │   │   ├── 🪝 useExchangeRatesStore.ts
    │   │   ├── 🧪 useExchangeRatesStore.test.ts
    │   │   └── 🛢️ index.ts
    │   └── 🛢️ index.ts
    ├── 📁 locales/
    │   ├── ℹ️ Global strings to be used anywhere in the app.
    │   ├── 🌐 en.json
    │   ├── 🌐 fr.json
    │   └── 🛢️ index.ts
    ├── 📁 icons/
    │   ├── ℹ️ Entire icon library (depending on if we use a icon dependency).
    │   ├── 🍱 arrow-up.svg
    │   └── 🛢️ index.ts
    ├── 📁 pages/
    │   ├── 📁 Home/
    │   │   ├── 📁 components/
    │   │   │   ├── 🧩 Header.tsx
    │   │   │   ├── 🧩 Footer.tsx
    │   │   │   └── 🛢️ index.ts
    │   │   ├── 📁 locales/
    │   │   │   ├── 🌐 en.json
    │   │   │   ├── 🌐 fr.json
    │   │   │   └── 🛢️ index.ts
    │   │   ├── 📁 sections/
    │   │   │   ├── 🧩 Hero.tsx
    │   │   │   ├── 🧩 Partners.tsx
    │   │   │   └── 🛢️ index.ts
    │   │   ├── 🧩 Home.tsx
    │   │   ├── 💄 Home.style.ts
    │   │   ├── 🧪 Home.test.tsx
    │   │   └── 🛢️ index.ts
    │   └── 🛢️ index.ts
    ├── 📁 styles/
    │   ├── ℹ️ Global styles config, reset, design-tokens, keyframes, etc.
    │   ├── 💄 reset.style.ts
    │   └── 🛢️ index.ts
    ├── 📁 types/
    │   ├── ℹ️ Global types and enums.
    │   ├── 🏷️ user.ts
    │   └── 🛢️ index.ts
    ├── 📁 utilities/
    │   ├── ℹ️ Global utilities and helpers.
    │   ├── 💾 array.ts
    └   └── 🛢️ index.ts
└── ℹ️ Dot files, env files, config files, index.html, etc.
```

The example above is simplified for brevity. There could be more folders within `/src`, such as:

- `classes/`
- `motion/`
- `providers/`
- `routes/`
- `webgl/`
- etc…

Whatever else might live within the codebase, it should follow the same organizational patterns as everything else. For example, if we did have a `providers/` folder, you could expect it to be organized exactly like the `components/` folder.

A “section” isn’t so much a “re-usable component” as it is a large chunk of UI isolated into a sub-folder for better organization. You can often think of `sections/` as a “sub-page” or “collection of page content / UI”. This is why `sections/` are only found within the `pages/` directory.

The `parts/` directory is essentially what we call “sub-components”. At this level, we can typically become a “flat structure” and stop worrying about recursive nesting.

**Note on `locales/`:**

If we decide to move away from `i18n` and only support the `English` language, we could do away with nested `/locales/` folders. However, I would advocate for continuing to put content strings in JSON _(or similar format)_. Maintaining a content-language dictionary is a good practice for scale. It helps us transition to `i18n` much easier, if/when that ever becomes a requirement.

If all we care about is a single co-located file for `English` strings, then we could simply use the format `WalletConnectSheet.locales.json`.

### Nesting depth

If there is no concern for folder nesting, then you would expect to see a recursive folder pattern like:
`src/pages/Home/sections/Frame/components/Header/components/Title/components/Tooltip/Tooltip.tsx`

There is nothing wrong with this approach, and plenty of large-scale repos operate this way. For the complexity of a project like this, we are unlikely to require this level of recursive nesting. We can simplify things slightly by following these principals:

- A `components/` folder will _never be nested_ within another `components/` folder.
  - At this point, we simply consider all “sub-components” to be grouped under `parts/`, and kept as a flat structure.
  - Depending on the complexity of the component(s), you may need further nesting. That is up to your discretion.

An example of nesting-depth limitations can be seen here in the `pages/` directory:

```log
├── 📁 pages/
    ├── 📁 Home/
    │   ├── 📁 sections/
    │   │   ├── 📁 Frame/
    │   │   │   ├── 📁 components/
    │   │   │   │   ├── 📁 Header/
    │   │   │   │   │   ├── 📁 parts/
    │   │   │   │   │   │   ├── 🧩 Title.tsx
    │   │   │   │   │   │   └── 🛢️ index.ts
    │   │   │   │   │   ├── 🧩 Header.tsx
    │   │   │   │   │   └── 🛢️ index.ts
    │   │   │   │   └── 🛢️ index.ts
    │   │   │   ├── 🧩 Frame.tsx
    │   │   │   └── 🛢️ index.ts
    │   │   └── 🛢️ index.ts
    │   ├── 🧩 Home.tsx
    │   └── 🛢️ index.ts
    └── 🛢️ index.ts
```

Furthermore, we may want to formalize how we group some nested structures. This will likely be most relevant for `src/components/` and `src/hooks`. Here is an example expectation for how we may formalize the `src/components/` folder:

```log
├── 📁 src/
    ├── 📁 components/
    │   ├── 📁 actions/
    │   │   ├── 📁 Button/
    │   │   ├── 📁 ButtonGroup/
    │   │   ├── 📁 Link/
    │   │   ├── 📁 Tabs/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 data/
    │   │   ├── 📁 DataChip/
    │   │   ├── 📁 DataTable/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 forms/
    │   │   ├── 📁 FieldCheck/
    │   │   ├── 📁 FieldNumber/
    │   │   ├── 📁 FieldRadio/
    │   │   ├── 📁 FieldSearch/
    │   │   ├── 📁 FieldText/
    │   │   ├── 📁 FieldTextArea/
    │   │   ├── 📁 Label/
    │   │   ├── 📁 ProgressBar/
    │   │   ├── 📁 RadioList/
    │   │   ├── 📁 RangeSlider/
    │   │   ├── 📁 Select/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 layout/
    │   │   ├── 📁 Accordion/
    │   │   ├── 📁 Card/
    │   │   ├── 📁 Frame/
    │   │   ├── 📁 Scrollable/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 loading/
    │   │   ├── 📁 SkeletonImage/
    │   │   ├── 📁 SkeletonHeading/
    │   │   ├── 📁 SkeletonSubheading/
    │   │   ├── 📁 SkeletonText/
    │   │   ├── 📁 Spinner/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 media/
    │   │   ├── 📁 Avatar/
    │   │   ├── 📁 Icon/
    │   │   ├── 📁 Thumbnail/
    │   │   ├── 📁 ThumbnailStack/
    │   │   ├── 📁 ThumbnailStrip/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 overlay/
    │   │   ├── 📁 Backdrop/
    │   │   ├── 📁 Modal/
    │   │   ├── 📁 Popover/
    │   │   ├── 📁 Sheet/
    │   │   ├── 📁 Tooltip/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 primitives/
    │   │   ├── ℹ️ TBD: This directory may be better suited outside of `/components`.
    │   │   ├── 📁 InputText/
    │   │   └── 🛢️ index.ts
    │   ├── 📁 typography/
    │   │   ├── 📁 BodyText/
    │   │   ├── 📁 HeadingText/
    │   │   ├── 📁 SubheadingText/
    │   │   └── 🛢️ index.ts
    └   └── 🛢️ index.ts
```

As for `src/hooks/`, we could consider a nested structure such as:

- `src/hooks/general` is for all general-purpose hooks.
  - Think of this as the “hook equivalent” to `src/utilities/*`.
  - Things like a `useWindowSize()` or `useAnimationFrame()` would be found here.
    - Although realistically - provided we have chosen a strong dependency for our general-purpose hooks - the amount of these hooks should be minimal.
- `src/hooks/query` is for all of our `useQuery()` hooks.
  - Things like a `useUserQuery()` or `useCollectionSortQuery()` would be found here.
- `src/hooks/store` is for all of our `Zustand` hooks.
  - Things like a `useBaseCurrencyStore()` or `useExchangeRatesStore()` would be found here.

It very could be that we would prefer `/query` and `/store` to live directly within `/src`. This decision is yet to be documented.

### Naming conventions

In general, you can expect every file and folder to be `lower-kebab-case`, with the following exceptions:

- Any config files that need to follow a naming convention in order to be recognized by their respective tool _(such as dot files)_.
- React component folders and files should reflect the name of the component _(Ex: `components/Card/Card.tsx` or `pages/Home/Home.test.tsx`)_.
- React hook folders and files should reflect the name of their hook _(Ex: `hooks/useSomething/useSomething.ts`)_.
- If you are grouping related components, features, etc - simply use `lower-kebab-case` _(Ex: `src/features/fantasy/useFantasyFeature.ts`)_.

Additionally, file extensions should reflect _exactly what is required_ by the contents of the file. For `TypeScript` files:

- The `.tsx` extension is used ONLY for files that would require the `React` import _(Ex: `Card.tsx` component file)_.
- The `.ts` extension is used for everything else _(`hooks`, `*.motion.ts`, `*.style.ts`, etc)_

Lastly, try to avoid abbreviations and acronyms _(Ex: prefer `utilities` over `utils`)_. This isn’t a hard rule, just be mindful of other contributors. Not everyone speaks English as their first language. It can be harder for other contributors to understand the meaning of idioms, slang words, shortened terms, etc.

### Export manifest aka “Barrel Files”

You will notice that many folders have a `index.ts` file. These files are reserved for re-exporting the relevant values contained within the same directory. This practice is a clear signal to consumers/developers of _what exactly is available for consumption_ outside of that directory. In order words, these manifest files are the public API for that folder.

Typically, you want to be very specific about what your `index.ts` file exports. Let’s take `src/components/Card/index.ts` as an example:

```ts
export {Card, type CardProps} from './Card';
export type {CardId, CardVariant} from './types';
```

Within the various `src/components/Card/*.ts(x)` files may be many exported values. This folder’s `index.ts` helps us whittle all of that down to a specific set of values exposed to the outside world.

Then, within the `src/components/index.ts`, we can simply do:

```ts
export * from './Card';
```

Using the `*` symbol will simply export _everything_ from the chosen path. This “everything export” is acceptable at the level of `src/components/`, because we have already declared the limited set of exports from within `src/components/Card/`. We would not want to use this “everything export” within `Card/`, because it casts too wide of a net and makes it less obvious what exports should be supported as an API.

Importing values is now much cleaner:

```ts
// Good: Concise single-entry import
import {Avatar, Card, Modal, type ModalProps} from '@/components';

// Bad: Overly specific imports
import {Avatar} from '@/components/Avatar';
import {Card} from '@/components/Card';
import {Modal, type ModalProps} from '@/components/Modal';
```

You know you are doing something wrong when you need to _dig too deep_ for an import:

```ts
import {CardHeaderTitle} from '@/components/Card/parts/Header';
```

This level of nesting + manifest files may seem excessive at times, especially when you have very basic components. Organizing projects like this early on will pay off over time as the project scales, files are added, and overall complexity grows.

### Pitfalls

Even with a well organized codebase and consistent export declarations, contributors can still make mistakes. The biggest pitfall developers often find themselves in is have created a “circular-dependency”. Here is an example:

```ts
///
/// src/types/common.ts

import type {FooValue} from '@/features';

export type CommonType = FooValue | 'bar';

///
/// src/hooks/useFooStore/useFooStore.ts

import type {CommonType} from '@/types';

export function useFooStore(bar = false) {
  const value: CommonType = bar ? 'bar' : 'foo';
  return value;
}

///
/// src/features/FooFeature/FooFeature.tsx

import {useFooStore} from '@/hooks';

export type FooValue = 'foo';

export function FooFeature() {
  const value = useFooStore();
  const filteredValue = value === 'bar' ? 'foo' : value;
  return <>{filteredValue}</>;
}
```

What we have here is a chain of imports that repeats itself:

- `FooFeature.tsx` defined `FooValue`.
- `common.ts` imports `FooValue` from `FooFeature.tsx` in order to be used within `CommonType`.
- `useFooStore.ts` imports `CommonType` in order to type the `value` return.
- `FooFeature.tsx` imports `useFooStore` to retrieve `value`.

The import chain looks like:

- `useFooStore.ts < common.ts < FooFeature.tsx < useFooStore.ts < common.ts < FooFeature.tsx < etc…`.

The key mistake here is that the `src/types/` folder should never be importing from the `src/features/`. Developers must understand the folder hierarchy in order to avoid these problems.

In general, the hierarchy looks like:

1. `src/definitions/`
2. `src/locales/`
3. `src/assets/`
4. `src/styles/`
5. `src/types/`
6. `src/utilities/`
7. `src/hooks/`
8. `src/icons/`
9. `src/components/`
10. `src/features/`
11. `src/pages/`

For folders such as `definitions`, `locales`, `assets`, and `styles` - hierarchy doesn’t matter so much, as these folders shouldn’t have imports/exports.

For everything else, you can only import from a folder above your place in the hierarchy. This means that `src/types/` should never import from a folder below _(such as `src/features/`)_. But, `src/features/` could import from `src/types/` just fine.

### Enforcement

There is nothing that we would deploy today which would enforce a particular organization structure.

In the future, we _might be able to_ catch certain violations via a `eslint/prettier` rule… but for now, we will need to rely on our own adherence to this model, as well as the code review process.
