import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

//we can use curly bracket to wrap a code statement to avoid typing return
//and the wrap code statement is an object
//as below we are returning an object from setSearchField, this is a redux action,
//this object is what we are going to send to redux reducer
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //we use a const variable here instead of string directly as it will throw error if something is wrong, using string directly won't throw error if something is missed spell
    payload: text
})

//the top function is the same as the below function

// export const setSearchField = (text) => {
//     console.log(text);
//     return {
//         type: CHANGE_SEARCH_FIELD, //we use a const variable here instead of string directly as it will throw error if something is wrong, using string directly won't throw error if something is missed spell
//         payload: text
//     }
// }

// export const requestRobots = (dispatch) => {
//     dispatch({type: REQUEST_ROBOTS_PENDING});
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//         .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// }

//the top function is the same as the below function

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}