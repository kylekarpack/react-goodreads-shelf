# react-goodreads-shelf
![build](https://github.com/kylekarpack/react-goodreads-shelf/workflows/build/badge.svg) ![CodeQL](https://github.com/kylekarpack/react-goodreads-shelf/workflows/CodeQL/badge.svg)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-goodreads-shelf&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=kylekarpack_react-goodreads-shelf) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-goodreads-shelf&metric=coverage)](https://sonarcloud.io/dashboard?id=kylekarpack_react-goodreads-shelf)

This React component allows you to display a public Goodreads shelf in a React application. It's a lot like the Goodreads JavaScript widget, but allows for more customization, better async loading, and React-like usage.

## Demo
[Live Demo](https://kylekarpack.github.io/react-goodreads-shelf)

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
  return (
    <GoodreadsBookshelf userId="USER_ID_HERE" />
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
