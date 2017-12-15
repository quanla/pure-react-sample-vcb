import classnames from "classnames";
import {RComponent} from "../../r-component";

export class TextArea extends RComponent {

    render() {
        const {...inputProps} = this.props;
        return (
            <div className="text-area">
                <textarea {...inputProps}/>
            </div>
        );
    }
}