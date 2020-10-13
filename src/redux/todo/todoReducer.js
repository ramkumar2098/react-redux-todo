import {
  CHANGE_TODO,
  ADD_TODO,
  EDIT_TODO,
  SAVE_TODO,
  DELETE_TODO,
} from './todoTypes'

const initialState = { todo: '', todos: [], editMode: false, editID: '' }

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TODO:
      return { ...state, todo: action.payload }
    case ADD_TODO:
      return {
        ...state,
        todo: '',
        todos: [{ id: action.id, todo: action.payload }, ...state.todos],
      }
    case EDIT_TODO:
      return {
        ...state,
        todo: state.todos.find(todo => todo.id === action.payload).todo,
        editMode: true,
        editID: action.payload,
      }
    case SAVE_TODO:
      return {
        todo: '',
        todos: state.todos.map(todo =>
          todo.id === state.editID ? { ...todo, todo: action.payload } : todo,
        ),
        editMode: false,
        editID: 0,
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    default:
      return state
  }
}

export default todoReducer
