import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import MessageList from "../MessageList/MessageList";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFound/NotFound";
import { ROUTES } from './constants'

export function Router(){
    return(
        <Switch>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
            <Route exact path={ROUTES.CONTACTS}>
                <Contacts />
            </Route>
            <Route exact path={ROUTES.PROFILE}>
                <Profile />
            </Route>
            <Route path={`${ROUTES.CHAT}/:Id?`}>
                <MessageList />
            </Route>
        </Switch>
    )
}