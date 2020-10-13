import React from 'react'
import { ReactComponent as Theme } from '../../SVGs/Theme.svg'
import style from './ToggleTheme.module.css'

function ToggleTheme() {
  return (
    <button
      onClick={() => document.body.classList.toggle('darkmode')}
      className={style.toggleTheme}
    >
      <Theme />
    </button>
  )
}

export default ToggleTheme
