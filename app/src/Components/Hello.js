import { React } from "./../React/React.js";

export class Hello extends React.Component {

    constructor (props){
        super(props);
    }

    propTypes = {
        name: { type: "string", enum: ["World", "you", "me"] },
    };
    
    render() 
    {
        return React.createElement("div", { toWhat: { name: this.props.name }, class:"hello" }, [
        "Hello {{toWhat.name}}",
        ]);
    }
}