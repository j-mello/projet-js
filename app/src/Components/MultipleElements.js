import { React } from "./../React/React.js";

export class MultipleElements extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            toWhat: {title: "Qu'avons nous vu ?" },
            toWhat1: {router: "Nous avons vu comment faire fonctionner le routeur" },
            toWhat2: {component: "Nous avons vu comment créer un composant" },
            toWhat3: {create: "Nous avons vu comment créer la fonction createElement()" },
            toWhat4: {methods: "Nous avons vu comment créer la fonction display(),shouldUpdate() etc..." },


        }

    }

    render() 
    {
        return React.createElement("div", null, [

            React.createElement('nav', {class:"navbar navbar-expand-lg navbar-light bg-light"},[
                React.createElement('div',{class:"container-fluid"},[
                    React.createElement('a',{class:"navbar-brand", href:"#"},"Menu"),
                    React.createElement('ul',{class:"navbar-nav me-auto mb-2 mb-lg-0"},[
                        React.createElement('li',{class:'nav-item'},[
                            React.createElement('a',{class:"nav-link active", href:"/"},"Accueil")
                        ]),
                        React.createElement('li',{class:"nav-item"},[
                            React.createElement('a',{class:"nav-link active", href:"/Presentation"},"Présentation")
                        ]),
                        React.createElement('li',{class:"nav-item"},[
                            React.createElement('a',{class:"nav-link active", href:"/MultipleElements"},"Elements")
                        ]),
                    ])
                ] )
            ]),

            React.createElement("h1", {intro:this.state.toWhat},
                ["{{intro.title}}"]),

            React.createElement("ul", {},
                [
                    React.createElement('li', {firstMessage:this.state.toWhat1},
                        ['{{firstMessage.router}}']),
                    React.createElement('li', {secondMessage:this.state.toWhat2},
                        ['{{secondMessage.component}}']),
                    React.createElement('li', {thirdMessage: this.state.toWhat3},
                        ['{{thirdMessage.create}}']),
                    React.createElement('li', {fourthMessage: this.state.toWhat4},
                        ['{{fourthMessage.methods}}'])
                ])

            ]
        );
    }
}

