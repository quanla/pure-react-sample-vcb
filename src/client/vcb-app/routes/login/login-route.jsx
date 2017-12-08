import classnames from "classnames";
import {RComponent} from "../../../common/r-component";

export class LoginRoute extends RComponent {


    render() {
        return (
            <div className="login-route">
                <div className="logo box">
                    <img src="/assets/img/logo-login.gif"/>
                </div>

                <div className="box-login box">
                    <div className="title-dv">
                        Dịch vụ VCB-iB@nking
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Nhập Tên đăng nhập"
                               autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Nhập Mật khẩu"
                               autoComplete="off"/>
                    </div>
                    <div className="form-group">
                        <div className="captcha-login">
                            <input className="form-control"
                                   placeholder="Nhập mã kiểm tra"
                                   autoComplete="off"
                            />
                        </div>
                        <div className="img-captcha">
                            <img src="/assets/img/captcha.png"/>
                            <img src="/assets/img/refresh-icon.png"/>
                        </div>
                    </div>
                    <div className="controls">
                        <button className="btn-dangnhap"

                        >Đăng nhập</button>
                    </div>
                </div>

                <div className="box-language box">
                    <div className="resetpass">
                        <a href="/resetpassword">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className="line-doc">
                        <a id="linkLanguage"
                           language="en" href="#"
                           className="icon-en">
                            English
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}