import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Coffees } from './mocks/Coffees'

createServer({
  models: {
    coffee: Model,
    order: Model,
  },

  seeds(server) {
    const dbData = localStorage.getItem('@coffee-delivery:orders-1.0.0')

    server.db.loadData({
      coffees: Coffees,
      orders: dbData ? JSON.parse(dbData) : [],
    })
  },

  routes() {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'

    this.get('/coffees', () => {
      return this.schema.all('coffee')
    })

    this.get('/orders', () => {
      return this.schema.all('order')
    })
    this.post('/orders', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.db.orders.insert(data)
    })

    this.get('/order/:id', (schema, request) => {
      const id = request.params.id

      return schema.db.orders.find(id)
    })
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
