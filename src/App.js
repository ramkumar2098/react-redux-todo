import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import ToggleTheme from './components/toggleTheme/ToggleTheme'
import TodoContainer from './components/TodoContainer'

function App() {
  return (
    <Provider store={store}>
      <ToggleTheme />
      <TodoContainer />
    </Provider>
  )
}

export default App
