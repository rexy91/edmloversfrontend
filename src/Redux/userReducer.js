const initialState = {
  }
  
  const userReducer = (state = initialState,action) => {
    
    switch (action.type) {
      
      case 'SAVE_USER_TO_STATE':
          // Action.payload is the user.
          
          return{
              ...state, user:action.payload.user
          }

      case 'SAVE_ALL_USERS':
      
          return{
            ...state, allUsers:action.payload
          }
      
      default:
        return state;
  
    }
  }
  
  
  export default userReducer