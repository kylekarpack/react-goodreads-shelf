# react-goodreads-shelf

[![build](https://github.com/kylekarpack/react-goodreads-shelf/actions/workflows/node.js.yml/badge.svg)](https://github.com/kylekarpack/react-goodreads-shelf/actions/workflows/node.js.yml) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-goodreads-shelf&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=kylekarpack_react-goodreads-shelf) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-goodreads-shelf&metric=coverage)](https://sonarcloud.io/dashboard?id=kylekarpack_react-goodreads-shelf)

## ⚠️ Deprecated

**This package is deprecated as of v5.0.0 and no longer fetches book data.** The component renders a deprecation notice instead of the shelf.

**Why:** Goodreads removed anonymous public access to shelf data. The `/review/list` shelf page this component scraped now redirects unauthenticated visitors to sign in, the shelf RSS feeds (`/review/list_rss`) have been removed (404 across all users), individual review pages are login-walled, and the old developer API was shut down in 2020. The only remaining public surface is a 5-book embed widget (`/review/grid_widget`), which does not support pagination, ratings, authors, or dates, which is not enough to power this component.

Preview

![Example image](/sample/sample.png)

## Installation

```
npm install --save react-goodreads-shelf
```

or

```
yarn add react-goodreads-shelf
```

## Usage

```jsx
import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";

export default function App() {
  return <GoodreadsBookshelf userId="USER_ID_HERE" />;
}
```

## Customization

You can also set some options as supported by the Goodreads list page:

| Option | Type   | Description                                     | Default   |
| ------ | ------ | ----------------------------------------------- | --------- |
| shelf  | string | The shelf from which to fetch books             | read      |
| sort   | string | The field by which to sort the results returned | date_read |
| limit  | number | The maximum number of books to be returned      | 10        |
| width  | number | Minimum width allowed for each book             | 100       |
| search | string | Search text                                     | ""        |

## Development

- `npm run start` to watch changes and build
- `npm run storybook` to launch storybook for testing

## Contribution

Please feel free to open issues or pull requests and I will review as promptly as I am able.

### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.kylekarpack.com"><img src="https://avatars.githubusercontent.com/u/2429580?v=4?s=100" width="100px;" alt="Kyle"/><br /><sub><b>Kyle</b></sub></a><br /><a href="https://github.com/kylekarpack/react-goodreads-shelf/commits?author=kylekarpack" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://thedaviddias.dev"><img src="https://avatars.githubusercontent.com/u/237229?v=4?s=100" width="100px;" alt="David Dias"/><br /><sub><b>David Dias</b></sub></a><br /><a href="#a11y-thedaviddias" title="Accessibility">️️️️♿️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://eligundry.com/"><img src="https://avatars.githubusercontent.com/u/439936?v=4?s=100" width="100px;" alt="Eli Gundry"/><br /><sub><b>Eli Gundry</b></sub></a><br /><a href="https://github.com/kylekarpack/react-goodreads-shelf/commits?author=eligundry" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><img src="https://avatars.githubusercontent.com/u/17043634?v=4?s=100" width="100px;" alt="Bassem Ibrahim"/><br /><sub><b>Bassem Ibrahim</b></sub><br /><a href="https://github.com/kylekarpack/react-goodreads-shelf/commits?author=BassemMohamed" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
