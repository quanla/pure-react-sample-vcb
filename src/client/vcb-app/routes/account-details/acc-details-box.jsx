import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Format} from "../../../common/format";

export class AccountDetailsBox extends RComponent {

    render() {
        const {acc} = this.props;
        const lines = [
            {
                label: "Số dư hiện tại",
                render: (acc) => Format.money(acc.balance),
            },
            {
                label: "Số dư khả dụng",
                render: (acc) => Format.money(acc.usable_balance),
            },
            {
                label: "Hạn mức thấu chi",
                render: (acc) => Format.money(acc.can_spend),
            },
            {
                label: "Số tiền khoanh giữ",
                render: (acc) => Format.money(acc.on_hold),
            },
            {
                label: "Ngày mở tài khoản",
                render: (acc) => "11/12/1999",
            },
            {
                label: "Lãi suất",
                render: (acc) => "2%/năm",
            },
            {
                label: "Lãi cộng dồn",
                render: (acc) => Format.money(acc.profit),
            },
        ];

        return (

            <div className="box account-details-box">
                <div className="header">
                    <img src="assets/img/icon-thongtinnguoichuyen.png" />
                    Tiền gửi thanh toán
                </div>

                <div className="body">
                    {lines.map((line) => (
                        <div className="line">
                            <div className="label">
                                {line.label}
                            </div>
                            <div className="value">
                                {acc && line.render(acc)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}