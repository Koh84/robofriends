import { CHANGE_SEARCH_FIELD } from './constants'

// The 3 principles of react redux
// 1. Single source of truth - 1 big object that describes our state
// 2. State is read only - never modify the state object, the only we can do is create a new object and add/update parameter inside
// 3. Changes using pure functions - function that accepts inputs and return an output that don't have side effect.

//this is the initial state in redux store
const initialState = {
    searchField: ''
}

//create a reducer here
//this funciton is call searchRobots because this is what it is trying to do
//give a reducer a state and an action, once we received an action, we can then change the state
export const searchRobots = (state=initialState, action={}) => {
    //we use switch case here because it is easier in the future to add extra "action.type" if needed
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            //we create a brand new state here because in react redux, we should not change the current state
            //we can create a new one by copying the current state and add extra information or update a parameter
            return Object.assign({}, state, {searchField: action.payload})
            //we can also use object spread operator
            //return { ...state, {searchfield: action.payload}}
        default:
            return state; //always return a default because we want to implement a pure function
    }
}