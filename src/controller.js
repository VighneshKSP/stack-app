import { Model } from "./model.js";
import { View } from "./view.js";

/**
 * Class defining the Controller 
 */
export class Controller {
    constructor() {
        // References to the model and view associated with this controller
        this.model = new Model();
        this.view = new View(this.model);
    }

    async initialize() {
        await this.model.initialize();
        
        this.view.initialize();
    }
}