import { CHANGE_USER_NAME } from "./constants";

const initialState = {
    userName: "Пользователь"
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_USER_NAME:{
            return{
                ...state,
                userName:action.payload
            }
        }
        default:
            return state
        
    }
}

export default profileReducer