import classnames from "classnames";
import {RComponent} from "../../r-component";
import {Input} from "./input";
import {Format} from "../../format";

export class MoneyInput extends RComponent {

    render() {
        const {value, onChange, ...inputProps} = this.props;
        return (
            <Input
                {...inputProps}
                value={value==null ? "" : Format.number(value)}
                onChange={(e) => e.target.value == "" ? onChange(null) : onChange(+e.target.value.replace(/,/g,"") || null)}
            />
        );
    }
}