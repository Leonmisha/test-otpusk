
import React from 'react'
import s from './Card.module.css'
import { PropTypes } from 'prop-types';
const Card = ({ companyName, date }) => {
  
  return (
    <div className={s.card}>
      <div className={s.companyName}>{companyName}</div>
      <div className={s.date}>{date}</div>
    </div>
)}

Card.propTypes = {
  companyName: PropTypes.string,
  date: PropTypes.string
}

export default Card