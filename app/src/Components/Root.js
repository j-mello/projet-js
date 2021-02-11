import { React } from "./../React/React.js";
import {Router} from "./Router.js";
import {Hello} from "./Hello.js";

export class Root extends React.Component {

    constructor (props){
        super(props);
        console.log("Root");
    }

    render()
    {
        return React.createElement("div", null, [
           React.createElement(Router, {uri: "/Hello", component: Hello})
        ]);
    }
}