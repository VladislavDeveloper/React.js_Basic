import firebase from "firebase";
import { CHANGE_MESSAGES } from "./constants";

const db = firebase.database();

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];

    snapshot.forEach((message) => {
        messages.push(message.val());
    });

    return { chatId: snapshot.key, messages } 
}

export const addMessageWithFirebase = (chatId, message, messageId, author) => async () => {
    db.ref("messages").child(chatId).push({message_text: message, id: messageId, message_author: author });
}

export const initMessageWithFirebase = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload,
        });
    });

    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload,
        });
    });

}