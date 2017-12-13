import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {Select} from "../../../../common/form/select/select";
import {accountApi} from "../../../../api/account-api";
import {Format} from "../../../../common/format";

export class TransferFromBox extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            accounts: null,
        };

        accountApi.getAccounts(["D"]).then((accounts) => this.setState({accounts}));
    }

    render() {
        const {accounts} = this.state;
        const {account, onChange} = this.props;

        return (
            <div className="page-box transfer-from-box">

                <div className="header">
                    <img src="assets/img/icon-thongtinnguoichuyen.png" />
                    Thông tin người chuyển
                </div>

                <div className="body">
                    <Select
                        list={accounts}
                        isSelected={(acc) => account && account.acc_no == acc.acc_no}
                        displayAs={(acc) => acc.acc_no}
                        placeholder="Chọn tài khoản nguồn"
                        onChange={onChange}
                    />

                    <div className="balance">
                        Số dư khả dụng: {account && Format.money(account.balance)}
                    </div>
                </div>
            </div>
        );
    }
}