import { ADD_MESSAGE, REMOVE_MESSAGES } from "./constants";

export const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
    author,
});

export const removeMessages = (id) => ({
    type: REMOVE_MESSAGES,
    id,
})

export const addMessageWithThunk = (chatId, message, author) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message, author));
    if(message.author !== "Bot" && chatId === "11111111"){
        const botMessage =  "Привет ! Добро пожаловать в приложение Messenger ! Я бот-администратор, если у тебя есть вопросы или пожелания, связанные с работой приложения - напиши мне ;)"
        const author =  "Bot"
        setTimeout(() => dispatch(addMessage(chatId, botMessage, author )), 2000)
    }
}