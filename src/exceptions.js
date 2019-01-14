/**
 * Class defining the error thrown when there is no value left in the stack
 * to pop.
 */
export class StackUnderFlowError {
    constructor (message) {
        this.message = message;
    }
}

/**
 * Class defining the error thrown when the stack is already full and no new 
 * value can be pushed into it.
 */
export class StackOverFlowError {
    constructor (message) {
        this.message = message;
    }
}