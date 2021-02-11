import { React } from "./../React/React.js";

export class Hello extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            toWhat: {name: "Salut"}
        }
    }
    
    render() 
    {
        return React.createElement("div", {toWhat: this.state.toWhat}, [
        "Hello {{toWhat.name}}"
        ]);
    }
}