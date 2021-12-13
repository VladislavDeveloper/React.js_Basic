import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import chatsReducer from "./chats/reducer";
import profileReducer from "./profile/reducer";
import messagesReducer from "./messages/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
}),
composeEnhancers(applyMiddleware(thunk))
);
