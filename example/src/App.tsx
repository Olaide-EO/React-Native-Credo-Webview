import React, { useEffect } from 'react'
import CredoWebviewRNModule, { Counter } from 'credo-webview-for-reactnative'

const App = () => {
  useEffect(() => {
    console.log(CredoWebviewRNModule)
  })

  return <Counter />
}

export default App
