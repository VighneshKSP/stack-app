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
                <input placeholder="Maximum length of the stack" type="number" required id="${this.maxLengthId}">
                <input type="button" name="submit" value="Apply" id="${this.applyCfgId}">
            </form>
        `;

        this.setInitialValues();

        this.registerHandlers();
    }

    setInitialValues() {
        const maxLength = document.getElementById(this.maxLengthId);
        maxLength.value = this.model.maxLength;
    }

    registerHandlers() {
        // Handler for push button
        this.applyCfgButton = document.getElementById(this.applyCfgId);
        this.applyCfgButton.addEventListener('click', () => this.setMaxLength()); 
    }

    setMaxLength() {
        const maxLength = document.getElementById(this.maxLengthId).value;
        
        console.log("New value", maxLength, this.model.maxLength);
    }
}