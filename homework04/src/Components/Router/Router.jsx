import React from "react";
import { Route } from 'react-router-dom';

import Home from "../Home/Home";
import MessageList from "../MessageList/MessageList";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFound/NotFound";
import { ROUTES } from './constants'

export function Router(){
    return(
        <>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
            {/* <Route path="*">    //Не срабатывает обработка несуществующего URL
                <NotFoundPage />
            </Route> */}
            <Route exact path={ROUTES.PROFILE}>
                <Profile />
            </Route>
            <Route path={`${ROUTES.CHAT}/:Id?`}>
                <MessageList />
            </Route>
        </>
    )
}