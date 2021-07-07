import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react'
import {Switch, Route} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import Auth from './components/Auth/Auth'
import Main from './components/Main/Main'
import { validateToken, getUser } from './utils/sdk';
import { saveLoginInfo } from './redux/actions';

const App = () => {

  const dispatch = useDispatch()
  let history = useHistory()

  useEffect( () => {
      console.log("hello")
      let checkToken = async () => {
        const token = localStorage.getItem("token")
        if (token) {
          let isValid
          try {
            isValid = await validateToken(token)
          }
          catch {
            isValid = false
          }
          if (isValid) {
            let user = await getUser(token)
            dispatch(saveLoginInfo({
                email: user.email,
                token
            }))
            history.push("/profile")
          } else {
            localStorage.removeItem("token")
            alert("Ошибка авторизации")
            history.push('/login')
          }
        } else {
            history.push("/login")
        }
      }

      checkToken()
  }, [dispatch, history])
  return (

    <div className="App">
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route>
          <Main path="/profile"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
