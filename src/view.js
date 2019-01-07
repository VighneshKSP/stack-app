/**
 * Class defining the structure of the stack view
 */
export class View {
    constructor(model) {
        this.model = model;
    }

    initialize() {
        const container = document.getElementById('app-root');

        container.innerHTML = `
            <div class="values">${this.model.values}</div>
            <div class="config">${this.model.maxLength}</div>
        `;
    }
}