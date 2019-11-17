# use-callback-creator

> A hook to add a lot of similar callbacks inside a React component

[![NPM](https://img.shields.io/npm/v/use-callback-creator.svg)](https://www.npmjs.com/package/use-callback-creator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-callback-creator
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-callback-creator'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [MarkEhr](https://github.com/MarkEhr)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
