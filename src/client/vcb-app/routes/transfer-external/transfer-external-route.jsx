import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {Select} from "../../../common/select";
import {TransferReceiverBox} from "./transfer-receiver-box";

export class TransferExternalRoute extends RComponent {

    render() {
        const {history} = this.props;
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
                            list={["Chuyển qua tài khoản"]}
                            isSelected={(item) => true}
                        />
                    </div>
                </div>

                <div className="page-box">

                    <div className="header">
                        <img src="assets/img/icon-thongtinnguoichuyen.png" />
                        Thông tin người chuyển
                    </div>

                    <div className="body">
                        <Select
                            list={["00000000"]}
                            isSelected={(item) => false}
                            placeholder="Chọn tài khoản nguồn"
                        />

                        <div className="balance">
                            Số dư khả dụng:
                        </div>
                    </div>
                </div>

                <TransferReceiverBox/>

            </Layout>
        );
    }
}