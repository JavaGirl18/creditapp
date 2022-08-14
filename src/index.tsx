import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import { MaterialUIControllerProvider } from 'context'
Amplify.configure(config)

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
