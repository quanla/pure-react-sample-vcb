import classnames from "classnames";
import {RComponent} from "../../../../common/r-component";
import {Select} from "../../../../common/form/select/select";
import {MoneyInput} from "../../../../common/form/input/money-input";
import {TextArea} from "../../../../common/form/text-area/text-area";

export class TransferInfoBox extends RComponent {

    render() {
        const {info, onChange} = this.props;

        return (
            <div className="page-box transfer-info-box">

                <div className="header">
                    <img src="assets/img/icon-thongtinnguoichuyen.png" />
                    Thông tin giao dịch
                </div>


                <div className="body">
                    <div className="form-group money-group">
                        <MoneyInput
                            id="aaaaa"
                            value={info && info.amount}
                            onChange={(amount) => onChange({...info, amount})}
                        />

                        <Select
                            list={[
                                {name: "USD", code: "usd"},
                                {name: "VND", code: "vnd"},
                            ]}
                            displayAs={(cu) => cu.name}
                            isSelected={(cu) => info && info.currency == cu.code}
                            onChange={(cu) => cu && onChange({...info, currency: cu.code})}
                        />
                    </div>
                    <div className="form-group">
                        <TextArea/>
                    </div>
                    <div className="form-group">
                        <Select
                            list={[
                                {name: "Người chuyển trả", code: "transferer"},
                                {name: "Người hưởng trả", code: "receiver"},
                            ]}
                            displayAs={(fpb) => fpb.name}
                            isSelected={(fpb) => (info && info.fee_paid_by || "transferer") == fpb.code}
                            onChange={(fpb) => fpb && onChange({...info, fee_paid_by: fpb.code})}
                        />
                    </div>
                </div>
            </div>
        );
    }
}