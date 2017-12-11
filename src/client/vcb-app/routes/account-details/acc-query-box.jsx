import classnames from "classnames";
import {RComponent} from "../../../common/r-component";

export class AccountQueryBox extends RComponent {

    render() {
        return (

            <div className="acc-query-box box">
                <div className="header">
                    <img src="assets/img/icon-search.png" />
                    Chi tiết giao dịch
                </div>

                <div className="body">


                    <div className="controls">
                        <button>Xem sao kê</button>
                    </div>
                </div>
            </div>

        );
    }
}