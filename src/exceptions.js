/**
 * Class defining the error thrown when there is no value left in the stack
 * to pop.
 */
export class StackUnderFlowError {
    constructor (message) {
        this.message = message;
    }
}