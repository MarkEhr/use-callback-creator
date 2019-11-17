import React from 'react'
import { useMyHook } from 'use-callback-creator'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App