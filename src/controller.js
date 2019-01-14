import { Model } from "./model.js";
import { View } from "./view.js";

/**
 * Class defining the Controller 
 */
export class Controller {
    constructor() {
        // References to the model and view associated with this controller
        this.model = new Model();
        this.view = new View(this, this.model);
    }

    initialize() {
        this.model.initialize()
            .then(() => this.view.initialize());
    }

    /**
     * Method to set the maximum length of the stack.
     */
    setMaxLength(length) {
        this.model.setMaxLength(length)
            .then(() => this.initialize());
    }

    /** 
     * Method to pop the value from stack
     */
    pop() {
        this.model.pop().then(() => this.initialize());
    }
    
    /** 
     * Method to push a new value into stack
     */
    push(value) {
        this.model.push(value).then(() => this.initialize());
    }
}