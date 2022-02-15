import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

// The 3 principles of react redux
// 1. Single source of truth - 1 big object that describes our state
// 2. State is read only - never modify the state object, the only we can do is create a new object and add/update parameter inside
// 3. Changes using pure functions - function that accepts inputs and return an output that don't have side effect.

//this is the initial state in redux store for Search
const initialStateSearch = {
    searchField: ''
}

//create a reducer here
//this funciton is call searchRobots because this is what it is trying to do
//give a reducer a state and an action, once we received an action, we can then change the state
export const searchRobots = (state=initialStateSearch, action={}) => {
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

//this is the initial state in redux store for Robots
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
                return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state; 
    }
}