import React, { createContext } from 'react'
import withDataFetching from '../withDataFetching'

export const ItemsContext = createContext()

const ItemsContextProvider = ({ children, data }) => (
  <ItemsContext.Provider value={{ items: data }}>
    {children}
  </ItemsContext.Provider>
)

export default withDataFetching({
  dataSource: 'https://my-json-server.typicode.com/shortnd/shopping-list/items'
})(ItemsContextProvider)