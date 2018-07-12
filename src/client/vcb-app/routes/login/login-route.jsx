import cln from "classnames";
import {RComponent} from "../../../common/r-component";
import {captcha} from "./validate-captcha";
import {authenApi} from "../../../api/authen-api";
import {userInfo} from "../../authen/user-info";

import {createForm, basicValidators} from 'bee-form-react';

const {required, minLength, maxLength} = basicValidators;

export class LoginRoute extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showErrors: false,
            error: null,
            loading: false,
        };

        this.form = createForm({
            acc_no: [required, minLength(3)],
            password: [required, minLength(3)],
            captcha: [required, minLength(5), maxLength(5), captcha],
        });

        this.form.onChange(() => {
            this.forceUpdate();
        });
    }

    async submit() {
        const {history} = this.props;

        this.setState({loading: true});

        let resp = await authenApi.checkLogin(this.form.getData());
        if (resp.result != "success") {
            this.setState({error: resp.result, loading: false});
        } else {
            userInfo.setUser(resp.user);
            history.push("/home");
        }
    }

    render() {
        const {showErrors, error, loading} = this.state;

        let fv = this.form.createView();

        let checkSubmit = () => !fv.isValid() ? this.setState({showErrors: true}) : this.submit();

        let renderInput = (placeholder) => (ifv) => (
            <input
                className={cln("form-control", {"has-error": ifv.hasError()})}
                {...ifv.bind()}
                placeholder={placeholder}
                autoComplete="off"
            />
        );
        return (
            <div className={cln("login-route", {"show-errors": showErrors})}
                 onKeyDown={(e) => e.keyCode == 13 && checkSubmit()}
            >
                <div className="logo box">
                    <img src="assets/img/logo-login.gif"/>
                </div>

                <div className="box-login box">
                    {!error ? (
                        <div className="title-dv">
                            Dịch vụ VCB-iB@nking
                        </div>
                    ) : (
                        <div className="error">
                            {error == "wrong_captcha" ?
                                "Sai captcha" :
                                "Sai acc hoặc password"
                            }
                        </div>
                    )}

                    <div className="form-group">
                        {fv.withControl("acc_no", renderInput("Nhập Tên đăng nhập"))}
                    </div>
                    <div className="form-group">
                        {fv.withControl("password", renderInput("Nhập Mật khẩu"))}
                    </div>
                    <div className="form-group captra">
                        {fv.withControl("captcha", renderInput("Nhập mã kiểm tra"))}

                        <div className="img-controls">
                            <img className="captcha" src="assets/img/captcha.png"/>
                            <img className="refresh" src="assets/img/refresh-icon.png"/>
                        </div>
                    </div>
                    <div className="controls">
                        <button
                            className={cln("btn-dangnhap", {disabled: !fv.isValid()})}
                            onClick={checkSubmit}
                            disabled={loading}
                        >
                            Đăng nhập
                        </button>
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
                           className="icon-en"
                        >
                            English
                        </a>
                    </div>

                    <div className="">
                        <div className="">
                            Đây là clone của VCB iBanking, ko phải app thật.
                        </div>
                        <div className="">
                            Login: 123/123
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}