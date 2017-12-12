
import classnames from "classnames";
import React from 'react';
import {RComponent} from "./r-component";
import {Cols} from "../../utils/cols";

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
        console.log(selectedIndex);

        return (
            <div className="select-wrapper">
                <select
                    className={classnames(className)}
                    disabled={disabled}
                    value={selectedIndex != -1 ? selectedIndex : undefined}
                    onChange={(e) => {
                        let newIndex = +e.target.value;
                        onChange(list[newIndex], newIndex);
                    }}
                    placeholder={placeholder}
                >

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

