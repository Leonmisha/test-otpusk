import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './Auth.module.css'

import { Form, Button } from 'react-bootstrap';
import { authenticateUser } from './../../utils/sdk';
import { saveLoginInfo } from '../../redux/actions';

const Auth = props => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const [showErrorEmail, setShowErrorEmail] = useState(false)
    const [showErrorPassword, setShowErrorPassword] = useState(false)
    const [apiError, setApiError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        if (!(validateEmail(false) & validatePassword(false))) {
            return false
        }
        authenticateUser(email, password)
            .then(response => response.json())
            .then(data => {
                if (rememberMe) {
                    try {
                        localStorage.setItem("token", data.token)
                    }
                    catch(err){
                        alert("Не вышло запомнить вас! А жаль:(")
                    }
                }
                dispatch(saveLoginInfo({
                    email: data.email,
                    token: data.token
                }))
        }).catch(response => response.json()
            .then(data => {
                setApiError(data.message)
            })
        )
    }

    function handleChangeEmail(e) {
        if (showErrorEmail) {
            validateEmail(false)
        }
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        if (showErrorPassword) {
            validatePassword(false)
        }
        setPassword(e.target.value)
    }

    function handleChangeRemember(e) {
        setRememberMe(e.target.value)
    }

    function validateEmail(enableEmptyValue=true) {
        let isValid = true
        const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if ((!enableEmptyValue && !email) || !regEx.test(email)) {
            isValid = false
        } else {
            isValid = true
        }
        setShowErrorEmail(!isValid)
        return isValid

    }

    function validatePassword(enableEmptyValue=true) {
        let isValid = true
        if ((!enableEmptyValue && !password) || password.length < 3) {
            isValid = false
        } else {
            isValid = true
        }
        setShowErrorPassword(!isValid)
        return isValid
    }

    return (
        <div className={s.Auth}>
            <Form className={s.form}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Например tourist@gmail.com" value={email} onChange={handleChangeEmail}/>
                    {showErrorEmail && <Form.Text className="text-muted">Некорректная почта</Form.Text>}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" value={password} onChange={handleChangePassword} />
                    {showErrorPassword && <Form.Text className="text-muted">Пароль должен состоять из 3 и более символов</Form.Text>}
                </Form.Group>
                <Form.Group controlId="rememberMe">
                    <Form.Check type="checkbox" label="Запомнить меня" value={rememberMe} onChange={handleChangeRemember} />
                </Form.Group>
                <Button variant="primary" type="submit" className={s.loginButton} onClick={handleSubmit}>
                    Войти
                </Button>
                {apiError && <Form.Text>{apiError}</Form.Text>}
            </Form>
        </div>
    )
}

export default Auth