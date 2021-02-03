
/**
 * Méthode qui permet de crééer un élément du DOM
 * @param type
 * @param props
 * @param children
 * @returns {{type, props: (*&{children: (*|{type: string, props: {nodeValue, children: []}})[]})}}
 */
function createElement(type,props,...children){
    return {
        type : type,
        props : {

            ...props,
            children: children.map(currentChild => {

                return typeof currentChild === 'object' ? currentChild : createElementText(currentChild)
            })
        }
    };
}

/*Exemple d'utilisation
* const h1 = createElement("h1",{}, "Grande Titre H1")
* const p = createElement("p",{}, "Paragraphe") // paragraphe est un text_element
* const div = createElement("div",{id:"root"},[h1,p])
*console.log(div);
* */

/**
 *
 * @param text
 * @returns {{type: string, props: {nodeValue, children: []}}}
 */
function createElementText(text){

    return {

        type : "TEXT_ELEMENT",
        props : {

            nodeValue : text,
            children : []
        }
    }
}