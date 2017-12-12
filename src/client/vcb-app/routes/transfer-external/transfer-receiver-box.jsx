import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Select} from "../../../common/select";

export class TransferReceiverBox extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            favoriteReceivers: null,
        };

    }

    render() {
        return (
            <div className="page-box">

                <div className="header">
                    <img src="assets/img/icon-thongtinnguoichuyen.png" />
                    Thông tin người nhận
                </div>

                <div className="body">
                    <Select
                        list={["00000000"]}
                        isSelected={(item) => false}
                        placeholder="Chọn tài khoản nguồn"
                    />
                </div>
            </div>
        );
    }
}