import { Controller } from "./controller.js";

/**
 * Entry point for the application
 */
(function main() {
    const controller = new Controller();

    controller.initialize();

    console.log(controller);
})();