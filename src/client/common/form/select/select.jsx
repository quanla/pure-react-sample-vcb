
import classnames from "classnames";
import {RComponent} from "../../r-component";
import {Cols} from "../../../../utils/cols";

/**
 * This is a variation of Select component. This component takes list as the center of logic, so no "value" is presented
 * in the props
 */

export class Select extends RComponent {
    render() {
        let {
            className, isSelected,
            displayAs = (val) => val,
            disabled, onChange, list=[],
            placeholder
        } = this.props;

        let selectedIndex = Cols.indexOf(list, isSelected);
        // console.log(selectedIndex);

        return (
            <div className="select">
                <select
                    className={classnames(className, {placeholder: selectedIndex==-1})}
                    disabled={disabled}
                    value={selectedIndex != -1 ? selectedIndex : "placeholder"}
                    onChange={(e) => {
                        if (e.target.value == "placeholder") {
                            onChange(null, -1);
                            return;
                        }
                        let newIndex = +e.target.value;
                        onChange(list[newIndex], newIndex);
                    }}
                    placeholder={placeholder}
                >
                    {placeholder != null && (
                        <option
                            value="placeholder"
                        >
                            { placeholder }
                        </option>
                    )}
                    { list && list.map((item, index) => (
                        <option
                            key={index}
                            value={index}
                        >
                            { displayAs(item) }
                        </option>
                    )) }
                </select>
            </div>
        )
    }

}

