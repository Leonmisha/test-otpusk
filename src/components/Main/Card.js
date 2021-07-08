
import React from 'react'
import s from './Card.module.css'
const Card = ({ companyName, date }) => {
  
  return (
    <div className={s.card}>
      <div className={s.companyName}>{companyName}</div>
      <div className={s.date}>{date}</div>
    </div>
)}

export default Card