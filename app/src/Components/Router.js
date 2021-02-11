import {React} from "../React/React.js";

export class Router extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return React.createElement("div", null, [
           location.pathname == this.props.uri ?
            React.createElement(this.props.component) : ""
        ]);
    }
}