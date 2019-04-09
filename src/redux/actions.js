import { INCREMENT_ONE, DECREMENT_ONE, RESET } from "./actionTypes";



export const incrementOne = (counterIncrement = 1) => ({
    type: INCREMENT_ONE,
    payload: {
        counterIncrement
    }
});

export const decrementOne = (counterDecrement = 1) => ({
    type: DECREMENT_ONE,
    payload: {
        counterDecrement
    }
});


export const resetCounter = () => ({
    type: RESET,
});
