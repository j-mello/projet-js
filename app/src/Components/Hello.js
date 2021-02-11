import { Component } from "react";
import { React } from "./../React/React.js";

export class Hello extends React.Component {

    /*propTypes = {
        name: { type: "string", enum: ["world", "you", "me"] },
      };*/
    
      render() {
        return React.createElement("div", /*{ toWhat: { name: this.props.name } }*/ null, [
          "Hello {{toWhat.name}}",
        ]);
      }
}