# react-goodreads-shelf
![build](https://github.com/kylekarpack/react-goodreads-shelf/workflows/build/badge.svg) ![CodeQL](https://github.com/kylekarpack/react-goodreads-shelf/workflows/CodeQL/badge.svg)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-goodreads-shelf&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=kylekarpack_react-goodreads-shelf) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-goodreads-shelf&metric=coverage)](https://sonarcloud.io/dashboard?id=kylekarpack_react-goodreads-shelf)

This React component allows you to display a public Goodreads shelf in a React application. It's a lot like the Goodreads JavaScript widget, but allows for more customization, better async loading, and React-like usage.

## Demo
[Live Demo](https://kylekarpack.github.io/react-goodreads-shelf)

Preview

![Example image](/sample.png)

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
import GoodreadsBookshelf from "react-goodreads-shelf";

export default function App() {
  return (
    <GoodreadsBookshelf userId="USER_ID_HERE" />
  );
}
```

### SSR

`react-goodreads-shelf` supports basic server-side rendering. [An example](./packages/example-ssr/pages/) with `vite-plugin-ssr` might look as follows:

_index.page.server.tsx_
```jsx
import { fetchBooks } from "react-goodreads-shelf";

export { onBeforeRender };

async function onBeforeRender() {
  const books = await fetchBooks({
    userId: "63515611",
    limit: 10,
    width: 80
  });

  return {
    pageContext: {
      pageProps: {
        books
      }
    }
  };
}
```

_index.page.tsx_
```jsx
import { GoodreadsBookshelfPresentation } from "react-goodreads-shelf";

export { Page };

function Page({ books }: { books: BookGroup[] }) {
  return (
    <>
      <h1>SSR Rendered:</h1>
      <GoodreadsBookshelfPresentation
        books={books}
        width={80}
        displayOptions={{ hideBackgroundImages: true, hideDetails: true }}
      />
    </>
  );
}
```

## Customization

You can also set some options as supported by the Goodreads list page:

| Option | Type | Description | Default |
| ------ | ---- | ----------- | ------- |
| shelf  | string | The shelf from which to fetch books | read |
| sort  | string | The field by which to sort the results returned | date_read |
| limit  | number | The maximum number of books to be returned | 10 |
| width | number | Minimum width allowed for each book | 100 |
| search | string | Search text | "" |

## Development
- `npm run start` to watch changes and build
- `npm run storybook` to launch storybook for testing
