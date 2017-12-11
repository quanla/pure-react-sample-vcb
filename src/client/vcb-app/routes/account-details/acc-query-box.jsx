import classnames from "classnames";
import {RComponent} from "../../../common/r-component";
import {Select} from "../../../common/select";

export class AccountQueryBox extends RComponent {

    render() {
        const {onQuery} = this.props;

        return (
            <div className="acc-query-box box">
                <div className="header">
                    <img src="assets/img/icon-search.png" />
                    Chi tiết giao dịch
                </div>

                <div className="body">

                    <Select/>
                    <Select/>

                    <div className="controls">
                        <button
                            onClick={() => onQuery({from: 0, to: 1})}
                        >Xem sao kê</button>
                    </div>
                </div>
            </div>

        );
    }
}