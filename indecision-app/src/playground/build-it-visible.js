const appRoot = document.getElementById("app");

let toggleState = false;
const details = "HERE ARE SOME COOL DETAILS! WOW!"

const toggle = () => {
    toggleState = !toggleState
    render();
}

const render = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}>{toggleState ? "Hide Details" : "Show Details"}</button>
        {toggleState ? <p>{details}</p> : undefined}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render();