import { SHOW_USER_INFO } from "./constants"
import { CHANGE_USER_STATUS } from "./constants"

const initialState = {
    showUserInfo: false,
    userName: "User",
    lastName: "User's Surname",
    dateOfburth: "Date of burth",
    online: false,
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_USER_INFO:{
            return{
                ...state,
                showUserInfo: !state.showUserInfo
            }
        }
        case CHANGE_USER_STATUS:{
            return{
                ...state,
                online: !state.online
            }
        }
        default:
            return state
    }
}