import { React } from "./../React/React.js";

export class Accueil extends React.Component {

    constructor (props){
        super(props);
        console.log("Root");
    }

    render() 
    {
        return React.createElement("div", null, [
        "Hello tout le monde !"
        ]);
    }
}