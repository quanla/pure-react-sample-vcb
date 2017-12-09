import {VcbApp} from "./vcb-app/vcb-app";
import React from "react";
import ReactDOM from "react-dom";

const userInfo = require("./vcb-app/authen/user-info").userInfo;

window.React = React;

// userInfo.getUser()

ReactDOM.render((
    <VcbApp/>
), document.getElementById("app-container"));
