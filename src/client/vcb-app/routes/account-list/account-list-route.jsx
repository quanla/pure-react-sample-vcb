import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {Select} from "../../../common/form/select/select";
import {Fragment} from "react";
import {accountApi} from "../../../api/account-api";
import {Format} from "../../../common/format";

export class AccountListRoute extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selected: 0,
        };
    }
    render() {
        const {history} = this.props;
        const {selected} = this.state;
        const accountTypes = [
            {types: ["D"], label: "Tiền gửi thanh toán"},
            {types: ["L"], label: "Tiền vay"},
            {types: ["T","S"], label: "Tiền gửi tiết kiệm"},
        ];

        return (
            <Layout
                className="account-list-route"
                headerText="Danh sách tài khoản"
                history={history}
            >
                <Select
                    list={accountTypes}
                    isSelected={(item, i) => selected==i}
                    onChange={(item, i) => this.setState({selected: i})}
                    displayAs={(item) => item.label}
                />

                <SelectAccount
                    key={selected} types={accountTypes[selected].types}
                    onChooseAccount={(acc) => history.push(`/account-details/${acc.acc_no}`)}
                />
            </Layout>
        );
    }
}

class SelectAccount extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            accounts: null,
            selected: null,
        };

        (async ()=> {
            let accounts = await accountApi.getAccounts(props.types);
            this.setState({accounts, selected: accounts.length ? 0 : null});
        })()
    }

    render() {
        const {onChooseAccount} = this.props;
        const {accounts, selected} = this.state;

        return (
            <Fragment>
                <Select
                    list={accounts}
                    isSelected={(item, i) => selected==i}
                    onChange={(item, i) => this.setState({selected: i})}
                    displayAs={(item) => item.acc_no}
                />

                <div className="balance">
                    <span>Số dư hiện tại: </span>
                    <div className="amount">
                        {accounts && !!accounts.length && selected != null && Format.money(accounts[selected].balance)}
                    </div>
                </div>

                <div className="controls">
                    <button
                        disabled={selected == null}
                        onClick={() => onChooseAccount(accounts[selected])}
                    >
                        Xem chi tiết
                    </button>
                </div>
            </Fragment>
        );
    }
}