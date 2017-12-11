import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {DualNavLayout} from "./dual-nav-layout";
import {userInfo} from "../../authen/user-info";

export class Layout extends RComponent {

    render() {
        const {children, className, headerText} = this.props;

        return (
            <DualNavLayout
                className="vcb-layout"
                contentClassName={className}
                header={
                    headerText ? (
                        <div className="text">
                            {headerText}
                        </div>
                    ) : (
                        <div className="default-content">
                            <img src="assets/img/logo-login.gif"/>
                        </div>
                    )
                }
                renderNavRight={() => (
                    <div className="nav-right">
                        <div className=""
                             onClick={() => userInfo.setUser(null)}
                        >
                            Logout
                        </div>
                    </div>
                )}
                renderNavLeft={() => (
                    <div className="nav-left">
                        Left
                    </div>
                )}
            >
                {children}
            </DualNavLayout>
        );
    }
}