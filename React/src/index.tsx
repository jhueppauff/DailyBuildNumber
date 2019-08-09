import * as React from "react";
import * as ReactDOM from "react-dom";
import { func } from "prop-types";

let buildNumber;

fetch('https://dailybuild.azurewebsites.net/api/GetDailyBuildNumber')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        buildNumber = myJson;
    });

ReactDOM.render(
    <a>buildNumber.Version</a>,
    document.getElementById("buildNumber")
)