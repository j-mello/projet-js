export class Router {
    constructor() {
        let routes = [];
    }

    routes = [];

    addRoute(url, component) {
        this.routes.forEach(route => {
            if(url !== route[0]) this.routes.push({path: url, element: component});
        });
    }
}