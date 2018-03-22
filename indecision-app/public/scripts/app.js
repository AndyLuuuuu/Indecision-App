"use strict";

var appRoot = document.getElementById("app");

var toggleState = false;
var details = "HERE ARE SOME COOL DETAILS! WOW!";

var toggle = function toggle() {
    toggleState = !toggleState;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            toggleState ? "Hide Details" : "Show Details"
        ),
        toggleState ? React.createElement(
            "p",
            null,
            details
        ) : undefined
    );
    ReactDOM.render(template, appRoot);
};

render();
