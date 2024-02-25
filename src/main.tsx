import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import config from './redux/config.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={config()}>
      <App />
    </Provider>
)
