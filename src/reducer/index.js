

const initialState = {
    count: 0,
    maxValue: 10,
}

export default function reducer(state = initialState, action){
    console.log('action.type', action.type)
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state;
    }
}


//increment decrement