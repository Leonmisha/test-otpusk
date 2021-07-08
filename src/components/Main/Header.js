
import React from 'react'
import s from './Header.module.css'
const Header = ({ email }) => {
  
  return (
    <header className={s.Header}>
        <div className={s.email}>{email}</div>
    </header>
)}

export default Header