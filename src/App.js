import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import Auth from './components/Auth/Auth'
import Main from './components/Main/Main'
import { validateToken, getUser } from './utils/sdk';
import { saveLoginInfo } from './redux/actions';

const App = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector( state => {
    return Boolean(state.email && state.token)
  })
  let history = useHistory()
  const [tokenChecked, setTokenChecked] = useState(false)

  useEffect( () => {
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
            history.push(getAuthRedirectURL(2))
          } else {
            localStorage.removeItem("token")
            alert("Ошибка авторизации")
            history.push(getNotAuthRedirectURL())
          }
        } else {
            history.push(getNotAuthRedirectURL())
        }
        setTokenChecked(true)
      }

      checkToken()
      //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, history])

  function getNotAuthRedirectURL() {
    if (history.location.pathname === '/login') {
      return history.location
    }
    let pathname = '/login'
    if (history.location.pathname) {
      return {
        pathname,
        search: `?redirect=${history.location.pathname}`
      }
    } else {
      return pathname
    }
  }

  function getAuthRedirectURL(arg) {
    if (history.location.pathname !== '/login') {
      return history.location
    }
    let pathname = '/profile'
    let searchParams = new URLSearchParams(history.location.search)
    let redirectURL = searchParams.get("redirect")
    if (redirectURL != null && redirectURL !== '/login') {
      pathname = redirectURL
    }
    return pathname
  }

  return (

    <div className="App">
      {tokenChecked &&
        (!isAuth ?
          <Switch>
            <Route path="/login">
              <Auth/>
            </Route>
            <Redirect to={getNotAuthRedirectURL()}/>
          </Switch>
          :
          <Switch>
            <Route path="/profile">
              <Main/>
            </Route>
            <Redirect from="/login" to={getAuthRedirectURL(1)}/>
          </Switch>
        )
      }
    </div>
  );
}

export default App;
