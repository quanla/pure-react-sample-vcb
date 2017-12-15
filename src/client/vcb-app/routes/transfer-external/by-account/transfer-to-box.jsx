import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {Select} from "../../../../common/form/select/select";
import {SearchSelect} from "../../../../common/form/search-select/search-select";
import {accountApi} from "../../../../api/account-api";
import {Input} from "../../../../common/form/input/input";
import {bankList} from "./bank-list";

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

        const bankTypes = [
            {text: "Ngân hàng thương mại nhà nước", bank_type: "state-owned"},
            {text: "Ngân hàng thương mại cổ phần", bank_type: "jsc"},
        ];

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
                            list={bankTypes}
                            displayAs={(bt) => bt.text}
                            isSelected={(bt) => account && account.bank_type && account.bank_type == bt.bank_type}
                            onChange={(bt) => bt && onChange({
                                ...account,
                                bank_type: bt.bank_type,
                                bank_code: null,
                                province: null,
                                branch: null,
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <Select
                            placeholder="Chọn Ngân hàng hưởng"
                            list={account && account.bank_type && bankList[account.bank_type]}
                            displayAs={(b) => b.name}
                            isSelected={(b) => account && account.bank_code && account.bank_code == b.code}
                            onChange={(b) => b && onChange({
                                ...account,
                                bank_code: b.code,
                                province: null,
                                branch: null,
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <Select
                            placeholder="Chọn Tỉnh/Thành phố"
                            list={
                                account && account.bank_type && account.bank_code &&
                                bankList[account.bank_type].find(b => b.code==account.bank_code).provinces
                            }
                            displayAs={(p) => p.name}
                            isSelected={(p) => account && account.province && account.province == p.code}
                            onChange={(p) => p && onChange({
                                ...account,
                                province: p.code,
                                branch: null,
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <Select
                            placeholder="Chọn Chi nhánh"
                            list={
                                account && account.bank_type && account.bank_code && account.province &&
                                bankList[account.bank_type].find(b => b.code==account.bank_code).provinces.find((p) => p.code == account.province).branches
                            }
                            displayAs={(p) => p.name}
                            isSelected={(br) => account && account.branch && account.branch == br.code}
                            onChange={(br) => br && onChange({
                                ...account,
                                branch: br.code,
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox"/>
                            Lưu
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}