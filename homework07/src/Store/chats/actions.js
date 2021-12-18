import { ADD_CHAT, REMOVE_CHAT } from "./constants";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
})

export const removeChatAction = (id) => ({
    type: REMOVE_CHAT,
    id,
})