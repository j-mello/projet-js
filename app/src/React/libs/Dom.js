
//ReactDOM::render()

//React::createElement()
//React::

//React::createTextNode()

<div id="root"></div>
let root = document.getElementById('root')
const element = "<h1>Bonjour, monde</h1>"
root.innerHTML = element
console.log(root.innerHTML) //Bonjour, monde

ReactDOM.render(element, document.getElementById('root')) //Bonjour, monde
/*
##############################################################################

//II] Pros: Update, Cons: generation
//  React.createElement => Object
//  Component.render => Object
//  ReactDOM.render =>
//    1) Object => DomElement
//    2) rootElement.appendChild(DomElement);

 */



class ReactDOM extends React.Component{

    render(){


    }
}

