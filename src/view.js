/**
 * Class defining the structure of the stack view
 */
export class View {
    constructor(controller, model) {
        // Ids of HTML elements; These can be class variables.
        this.maxLengthId = 'max-length';
        this.applyCfgId = 'apply-config';
    
        this.controller = controller;
        this.model = model;
    }

    initialize() {
        const container = document.getElementById('app-root');

        container.innerHTML = `
            <div class="values">${this.model.values}</div>

            <form class="config">
                <label for="max-length">Stack length: </label>
                <input type="number" name="max-length" id="${this.maxLengthId}" min="1" max="1000">
                <input type="button" name="submit" value="Apply" id="${this.applyCfgId}">
            </form>
        `;

        this.setElementReferences();

        //Set initial value
        this.maxLength.value = this.model.maxLength;

        this.registerHandlers();
    }

    setElementReferences() {
        this.maxLength = document.getElementById(this.maxLengthId);
        this.applyCfgButton = document.getElementById(this.applyCfgId);
    }

    registerHandlers() {
        // Handler for push button
        this.applyCfgButton.addEventListener('click', () => this.setMaxLength()); 
        
        // Add validator
        this.maxLength.addEventListener('change', () => this.validateMaxLength()); 
    }
    
    validateMaxLength() {
        if(!this.maxLength.value) {
            console.log('Expected a non zero positive integer');

            this.applyCfgButton.disabled = true;

            return false;
        } else {
            // reset error
            this.applyCfgButton.disabled = false;
    }

        return true;
    }
    
    setMaxLength() {
        const maxLength = document.getElementById(this.maxLengthId).value;
        
        console.log("New value", maxLength, this.model.maxLength);
    }
}