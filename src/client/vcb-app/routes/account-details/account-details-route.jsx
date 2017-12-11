import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {AccountChooseBox} from "./acc-choose-box";
import {AccountDetailsBox} from "./acc-details-box";
import {AccountQueryBox} from "./acc-query-box";

export class AccountDetailsRoute extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };

    }

    render() {
        const {history} = this.props;

        const {acc_no} = this.props.match.params;

        return (
            <Layout
                className="account-details-route"
                headerText="Chi tiết tài khoản"
                history={history}
            >
                <AccountChooseBox
                    currentAccountNo={acc_no}
                    onChange={(acc_no) => history.push(`/account-details/${acc_no}`)}
                />

                <AccountDetailsBox
                    accNo={acc_no}
                />

                <AccountQueryBox

                />
            </Layout>
        );
    }
}
