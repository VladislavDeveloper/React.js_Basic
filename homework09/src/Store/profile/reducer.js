import { AUTH_REQUEST, AUTH_REQUEST_SUCCESSFUL, CHANGE_USER_NAME } from "./constants";

const initialState = {
    userName: "Пользователь",
    auth: undefined,
    loading: true,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_USER_NAME:{
            return{
                ...state,
                userName:action.payload
            }
        }
        case AUTH_REQUEST:{
            return{
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_REQUEST_SUCCESSFUL:{
            return{
                ...state,
                loading: false,
                auth: action.payload,
            }
        }
        default:
            return state
        
    }
}

export default profileReducer