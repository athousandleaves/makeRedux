function createStore() {
  // store should have 4 parts: 
  // 1. State
  // 2. Get state
  // 3. Listen to changes on state
  // 4. Update state

  let state
  let listeners = [] // array of functions

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  return {
    getState,
    subscribe,
  }
}