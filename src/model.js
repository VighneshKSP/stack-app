import {StackUnderFlowError, StackOverFlowError} from './exceptions.js';

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

    initialize() {
        return axios.all([this.getValues(), this.getConfig()]);
    }

    getValues() {
        return axios.get(`${SERVER_URL}stack`)
            .then(response => (this.values = response.data.values))
            .catch(error => console.log(error))
    }

    getConfig() {
        return axios.get(`${SERVER_URL}configuration`)
            .then(response => (this.maxLength = response.data.maxLength))
            .catch(error => console.log(error))
    }

    /**
     * Method to update the stack configuration via a POST request
     * 
     * Returns a promise
     */
    setMaxLength(length) {
        return axios.post(`${SERVER_URL}configuration`, {maxLength: length})
            .then(() => {})
            .catch(error => console.log(error))
    }

    /**
     * Method to pop the top element from the stack via a POST request
     * 
     * Returns a promise
     */
    pop() {
        if (!this.values.length) {
            throw new StackUnderFlowError('Cannot pop the value. Stack is empty.');
        }

        this.values.splice(0, 1);
        
        return axios.post(`${SERVER_URL}stack`, {values: this.values})
            .then(() => {})
            .catch(error => console.log(error))
    }

    /**
     * Method to push a value at top of the stack via a POST request
     * 
     * Returns a promise
     */
    push(value) {
        if (this.values.length === this.maxLength) {
            throw new StackOverFlowError('Cannot push a new value. Stack is already full.');
        }

        this.values.unshift(value);
        
        return axios.post(`${SERVER_URL}stack`, {values: this.values})
            .then(() => {})
            .catch(error => console.log(error))
    }
}
