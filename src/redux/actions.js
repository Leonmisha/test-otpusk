export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO'

export const saveLoginInfo = ({ email, token }) =>({
    type: SAVE_LOGIN_INFO,
    email,
    token
})