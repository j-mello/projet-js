export let ReactDOM = {
    render(rElement, hElement) {
        console.log(rElement);
        console.log(hElement);
        hElement.appendChild(rElement);
    },
};