import { Model } from "./model.js";

/**
 * Class defining the Controller 
 */
export class Controller {
    constructor() {
        // References to the model and view associated with this controller
        this.model = new Model();
        this.view = null;
    }

    initialize() {
        this.model.initialize();
    }
}