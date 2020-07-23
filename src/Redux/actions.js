export const saveUserToState = (userObject) => {
    return {
        type:'SAVE_USER_TO_STATE',
        payload: userObject
    }
}

export const saveAllUsers = (usersArray) => {
    
    return {
        type:'SAVE_ALL_USERS',
        payload: usersArray
    }
}

export const logoutUser = () => {
    return {
        type:'LOGOUT_USER'
    }
}