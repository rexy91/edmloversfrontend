const initialState = {
  }
  
  const userReducer = (state = initialState,action) => {
    switch (action.type) {

      case 'SAVE_USER_TO_STATE':
          const user = action.payload.user
          return{
              ...state,user
          }
      
      default:
        return state;
  
    }
  }
  
  
  export default userReducer