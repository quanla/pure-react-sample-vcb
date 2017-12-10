import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {captcha} from "./validate-captcha";
import {authenApi} from "../../../api/authen-api";
import {userInfo} from "../../authen/user-info";
const {bindDom, bindCom} = RlfDemo.RLF;
const {required, minLength, maxLength} = RlfDemo.RLF.validates;


export class LoginRoute extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            showErrors: false,
            error: null,
            loading: false,
        };

        this.form = bindCom({
            acc_no: [required, minLength(3)],
            password: [required, minLength(3)],
            captcha: [required, minLength(5), maxLength(5), captcha],
        }, {
            component: this,
            data: {
            },
        });

        this.form.addDataChangedListener(() => {
            if (this.state.error) {
                this.setState({error: null});
            }
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

        let checkSubmit = () => this.form.isInvalid() ? this.setState({showErrors: true}) : this.submit();

        return bindDom(this.form)(
            <div className={classnames("login-route", {"show-errors": showErrors})}
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
                        <input
                            className="form-control"
                            lf-bind
                            lf-path="acc_no"
                            lf-path-state
                            placeholder="Nhập Tên đăng nhập"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            lf-bind
                            lf-path="password"
                            lf-path-state
                            placeholder="Nhập Mật khẩu"
                            autoComplete="off"/>
                    </div>
                    <div className="form-group captra">
                        <input
                            className="form-control"
                            lf-bind
                            lf-path="captcha"
                            lf-path-state
                            placeholder="Nhập mã kiểm tra"
                            autoComplete="off"
                        />
                        <div className="img-controls">
                            <img className="captcha" src="assets/img/captcha.png"/>
                            <img className="refresh" src="assets/img/refresh-icon.png"/>
                        </div>
                    </div>
                    <div className="controls">
                        <button
                            className={classnames("btn-dangnhap", {disabled: this.form.isInvalid()})}
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