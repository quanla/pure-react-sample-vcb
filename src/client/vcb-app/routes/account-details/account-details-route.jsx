import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";

export class AccountDetailsRoute extends RComponent {

    render() {
        const {history} = this.props;
        return (
            <Layout
                className="account-details-route"
                headerText="Chi tiết tài khoản"
                history={history}
            >

            </Layout>
        );
    }
}