import {ADD_FEATURE} from '../actions/featureActions'


export const initialState = { 
    features: []
}

export const featuresReducer = (state = initialState, action) => {
    console.log('is the reducer running?', action)
    switch (action.type) {
        case ADD_FEATURE:
            return {
                state
            }
    }
}