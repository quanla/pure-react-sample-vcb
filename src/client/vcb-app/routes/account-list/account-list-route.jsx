import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {Select} from "../../../common/select";
import {Fragment} from "react";
import {accountApi} from "../../../api/account-api";

export class AccountListRoute extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selected: 0,
        };
    }
    render() {
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
            >
                <Select
                    list={accountTypes}
                    isSelected={(item, i) => selected==i}
                    onChange={(item, i) => this.setState({selected: i})}
                    displayAs={(item) => item.label}
                />

                <SelectAccount key={selected} types={accountTypes[selected].types}/>
            </Layout>
        );
    }
}

class SelectAccount extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            accounts: null,
            selected: 0,
        };

        (async ()=> {
            let accounts = await accountApi.getAccounts(props.types);
            this.setState({accounts});
        })()
    }

    render() {
        const {accounts, selected} = this.state;
        return (
            <Fragment>
                <Select
                    list={accounts}
                    isSelected={(item, i) => selected==i}
                    onChange={(item, i) => this.setState({selected: i})}
                    displayAs={(item) => item.acc_no}
                />

                <div className="">
                    Số dư: {accounts && !!accounts.length && accounts[selected].balance}
                </div>
            </Fragment>
        );
    }
}