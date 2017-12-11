import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {DualNavLayout} from "./dual-nav-layout";
import {userInfo} from "../../authen/user-info";

export class Layout extends RComponent {

    render() {
        const {children, className, headerText} = this.props;

        return (
            <DualNavLayout
                className="vcb-layout"
                contentClassName={className}
                header={
                    headerText ? (
                        <div className="text">
                            {headerText}
                        </div>
                    ) : (
                        <div className="default-content">
                            <img src="assets/img/logo-login.gif"/>
                        </div>
                    )
                }
                renderNavLeft={() => (
                    <div className="nav-left">
                        Left
                    </div>
                )}
                renderNavRight={() => (
                    <div className="nav-right">
                        <div className="header">
                            VCB - iB@nking của tôi
                        </div>

                        <div className="body">

                            <div className="list-item disabled"

                            >
                                <img src="assets/img/icon-canhan.png"/>

                                <div className="content">
                                    Thông tin cá nhân
                                </div>
                            </div>
                            <div className="list-item disabled"

                            >
                                <img src="assets/img/icon-nguoihuong.png"/>

                                <div className="content">
                                    Cài đặt người hưởng
                                </div>
                            </div>
                            <div className="list-item disabled"

                            >
                                <img src="assets/img/icon-hanmuc.png"/>

                                <div className="content">
                                    Cài đặt hạn mức chuyển tiền
                                </div>
                            </div>
                            <div className="list-item disabled"

                            >
                                <img src="assets/img/icon-tinhnang.png"/>

                                <div className="content">
                                    Cài đặt nhà cung cấp dịch vụ
                                </div>
                            </div>
                            <div className="list-item disabled"

                            >
                                <img src="assets/img/icon-caiotp.png"/>

                                <div className="content">
                                    Cài đặt phương thức nhận OTP
                                </div>
                            </div>
                            <div className="list-item disabled"

                            >
                                <img src="assets/img/icon-doimatkhau.png"/>

                                <div className="content">
                                    Đổi mật khẩu
                                </div>
                            </div>
                            <div className="list-item"
                                 onClick={() => userInfo.setUser(null)}
                            >
                                <img src="assets/img/icon-thoat.png"/>

                                <div className="content">
                                    Thoát
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            >
                {children}
            </DualNavLayout>
        );
    }
}