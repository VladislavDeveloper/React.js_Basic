import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom";

import { profileAuthSelector } from "../../Store/profile/selectors"
import { ROUTES } from "../constants";

export const PrivateRoute = ({...rest}) => {
    const auth = useSelector(profileAuthSelector);
    return auth ? <Route {...rest} /> : <Redirect to={ROUTES.LOGIN} />
}