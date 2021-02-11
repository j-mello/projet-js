import { React } from "./React/React.js";
import { ReactDOM } from "./React/ReactDOM.js";
import { prop_access } from "./React/libs/prop_access.js";
import { interpolate } from "./React/libs/interpolate.js";
import { Hello } from "./Components/Hello.js";

Object.prototype.prop_access = prop_access;
String.prototype.interpolate = interpolate;

/*ReactDOM.render(React.createElement("h1",null,[
    "Coucou"
]), document.getElementById('root'));*/

ReactDOM.render(React.createElement(Hello, { name: "World" }), document.getElementById('root'));