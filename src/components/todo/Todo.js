import React from 'react'
import { useDispatch } from 'react-redux'
import { editTodo, deleteTodo } from '../../redux/'
import { ReactComponent as Edit } from '../../SVGs/Edit.svg'
import { ReactComponent as Delete } from '../../SVGs/Delete.svg'
import style from './Todo.module.css'

function Todos({ todo }) {
  const dispatch = useDispatch()

  return (
    <div className={style.todo}>
      <input type="checkbox" id={todo.id} />
      <label htmlFor={todo.id}>{todo.todo}</label>
      <div className={style.buttons}>
        <button onClick={() => dispatch(editTodo(todo.id))}>
          <Edit />
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          <Delete />
        </button>
      </div>
    </div>
  )
}

export default Todos
