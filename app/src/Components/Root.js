import { React } from "./../React/React.js";
import { Router } from "./Router.js";
import { Hello } from "./Hello.js";
import { Accueil } from "./Accueil.js";
import { Presentation } from "./Presentation.js";



export class Root extends React.Component {

    constructor (props) {
        super(props);
    }

    render()
    {
        return React.createElement("div", null, [
           React.createElement(Router, {uri: "/Hello", component: Hello}),
           React.createElement(Router, {uri: "/", component: Accueil}),
           React.createElement(Router, {uri: "/Presentation", component: Presentation}),
        ]);
    }
}