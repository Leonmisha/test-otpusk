import React from 'react'
import s from './Auth.module.css'

import { Form, Button } from 'react-bootstrap';

class Auth extends React.Component{
  render () {
    return (
        <div className={s.Auth}>
            <Form className={s.form}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Например tourist@gmail.com" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль"/>
                </Form.Group>
                <Button variant="primary" type="submit" className={s.loginButton}>
                    Войти
                </Button>
            </Form>
        </div>
    )
  }
}

export default Auth