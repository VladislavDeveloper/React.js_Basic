import { CHANGE_MESSAGES } from "./constants";

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MESSAGES: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId] : action.payload.messages,
                }
            }
        }
        default:
            return state;
    }
}

export default messagesReducer