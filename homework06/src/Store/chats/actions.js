import { ADD_CHAT } from "./constants";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
})