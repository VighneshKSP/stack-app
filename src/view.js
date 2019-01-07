/**
 * Class defining the structure of the stack view
 */
export class View {
    constructor(model) {
        // Ids of elements used; These can be class variables.
        this.maxLengthId = 'max-length';
        this.applyCfgId = 'apply-config';
    
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
    }

    setMaxLength() {
        const maxLength = document.getElementById(this.maxLengthId).value;
        
        console.log("New value", maxLength, this.model.maxLength);
    }
}