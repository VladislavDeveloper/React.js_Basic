import { ADD_CHAT } from "./constants"

const initialChats = {
    chatsList : []
}

const chatsReducer = (state = initialChats, action) => {
    switch(action.type){
        case ADD_CHAT:
            return{
                ...state,
                chatsList:[
                    ...state.chatsList,
                    {
                        id: state.chatsList.length + 1,
                        name: action.name,
                    },
                ],
            }
        default:
            return state;
    }
}

export default chatsReducer