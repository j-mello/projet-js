console.log('Coucou')
import { React } from "./React/React.js";
import { prop_access } from "./React/libs/prop_access.js";
import { transpolate } from "./React/libs/transpolate.js";

Object.prototype.prop_access = prop_access;
String.prototype.traspolate = transpolate;