import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {accountApi} from "../../../api/account-api";
import {LoadingPanel} from "../../../common/loading-panel/loading-panel";

export class AccQueryResultBox extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            transactions: null,
        };

        accountApi.queryTransactions(props.accNo, props.timeRange).then((transactions) => this.setState({transactions}));
    }

    render() {
        const {transactions} = this.state;

        return (
            <div className="">
                {transactions == null ? (
                    <LoadingPanel/>
                ) : (
                    <div className="">
                        {transactions.map((transaction) => (
                            <div className="">
                                {transaction}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}