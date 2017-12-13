import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {TransferToBox} from "./transfer-to-box";
import {TransferFromBox} from "./transfer-from-box";

export class TransferExternalAccountForm extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            fromAccount: null,
            toAccount: null,
        };
    }

    render() {
        const {fromAccount, toAccount} = this.state;
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
            </div>
        );
    }
}