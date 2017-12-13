import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {Select} from "../../../common/form/select/select";
import {TransferExternalAccountForm} from "./by-account/transfer-external-account-form";

export class TransferExternalRoute extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            transferType: 1,
        };
    }

    render() {
        const {history} = this.props;
        const {transferType} = this.state;

        const transferTypes = [
            "Chuyển qua tài khoản",
            "Chuyển nhanh qua thẻ",
            "Chuyển tiền nhanh qua tài khoản",
        ];

        return (
            <Layout
                className="transfer-external-route"
                history={history}
                headerText="Chuyển tiền"
            >
                <div className="page-box">

                    <div className="header">
                        <img src="assets/img/icon-thongtinnguoichuyen.png" />
                        Hình thức chuyển
                    </div>

                    <div className="body">
                        <Select
                            list={transferTypes}
                            isSelected={(item, i) => transferType == i+1}
                            onChange={(_, i) => this.setState({transferType: i+1})}
                        />
                    </div>
                </div>

                {transferType == 1 && (
                    <TransferExternalAccountForm/>
                )}

            </Layout>
        );
    }
}