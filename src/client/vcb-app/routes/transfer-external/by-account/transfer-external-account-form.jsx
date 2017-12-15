import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {TransferToBox} from "./transfer-to-box";
import {TransferFromBox} from "./transfer-from-box";
import {TransferInfoBox} from "./transfer-info-box";
import {transferApi} from "../../../../api/transfer-api";

export class TransferExternalAccountForm extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            fromAccount: null,
            toAccount: null,
            info: null,
        };
    }

    async submit() {

        const {fromAccount, toAccount, info} = this.state;

        transferApi.transferExternalAccount({fromAccount, toAccount, info}).then((transactionId) => {

        });
    }

    render() {
        const {fromAccount, toAccount, info} = this.state;
        return (
            <div>
                <TransferFromBox
                    account={fromAccount}
                    onChange={(account) => this.setState({fromAccount: account})}
                />

                <TransferToBox
                    account={toAccount}
                    onChange={(account) => this.setState({toAccount: account})}
                />
                <TransferInfoBox
                    info={info}
                    onChange={(info) => this.setState({info})}
                />

                <div className="controls">
                    <button
                        onClick={() => this.submit()}
                    >Xác nhận</button>
                </div>
            </div>
        );
    }
}