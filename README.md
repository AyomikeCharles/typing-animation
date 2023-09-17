# my-react-typescript-package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

React Typing animate is an npm package use for typing animation



[**Live Demo**](https://ayomikecharles.github.io/typing-animation/)

## Installation:

```bash
npm install react-typing-animate --save-dev
```

or

```bash
yarn add -D react-typing-animate
```

## Usage :

Add `Typing` to your component:

```js

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Typing } from 'react-typing-animate'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>
        Hi, i am a <Typing text={['software developer', 'writer']} speed={400} />
      </h2>
    </div>
  </React.StrictMode>,
)


```

[npm-url]: https://www.npmjs.com/package/react-typing-animate
[npm-image]: https://img.shields.io/npm/v/react-typing-animate
[github-license]: https://img.shields.io/github/license/AyomikeCharles/typing-animation
[github-license-url]: https://github.com/AyomikeCharles/typing-animation/blob/main/LICENSE
[github-build]: https://github.com/AyomikeCharles/react-typing-animate/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/AyomikeCharles/react-typing-animate/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-typing-animate