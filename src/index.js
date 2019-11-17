import * as React from 'react'

/**
 * This is intended to add callbacks inside loops.
 * The returned function creates a new callback each time is called with a different parameter.
 * If the parameter had been already used, the same function is returned.
 * When the inputs change, al functions are renewed to use the new callback.
 *
 * The returned function is a wrapper of the callback, which when called, calls the callback with the id with which it was
 * created as first parameter, and the rest of the received arguments as the following parameters.
 *
 *
 * @param callback
 * @param inputs
 * @returns {function(*=): *}
 */
const useCallbackCreator = (callback, inputs) => {
  const callbacks = React.useRef({})

  React.useMemo(() => {
    for (const id in callbacks.current) {
      callbacks.current[id].func = (...args) => callback(callbacks.current[id].id, ...args)
    }
    // eslint-disable-next-line
  }, inputs);

  return (id) => {
    if (!callbacks.current[id]) { callbacks.current[id] = {id, func: (...args) => callback(id, ...args)} }// The id is saved inside the object to preserve its type
    return callbacks.current[id].func
  }
}

export default useCallbackCreator
