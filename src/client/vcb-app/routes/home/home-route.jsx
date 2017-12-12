import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Layout} from "../layout/layout";
import {userInfo} from "../../authen/user-info";

export class HomeRoute extends RComponent {

    render() {
        const {history} = this.props;
        return (
            <Layout
                className="home-route"
                history={history}
            >
                <div className="welcome">
                    Xin chào Quý khách
                    {" "}
                    <b>{userInfo.getUser().name}</b>
                </div>
                <ul className="nav-list">
                    <li onClick={() => history.push("/account-list")}>
                        <img src="assets/img/icon-menu-danhsachtaikhoan.png"/>
                        <div className="text">
                            Danh sách tài khoản
                        </div>
                    </li>
                    <li className="disabled">
                        <img src="assets/img/icon-tronghethong.png"/>
                        <div className="text">
                            Chuyển tiền trong Vietcombank
                        </div>
                    </li>
                    <li className="disabled"
                        onClick={() => history.push("/transfer-external")}
                    >
                        <img src="assets/img/icon-ngoaihethong.png"/>
                        <div className="text">
                            Chuyển tiền tới ngân hàng khác
                        </div>
                    </li>
                    <li className="disabled">
                        <img src="assets/img/icon-thanhtoanhoadon.png"/>
                        <div className="text">
                            Thanh toán hóa đơn
                        </div>
                    </li>
                    <li className="disabled">
                        <img src="assets/img/icon-motaikhoan.png"/>
                        <div className="text">
                            Mở tài khoản tiết kiệm
                        </div>
                    </li>
                    <li className="disabled">
                        <img src="assets/img/icon-menu-hotrogiaodich.png"/>
                        <div className="text">
                            Đăng ký ủy quyền trích nợ tự động VCB-Auto Debit
                        </div>
                    </li>
                </ul>
            </Layout>
        );
    }
}