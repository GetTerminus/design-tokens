# Terminus Style Dictionary

---

<h2>:rotating_light: ATTENTION: THIS REPO HAS MOVED :rotating_light:</h2>

We have moved to separately published packages from a monorepo.

Please update any bookmarks to point to the new repo:
[https://github.com/GetTerminus/terminus-oss][tokens-repo]

NOTE: This package will still be published to the existing NPM package.

<h2>:rotating_light:</h2>

---

[![CircleCI][circle-badge]][circle-link]
[![DavidDM][david-badge]][david-link]
[![DavidDM Dev][david-dev-badge]][david-link]
<br>
[![semantic-release][semantic-release-badge]][semantic-release]
[![Renovate][renovate-badge]][renovate-link]
[![MIT License][license-image]][license-url]
[![ZenHub][zenhub-image]][zenhub-url]
<br>
[![NPM version][npm-version-image]][npm-url]
[![Github release][gh-release-badge]][gh-releases]


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
  - [CSS & SCSS](#css--scss)
  - [JavaScript & TypeScript](#javascript--typescript)
- [Development](#development)
  - [Tokens](#tokens)
  - [Commits](#commits)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

```bash
# Install the tokens package in an existing project:
$ yarn add @terminus/design-tokens 
```

## Usage

Currently there are two sets of tokens being generated:

1. Base Tokens: The lowest level of token, abstracted away from specific applications.
2. Library Tokens: Tokens generated for the UI Library.

### CSS & SCSS

```scss
// Base CSS tokens:
@import '~@terminus/design-tokens/css/design-tokens.css';
// or
// Library CSS Tokens
@import '~@terminus/design-tokens/css/library-design-tokens.css';

.foo {
  color: var(--ts-color-base-palette1-500);
}

// SCSS tokens variables:
@import '~@terminus/design-tokens/css/design-tokens.scss';

.foo {
  transition-duration: $ts-animation-time-delay-0;
}

// SCSS tokens map:
@import '~@terminus/design-tokens/css/design-tokens-map.scss';

.foo {
  transition-duration: map-get($tokens, 'ts-animation-time-delay-0');
}
```

### JavaScript & TypeScript

Import all tokens as a module:

```typescript
// Import all tokens
import * as TOKENS from '@terminus/design-tokens';
console.log(TOKENS.TsSpaceInline500);

// Import a specific token
import { TsSpaceInline500 } from '@terminus/design-tokens';
console.log(TsSpaceInline500);
```

Import the nested JSON tokens:

```typescript
import TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';
console.log(TOKENS_TREE);
```

## Development

### Tokens

```bash
# Install dependencies:
$ yarn install

# Generate tokens:
$ yarn run build

# Demo application:
$ yarn run demo:build
$ yarn run demo:start

# Lint files:
$ yarn run lint
$ yarn run lint:fix

# Start commit wizard:
$ yarn run cm
```

NOTE: When developing locally using `yarn link @terminus/design-tokens` you must tell your IDE to not ignore the `dist`
directory.

### Commits

The tokens are automatically published via our CI process with version control bumps controlled by the commits included.

| Action                                                 |  Commit Type   | Version Change |
|:-------------------------------------------------------|----------------|:---------------|
| A token is moved, removed, or renamed                  | BreakingChange | `1.x.x`        |
| A new token is added                                   | Feature        | `x.1.x`        |
| A tokens value is changed or other attributes modified | Fix            | `x.x.1`        |
| The tokens demo site is modified                       | Chore          | `none`         |

Running `yarn run cm` will start a walk-through in the CLI that will help you craft the correct commit.

**NOTE:** Demo site changes should **not** trigger a version change for the tokens library.


[npm-version-image]:      http://img.shields.io/npm/v/@terminus/design-tokens.svg
[gh-release-badge]:       https://img.shields.io/github/release/GetTerminus/design-tokens.svg
[semantic-release]:       https://github.com/semantic-release/semantic-release
[npm-url]:                https://npmjs.org/package/@terminus/design-tokens
[zenhub-image]:           https://dxssrr2j0sq4w.cloudfront.net/3.2.0/img/external/zenhub-badge.png
[renovate-badge]:         https://img.shields.io/badge/renovate-enabled-brightgreen.svg
[circle-link]:            https://circleci.com/gh/GetTerminus/design-tokens/tree/release
[renovate-link]:          https://renovatebot.com
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[david-badge]:            https://david-dm.org/GetTerminus/design-tokens.svg
[license-image]:          http://img.shields.io/badge/license-MIT-blue.svg
[circle-badge]:           https://circleci.com/gh/GetTerminus/design-tokens/tree/release.svg?style=shield
[david-link]:             https://david-dm.org/GetTerminus/design-tokens?view=list
[license-url]:            https://github.com/GetTerminus/design-tokens/blob/release/LICENSE
[gh-releases]:            https://github.com/GetTerminus/design-tokens/releases/
[zenhub-url]:             https://github.com/GetTerminus/design-tokens#zenhub
[david-dev-badge]:        https://david-dm.org/GetTerminus/design-tokens/dev-status.svg
[tokens-repo]:            https://github.com/GetTerminus/terminus-oss/tree/release/libs/design-tokens
