import classnames from "classnames";
import {RComponent} from "../../r-component";

export class Input extends RComponent {

    render() {
        const {...inputProps} = this.props;
        return (
            <div className="input">
                <input {...inputProps}/>
            </div>
        );
    }
}