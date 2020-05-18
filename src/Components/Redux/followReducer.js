const initialState = {}


export default function followReducer(state = initialState, action){

    //Switch statement here, action has two arguments, (type, payload)
    switch(action.type){

       case 'testing': return {}

       case 'USER_LOGIN':
           return {
               
           }

       default : {}
    }

}