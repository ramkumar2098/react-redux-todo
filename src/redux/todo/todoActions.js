import {
  CHANGE_TODO,
  ADD_TODO,
  EDIT_TODO,
  SAVE_TODO,
  DELETE_TODO,
} from './todoTypes'

export const changeTodo = todo => ({ type: CHANGE_TODO, payload: todo })

export const addTodo = (id, todo) => ({ type: ADD_TODO, id, payload: todo })

export const editTodo = id => ({ type: EDIT_TODO, payload: id })

export const saveTodo = todo => ({ type: SAVE_TODO, payload: todo })

export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })
