import classnames from "classnames";
import {RComponent} from "../common/r-component";
import {userInfo} from "./authen/user-info";
import { HashRouter, Route, Switch } from 'react-router-dom';
import {LoginRoute} from "./routes/login/login-route";
import {HomeRoute} from "./routes/home/home-route";
import {AccountListRoute} from "./routes/account-list/account-list-route";
import {AccountDetailsRoute} from "./routes/account-details/account-details-route";

export class VcbApp extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.onUnmount(userInfo.onChange(() => this.forceUpdate()));
    }

    render() {
        return (
            <div className="vcb-app">

                {renderRoutes(userInfo.getUser())}

            </div>
        );
    }
}

const renderRoutes = (user) => {
    const requireAuthen = (comp) => user == null ? redirect("/login") : comp;
    const requireUnauthen = (comp) => user != null ? redirect("/home") : comp;

    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={redirect(user ? "/home" : "/login")}/>
                <Route exact path='/login' component={requireUnauthen(LoginRoute)}/>
                <Route exact path="/home" component={requireAuthen(HomeRoute)}/>
                <Route exact path="/account-list" component={requireAuthen(AccountListRoute)}/>
                <Route exact path="/account-details/:acc_no" component={requireAuthen(AccountDetailsRoute)}/>
            </Switch>
        </HashRouter>
    );
};

function redirect(location) {
    return class RedirectRoute extends RComponent {
        constructor(props, context) {
            super(props, context);

            props.history.push(location);
        }
        render() {
            return null;
        }
    }
}

