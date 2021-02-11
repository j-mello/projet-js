import { createElement } from "react";
import { type_check, type_check_v1 } from "./libs/typecheck.js";
import { interpolate } from "./libs/interpolate.js";


export let React = {
    Component: class{
        props = null;
        rendered = null;
        state = {};

        constructor(props)
        {
            this.props = props;
        }

        display(newProps = null)
        {
            if (shouldUpdate(newProps))
            {
                if(newProps != null)
                {
                    this.props = newProps;
                }
                this.rendered = this.render();
            }
            return this.rendered;
        }

        shouldUpdate(newProps)
        {
            return JSON.stringify(this.props) !== JSON.stringify(this.newProps);
        }

        render() 
        {

        }
    },

    createElement(tagOrComponent, props, children)
    {
        let element;
        if (tagOrComponent === "div")
        {
            element = document.createElement(tagOrComponent);
            for (let attribute in props)
            {
                element.setAttribute(attribute, props[attribute]);
            }
            for (let subElement of children)
            {
                if (typeof subElement === "string")
                {
                    subElement = document.createTextNode(subElement.interpolate(props));
                    element.appendChild(subElement);
                }
            }
        } /**component */ else {
            if (!type_check(props, tagOrComponent.propsTypes)) throw new TypeError();
            return tagOrComponent.display(props);
        }
        return element;
    },
}