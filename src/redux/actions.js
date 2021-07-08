export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO'
export const USER_LOGOUT = 'USER_LOGOUT'

export const saveLoginInfo = ({ email, token }) =>({
    type: SAVE_LOGIN_INFO,
    email,
    token
})

export const userLogout = () => ({
    type: USER_LOGOUT
})