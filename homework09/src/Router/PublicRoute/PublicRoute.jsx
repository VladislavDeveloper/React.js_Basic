import {Route, Redirect} from "react-router-dom"
import { useSelector } from "react-redux"


import { profileAuthSelector } from "../../Store/profile/selectors"
import { ROUTES } from "../constants";

export const PublicRoute = ({...rest}) => {
    const auth = useSelector(profileAuthSelector);
    return !auth ? <Route {...rest} /> : <Redirect to={ROUTES.HOME}/> 
}