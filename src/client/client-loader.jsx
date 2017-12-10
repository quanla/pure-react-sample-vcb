import {VcbApp} from "./vcb-app/vcb-app";
import React from "react";
import ReactDOM from "react-dom";

window.React = React;

ReactDOM.render((
    <VcbApp/>
), document.getElementById("app-container"));
