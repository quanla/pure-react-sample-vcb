import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {Select} from "../../../../common/form/select/select";
import {SearchSelect} from "../../../../common/form/search-select/search-select";
import {accountApi} from "../../../../api/account-api";
import {Input} from "../../../../common/form/input/input";

export class TransferToBox extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            savedReceivers: null,
        };

        accountApi.getSavedReceivers().then((savedReceivers) => this.setState({savedReceivers}));
    }

    render() {
        const {account, onChange} = this.props;
        const {savedReceivers} = this.state;

        return (
            <div className="page-box transfer-to-box">

                <div className="header">
                    <img src="assets/img/icon-thongtinnguoichuyen.png" />
                    Thông tin người nhận
                </div>


                <div className="body">
                    <div className="form-group">
                        <SearchSelect
                            list={savedReceivers}
                            isSelected={(acc) => account && account.acc_no == acc.acc_no}
                            placeholder="Nhập tên/tên gợi nhớ/số tài khoản đã lưu"
                            renderDropdownItem={(acc) => (
                                <div className="saved-receiver-dropdown-item">
                                    <div className="acc-name">
                                        {acc.name}
                                    </div>
                                    <div className="">
                                        {acc.acc_no}
                                    </div>
                                </div>
                            )}
                            getSelectedItemText={(acc) => acc.name}
                            onChange={(acc) => onChange(acc)}
                            searchBy={(acc) => [acc.name, acc.acc_no, acc.acc_name]}
                        />
                    </div>

                    <div className="form-group">
                        <Input
                            placeholder="Nhập tài khoản hưởng"
                            value={account==null ? "" : account.acc_no}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            placeholder="Nhập tên người hưởng"
                            value={account==null ? "" : account.acc_name}
                        />
                    </div>
                    <div className="form-group">
                        <Select
                            placeholder="Chọn loại ngân hàng"
                        />
                    </div>
                </div>
            </div>
        );
    }
}