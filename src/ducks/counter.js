// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

var initialState = {
    counter: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(amt){
    return {
        type: INCREMENT,
        payload: amt
    }
}

export function decrement(amt){
    return {
        type: DECREMENT,
        payload:amt
    }
}

function reducer(state = initialState, action){
    state = Object.assign(state, {
        lastAction: action
    })


    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                counter: state.counter + action.payload
            })
        case DECREMENT:
            return Object.assign({}, state, {
                counter: state.counter - action.payload
            })
    }
    return state;
}

export default reducer;



/*
reducers are connected to the store 
the store is connected to the provider
the provider is connected to the app
the app is connected to it's children

*/