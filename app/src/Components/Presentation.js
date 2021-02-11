import { React } from "../React/React.js";

export class Presentation extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            
        }
    }


    
    render() 
    {
        return React.createElement("div", {class: "container-fluid card containerBody"}, [
            React.createElement("div", { class: "row"},[
                React.createElement("div", { class: "col-md-12"},[
                    React.createElement("div", { class: "jumbotron jumbotron-fluid imageG"},[
                     React.createElement("div", {class:"bg-light"}, 
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
                        ]),    
                        React.createElement("div", { class: "container textImage"},[
                            React.createElement("h1", null,"Bootstrap Tutorial"),
                            React.createElement("p", null, "This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."),

                        ])
                    ])
                ])
            ]),
            React.createElement("div", { class: "row"}, [
                React.createElement("div", { class: "col-md-1"},""),
                React.createElement("div", { class: "col-md-10 imageCards"},[
                    React.createElement("div", { class: "container-fluid"},[
                        React.createElement("div", { class: "row"},[
                            React.createElement("div", { class: "col-md-3"},[
                                React.createElement("div", { class: "card"},[
                                    React.createElement("div", { class: "card-body"},[
                                        React.createElement("img", {src: "./src/img/avatar.png", height: "200px" , width: "100%"},"Heading"),
                                        React.createElement("h4", null,"Julien Mello"),
                                        React.createElement("p", null,"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."),    
                                    ]),
                                   ]),
                                ]),
                                React.createElement("div", { class: "col-md-3"},[
                                    React.createElement("div", { class: "card"},[
                                        React.createElement("div", { class: "card-body"},[
                                            React.createElement("img", {src: "./src/img/avatar.png", height: "200px" , width: "100%"},"Heading"),
                                            React.createElement("h4", null,"Ronald VINCENT"),
                                            React.createElement("p", null,"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."),    
                                        ]),
                                       ]),
                                    ]),
                             React.createElement("div", { class: "col-md-3"},[
                                React.createElement("div", { class: "card"},[
                                    React.createElement("div", { class: "card-body"},[
                                        React.createElement("img", {src: "./src/img/avatar.png", height: "200px" , width: "100%"},"Heading"),
                                        React.createElement("h4", null,"Guillaume WELLE"),
                                        React.createElement("p", null,"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."),    
                                    ]),
                                   ]),
                                ]),
                             React.createElement("div", { class: "col-md-3"},[
                                React.createElement("div", { class: "card"},[
                                    React.createElement("div", { class: "card-body"},[
                                        React.createElement("img", {src: "./src/img/avatar.png", height: "200px" , width: "100%"},"Heading"),
                                        React.createElement("h4", null,"Jules GABIAM"),
                                        React.createElement("p", null,"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."),    
                                    ]),
                                   ]),
                                ]),
                        ]),
                    ]),
                ]),
                React.createElement("div", { class: "col-md-1"},""),
            ]),
            React.createElement("div", { class: "row"},[
                React.createElement("div", { class: "col-md-1"},""),
                React.createElement("div", { class: "col-md-10 borderTop"},[
                    React.createElement("p", {},[
                        "© Company 2017-2018"
                    ])
                ]),
                React.createElement("div", { class: "col-md-1"},"")
            ])
        ]);
    }
}
