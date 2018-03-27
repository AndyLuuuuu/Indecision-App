// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            details: "Just some random shit"
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
            {this.state.visibility ? <p>{this.state.details}</p> : undefined}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// const appRoot = document.getElementById("app");

// let toggleState = false;
// const details = "HERE ARE SOME COOL DETAILS! WOW!"

// const toggle = () => {
//     toggleState = !toggleState
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}>{toggleState ? "Hide Details" : "Show Details"}</button>
//         {toggleState ? <p>{details}</p> : undefined}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// render();