import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Format} from "../../../common/format";
import {accountApi} from "../../../api/account-api";

export class AccountDetailsBox extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            acc: null,
        };

        this.loadAccDetails(props.accNo);
    }

    async loadAccDetails(accNo) {
        this.setState({acc: null});

        let acc = await accountApi.getAccountDetail(accNo);

        this.setState({acc});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.accNo != this.props.accNo) {
            this.loadAccDetails(nextProps.accNo);
        }
    }

    render() {
        const {acc} = this.state;
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
                    <img src="assets/img/icon-tiengui.png" />
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