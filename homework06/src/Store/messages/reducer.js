import { ADD_MESSAGE } from "./constants";

const initialState = {
    messageList: {},
};
const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: {
            const chatId = action.chatId
            const message = action.message
            
            const chatMessages = state.messageList[chatId] ?? [];

            return {
                ...state,
                messageList:{
                    ...state.messageList,
                    [chatId]:[...chatMessages, {id:'unique', text: message }] 
                }
            }
        };
        default:{
            return state
        }
    };
}


export default messagesReducer