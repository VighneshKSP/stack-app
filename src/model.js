const SERVER_URL = 'http://localhost:3000/'

/**
 * Class defining the structure of the stack model
 */
export class Model {
    constructor() {
        // Values contained by the stack
        this.values = null;
    
        // Maximum length of the stack
        this.maxLength = null;
    }

    getValues() {
        return axios.get(`${SERVER_URL}stack`)
            .then(response => (this.values = response.data.values))
            .catch(error => console.log(error))
    }
}
