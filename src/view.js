/**
 * Class defining the structure of the stack view
 */
export class View {
    constructor(controller, model) {
        // Ids of HTML elements; These can be class variables.
        this.maxLengthId = 'max-length';
        this.applyCfgId = 'apply-config';
        this.popId = 'pop-value';
        this.pushValId = 'push-value';
        this.pushBtnId = 'push-btn';
    
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

            <input type="button" value="Pop" title="Pop the top element" id="${this.popId}">

            <form class="push-value">
                <label for="push-value">New value: </label>
                <input type="text" name="push-value" id="${this.pushValId}">
                <input type="button" name="submit" value="Push" id="${this.pushBtnId}">
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
        this.popButton = document.getElementById(this.popId);
        this.pushValue = document.getElementById(this.pushValId);
        this.pushButton = document.getElementById(this.pushBtnId);
    }
    
    registerHandlers() {
        // Handler for push button
        this.applyCfgButton.addEventListener('click', () => this.setMaxLength());
        
        // Add validator
        this.maxLength.addEventListener('change', () => this.validateMaxLength());
        
        // Add handler for pop value from stack
        this.popButton.addEventListener('click', () => this.pop());
        
        // Add handler for push value into the stack
        this.pushButton.addEventListener('click', () => this.push());
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
        if(this.validateMaxLength()){
            this.controller.setMaxLength(
                parseInt(this.maxLength.value, 10)
            );
        }
    }

    pop() {
        try {
            this.controller.pop();
        } catch(error) {
            console.log(error.message);
        }
    }

    push() {
        try {
            this.controller.push(this.pushValue.value);
        } catch(error) {
            console.log(error.message);
        }
    }
}