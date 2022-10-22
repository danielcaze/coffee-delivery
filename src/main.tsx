import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Coffees } from './mocks/Coffees'

createServer({
  models: {
    coffee: Model,
  },

  seeds(server) {
    server.db.loadData({
      coffees: Coffees,
    })
  },

  routes() {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'
    this.get('/coffees', () => {
      return this.schema.all('coffee')
    })
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
