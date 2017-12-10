import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {accountApi} from "../../../api/account-api";
import {AccountChooseBox} from "./acc-choose-box";
import {AccountDetailsBox} from "./acc-details-box";

export class AccountDetailsRoute extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            acc: null,
        };

        accountApi.getAccountDetail(props.match.params.acc_no).then((acc) => this.setState({acc}));
    }

    render() {
        const {history} = this.props;
        const {acc} = this.state;

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
                    acc={acc}
                />

                <div className="box">
                    <div className="header">
                        <img src="/assets/img/icon-thongtinnguoichuyen.png" />
                        Chi tiết giao dịch
                    </div>
                </div>

                <div className="controls">
                    <button>Xem sao kê</button>
                </div>
            </Layout>
        );
    }
}
