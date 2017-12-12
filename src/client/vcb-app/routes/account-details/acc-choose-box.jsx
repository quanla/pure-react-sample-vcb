import {RComponent} from "../../../common/r-component";
import {Select} from "../../../common/select";
import {accountApi} from "../../../api/account-api";

export class AccountChooseBox extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            accounts: null,
        };

        accountApi.getAccounts(["D"]).then((accounts) => this.setState({accounts}));
    }

    render() {
        const {currentAccountNo, onChange} = this.props;
        const {accounts} = this.state;

        return (
            <div className="page-box">
                <div className="header">
                    <img src="assets/img/icon-thongtinnguoichuyen.png" />
                    Tài khoản nguồn
                </div>

                <div className="body">
                    <Select
                        list={accounts || [{acc_no: currentAccountNo}]}
                        displayAs={(item) => item.acc_no}
                        isSelected={(item) => item.acc_no == currentAccountNo}
                        onChange={(item) => onChange(item.acc_no)}
                    />
                </div>
            </div>
        );
    }
}
