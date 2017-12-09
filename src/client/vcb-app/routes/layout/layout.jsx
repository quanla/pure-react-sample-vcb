import classnames from "classnames";
import {RComponent} from "../../../common/r-component";

export class Layout extends RComponent {

    render() {
        const {children, className, headerText} = this.props;

        return (
            <div className={`layout`}>
                <div className="header">
                    <img className="left-toggle" src="assets/img/icon-left.png"/>

                    {headerText ? (
                        <div className="text">
                            {headerText}
                        </div>
                    ) : (
                        <div className="default-content">
                            <img src="assets/img/logo-login.gif"/>
                        </div>
                    )}

                    <img className="right-toggle" src="assets/img/icon-right.png"/>

                </div>
                <div className={`content ${className}`}>
                    {children}
                </div>
            </div>
        );
    }
}