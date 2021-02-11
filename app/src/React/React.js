import { type_check, type_check_v1 } from "./libs/typecheck.js";

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

        setState(state)
        {
            this.state = {
                ...this.state, ...state  //Fusionne le this.state et le state.
            }
        }

        render()
        {
            //Uniquement dans les components
        }
    },

    createElement: function(tagOrComponent, props, children)
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
        } else { //Objet dans la classe component, vérifier si l'instance existe. Si elle existe, on la récupère, sinon on la crée
            if (!type_check(props, tagOrComponent.propsTypes)) throw new TypeError(); // Le display doit être dans une instance déjà créé
            return tagOrComponent.display(props);
        }
        return element;
    },
}