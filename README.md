# use-callback-creator

> A hook to add a lot of similar callbacks inside a React component

[![NPM](https://img.shields.io/npm/v/use-callback-creator.svg)](https://www.npmjs.com/package/use-callback-creator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-callback-creator
```

## Usage

```jsx
import React, { useState } from 'react'
import useCallbackCreator from 'use-callback-creator'

const Example = () => {

  const [counters, setCounter]=useState([0,0,0,0]);

  const handleAdd = useCallbackCreator((index)=>{
        const newCounters=[...counters];
        newCounters[index]+=1;
        setCounters(counters);
    },[counters]);

  return (
    <div>
        {counters.map( (count, index)=>
            <div>{count} <button onClick={handleAdd(index)}>Add</button>
        )}
    </div>
  )
}
```

## License

MIT © [MarkEhr](https://github.com/MarkEhr)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
