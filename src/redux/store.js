import { createStore } from 'redux'
import todoReducer from './todo/todoReducer'

export default createStore(todoReducer)
