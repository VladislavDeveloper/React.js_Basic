import { ADD_MESSAGE, REMOVE_MESSAGES } from "./constants";

const initialState = {
    messageList: {},
};
const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: {
            const chatId = action.chatId
            const message = action.message
            const author = action.author
            
            const chatMessages = state.messageList[chatId] ?? [];

            return {
                ...state,
                messageList:{
                    ...state.messageList,
                    [chatId]:[...chatMessages, {id: Date.now(), author: author, text: message }] 
                }
            }
        };
        case REMOVE_MESSAGES: {
            console.log(action.id);
            
            return {
                ...state,
                messageList:{
                   ...state.messageList,
                   
                }
            }

        }
        default:{
            return state
        }
    };
}


export default messagesReducer