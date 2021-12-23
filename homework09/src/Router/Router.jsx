import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"

import { ROUTES } from "./constants";
import { ChatList } from "../Components/ChatList";
import Profile from "../Components/Profile/Profile";
import MessageList from "../Components/MessageList/MessageList"
import News from "../Components/News/News";
import LogIn from "../Components/LogIn/LogIn";
import Registration from "../Components/Registration/Registration";
import { profileSelector } from "../Store/profile/selectors";
import { checkAuthStatusWithThunk } from "../Store/profile/actions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export default function Router(){
    const dispatch = useDispatch();

    const { auth, loading } = useSelector(profileSelector);

    useEffect(() => {
        dispatch(checkAuthStatusWithThunk());
    },[])

    return(
        <Switch>
        <PrivateRoute exact path={ROUTES.HOME}>
            <ChatList />
        </PrivateRoute>
        <PublicRoute path={ROUTES.LOGIN}>
            <LogIn />
        </PublicRoute>
        <PublicRoute path={ROUTES.REGISTRATION}>
            <Registration />
        </PublicRoute>
        <PrivateRoute path={ROUTES.PROFILE}>
            <Profile />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.NEWS}>
            <News />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.MESSAGE_LIST}>
            <MessageList />
        </PrivateRoute>
        <Route path={ROUTES.NOT_FOUND_PAGE}>
            <h2>Page not found 404</h2>
        </Route>
        </Switch>
    )
}