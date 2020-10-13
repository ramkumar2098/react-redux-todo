import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTodo, saveTodo, addTodo } from '../redux'
import { v4 as uuidv4 } from 'uuid'
import Todo from './todo/Todo'
import style from './TodoContainer.module.css'

function TodoContainer() {
  const todo = useSelector(store => store.todo)
  const todos = useSelector(store => store.todos)
  const editMode = useSelector(store => store.editMode)

  const dispatch = useDispatch()

  return (
    <div className={style.todoContainer}>
      <div className={style.head}>Todo{todos[0] && ': ' + todos.length}</div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          value={todo}
          onChange={e =>
            e.target.value.length > 200
              ? alert('Maximum limit reached')
              : dispatch(changeTodo(e.target.value))
          }
        />
        {todos[0] && editMode ? (
          <button onClick={() => todo.trim() && dispatch(saveTodo(todo))}>
            &#x2713;
          </button>
        ) : (
          <input
            type="submit"
            value="+"
            onClick={() => todo.trim() && dispatch(addTodo(uuidv4(), todo))}
          />
        )}
      </form>
      {todos[0] && todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoContainer
