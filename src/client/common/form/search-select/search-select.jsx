import classnames from "classnames";
import {RComponent} from "../../r-component";
import {Cols} from "../../../../utils/cols";

export class SearchSelect extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            focused: false,
            typing: "",
        };
    }

    render() {
        const {list, isSelected, placeholder, renderDropdownItem, getSelectedItemText, onChange,
            searchBy,
        } = this.props;
        const {focused, typing} = this.state;

        let selected = Cols.find(list, isSelected);

        return (
            <div className="search-select">
                <input
                    placeholder={placeholder}
                    onFocus={() => this.setState({focused: true})}
                    onBlur={() => setImmediate(() => this.setState({focused: false}))}
                    value={typing != "" ? typing : selected == null ? "" : getSelectedItemText(selected)}
                    onChange={(e) => {
                        this.setState({typing: e.target.value});
                        if (selected) {
                            onChange(null);
                        }
                    }}
                />

                {focused && (
                    <div className="dropdown">
                        {list && list.filter((item) => typing == "" || searchBy(item).find((by) => by.toLowerCase().indexOf(typing.toLowerCase()) > -1)).map((item, i) => (
                            <div className=""
                                 onClick={() => {
                                     this.setState({typing: ""});
                                     onChange(item);
                                 }}
                            >
                                {renderDropdownItem(item)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}