import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {DualNavLayout} from "./dual-nav-layout";
import {userInfo} from "../../authen/user-info";
import {SlideHierPanel} from "./slide-hier-panel";
import {generateLeftItems} from "./nav-left-items";

export class Layout extends RComponent {

    render() {
        const {children, className, headerText, history} = this.props;

        const navRight = {
            header: "VCB - iB@nking của tôi",
            items: [
                {icon: "canhan", label: "Thông tin cá nhân"},
                {icon: "nguoihuong", label: "Cài đặt người hưởng"},
                {icon: "hanmuc", label: "Cài đặt hạn mức chuyển tiền"},
                {icon: "tinhnang", label: "Cài đặt nhà cung cấp dịch vụ"},
                {icon: "caiotp", label: "Cài đặt phương thức nhận OTP"},
                {icon: "doimatkhau", label: "Đổi mật khẩu"},
                {icon: "thoat", label: "Thoát", onClick: () => userInfo.setUser(null)},
            ]
        };

        const renderHierNav = ({header, items}, {onBack, onForward}) => (
            <div className="hier-nav">
                <div className="header">
                    {onBack && (
                        <i className="fa fa-angle-left"
                           onClick={() => onBack()}
                        />
                    )}

                    {header}
                </div>

                <div className="body">
                    {items.map((navItem, i) => (
                        <div className={classnames("list-item", {
                            disabled: navItem.onClick == null && navItem.sub == null,
                            "has-icon": !!navItem.icon
                        })}
                             onClick={navItem.sub ? (() => onForward(i)) : navItem.onClick}
                        >

                            {navItem.icon && (
                                <img src={`assets/img/icon-${navItem.icon}.png`}/>
                            )}

                            <div className="content">
                                {navItem.label}
                            </div>

                            {navItem.sub && (
                                <i className="fa fa-angle-right"/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );

        const goInto = (hierData, index) => hierData.items[index].sub;

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
                    <SlideHierPanel
                        hierData={generateLeftItems(history)}
                        render={renderHierNav}
                        goInto={goInto}
                    />
                )}
                renderNavRight={() => (
                    <SlideHierPanel
                        hierData={navRight}
                        render={renderHierNav}
                        goInto={goInto}
                    />
                )}
            >
                {children}
            </DualNavLayout>
        );
    }
}