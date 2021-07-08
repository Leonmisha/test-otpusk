
import React from 'react'
import PropTypes from "prop-types";
import s from './Header.module.css'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions';
import { Button } from 'react-bootstrap';
const Header = ({ email }) => {
    const dispatch = useDispatch()

    function logout() {
        dispatch(userLogout())
    }
  
  return (
    <header className={s.Header}>
        <div className={s.email}>{email}</div>
        <Button className={s.logout} onClick={logout} variant="light">Выход</Button>
    </header>
)}

Header.propTypes = {
    email: PropTypes.string
}

export default Header