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