import { React } from "./../React/React.js";

export class Accueil extends React.Component {

    constructor (props){
        super(props);
    }

    render() 
    {
        return React.createElement("div", {class:"bg-light"}, 
        [
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
            React.createElement('hr',null,""),
            React.createElement('h1', {class: "text-center"}, "Site de démonstration"),
            React.createElement('div', null,[
                React.createElement('div', {id:"carouselSlides", class:"carousel slide"},
                [
                    React.createElement('div', {class:'carousel-inner'},[
                        React.createElement('div', {class:'carousel-item active'}, [
                            React.createElement('img', {src:"./src/img/firefox.png", class:"d-block w-100", height:'500px'}, "")
                        ]),
                    ]),
                    React.createElement('hr',null, ""),
                    React.createElement('h2', {class:'text-center'}, "Langages pour créer un site :"),
                    React.createElement('div', {class:'container'},[
                        React.createElement('div',{class:"row align-items-center"},[
                            React.createElement('div',{class:"col"},[
                                React.createElement('div',{class:"card", style:"width: 20rem;"},[
                                    React.createElement('img', {src:"./src/img/html.png", height:'300px', width:'300px'},""),
                                    React.createElement('hr',null,""),
                                    React.createElement('div',{class:"card-body"}, [
                                        React.createElement('h5',{class:'card-title text-center'},"HTML5"),
                                        React.createElement('p',{class:'card-text text-center'}, "HTML5 est le langage de balisage pour représenter les pages web.")
                                    ])
                                ])
                            ]),
                            React.createElement('div',{class:"col"},[
                                React.createElement('div',{class:"card", style:"width: 20rem;"},[
                                    React.createElement('img', {src:"./src/img/js.png", height:'300px', width:'300px'},""),
                                    React.createElement('hr',null,""),
                                    React.createElement('div',{class:"card-body"}, [
                                        React.createElement('h5',{class:'card-title text-center'},"JavaScript"),
                                        React.createElement('p',{class:'card-text text-center'}, "JavaScript est le langage rendant interactifs les sites web.")
                                    ])
                                ])
                            ]),
                            React.createElement('div',{class:"col"},[
                                React.createElement('div',{class:"card", style:"width: 20rem;"},[
                                    React.createElement('img', {src:"./src/img/css.png", height:'300px', width:'300px'},""),
                                    React.createElement('hr',null,""),
                                    React.createElement('div',{class:"card-body"}, [
                                        React.createElement('h5',{class:'card-title text-center'},"CSS3"),
                                        React.createElement('p',{class:'card-text text-center'}, "Le CSS est le langage permettant de mettre en forme les pages web.")
                                    ])
                                ])
                            ]),
                        ])
                    ])
                ])
            ])
        ]);
    }
}