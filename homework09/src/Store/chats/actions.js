import { ADD_CHAT, REMOVE_CHAT } from "./constants";
import firebase from "firebase";
const db = firebase.database();

export const addChat = (chats) => ({
    type: ADD_CHAT,
    chats,
})

export const removeChatAction = (id) => ({
    type: REMOVE_CHAT,
    id,
})

export const addChatWithFirebase = (name) => async () => {
    db.ref("chats").push({name, id: Date.now()});
}


export const initChatsWithThunk = () => async (dispatch) => {
    db.ref("chats").on("value", (snapshot) => {
        const updateChats = []
        snapshot.forEach(snapshot => {
            updateChats.push(snapshot.val())
        })
        updateChats.reverse();
        dispatch(addChat(updateChats));
    })
}