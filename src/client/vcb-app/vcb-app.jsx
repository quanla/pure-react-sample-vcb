import classnames from "classnames";
import {RComponent} from "../common/r-component";
import {ModalRegistry} from "../common/modal/modal-registry";
import {userInfo} from "./authen/user-info";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {LoginRoute} from "./routes/login/login-route";
import {HomeRoute} from "./routes/home/home-route";

export class VcbApp extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.onUnmount(userInfo.onChange(() => this.forceUpdate()));
    }

    render() {
        return (
            <div className="vcb-app">

                {renderRoutes(userInfo.getUser())}

                <ModalRegistry/>
            </div>
        );
    }
}

const renderRoutes = (user) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LoginRoute}/>
            <Route exact path="/home" component={HomeRoute}/>
        </Switch>
    </BrowserRouter>
);