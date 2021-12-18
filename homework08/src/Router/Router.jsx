import React from "react";
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from "./constants";
import { ChatList } from "../Components/ChatList";
import Profile from "../Components/Profile/Profile";
import MessageList from "../Components/MessageList/MessageList"

export default function Router(){
    return(
        <Switch>
        <Route exact path={ROUTES.HOME}>
            <ChatList />
        </Route>
        <Route path={ROUTES.PROFILE}>
            <Profile />
        </Route>
        <Route path={ROUTES.MESSAGE_LIST}>
            <MessageList />
        </Route>
        <Route path={ROUTES.NOT_FOUND_PAGE}>
            <h2>Page not found 404</h2>
        </Route>
        </Switch>
    )
}