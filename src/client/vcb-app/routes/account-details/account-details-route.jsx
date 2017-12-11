import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {AccountChooseBox} from "./acc-choose-box";
import {AccountDetailsBox} from "./acc-details-box";
import {AccountQueryBox} from "./acc-query-box";
import {AccQueryResultBox} from "./acc-query-result-box";

export class AccountDetailsRoute extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            query: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.acc_no != nextProps.match.params.acc_no) {
            this.setState({query: null});
        }
    }

    render() {
        const {history} = this.props;
        const {query} = this.state;

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
                    onQuery={(timeRange) => this.setState({query: {
                        id: new Date().getTime(),
                        timeRange,
                    }})}
                />

                {query && (
                    <AccQueryResultBox
                        key={query.id}
                        timeRange={query.timeRange}
                        accNo={acc_no}
                    />
                )}
            </Layout>
        );
    }
}
