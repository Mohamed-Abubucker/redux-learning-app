import { INCREMENT_ONE, DECREMENT_ONE, RESET } from './../actionTypes';

const initialState = {
    counter: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_ONE: {
            const { counterIncrement = 1 } = action.payload;
            return {
                ...state,
                counter: state.counter + counterIncrement,
            };
        }
        case DECREMENT_ONE: {
            const { counterDecrement = 1 } = action.payload;
            return {
                ...state,
                counter: state.counter - counterDecrement,
            };
        }
        case RESET: {
            return {
                ...state,
                counter: 0,
            };
        }
        default:
            return state;
    }
}
